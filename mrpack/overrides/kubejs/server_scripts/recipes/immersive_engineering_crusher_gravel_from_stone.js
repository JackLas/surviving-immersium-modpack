ServerEvents.recipes(event => {
    event.custom({
        type:"immersiveengineering:crusher",
        energy:2200,
        input: {
            tag: "forge:stone"
        },
        result: {
            item: "minecraft:gravel"
        },
        secondaries: [
        ]
    })
})

// just for consistency, polished calcite is stone, but regular calcite is not
ServerEvents.tags('item', event => {
    event.add("forge:stone", "minecraft:calcite")
})

