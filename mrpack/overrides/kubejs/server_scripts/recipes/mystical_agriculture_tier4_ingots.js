ServerEvents.recipes(event => {
    event.remove({id: "mysticalagriculture:prudentium_ingot"})
    event.shapeless(Item.of("mysticalagriculture:prudentium_ingot", 2), [
        "4x mysticalagriculture:prudentium_essence",
        "mysticalagriculture:prosperity_ingot",
        "#modpack:tier3_ingot",
    ])

    event.remove({id: "mysticalagriculture:tertium_ingot"})
    event.shapeless(Item.of("mysticalagriculture:tertium_ingot", 2), [
        "4x mysticalagriculture:tertium_essence",
        "mysticalagriculture:prosperity_ingot",
        "#modpack:tier3_ingot",
    ])

    event.remove({id: "mysticalagriculture:imperium_ingot"})
    event.shapeless(Item.of("mysticalagriculture:imperium_ingot", 2), [
        "4x mysticalagriculture:imperium_essence",
        "mysticalagriculture:prosperity_ingot",
        "#modpack:tier4_ingot",
    ])

    event.remove({id: "mysticalagriculture:supremium_ingot"})
    event.shapeless(Item.of("mysticalagriculture:supremium_ingot", 2), [
        "4x mysticalagriculture:supremium_essence",
        "mysticalagriculture:prosperity_ingot",
        "#modpack:tier4_ingot",
    ])
})

