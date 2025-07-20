ItemEvents.tooltip(event => {
    event.add("tconstruct:pickadze", Text.translate("tooltip.kubejs.aka_shovel").gray().italic())

    event.addAdvanced("minecraft:painting", (item, advanced, tooltip) => {
        tooltip.add(1, descriptionText("tooltip.kubejs.painting"))
    })
})
