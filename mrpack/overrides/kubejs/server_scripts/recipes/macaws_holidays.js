ServerEvents.recipes(event => {
    // Polymorph mod will allow user to choose pumpkin output
    function carved_pumpkin_with_knife(pumpkin_recipe) {
        event.shaped(Item.of(pumpkin_recipe, 8), 
        [
            "PPP",
            "PKP", 
            "PPP"
        ],
        {
            P: "minecraft:pumpkin",
            K: "#farmersdelight:tools/knives"
        }).damageIngredient(4, 8)
    }
    function replace_carved_pumpkin_with_knife(pumpkin_recipe) {
        event.remove({id: pumpkin_recipe})
        carved_pumpkin_with_knife(pumpkin_recipe)
    }
    replace_carved_pumpkin_with_knife("mcwholidays:carved_friendly_pumpkin")
    replace_carved_pumpkin_with_knife("mcwholidays:carved_screaming_pumpkin")
    replace_carved_pumpkin_with_knife("mcwholidays:carved_evil_pumpkin")
    replace_carved_pumpkin_with_knife("mcwholidays:carved_shocked_pumpkin")
    replace_carved_pumpkin_with_knife("mcwholidays:carved_smile_pumpkin")
    carved_pumpkin_with_knife("minecraft:carved_pumpkin")

    event.remove({output: "mcwholidays:snowy_grass"})
    event.shapeless(Item.of("mcwholidays:snowy_grass"), [
        "minecraft:grass", "minecraft:snowball"
    ])
})

