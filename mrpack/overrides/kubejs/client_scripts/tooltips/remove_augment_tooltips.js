const removePlaceholder = "[REMOVED]"
const itemsWithAugment = [
    "mysticalagriculture:inferium_sword",
    "mysticalagriculture:inferium_shears",
    "mysticalagriculture:inferium_fishing_rod",
    "mysticalagriculture:prudentium_sword",
    "mysticalagriculture:prudentium_shears",
    "mysticalagriculture:prudentium_fishing_rod",
    "mysticalagriculture:tertium_sword",
    "mysticalagriculture:tertium_shears",
    "mysticalagriculture:tertium_fishing_rod",
    "mysticalagriculture:imperium_sword",
    "mysticalagriculture:imperium_shears",
    "mysticalagriculture:imperium_fishing_rod",
    "mysticalagriculture:supremium_sword",
    "mysticalagriculture:supremium_shears",
    "mysticalagriculture:supremium_fishing_rod",
    "mysticalagriculture:awakened_supremium_sword",
    "mysticalagriculture:awakened_supremium_shears",
    "mysticalagriculture:awakened_supremium_fishing_rod"
]

ItemEvents.tooltip(event => {
    for (const itemId of itemsWithAugment) {
        event.addAdvanced(itemId, (item, advanced, text) => {
            // scan backwards so removal doesn’t skip indices
            for (let i = text.size() - 1; i >= 0; i--) {
                if (text.get(i).getString().contains(removePlaceholder)) {
                    text.remove(i)
                }
            }
        })
    }
})