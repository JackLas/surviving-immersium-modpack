const herbalBrewsTea = [
    "herbalbrews:green_tea",
    "herbalbrews:black_tea",
    "herbalbrews:hibiscus_tea",
    "herbalbrews:lavender_tea",
    "herbalbrews:rooibos_tea",
    "herbalbrews:oolong_tea",
    "herbalbrews:yerba_mate_tea"
]

ItemEvents.foodEaten((event) => {
    if (!event.player.creative) {
        if (herbalBrewsTea.includes(event.item.id)) {
            event.player.give("minecraft:glass_bottle");
        }
    }
});