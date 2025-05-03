# Known Issues
## Linux
- Crash on startup: [fix](https://github.com/henkelmax/sound-physics-remastered/issues/143#issuecomment-1784571443)
  - Detected with Prism Launcher, but may happen with other launchers
  - For Prism Launcher: Click Modpack instance -> Edit -> Settings -> Environment Variable -> Enable checkbox -> Add: Name "ALSOFT_DRIVERS", Value "pulse"
