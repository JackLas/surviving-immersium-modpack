LootJS.modifiers((event) => {
    function addTeaBlossomDrop(itemId) {
        event.addBlockLootModifier(itemId)
             .randomChance(0.005)
             .addLoot("herbalbrews:tea_blossom") 
             
    }

    function removeTeaBlossomDrop(itemId) {
        event.addBlockLootModifier(itemId)
             .removeLoot("herbalbrews:tea_blossom");
    }

    removeTeaBlossomDrop("minecraft:allium")
    removeTeaBlossomDrop("minecraft:blue_orchid")
    removeTeaBlossomDrop("minecraft:cornflower")
    removeTeaBlossomDrop("minecraft:dandelion")
    removeTeaBlossomDrop("minecraft:lily_of_the_valley")
    removeTeaBlossomDrop("minecraft:orange_tulip")
    removeTeaBlossomDrop("minecraft:oxeye_daisy")
    removeTeaBlossomDrop("minecraft:pink_tulip")
    removeTeaBlossomDrop("minecraft:poppy")
    removeTeaBlossomDrop("minecraft:red_tulip")
    removeTeaBlossomDrop("minecraft:white_tulip")

    addTeaBlossomDrop("minecraft:grass")
    addTeaBlossomDrop("minecraft:tall_grass")
    addTeaBlossomDrop("minecraft:fern")
    addTeaBlossomDrop("minecraft:large_fern")
})

