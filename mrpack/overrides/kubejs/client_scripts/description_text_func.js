function descriptionText(translationKey) {
    return Text.translate(translationKey).gray()
}

function addSubTitleText(event, itemId, text) {
    event.addAdvanced(itemId, (item, advanced, tooltip) => {
        tooltip.add(1, text)
    });
}