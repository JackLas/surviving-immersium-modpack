ServerEvents.recipes(event => {
    event.remove({id: "waystones:warp_dust"})
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

    event.remove({id: "waystones:return_scroll"})
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

    event.remove({id: "waystones:bound_scroll"})
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

    event.remove({id: "waystones:warp_scroll"}) 
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
