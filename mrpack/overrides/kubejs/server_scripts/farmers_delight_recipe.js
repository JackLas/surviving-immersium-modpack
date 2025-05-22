ServerEvents.recipes(event => {
    event.replaceInput({id: 'miners_delight:copper_pot'},
        'minecraft:wooden_shovel',
        'minecraft:stick'
    )

    event.replaceInput({id: 'farmersdelight:cooking_pot'},
        'minecraft:wooden_shovel',
        'minecraft:stick'
    )

    event.remove('nethersdelight:diamond_machete')
    event.remove('nethersdelight:golden_machete')
    event.remove('nethersdelight:iron_machete')
})

