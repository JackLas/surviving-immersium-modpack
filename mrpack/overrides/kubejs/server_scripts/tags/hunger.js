ServerEvents.tags('item', event => {
    function isZero(value) {
        return Math.abs(value) < 1e-8
    }

    const ThirstHelper = Java.loadClass('dev.ghen.thirst.api.ThirstHelper')

    Ingredient.all.itemIds.forEach(itemId => {
        // commented code is for debug only

        const item = Item.of(itemId)
        
        // let nutrition = 0.0
        // let saturation = 0.0
        let anyHungerRestore = false
        const food = item.getFoodProperties(null)
        if (food) {
            // nutrition = food.getNutrition()
            // saturation = food.getSaturationModifier()
            anyHungerRestore = !isZero(food.getNutrition())
        }

        // let thirst = 0
        // let quenched = 0
        let anyThirstRestore = false
        if (ThirstHelper.itemRestoresThirst(item)) {
            // thirst = ThirstHelper.getThirst(item)
            // quenched = ThirstHelper.getQuenched(item)
            anyThirstRestore = (ThirstHelper.getThirst(item) > 0 || ThirstHelper.getQuenched(item) > 0)
        }

        if (anyThirstRestore) {
            event.add("modpack:thirst", itemId)
            if (!anyHungerRestore) {
                event.add("modpack:thirst_only", itemId)
            }
        }

        if (anyHungerRestore) {
            event.add("modpack:hunger", itemId)
            if (!anyThirstRestore) {
                event.add("modpack:hunger_only", itemId)
            }
        }

        if (!anyThirstRestore && !anyHungerRestore && item.isEdible()) {
            event.add("modpack:edible_no_stats", itemId)
        }

        // if (isZero(nutrition) && !isZero(saturation)) {
        //     event.add("modpack:only_saturation", itemId)
        // }

        // if (anyThirstRestore || anyHungerRestore) {
        //     console.log(`${itemId} (${(anyThirstRestore ? "thirst" : "hunger")}) - nutrition: ${nutrition}, saturation: ${saturation}, thirst: ${thirst}, quenched: ${quenched}`)
        // }
    })
})
