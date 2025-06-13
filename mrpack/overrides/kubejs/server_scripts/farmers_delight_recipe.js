ServerEvents.recipes(event => {
    event.replaceInput({id: "miners_delight:copper_pot"},
        "minecraft:wooden_shovel",
        "minecraft:stick"
    )

    event.replaceInput({id: "farmersdelight:cooking_pot"},
        "minecraft:wooden_shovel",
        "minecraft:stick"
    )

    event.remove({id: "nethersdelight:diamond_machete"})
    event.remove({id: "nethersdelight:golden_machete"})
    event.remove({id: "nethersdelight:iron_machete"})
})

