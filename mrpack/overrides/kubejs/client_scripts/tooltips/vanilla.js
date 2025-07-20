ItemEvents.tooltip(event => {
    event.addAdvanced("minecraft:painting", (item, advanced, tooltip) => {
        tooltip.add(1, descriptionText("tooltip.kubejs.painting"))
    })
})
