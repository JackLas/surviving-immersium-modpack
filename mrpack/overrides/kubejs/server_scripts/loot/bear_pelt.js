LootJS.modifiers((event) => {
    function addLoot(mobId, itemId) {
        event.addEntityLootModifier(mobId)
             .randomChanceWithEnchantment("minecraft:looting", [1.0, 1.3, 1.6, 1.9]) 
             .addLoot(itemId) 
    }

    addLoot("alexsmobs:grizzly_bear", "kubejs:bear_pelt") 
    addLoot("minecraft:polar_bear", "kubejs:polar_bear_pelt") 
})