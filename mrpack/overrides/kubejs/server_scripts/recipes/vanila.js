ServerEvents.recipes(event => {
    event.shaped(Item.of("minecraft:name_tag", 2), [
        "DTD",
        "DPD",
        "DDD"
    ], {
        T: "minecraft:name_tag",
        P: "minecraft:paper",
        D: "minecraft:diamond"
    })

    event.remove({id: "minecraft:map"})
    event.shapeless(Item.of("minecraft:map", 1), [
        "minecraft:paper",
        "#forge:dyes/black"
    ])
})