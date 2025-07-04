ServerEvents.recipes(event => {
    function removeRecipe(itemId) {
        event.remove({output: itemId})
    }

    removeRecipe("waystones:sharestone")
    removeRecipe("waystones:warp_plate")
    removeRecipe("waystones:portstone")
    removeRecipe("waystones:white_sharestone")
    removeRecipe("waystones:orange_sharestone")
    removeRecipe("waystones:magenta_sharestone")
    removeRecipe("waystones:light_blue_sharestone")
    removeRecipe("waystones:yellow_sharestone")
    removeRecipe("waystones:lime_sharestone")
    removeRecipe("waystones:pink_sharestone")
    removeRecipe("waystones:gray_sharestone")
    removeRecipe("waystones:light_gray_sharestone")
    removeRecipe("waystones:cyan_sharestone")
    removeRecipe("waystones:purple_sharestone")
    removeRecipe("waystones:blue_sharestone")
    removeRecipe("waystones:brown_sharestone")
    removeRecipe("waystones:green_sharestone")
    removeRecipe("waystones:red_sharestone")
    removeRecipe("waystones:black_sharestone")
    removeRecipe("waystones:return_scroll")
    removeRecipe("waystones:bound_scroll")
    removeRecipe("waystones:warp_scroll")
    removeRecipe("waystones:warp_stone")
    removeRecipe("waystones:warp_dust")

    event.shapeless(Item.of("waystones:warp_dust", 1), [
        "#forge:dusts/amethyst",
        "#forge:dusts/ender_pearl",
    ])

    event.shaped(Item.of("kubejs:warp_stone", 1), [
        " D ",
        "DED",
        " D ",
    ], {
        D: "waystones:warp_dust",
        E: "#forge:gems/emerald"
    })

    event.replaceInput({input: "waystones:warp_stone"},
        "waystones:warp_stone",
        "kubejs:warp_stone"
    )

    event.shaped(Item.of("waystones:return_scroll", 3), [
        " B ",
        "NDN",
        "PPP",
    ], {
        P: "minecraft:paper",
        B: "#forge:dyes/black",
        D: "waystones:warp_dust",
        N: "#forge:nuggets/gold"
    })

    event.shaped(Item.of("waystones:bound_scroll", 2), [
        " B ",
        "NDN",
        "PNP",
    ], {
        P: "minecraft:paper",
        B: "#forge:dyes/black",
        D: "waystones:warp_dust",
        N: "#forge:nuggets/gold"
    })

    event.shaped(Item.of("waystones:warp_scroll", 1), [
        " B ",
        "NDN",
        "NPN",
    ], {
        P: "minecraft:paper",
        B: "#forge:dyes/black",
        D: "waystones:warp_dust",
        N: "#forge:nuggets/gold"
    })
})
