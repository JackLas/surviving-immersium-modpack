ServerEvents.tags("item", event => {
    function addTier3IngotTag(itemId) {
        event.add("modpack:tier3_ingot", itemId)
    }
    
    addTier3IngotTag("immersiveengineering:ingot_constantan")
    addTier3IngotTag("immersiveengineering:ingot_electrum")
    addTier3IngotTag("immersiveengineering:ingot_steel")
    addTier3IngotTag("tconstruct:cobalt_ingot")
    addTier3IngotTag("tconstruct:steel_ingot")
    addTier3IngotTag("tconstruct:slimesteel_ingot")
    addTier3IngotTag("tconstruct:amethyst_bronze_ingot")
    addTier3IngotTag("tconstruct:rose_gold_ingot")
    addTier3IngotTag("tconstruct:pig_iron_ingot")
    addTier3IngotTag("tcintegrations:bronze_ingot")
})


