ServerEvents.tags('item', event => {
    function addTier4IngotTag(itemId) {
        event.add("modpack:tier4_ingot", itemId)
    }
    
    addTier4IngotTag("tconstruct:cinderslime_ingot")
    addTier4IngotTag("tconstruct:queens_slime_ingot") 
    addTier4IngotTag("tconstruct:manyullyn_ingot") 
    addTier4IngotTag("tconstruct:hepatizon_ingot")
})
