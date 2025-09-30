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
})