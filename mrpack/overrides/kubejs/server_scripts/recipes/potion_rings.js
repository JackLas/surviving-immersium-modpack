ServerEvents.recipes(event => {
    function addRingRecipe(effectId, recipe, mapping) {
        event.custom({
            type: "minecraft:crafting_shaped",
            pattern: recipe,
            key: mapping,
            result: {
                item: "justpotionrings:ring",
                nbt: {
                    effect : effectId
                }
            }
        })
    }

    // remove all recipes
    // hidden from EMI index using EMI resource pack
    event.remove({output: "justpotionrings:ring"})

    addRingRecipe("minecraft:fire_resistance", [
        "B  ",
        " R ",
        "  B"
    ], {
        B: "minecraft:bedrock",
        R: "justpotionrings:ring"
    })

    addRingRecipe("minecraft:water_breathing", [
        " B ",
        " R ",
        " B "
    ], {
        B: "minecraft:bedrock",
        R: "justpotionrings:ring"
    })

    addRingRecipe("cold_sweat:ice_resistance", [
        "  B",
        " R ",
        "B  "
    ], {
        B: "minecraft:bedrock",
        R: "justpotionrings:ring"
    })
})