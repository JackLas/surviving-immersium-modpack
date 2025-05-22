const itemsWithAugment = {
    'mysticalagriculture:inferium_sword': 2, 
    'mysticalagriculture:inferium_shears': 2, 
    'mysticalagriculture:inferium_fishing_rod': 2, 
    'mysticalagriculture:prudentium_shears': 2, 
    'mysticalagriculture:prudentium_sword': 2, 
    'mysticalagriculture:prudentium_fishing_rod': 2, 
    'mysticalagriculture:tertium_sword': 2, 
    'mysticalagriculture:tertium_shears': 2, 
    'mysticalagriculture:tertium_fishing_rod': 2, 
    'mysticalagriculture:imperium_shears': 2, 
    'mysticalagriculture:imperium_sword': 2, 
    'mysticalagriculture:imperium_fishing_rod': 2, 
    'mysticalagriculture:supremium_shears': 2, 
    'mysticalagriculture:supremium_fishing_rod': 2, 
    'mysticalagriculture:supremium_sword': 2, 
    'mysticalagriculture:awakened_supremium_fishing_rod': 3, 
    'mysticalagriculture:awakened_supremium_sword': 3, 
    'mysticalagriculture:awakened_supremium_shears': 3
};

ItemEvents.tooltip(event => {
    for (const [itemId, removeCount] of Object.entries(itemsWithAugment)) {
        event.addAdvanced(itemId, (item, advanced, text) => {
            // Default tooltip:
            // <Item name>
            // Tier: X
            // Augment
            // - Empty
            // - Empty
            // 
            // other info...
            for (let i = 0; i < removeCount; i++) {
                text.remove(2);
            }
        });
    }
});
