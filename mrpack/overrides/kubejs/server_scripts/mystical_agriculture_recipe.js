ServerEvents.recipes(event => {
    event.replaceInput(
        {id: 'mysticalagriculture:machine_frame'},
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
})

