ServerEvents.recipes(event => {
    function addCommonTeaRecipe(ingredientList, result) {
        event.custom({
            type: "herbalbrews:kettle_brewing",
            experience: 0.8,
            crafting_duration: 30,
            fluid: [{amount: 20}],
            heat_needed: [{amount: 25}],
            ingredients: ingredientList.concat({item: "minecraft:glass_bottle"}),
            result: result
        })
    }

    event.remove({id: "delightful:cooking/matcha_latte"})
    addCommonTeaRecipe([
        {tag: "forge:milk"},
        {item: "delightful:matcha"}
    ], {item: "delightful:matcha_latte"})

    event.remove({id: "delightful:food/cooking/ender_nectar"})
    addCommonTeaRecipe([
        {tag: "forge:milk"},
        {item: "minecraft:ender_eye"},
        {item: "minecraft:honey_bottle"}
    ], {item: "delightful:ender_nectar"})

    event.remove({id: "farmersdelight:cooking/hawberry_tea"})
    addCommonTeaRecipe([
        {item: "minecraft:sugar"},
        {item: "herbalbrews:tea_blossom"},
        {item: "fruitsdelight:hawberry"},
        {item: "fruitsdelight:hawberry"}
    ], {item: "fruitsdelight:hawberry_tea"})

    event.remove({id: "farmersdelight:cooking/mango_tea"})
    addCommonTeaRecipe([
        {item: "minecraft:sugar"},
        {item: "herbalbrews:tea_blossom"},
        {item: "fruitsdelight:mango"},
        {item: "fruitsdelight:mango"}
    ], {item: "fruitsdelight:mango_tea"})

    event.remove({id: "farmersdelight:cooking/peach_tea"})
    addCommonTeaRecipe([
        {item: "minecraft:sugar"},
        {item: "herbalbrews:tea_blossom"},
        {item: "fruitsdelight:peach"},
        {item: "fruitsdelight:peach"}
    ], {item: "fruitsdelight:peach_tea"})

    event.remove({id: "farmersdelight:cooking/lychee_cherry_tea"})
    addCommonTeaRecipe([
        {item: "minecraft:sugar"},
        {item: "minecraft:cherry_leaves"},
        {item: "fruitsdelight:lychee"},
        {item: "fruitsdelight:lychee"}
    ], {item: "fruitsdelight:lychee_cherry_tea"})

    event.remove({id: "farmersdelight:cooking/mangosteen_tea"})
    addCommonTeaRecipe([
        {item: "minecraft:sugar"},
        {item: "herbalbrews:tea_blossom"},
        {item: "fruitsdelight:mangosteen"},
        {item: "fruitsdelight:mangosteen"}
    ], {item: "fruitsdelight:mangosteen_tea"})

    event.remove({id: "festive_delight:tea_craft"})
    addCommonTeaRecipe([
        {item: "minecraft:honey_bottle"},
        {item: "minecraft:sweet_berries"},
        {item: "festive_delight:cinnamon_powder"},
        {item: "festive_delight:cinnamon_powder"}
    ], {item: "festive_delight:christmas_tea"})
})