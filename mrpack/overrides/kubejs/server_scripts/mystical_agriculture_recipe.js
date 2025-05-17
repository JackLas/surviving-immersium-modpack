ServerEvents.recipes(event => {
    event.replaceInput({id: 'mysticalagriculture:machine_frame'},
        '#c:stones',
        'immersiveengineering:sheetmetal_steel'
    )

    event.remove({id: 'mysticalagriculture:harvester'})
    event.shaped(Item.of('mysticalagriculture:harvester', 1),
    [
        'XSI',
        'CFB', 
        'HSI'
    ],
    {
        I: 'minecraft:iron_ingot',
        S: 'mysticalagriculture:soulium_ingot',
        F: 'mysticalagriculture:machine_frame',
        C: 'immersiveengineering:capacitor_lv',
        B: 'immersiveengineering:sawblade',
        H: 'minecraft:chest',
        X: 'minecraft:furnace'
    })

    event.remove({id: 'mysticalagriculture:seed_reprocessor'})
    event.shaped(Item.of('mysticalagriculture:seed_reprocessor', 1),
    [
        'X W',
        'CFB', 
        'ISS'
    ],
    {
        W: 'mysticalagriculture:watering_can',
        S: 'mysticalagriculture:soulium_ingot',
        F: 'mysticalagriculture:machine_frame',
        C: 'immersiveengineering:capacitor_lv',
        B: 'farmersdelight:organic_compost',
        I: 'minecraft:iron_ingot',
        X: 'minecraft:furnace'
    })

    event.remove({id: 'mysticalagriculture:soul_extractor'})
    event.shaped(Item.of('mysticalagriculture:soul_extractor', 1),
    [
        'XSD',
        'CF ', 
        'ISD'
    ],
    {
        D: 'mysticalagriculture:soulium_dagger',
        S: 'mysticalagriculture:soulium_ingot',
        F: 'mysticalagriculture:machine_frame',
        C: 'immersiveengineering:capacitor_lv',
        I: 'minecraft:iron_ingot',
        X: 'minecraft:furnace'
    })

    event.remove({id: 'mysticalagriculture:soulium_dagger'})
    event.shaped(Item.of('mysticalagriculture:soulium_dagger', 1),
    [
        ' DG',
        'IGD', 
        'SI '
    ],
    {
        G: 'minecraft:gold_ingot',
        I: 'mysticalagriculture:soulium_ingot',
        D: 'mysticalagriculture:soulium_dust',
        S: 'minecraft:stick'
    })

    event.remove({output: 'minecraft:farmland'})
    event.shapeless(Item.of('minecraft:farmland', 1),
    [
        'minecraft:bone_meal',
        'minecraft:dirt',
        'minecraft:stick'
    ]);

    function rework_farmland_recipe(modid, type) {
        let output_id = `${modid}:${type}_farmland`
        let essence_id = `${modid}:${type}_essence`

        event.remove({output: output_id})
        event.shapeless(Item.of(output_id, 1),
        [
            'minecraft:bone_meal',
            'minecraft:dirt',
            'minecraft:stick',
            essence_id
        ])
        event.shapeless(Item.of(output_id, 1),
        [
            "minecraft:farmland",
            essence_id
        ])
    }

    rework_farmland_recipe('mysticalagriculture', 'inferium')
    rework_farmland_recipe('mysticalagriculture', 'prudentium')
    rework_farmland_recipe('mysticalagriculture', 'tertium')
    rework_farmland_recipe('mysticalagriculture', 'imperium')
    rework_farmland_recipe('mysticalagriculture', 'supremium')
    rework_farmland_recipe('mysticalagradditions', 'insanium')

    // sword recipes replaced with infusion recipes in KubeJs' datapack
    event.remove({id: 'mysticalagriculture:gear/inferium_sword'})
    event.remove({id: 'mysticalagriculture:gear/prudentium_sword'})
    event.remove({id: 'mysticalagriculture:gear/tertium_sword'})
    event.remove({id: 'mysticalagriculture:gear/imperium_sword'})
    event.remove({id: 'mysticalagriculture:gear/supremium_sword'})
})
