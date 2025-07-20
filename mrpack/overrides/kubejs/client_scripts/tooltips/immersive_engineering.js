ItemEvents.tooltip(event => {
    function addSubtitleTextForArmor(itemId, text1, text2) {
        event.addAdvanced(itemId, (item, advanced, tooltip) => {
            tooltip.add(1, text1)
            tooltip.add(2, text2)
        })
    }

    addSubtitleTextForArmor("immersiveengineering:armor_faraday_helmet", 
                            descriptionText("tooltip.kubejs.immersive_engineering.faradey_protection1"),
                            descriptionText("tooltip.kubejs.immersive_engineering.faradey_protection2"))

    addSubtitleTextForArmor("immersiveengineering:armor_faraday_chestplate", 
                            descriptionText("tooltip.kubejs.immersive_engineering.faradey_protection1"),
                            descriptionText("tooltip.kubejs.immersive_engineering.faradey_protection2"))

    addSubtitleTextForArmor("immersiveengineering:armor_faraday_leggings", 
                            descriptionText("tooltip.kubejs.immersive_engineering.faradey_protection1"),
                            descriptionText("tooltip.kubejs.immersive_engineering.faradey_protection2"))

    addSubtitleTextForArmor("immersiveengineering:armor_faraday_boots", 
                            descriptionText("tooltip.kubejs.immersive_engineering.faradey_protection1"),
                            descriptionText("tooltip.kubejs.immersive_engineering.faradey_protection2"))
})
