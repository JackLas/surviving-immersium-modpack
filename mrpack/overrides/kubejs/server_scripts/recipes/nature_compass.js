ServerEvents.recipes(event => {
    event.remove({id: "naturescompass:natures_compass"})
    event.shaped(Item.of("naturescompass:naturescompass", 1), [
        "EGE",
        "GCG",
        "EGE"
    ],{
        C: "minecraft:compass",
        G: "mysticalagradditions:insanium_gemstone",
        E: "mysticalagriculture:nature_essence"
    })
})

