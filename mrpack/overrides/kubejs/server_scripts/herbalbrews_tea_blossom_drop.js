LootJS.modifiers((event) => {
    function addTeaBlossomDrop(itemId) {
        event.addBlockLootModifier(itemId)
             .randomChance(0.01)
             .addLoot("herbalbrews:tea_blossom") 
             
    }
    addTeaBlossomDrop("minecraft:grass")
    addTeaBlossomDrop("minecraft:tall_grass")
    addTeaBlossomDrop("minecraft:fern")
    addTeaBlossomDrop("minecraft:large_fern")
});