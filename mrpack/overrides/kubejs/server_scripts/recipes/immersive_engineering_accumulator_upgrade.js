ServerEvents.recipes(event => {
    event.shaped(Item.of("immersiveengineering:capacitor_mv", 1), [
        " N ",
        "SAS",
        " I "
    ], {
        A: "immersiveengineering:capacitor_lv",
        I: "#forge:plates/iron",
        N: "#forge:plates/nickel",
        S: "#forge:ingots/steel"
    })

    event.shaped(Item.of("immersiveengineering:capacitor_hv", 1), [
        " P ",
        "SAS",
        " G "
    ], {
        A: "immersiveengineering:capacitor_mv",
        G: "#forge:ingots/hop_graphite",
        P: "#forge:plates/aluminum",
        S: "#forge:ingots/steel"
    })
})