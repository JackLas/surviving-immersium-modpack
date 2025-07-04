ItemEvents.tooltip(event => {
    function descriptionText(translationKey) {
        return Text.translate(translationKey).gray()
    }

    function insertSubTitleText(itemId, text) {
        event.addAdvanced(itemId, (item, advanced, tooltip) => {
            tooltip.add(1, text)
        });
    }

    event.add("waystones:waystone", descriptionText("tooltip.kubejs.waystones.warp_stone"));
    event.add("waystones:mossy_waystone", descriptionText("tooltip.kubejs.waystones.warp_stone"));
    event.add("waystones:sandy_waystone", descriptionText("tooltip.kubejs.waystones.warp_stone"));

    //insertSubTitleText("waystones:return_scroll", descriptionText("tooltip.kubejs.waystones.return_scroll"))

    event.addAdvanced("waystones:return_scroll", (item, advanced, tooltip) => {
        tooltip.add(1, descriptionText("tooltip.kubejs.waystones.return_scroll"))
    });

    // insertSubTitleText("waystones:bound_scroll", descriptionText("tooltip.kubejs.waystones.bound_scroll2"))
    // insertSubTitleText("waystones:bound_scroll", descriptionText("tooltip.kubejs.waystones.bound_scroll1"))

    event.addAdvanced("waystones:bound_scroll", (item, advanced, tooltip) => {
        tooltip.add(1, descriptionText("tooltip.kubejs.waystones.bound_scroll1"))
        tooltip.add(2, descriptionText("tooltip.kubejs.waystones.bound_scroll2"))
    });

        event.addAdvanced("waystones:warp_scroll", (item, advanced, tooltip) => {
        tooltip.add(1, descriptionText("tooltip.kubejs.waystones.warp_scroll"))
    });

    //insertSubTitleText("waystones:warp_scroll", descriptionText("tooltip.kubejs.waystones.warp_scroll"))
});
