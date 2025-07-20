ServerEvents.recipes(event => {
    event.replaceInput({id: "miners_delight:copper_pot"},
        "minecraft:wooden_shovel",
        "minecraft:stick"
    )

    event.replaceInput({id: "farmersdelight:cooking_pot"},
        "minecraft:wooden_shovel",
        "minecraft:stick"
    )
})

