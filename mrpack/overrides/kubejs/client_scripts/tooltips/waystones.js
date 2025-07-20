ItemEvents.tooltip(event => {
    event.add("#waystones:waystones", descriptionText("tooltip.kubejs.waystones.waystone"))

    event.addAdvanced("waystones:return_scroll", (item, advanced, tooltip) => {
        tooltip.add(1, descriptionText("tooltip.kubejs.waystones.return_scroll"))
    })

    event.addAdvanced("waystones:bound_scroll", (item, advanced, tooltip) => {
        tooltip.add(1, descriptionText("tooltip.kubejs.waystones.bound_scroll1"))
        tooltip.add(2, descriptionText("tooltip.kubejs.waystones.bound_scroll2"))
    })

    event.addAdvanced("waystones:warp_scroll", (item, advanced, tooltip) => {
        tooltip.add(1, descriptionText("tooltip.kubejs.waystones.warp_scroll"))
    })
})
