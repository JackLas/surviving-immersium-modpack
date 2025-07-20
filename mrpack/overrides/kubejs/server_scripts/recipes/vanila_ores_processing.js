ServerEvents.recipes(event => {
    function changeRecipes(materialTagName) {
        const oreTag = "#forge:ores/" + materialTagName
        const rawTag = "#forge:raw_materials/" + materialTagName
        const dustTag = "#forge:dusts/" + materialTagName
        const nuggetTag = "#forge:nuggets/" + materialTagName
        const nugSmeltOut = "3x " + nuggetTag // default smelting output for base ore
        const nugBlastOut = "6x " + nuggetTag // default blasting output for base ore (x2 of smelting)
        const nugSmeltDustOut = "5x " + nuggetTag // improved smelting output for processed ore
        const nugBlastDustOut = "8x " + nuggetTag // improved blasting output for processed ore
        event.remove([
            {type:"minecraft:smelting", input:oreTag}, 
            {type:"minecraft:blasting", input:oreTag},
            {type:"minecraft:smelting", input:rawTag}, 
            {type:"minecraft:blasting", input:rawTag},
            {type:"minecraft:smelting", input:dustTag}, 
            {type:"minecraft:blasting", input:dustTag},
        ])
        event.smelting(nugSmeltOut, oreTag).xp(0.3)
        event.blasting(nugBlastOut, oreTag).xp(0.3)
        event.smelting(nugSmeltOut, rawTag).xp(0.3)
        event.blasting(nugBlastOut, rawTag).xp(0.3)
        event.smelting(nugSmeltDustOut, dustTag).xp(0.3)
        event.blasting(nugBlastDustOut, dustTag).xp(0.3)
    }

    changeRecipes("copper")
    changeRecipes("iron")
    changeRecipes("gold")
    changeRecipes("aluminum")
    changeRecipes("silver")
    changeRecipes("lead")
    changeRecipes("nickel")
    changeRecipes("uranium")
    changeRecipes("cobalt")
})