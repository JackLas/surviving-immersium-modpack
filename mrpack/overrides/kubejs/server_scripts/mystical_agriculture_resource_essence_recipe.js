ServerEvents.recipes(event => {  
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

    event.remove({id: "mysticalagriculture:essence/minecraft/obsidian"})
    event.shaped(Item.of("minecraft:obsidian", 4), [
        "EEE",
        "EEE", 
        "EEE"
    ], {
        E: "mysticalagriculture:obsidian_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/cobblestone"})
    event.shaped(Item.of("minecraft:cobblestone", 16), [
        "EEE",
        "E E", 
        "EEE"
    ], {
        E: "mysticalagriculture:stone_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/stone"})
    event.shaped(Item.of("minecraft:stone", 8), [
        "EEE",
        "ECE", 
        "EEE"
    ], {
        E: "mysticalagriculture:stone_essence",
        C: "mysticalagriculture:coal_essence"
    })

    event.shaped(Item.of("minecraft:clay_ball", 4), [
        " M ",
        "MEM", 
        " M "
    ], {
        E: "mysticalagriculture:air_essence",
        M: "kubejs:mud_ball"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/dirt"})
    event.shaped(Item.of("minecraft:dirt", 16), [
        "EEE",
        "E E", 
        "EEE"
    ], {
        E: "mysticalagriculture:dirt_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/grass_block"})
    event.shaped(Item.of("minecraft:grass_block", 8), [
        "ENE",
        "ENE", 
        "ENE"
    ], {
        E: "mysticalagriculture:dirt_essence",
        N: "mysticalagriculture:nature_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/podzol"})
    event.shaped(Item.of("minecraft:podzol", 8), [
        "EEE",
        "NNN", 
        "EEE"
    ], {
        E: "mysticalagriculture:dirt_essence",
        N: "mysticalagriculture:nature_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/mycelium"})
    event.shaped(Item.of("minecraft:mycelium", 8), [
        "NEE",
        "ENE", 
        "EEN"
    ], {
        E: "mysticalagriculture:dirt_essence",
        N: "mysticalagriculture:nature_essence"
    })

    function addWoodRecipes(saplingId, woodId) {
        event.shaped(Item.of(woodId, 8), [
            "EEE",
            "ESE", 
            "EEE"
        ], {
            E: "mysticalagriculture:wood_essence",
            S: saplingId
        }).keepIngredient(saplingId)

        event.shaped(Item.of(saplingId, 8), [
            "EEE",
            "ESE", 
            "EEE"
        ], {
            E: "mysticalagriculture:nature_essence",
            S: saplingId
        }).keepIngredient(saplingId)
    }
    event.remove({input: "mysticalagriculture:wood_essence"})
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

    event.remove({id: "mysticalagriculture:essence/minecraft/cobbled_deepslate"})
    event.shaped(Item.of("minecraft:cobbled_deepslate", 16), [
        "EEE",
        "E E", 
        "EEE"
    ], {
        E: "mysticalagriculture:deepslate_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/deepslate"})
    event.shaped(Item.of("minecraft:deepslate", 8), [
        "EEE",
        "ECE", 
        "EEE"
    ], {
        E: "mysticalagriculture:deepslate_essence",
        C: "mysticalagriculture:coal_essence"
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

    event.remove({id: "mysticalagriculture:essence/minecraft/crimson_nylium"})
    event.shaped(Item.of("minecraft:crimson_nylium", 8), [
        "ENE",
        "ENE", 
        "ENE"
    ], {
        E: "mysticalagriculture:nether_essence",
        N: "mysticalagriculture:nature_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/warped_nylium"})
    event.shaped(Item.of("minecraft:warped_nylium", 8), [
        "EEE",
        "NNN", 
        "EEE"
    ], {
        E: "mysticalagriculture:nether_essence",
        N: "mysticalagriculture:nature_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/blackstone"})
    event.shaped(Item.of("minecraft:blackstone", 16), [
        "NNN",
        "NSN", 
        "NNN"
    ], {
        S: "mysticalagriculture:stone_essence",
        N: "mysticalagriculture:nether_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/basalt"})
    event.shaped(Item.of("minecraft:basalt", 16), [
        "NNN",
        "NIN", 
        "NNN"
    ], {
        I: "mysticalagriculture:ice_essence",
        N: "mysticalagriculture:nether_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/netherrack"})
    event.shaped(Item.of("minecraft:netherrack", 16), [
        "NNN",
        "N N", 
        "NNN"
    ], {
        N: "mysticalagriculture:nether_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/coal"})
    event.shaped(Item.of("minecraft:coal", 8), [
        "CCC",
        "C C", 
        "CCC"
    ], {
        C: "mysticalagriculture:coal_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/amethyst"})
    event.shaped(Item.of("minecraft:amethyst_shard", 8), [
        "AAA",
        "A A", 
        "AAA"
    ], {
        A: "mysticalagriculture:amethyst_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/calcite"})
    event.shaped(Item.of("minecraft:calcite", 16), [
        "SSS",
        "SAS", 
        "SSS"
    ], {
        S: "mysticalagriculture:stone_essence",
        A: "mysticalagriculture:amethyst_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/end_stone"})
    event.shaped(Item.of("minecraft:end_stone", 16), [
        "EEE",
        "E E", 
        "EEE"
    ], {
        E: "mysticalagriculture:end_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/netherite_ingot"})
    event.shaped(Item.of("minecraft:netherite_ingot", 1), [
        "NNN",
        "NGN", 
        "NNN"
    ], {
        N: "mysticalagriculture:netherite_essence",
        G: "mysticalagriculture:gold_essence"
    })
})