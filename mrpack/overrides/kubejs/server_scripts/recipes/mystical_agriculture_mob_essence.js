ServerEvents.recipes(event => {
    event.remove({id: "mysticalagriculture:essence/minecraft/porkchop"})
    event.remove({id: "mysticalagriculture:essence/minecraft/rabbit"})
    event.remove({id: "mysticalagriculture:essence/minecraft/rabbit_foot"})
    event.remove({id: "mysticalagriculture:essence/minecraft/rabbit_hide"})
    event.remove({id: "mysticalagriculture:essence/minecraft/pufferfish"})
    event.remove({id: "mysticalagriculture:essence/minecraft/salmon"})
    event.remove({id: "mysticalagriculture:essence/minecraft/cod"})
    event.remove({id: "mysticalagriculture:essence/minecraft/tropical_fish"})
    event.remove({id: "mysticalagriculture:essence/minecraft/ink_sac"})
    event.remove({id: "mysticalagriculture:essence/minecraft/glow_ink_sac"})
    event.remove({id: "mysticalagriculture:essence/minecraft/white_wool"})
    event.remove({id: "mysticalagriculture:essence/minecraft/mutton"})
    event.remove({id: "mysticalagriculture:essence/minecraft/leather"})
    event.remove({id: "mysticalagriculture:essence/minecraft/beef"})
    event.remove({id: "mysticalagriculture:essence/minecraft/milk_bucket"})
    event.remove({id: "mysticalagriculture:essence/minecraft/egg"})
    event.remove({id: "mysticalagriculture:essence/minecraft/chicken"})
    event.remove({id: "mysticalagriculture:essence/minecraft/feather"})
    event.remove({id: "mysticalagriculture:essence/minecraft/magma_cream"})
    event.remove({id: "mysticalagriculture:essence/minecraft/ender_eye"})
    event.remove({id: "mysticalagriculture:essence/minecraft/string"})
    event.remove({id: "mysticalagriculture:essence/minecraft/arrow"})
    event.remove({id: "mysticalagriculture:essence/minecraft/slime_ball"})
    
    event.remove({id: "mysticalagriculture:essence/minecraft/scute"})
    event.shaped(Item.of("minecraft:scute", 1), [
        "EEE",
        "E E", 
        "   "
    ], {
        E: "mysticalagriculture:turtle_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/blaze_rod"})
    event.shaped(Item.of("minecraft:blaze_rod", 1), [
        "EEE",
        "EEE", 
        "EEE"
    ], {
        E: "mysticalagriculture:blaze_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/ghast_tear"})
    event.shaped(Item.of("minecraft:ghast_tear", 1), [
        "EEE",
        "EEE", 
        "EEE"
    ], {
        E: "mysticalagriculture:ghast_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/ender_pearl"})
    event.shaped(Item.of("minecraft:ender_pearl", 1), [
        "EEE",
        "EEE", 
        "EEE"
    ], {
        E: "mysticalagriculture:enderman_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/spider_eye"})
    event.shaped(Item.of("minecraft:spider_eye", 3), [
        "EEE",
        "EEE", 
        "EEE"
    ], {
        E: "mysticalagriculture:spider_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/gunpowder"})
    event.shaped(Item.of("minecraft:gunpowder", 3), [
        "EEE",
        "EEE", 
        "EEE"
    ], {
        E: "mysticalagriculture:creeper_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/bone"})
    event.shaped(Item.of("minecraft:bone", 3), [
        "EEE",
        "EEE", 
        "EEE"
    ], {
        E: "mysticalagriculture:skeleton_essence"
    })

    event.remove({id: "mysticalagriculture:essence/minecraft/rotten_flesh"})
    event.shaped(Item.of("minecraft:rotten_flesh", 3), [
        "EEE",
        "EEE", 
        "EEE"
    ], {
        E: "mysticalagriculture:zombie_essence"
    })
})