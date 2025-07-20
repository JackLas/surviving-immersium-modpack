ServerEvents.recipes(event => {
    // remove native recipes provided by mods, will be replaced with custom recipes in the datapack
    // location: data/kubejs/recipes/cloche
    event.remove({type: "immersiveengineering:cloche", mod: "immersiveengineering"})
    event.remove({type: "immersiveengineering:cloche", mod: "farmersdelight"})
    event.remove({type: "immersiveengineering:cloche", mod: "vintagedelight"})
    event.remove({type: "immersiveengineering:cloche", mod: "delightful"})

    // Mystical Agriculture recipes provided as script, since they have the same pattern
    const soilTier6 = [{"item": "mysticalagradditions:insanium_farmland"}]
    const soilTier5 = soilTier6.concat({"item": "mysticalagriculture:supremium_farmland"})
    const soilTier4 = soilTier5.concat({"item": "mysticalagriculture:imperium_farmland"})
    const soilTier3 = soilTier4.concat({"item": "mysticalagriculture:tertium_farmland"})
    const soilTier2 = soilTier3.concat({"item": "mysticalagriculture:prudentium_farmland"})
    const soilTier1 = soilTier2.concat({"item": "mysticalagriculture:inferium_farmland"})
    function addEssenceInClocheRecipe(name, outputCount, growthTime, soilList) {
        const cropId = "mysticalagriculture:" + name + "_crop"
        const essenceId = "mysticalagriculture:" + name + "_essence"
        const seedsId = "mysticalagriculture:" + name + "_seeds"
        event.custom({
            type: "immersiveengineering:cloche",
            results: [{
                item: essenceId,
                count: outputCount
            }],
            input: {
                item: seedsId
            },
            soil: soilList,
            time: growthTime,
            render: {
                type: "crop",
                block: cropId
            }
        }) 
    }

    // Tier 1 crops
    addEssenceInClocheRecipe("air", 2, 1200, soilTier1)
    addEssenceInClocheRecipe("earth", 2, 1200, soilTier1)
    addEssenceInClocheRecipe("water", 2, 1200, soilTier1)
    addEssenceInClocheRecipe("fire", 2, 1200, soilTier1)
    addEssenceInClocheRecipe("inferium", 2, 1200, soilTier1)
    addEssenceInClocheRecipe("stone", 2, 1200, soilTier1)
    addEssenceInClocheRecipe("dirt", 2, 1200, soilTier1)
    addEssenceInClocheRecipe("wood", 2, 1200, soilTier1)
    addEssenceInClocheRecipe("ice", 2, 1200, soilTier1)
    addEssenceInClocheRecipe("deepslate", 2, 1200, soilTier1)

    // Tier 2 crops
    addEssenceInClocheRecipe("nature", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("dye", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("nether", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("coal", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("coral", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("honey", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("amethyst", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("pig", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("chicken", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("cow", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("sheep", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("squid", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("fish", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("slime", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("turtle", 2, 1200, soilTier2)
    addEssenceInClocheRecipe("aluminum", 2, 1200, soilTier2)

    // Tier 3 crops
    addEssenceInClocheRecipe("iron", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("copper", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("nether_quartz", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("glowstone", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("redstone", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("obsidian", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("prismarine", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("zombie", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("skeleton", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("creeper", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("spider", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("rabbit", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("silver", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("lead", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("sky_stone", 2, 1200, soilTier3)
    addEssenceInClocheRecipe("certus_quartz", 2, 1200, soilTier3)

    // Tier 4 crops
    addEssenceInClocheRecipe("gold", 2, 1200, soilTier4)
    addEssenceInClocheRecipe("lapis_lazuli", 2, 1200, soilTier4)
    addEssenceInClocheRecipe("end", 2, 1200, soilTier4)
    addEssenceInClocheRecipe("experience", 2, 1200, soilTier4)
    addEssenceInClocheRecipe("blaze", 2, 1200, soilTier4)
    addEssenceInClocheRecipe("ghast", 2, 1200, soilTier4)
    addEssenceInClocheRecipe("enderman", 2, 1200, soilTier4)
    addEssenceInClocheRecipe("nickel", 2, 1200, soilTier4)
    addEssenceInClocheRecipe("uranium", 2, 1200, soilTier4)
    addEssenceInClocheRecipe("soulium", 2, 1200, soilTier4)
    addEssenceInClocheRecipe("cobalt", 2, 1200, soilTier4)

    // Tier 5 crops
    addEssenceInClocheRecipe("diamond", 2, 1200, soilTier5)
    addEssenceInClocheRecipe("emerald", 2, 1200, soilTier5)
    addEssenceInClocheRecipe("netherite", 2, 1200, soilTier5)
    addEssenceInClocheRecipe("wither_skeleton", 2, 1200, soilTier5)

    // Tier 6 crops
    addEssenceInClocheRecipe("nether_star", 1, 1200, [{"item": "mysticalagradditions:nether_star_crux"}])
    addEssenceInClocheRecipe("dragon_egg", 1, 1200, [{"item": "mysticalagradditions:dragon_egg_crux"}])
})