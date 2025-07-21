ItemEvents.modification(event => {
    const drinkList = [
        "festive_delight:christmas_tea",

        "fruitsdelight:hawberry_tea",
        "fruitsdelight:mango_tea",
        "fruitsdelight:peach_tea",
        "fruitsdelight:lychee_cherry_tea",
        "fruitsdelight:mangosteen_tea",

        "fruitsdelight:hamimelon_juice",
        "fruitsdelight:orange_juice",
        "fruitsdelight:lemon_juice",
        "fruitsdelight:pear_juice",
        "fruitsdelight:kiwi_juice",

        "delightful:matcha_latte",
        "delightful:berry_matcha_latte",
        "delightful:ender_nectar",

        "herbalbrews:green_tea",
        "herbalbrews:black_tea",
        "herbalbrews:hibiscus_tea",
        "herbalbrews:lavender_tea",
        "herbalbrews:coffee",
        "herbalbrews:milk_coffee",
        "herbalbrews:rooibos_tea",
        "herbalbrews:oolong_tea",
        "herbalbrews:yerba_mate_tea",

        "brewinandchewin:beer",
        "brewinandchewin:vodka",
        "brewinandchewin:mead",
        "brewinandchewin:rice_wine",
        "brewinandchewin:pale_jane",
        "brewinandchewin:egg_grog",
        "brewinandchewin:glittering_grenadine",
        "brewinandchewin:saccharine_rum",
        "brewinandchewin:salty_folly",
        "brewinandchewin:bloody_mary",
        "brewinandchewin:red_rum",
        "brewinandchewin:strongroot_ale",
        "brewinandchewin:steel_toe_stout",
        "brewinandchewin:dread_nog",
        "brewinandchewin:withering_dross",

        "farmersdelight:hot_cocoa",
        "farmersdelight:apple_cider",
        "farmersdelight:melon_juice",

        "alexsmobs:fish_oil" // it has only saturation by default - makes no sense
    ]

    for (const itemId of drinkList) {
        event.modify(itemId, item => {
            item.foodProperties = food => {
                food.hunger(0)
                food.saturation(0)
            }
        })
    }
})