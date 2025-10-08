// fix for bread slice conflict provided by "more delight" and "egg delight" mods

ServerEvents.recipes(event => {  
    function addCookingRecipe(resultItemId, ingredientsList) {
        event.custom({
            type: "farmersdelight:cooking",
            cookingtime: 200,
            experience: 0.35,
            ingredients: ingredientsList,
            recipe_book_tab: "misc",
            result: {
                item: resultItemId
            }
        })
    }

    event.remove({id: "eggdelight:egg_in_a_basket"})
    addCookingRecipe("eggdelight:egg_in_a_basket", [
        { tag: "forge:bread_slices" },
        { item: "minecraft:egg"}
    ])

    event.remove({id: "eggdelight:egg_toast_recipe"})
    addCookingRecipe("eggdelight:egg_toast", [
        { tag: "forge:bread_slices" },
        { item: "minecraft:egg" },
        { item: "farmersdelight:onion" },
        { item: "farmersdelight:tomato" }
    ])

    event.remove({id: "eggdelight:scotch_egg_recipe"})
    addCookingRecipe("eggdelight:scotch_egg", [
        { tag: "forge:bread_slices" },
        { item: "minecraft:egg" },
        { item: "minecraft:egg" },
        { item: "farmersdelight:minced_beef" }
    ])

    event.remove({id: "eggdelight:eggs_benidict_recipe"})
    addCookingRecipe("eggdelight:eggs_benidict", [
        { tag: "forge:bread_slices" },
        { item: "minecraft:egg" },
        { item: "minecraft:egg" },
        { tag: "forge:milk" },
        { tag: "forge:cooked_bacon" }
    ])

    event.remove({id: "eggdelight:bread_slice"})
})

ServerEvents.tags("item", event => {
    event.add("forge:bread_slices", "eggdelight:bread_slice")
    event.add("forge:bread_slices/wheat", "eggdelight:bread_slice")
})