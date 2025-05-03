#!/usr/bin/env python3

import hashlib
import requests
from pathlib import Path

def compute_hashes(files, algo="sha1"):
    hash_list = []
    path_map = {}
    for path in files:
        h = hashlib.new(algo)
        with path.open("rb") as f:
            while chunk := f.read(8192):
                h.update(chunk)
        hash_value = h.hexdigest()
        hash_list.append(hash_value)
        path_map[path.name] = hash_value
        path_map[hash_value] = path.name
    return {"algorithm": algo, "hashes": hash_list}, path_map

def batch_query_modrinth(request_json):
    resp = requests.post(
        "https://api.modrinth.com/v2/version_files",
        json=request_json
    )
    resp.raise_for_status()
    return resp.json()

def batch_get_projects(project_ids):
    ids_str = ""
    for id in project_ids:
        ids_str += f"\"{id}\","
    ids_str = ids_str[:-1]
    ids_str = f"[{ids_str}]"

    url = "https://api.modrinth.com/v2/projects"
    resp = requests.get(url, params={"ids": ids_str})
    resp.raise_for_status()
    return {entry["id"]: entry for entry in resp.json()}

def main(mods_dir: str):
    mods_path = Path(mods_dir)
    jar_files = list(mods_path.glob("*.jar"))

    if not jar_files:
        print("No .jar files found.")
        return

    hash_request, hash_to_file = compute_hashes(jar_files)
    modrinth_versions = batch_query_modrinth(hash_request)

    project_ids = list({entry["project_id"] for entry in modrinth_versions.values()})
    project_info_map = batch_get_projects(project_ids)

    title_to_hash = {}
    for hash_val in hash_request["hashes"]:
        version_info = modrinth_versions.get(hash_val)
        project = project_info_map.get(version_info["project_id"])
        title_to_hash[project["title"]] = hash_val

    modlist_titles = list(title_to_hash.keys())
    modlist_titles.sort()

    for mod_title in modlist_titles:
        hash_val = title_to_hash[mod_title]
        filename  = hash_to_file[hash_val]

        version_info = modrinth_versions.get(hash_val)

        if not version_info:
            print(f"{filename}: Not found on Modrinth.")
            continue

        project = project_info_map.get(version_info["project_id"])
        if not project:
            print(f"{filename}: Project metadata missing.")
            continue

        name = mod_title
        license_id = project["license"]["id"]
        license_url = project["license"]["url"]
        license_text = f"[{license_id}]({license_url})" if license_url else license_id
        modrinth_url = f"https://modrinth.com/{project['project_type']}/{project['slug']}"
        source_url = project.get("source_url", "")
        source_part = f" | [Source]({source_url})" if source_url else ""
        description = project["description"]
        description = description.replace("\n", " ")
        description = description.replace("  ", " ")

        print(f"- **{name}** ({license_text}): [Modrinth]({modrinth_url}){source_part}\n<br>*{description}*")
        #print(f"{name}")

if __name__ == "__main__":
    import sys
    if len(sys.argv) != 2:
        print("Usage: python get_modrinth_info.py path_to_mods_directory")
    else:
        main(sys.argv[1])
