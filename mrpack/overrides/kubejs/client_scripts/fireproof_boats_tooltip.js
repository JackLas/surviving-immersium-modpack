ItemEvents.tooltip(event => {
    function addSubTitleText(itemId, text) {
        event.addAdvanced(itemId, (item, advanced, tooltip) => {
            tooltip.add(1, text)
        });
    }

    addSubTitleText("fireproofboats:crimson_boat", descriptionText("tooltip.kubejs.fireproofboats.lavaproof"))
    addSubTitleText("fireproofboats:crimson_chest_boat", descriptionText("tooltip.kubejs.fireproofboats.lavaproof"))
    addSubTitleText("fireproofboats:warped_boat", descriptionText("tooltip.kubejs.fireproofboats.lavaproof"))
    addSubTitleText("fireproofboats:warped_chest_boat", descriptionText("tooltip.kubejs.fireproofboats.lavaproof"))
});


