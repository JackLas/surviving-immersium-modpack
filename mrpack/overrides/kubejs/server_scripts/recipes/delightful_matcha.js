ServerEvents.recipes(event => {
    event.remove({id: "delightful:cutting/green_tea_leaves"})
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{
            item: "herbalbrews:green_tea_leaf"
        }],
        result: [{
            "item": "minecraft:green_dye"
        }, {
            "item": "delightful:matcha",
            "chance": 0.4
        }],
        tool: {
            "tag": "farmersdelight:straw_harvesters"
        }
    })
})

