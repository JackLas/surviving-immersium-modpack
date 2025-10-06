ServerEvents.recipes(event => {  
    function addCommonRecipe(recipeCoreItemId, recipeSidesItemId, outputItemId, outputCount, keepCore) {
        var recipe = event.shaped(Item.of(outputItemId, outputCount), [
            "SSS",
            "SCS", 
            "SSS"
        ], {
            C: recipeCoreItemId,
            S: recipeSidesItemId
        })

        if (keepCore) {
            recipe.keepIngredient(recipeCoreItemId)
        }
    }

    event.remove({id: "mysticalagriculture:essence/minecraft/chorus_fruit"})
    event.remove({id: "mysticalagriculture:essence/appliedenergistics2/engineering_press"})
    event.remove({id: "mysticalagriculture:essence/appliedenergistics2/logic_press"})
    event.remove({id: "mysticalagriculture:essence/appliedenergistics2/calculation_press"})
    event.remove({id: "mysticalagriculture:essence/appliedenergistics2/silicon_press"})
    event.remove({id: "mysticalagriculture:essence/appliedenergistics2/certus_quartz_dust"})
    event.remove({id: "mysticalagriculture:essence/minecraft/gravel"})
    event.remove({id: "mysticalagriculture:essence/minecraft/flint"})
    event.remove({id: "mysticalagriculture:essence/minecraft/mud"})
    event.remove({id: "mysticalagriculture:essence/minecraft/clay_ball"})
    event.remove({id: "mysticalagriculture:essence/minecraft/red_sand"})
    event.remove({id: "mysticalagriculture:essence/minecraft/sand"})
    event.remove({id: "mysticalagriculture:essence/minecraft/brown_mushroom"})
    event.remove({id: "mysticalagriculture:essence/minecraft/red_mushroom"})
    event.remove({id: "mysticalagriculture:essence/minecraft/wheat"})
    event.remove({id: "mysticalagriculture:essence/minecraft/potato"})
    event.remove({id: "mysticalagriculture:essence/minecraft/apple"})
    event.remove({id: "mysticalagriculture:essence/minecraft/crimson_fungus"})
    event.remove({id: "mysticalagriculture:essence/minecraft/warped_fungus"})
    event.remove({id: "mysticalagriculture:essence/minecraft/beetroot"})
    event.remove({id: "mysticalagriculture:essence/minecraft/sugar_cane"})
    event.remove({id: "mysticalagriculture:essence/minecraft/pumpkin"})
    event.remove({id: "mysticalagriculture:essence/minecraft/bamboo"})
    event.remove({id: "mysticalagriculture:essence/minecraft/carrot"})
    event.remove({id: "mysticalagriculture:essence/minecraft/melon"})
    event.remove({id: "mysticalagriculture:essence/minecraft/cactus"})
    event.remove({id: "mysticalagriculture:essence/minecraft/cocoa_beans"})
    event.remove({id: "mysticalagriculture:essence/minecraft/nether_bricks"})
    event.remove({id: "mysticalagriculture:essence/minecraft/stone"})
    event.remove({id: "mysticalagriculture:essence/minecraft/deepslate"})
    event.remove({id: "mysticalagriculture:essence/minecraft/packed_ice"})
    event.remove({id: "mysticalagriculture:essence/minecraft/lava_bucket"})

    event.shaped(Item.of("minecraft:clay_ball", 4), [
        " M ",
        "MEM", 
        " M "
    ], {
        E: "mysticalagriculture:air_essence",
        M: "kubejs:mud_ball"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/nether_wart"})
    event.shaped(Item.of("minecraft:nether_wart", 8), [
        "NEN",
        "EWE", 
        "NEN"
    ], {
        N: "mysticalagriculture:nature_essence",
        E: "mysticalagriculture:nether_essence",
        W: "minecraft:nether_wart"
    }).keepIngredient("minecraft:nether_wart")

    
    event.remove({id: "mysticalagriculture:essence/minecraft/coal"})
    addCommonRecipe(null, "mysticalagriculture:coal_essence", "minecraft:coal", 8)

    event.remove({id: "mysticalagriculture:essence/minecraft/netherite_ingot"})
    addCommonRecipe("mysticalagriculture:gold_essence", "mysticalagriculture:netherite_essence", "minecraft:netherite_ingot", 1)

    addCommonRecipe("quark:permafrost", "mysticalagriculture:ice_essence", "quark:permafrost", 16)

    // amethyst
    event.remove({id: "mysticalagriculture:essence/minecraft/amethyst"})
    addCommonRecipe(null, "mysticalagriculture:amethyst_essence", "minecraft:amethyst_shard", 8)
    addCommonRecipe("tconstruct:earth_slime_crystal", "mysticalagriculture:amethyst_essence", "tconstruct:earth_slime_crystal", 4, true)
    addCommonRecipe("tconstruct:sky_slime_crystal", "mysticalagriculture:amethyst_essence", "tconstruct:sky_slime_crystal", 4, true)
    addCommonRecipe("tconstruct:ender_slime_crystal", "mysticalagriculture:amethyst_essence", "tconstruct:ender_slime_crystal", 4, true)
    addCommonRecipe("tconstruct:ichor_slime_crystal", "mysticalagriculture:amethyst_essence", "tconstruct:ichor_slime_crystal", 4, true)
    addCommonRecipe("quark:red_corundum_cluster", "mysticalagriculture:amethyst_essence", "quark:red_corundum_cluster", 8, true)
    addCommonRecipe("quark:orange_corundum_cluster", "mysticalagriculture:amethyst_essence", "quark:orange_corundum_cluster", 8, true)
    addCommonRecipe("quark:yellow_corundum_cluster", "mysticalagriculture:amethyst_essence", "quark:yellow_corundum_cluster", 8, true)
    addCommonRecipe("quark:green_corundum_cluster", "mysticalagriculture:amethyst_essence", "quark:green_corundum_cluster", 8, true)
    addCommonRecipe("quark:blue_corundum_cluster", "mysticalagriculture:amethyst_essence", "quark:blue_corundum_cluster", 8, true)
    addCommonRecipe("quark:indigo_corundum_cluster", "mysticalagriculture:amethyst_essence", "quark:indigo_corundum_cluster", 8, true)
    addCommonRecipe("quark:violet_corundum_cluster", "mysticalagriculture:amethyst_essence", "quark:violet_corundum_cluster", 8, true)
    addCommonRecipe("quark:white_corundum_cluster", "mysticalagriculture:amethyst_essence", "quark:white_corundum_cluster", 8, true)
    addCommonRecipe("quark:black_corundum_cluster", "mysticalagriculture:amethyst_essence", "quark:black_corundum_cluster", 8, true)
    function addCorundumBlockRecipe(colorStr) {
        const clusterId = "quark:" + colorStr + "_corundum_cluster"
        const blockId = "quark:" + colorStr + "_corundum"
        event.shaped(Item.of(blockId, 1), [
            "CC",
            "CC"
        ], {
            C: clusterId
        })
    }
    addCorundumBlockRecipe("red")
    addCorundumBlockRecipe("orange")
    addCorundumBlockRecipe("yellow")
    addCorundumBlockRecipe("green")
    addCorundumBlockRecipe("blue")
    addCorundumBlockRecipe("indigo")
    addCorundumBlockRecipe("violet")
    addCorundumBlockRecipe("white")
    addCorundumBlockRecipe("black")

    // obsidian
    event.remove({id: "mysticalagriculture:essence/minecraft/obsidian"})
    addCommonRecipe(null, "mysticalagriculture:obsidian_essence", "minecraft:obsidian", 4)

    // deepslate
    event.remove({id: "mysticalagriculture:essence/minecraft/cobbled_deepslate"})
    addCommonRecipe(null, "mysticalagriculture:deepslate_essence", "minecraft:cobbled_deepslate", 16)

    // dirt
    event.remove({id: "mysticalagriculture:essence/minecraft/dirt"})
    addCommonRecipe(null, "mysticalagriculture:dirt_essence", "minecraft:dirt", 16)

    event.remove({id: "mysticalagriculture:essence/minecraft/grass_block"})
    addCommonRecipe("minecraft:grass_block", "mysticalagriculture:dirt_essence", "minecraft:grass_block", 16, true)

    event.remove({id: "mysticalagriculture:essence/minecraft/podzol"})
    addCommonRecipe("minecraft:podzol", "mysticalagriculture:dirt_essence", "minecraft:podzol", 16, true)

    event.remove({id: "mysticalagriculture:essence/minecraft/mycelium"})
    addCommonRecipe("minecraft:mycelium", "mysticalagriculture:dirt_essence", "minecraft:mycelium", 16, true)

    // stone
    event.remove({id: "mysticalagriculture:essence/minecraft/cobblestone"})
    addCommonRecipe(null, "mysticalagriculture:stone_essence", "minecraft:cobblestone", 16)

    event.remove({id: "mysticalagriculture:essence/minecraft/calcite"})
    addCommonRecipe("minecraft:calcite", "mysticalagriculture:stone_essence", "minecraft:calcite", 16, true)

    event.remove({id: "mysticalagriculture:essence/minecraft/granite"})
    addCommonRecipe("minecraft:granite", "mysticalagriculture:stone_essence", "minecraft:granite", 16, true)

    event.remove({id: "mysticalagriculture:essence/minecraft/diorite"})
    addCommonRecipe("minecraft:diorite", "mysticalagriculture:stone_essence", "minecraft:diorite", 16, true)

    event.remove({id: "mysticalagriculture:essence/minecraft/andesite"})
    addCommonRecipe("minecraft:andesite", "mysticalagriculture:stone_essence", "minecraft:andesite", 16, true)

    event.remove({id: "mysticalagriculture:essence/minecraft/tuff"})
    addCommonRecipe("minecraft:tuff", "mysticalagriculture:stone_essence", "minecraft:tuff", 16, true)

    addCommonRecipe("quark:limestone", "mysticalagriculture:stone_essence", "quark:limestone", 16, true)
    addCommonRecipe("quark:jasper", "mysticalagriculture:stone_essence", "quark:jasper", 16, true)
    addCommonRecipe("quark:shale", "mysticalagriculture:stone_essence", "quark:shale", 16, true)

    // end 
    event.remove({id: "mysticalagriculture:essence/minecraft/end_stone"})
    addCommonRecipe(null, "mysticalagriculture:end_essence", "minecraft:end_stone", 16)
    addCommonRecipe("quark:myalite", "mysticalagriculture:end_essence", "quark:myalite", 16, true)

    // nether
    event.remove({id: "mysticalagriculture:essence/minecraft/netherrack"})
    addCommonRecipe(null, "mysticalagriculture:nether_essence", "minecraft:netherrack", 16)

    event.remove({id: "mysticalagriculture:essence/minecraft/crimson_nylium"})
    addCommonRecipe("minecraft:crimson_nylium", "mysticalagriculture:nether_essence", "minecraft:crimson_nylium", 16, true)

    event.remove({id: "mysticalagriculture:essence/minecraft/warped_nylium"})
    addCommonRecipe("minecraft:warped_nylium", "mysticalagriculture:nether_essence", "minecraft:warped_nylium", 16, true)

    event.remove({id: "mysticalagriculture:essence/minecraft/blackstone"})
    addCommonRecipe("minecraft:blackstone", "mysticalagriculture:nether_essence", "minecraft:blackstone", 16, true)

    event.remove({id: "mysticalagriculture:essence/minecraft/basalt"})
    addCommonRecipe("minecraft:basalt", "mysticalagriculture:nether_essence", "minecraft:basalt", 16, true)

    event.remove({id: "mysticalagriculture:essence/minecraft/soul_soil"})
    addCommonRecipe("minecraft:soul_soil", "mysticalagriculture:nether_essence", "minecraft:soul_soil", 16, true)

    event.remove({id: "mysticalagriculture:essence/minecraft/soul_sand"})
    addCommonRecipe("minecraft:soul_sand", "mysticalagriculture:nether_essence", "minecraft:soul_sand", 16, true)

    // wood
    event.remove({input: "mysticalagriculture:wood_essence"})
    function addWoodRecipes(saplingId, woodId) {
        addCommonRecipe(saplingId, "mysticalagriculture:wood_essence", woodId, 8, true)
        addCommonRecipe(saplingId, "mysticalagriculture:nature_essence", saplingId, 8, true)
    }
    addWoodRecipes("minecraft:oak_sapling", "minecraft:oak_log")
    addWoodRecipes("minecraft:spruce_sapling", "minecraft:spruce_log")
    addWoodRecipes("minecraft:birch_sapling", "minecraft:birch_log")
    addWoodRecipes("minecraft:jungle_sapling", "minecraft:jungle_log")
    addWoodRecipes("minecraft:acacia_sapling", "minecraft:acacia_log")
    addWoodRecipes("minecraft:dark_oak_sapling", "minecraft:dark_oak_log")
    addWoodRecipes("minecraft:mangrove_propagule", "minecraft:mangrove_log")
    addWoodRecipes("minecraft:cherry_sapling", "minecraft:cherry_log")
    addWoodRecipes("quark:ancient_sapling", "quark:ancient_log")
    addWoodRecipes("minecraft:flowering_azalea", "quark:azalea_log")
    addWoodRecipes("minecraft:azalea", "quark:azalea_log")
    addWoodRecipes("minecraft:crimson_fungus", "minecraft:crimson_stem")
    addWoodRecipes("minecraft:warped_fungus", "minecraft:warped_stem")
    addWoodRecipes("tconstruct:blood_slime_sapling", "tconstruct:bloodshroom_log")
    addWoodRecipes("tconstruct:earth_slime_sapling", "tconstruct:greenheart_log")
    addWoodRecipes("tconstruct:sky_slime_sapling", "tconstruct:skyroot_log")
    addWoodRecipes("tconstruct:ender_slime_sapling", "tconstruct:enderbark_log")
    addWoodRecipes("quark:blue_blossom_sapling", "quark:blossom_log")
    addWoodRecipes("quark:lavender_blossom_sapling", "quark:blossom_log")
    addWoodRecipes("quark:orange_blossom_sapling", "quark:blossom_log")
    addWoodRecipes("quark:yellow_blossom_sapling", "quark:blossom_log")
    addWoodRecipes("quark:red_blossom_sapling", "quark:blossom_log")
})