ServerEvents.tags("block", event => {
    const interactable_blocks = [ // like sweet berry
        "vintagedelight:ghost_pepper_crop",
        "vintagedelight:cucumber_crop",
        "farmersdelight:tomatoes",
        "fruitsdelight:lemon_tree",
        "delightful:salmonberry_bush",
        "vintagedelight:gearo_berry_bush",
        "fruitsdelight:blueberry_bush",
        "fruitsdelight:cranberry_bush"
    ]

    const harvestable_blocks = [ // like wheat or carrot
        "delightful:cantaloupe_plant",
        "miners_delight:cave_carrot",
        "vintagedelight:peanut_crop",
        "herbalbrews:tea_plant",
        "herbalbrews:yerba_mate_plant",
        "herbalbrews:rooibos_plant",
        "herbalbrews:coffee_plant",
    ]

    // remove all supported tags first, just in case
    event.remove("tconstruct:harvestable/crops", interactable_blocks)
    event.remove("tconstruct:harvestable/interact", interactable_blocks)
    event.remove("tconstruct:harvestable/stackable", interactable_blocks)
    event.remove("tconstruct:harvestable/crops", harvestable_blocks)
    event.remove("tconstruct:harvestable/interact", harvestable_blocks)
    event.remove("tconstruct:harvestable/stackable", harvestable_blocks)
    
    // add general tag
    event.add("tconstruct:harvestable", interactable_blocks)
    event.add("tconstruct:harvestable", harvestable_blocks)

    // add specific tag
    event.add("tconstruct:harvestable/interact", interactable_blocks)
    event.add("tconstruct:harvestable/crops", harvestable_blocks)
})

ServerEvents.tags("item", event => {
    // additional tag for seeds needed to re-plant harvestable block
    const harvestable_seeds = [ 
        "delightful:cantaloupe_seeds",
        "miners_delight:cave_carrot",
        "vintagedelight:peanut",
        "herbalbrews:tea_blossom",
        "herbalbrews:yerba_mate_leaf",
        "herbalbrews:rooibos_leaf",
        "herbalbrews:coffee_beans",
    ]
    event.add("tconstruct:seeds", harvestable_seeds)
})
