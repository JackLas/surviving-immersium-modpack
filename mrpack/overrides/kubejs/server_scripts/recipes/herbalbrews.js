ServerEvents.recipes(event => {
    event.remove({id: "herbalbrews:stove"})
    event.shaped(Item.of("herbalbrews:stove", 1), [
        "NNN",
        "BBB",
        "BSB"
    ], {
        N: "#forge:nuggets/iron",
        B: "minecraft:bricks",
        S: "minecraft:smoker"
    })
})