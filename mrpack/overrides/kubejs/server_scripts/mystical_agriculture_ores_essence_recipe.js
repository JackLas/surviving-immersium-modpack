ServerEvents.recipes(event => {
    function changeRecipes(recipeId, essenceId, rawOreId, rawOreCount, oreMapping) {
        event.remove({id: recipeId})
        event.shaped(Item.of(rawOreId, rawOreCount), [
            "EEE",
            "E E",
            "EEE"
        ], {
            E: essenceId
        })

        for (const [modfierId, oreId, count] of oreMapping)
        {
            event.shaped(Item.of(oreId, count), [
                "EEE",
                "EME",
                "EEE"
            ], {
                E: essenceId,
                M: modfierId
            })
        }
    }

    changeRecipes( // ----- copper -----------------------------------------------------------------
        "mysticalagriculture:essence/minecraft/copper_ingot", 
        "mysticalagriculture:copper_essence",
        "minecraft:raw_copper", 4, [
            [
                "mysticalagriculture:stone_essence", 
                "minecraft:copper_ore", 1
            ], [
                "mysticalagriculture:deepslate_essence", 
                "minecraft:deepslate_copper_ore", 1
            ]
        ]
    )

    changeRecipes( // ----- iron -------------------------------------------------------------------
        "mysticalagriculture:essence/minecraft/iron_ingot", 
        "mysticalagriculture:iron_essence", 
        "minecraft:raw_iron", 4, [
            [
                "mysticalagriculture:stone_essence", 
                "minecraft:iron_ore", 2
            ], [
                "mysticalagriculture:deepslate_essence", 
                "minecraft:deepslate_iron_ore", 2
            ]
        ]
    )

    changeRecipes( // ----- gold -------------------------------------------------------------------
        "mysticalagriculture:essence/minecraft/gold_ingot", 
        "mysticalagriculture:gold_essence", 
        "minecraft:raw_gold", 4, [
            [
                "mysticalagriculture:stone_essence", 
                "minecraft:gold_ore", 2
            ], [
                "mysticalagriculture:deepslate_essence", 
                "minecraft:deepslate_gold_ore", 2
            ]
        ]
    )

    changeRecipes( // ----- aluminum/bauxite -------------------------------------------------------
        "mysticalagriculture:essence/common/aluminum_ingot", 
        "mysticalagriculture:aluminum_essence", 
        "immersiveengineering:raw_aluminum", 4, [
            [
                "mysticalagriculture:stone_essence", 
                "immersiveengineering:ore_aluminum", 2
            ], [
                "mysticalagriculture:deepslate_essence", 
                "immersiveengineering:deepslate_ore_aluminum", 2
            ]
        ]
    )

    changeRecipes( // ----- silver -----------------------------------------------------------------
        "mysticalagriculture:essence/common/silver_ingot", 
        "mysticalagriculture:silver_essence", 
        "immersiveengineering:raw_silver", 4, [
            [
                "mysticalagriculture:stone_essence", 
                "immersiveengineering:ore_silver", 2
            ], [
                "mysticalagriculture:deepslate_essence", 
                "immersiveengineering:deepslate_ore_silver", 2
            ]
        ]
    )

    changeRecipes( // ----- lead -------------------------------------------------------------------
        "mysticalagriculture:essence/common/lead_ingot", 
        "mysticalagriculture:lead_essence", 
        "immersiveengineering:raw_lead", 4, [
            [
                "mysticalagriculture:stone_essence", 
                "immersiveengineering:ore_lead", 2
            ], [
                "mysticalagriculture:deepslate_essence", 
                "immersiveengineering:deepslate_ore_lead", 2
            ]
        ]
    )

    changeRecipes( // ----- nickel -----------------------------------------------------------------
        "mysticalagriculture:essence/common/nickel_ingot", 
        "mysticalagriculture:nickel_essence", 
        "immersiveengineering:raw_nickel", 4, [
            [
                "mysticalagriculture:stone_essence", 
                "immersiveengineering:ore_nickel", 2
            ], [
                "mysticalagriculture:deepslate_essence", 
                "immersiveengineering:deepslate_ore_nickel", 2
            ]
        ]
    )

    changeRecipes( // ----- uranium ----------------------------------------------------------------
        "mysticalagriculture:essence/common/uranium_ingot", 
        "mysticalagriculture:uranium_essence", 
        "immersiveengineering:raw_uranium", 2, [
            [
                "mysticalagriculture:stone_essence", 
                "immersiveengineering:ore_uranium", 1
            ], [
                "mysticalagriculture:deepslate_essence", 
                "immersiveengineering:deepslate_ore_uranium", 1
            ]
        ]
    )

    changeRecipes( // ----- cobalt -----------------------------------------------------------------
        "mysticalagriculture:essence/tconstruct/cobalt_ingot", 
        "mysticalagriculture:cobalt_essence", 
        "tconstruct:raw_cobalt", 2, [
            [
                "mysticalagriculture:nether_essence", 
                "tconstruct:cobalt_ore", 1
            ]
        ]
    )

    changeRecipes( // ----- nether quartz ----------------------------------------------------------
        "mysticalagriculture:essence/minecraft/quartz",
        "mysticalagriculture:nether_quartz_essence",
        "minecraft:quartz", 4, [
            [
                "mysticalagriculture:nether_essence", 
                "minecraft:nether_quartz_ore", 1
            ]
        ]
    )

    changeRecipes( // ----- redstone ---------------------------------------------------------------
        "mysticalagriculture:essence/minecraft/redstone", 
        "mysticalagriculture:redstone_essence", 
        "minecraft:redstone", 8, [
            [
                "mysticalagriculture:stone_essence", 
                "minecraft:redstone_ore", 1
            ], [
                "mysticalagriculture:deepslate_essence", 
                "minecraft:deepslate_redstone_ore", 1
            ]
        ]
    )

    changeRecipes( // ----- lapis lazuli -----------------------------------------------------------
        "mysticalagriculture:essence/minecraft/lapis_lazuli", 
        "mysticalagriculture:lapis_lazuli_essence", 
        "minecraft:lapis_lazuli", 12, [
            [
                "mysticalagriculture:stone_essence", 
                "minecraft:lapis_ore", 1
            ], [
                "mysticalagriculture:deepslate_essence", 
                "minecraft:deepslate_lapis_ore", 1
            ]
        ]
    )
})