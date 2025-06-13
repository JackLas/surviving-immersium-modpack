// it's not clear why only inferium essence has the "essences" tag
// all other base essences doesn't have it
// and seems like it's not used in any recipe
// so, removed for more convenient JEI search by the tag
ServerEvents.tags("item", event => {
    event.remove("mysticalagriculture:essences", "mysticalagriculture:inferium_essence")
})