ServerEvents.recipes(event => {
    event.remove({output: "festive_delight:rolling_pin"})
    event.shaped(Item.of("festive_delight:rolling_pin", 1), [
        "LIL"
    ], {
        L: "#minecraft:logs",
        I: "#forge:storage_blocks/iron"
    })
})