ServerEvents.recipes(event => {
    event.remove({id: 'immersiveengineering:crafting/toolupgrade_revolver_bayonet'})
    event.shaped(Item.of('immersiveengineering:toolupgrade_revolver_bayonet', 1),
    [
        '  I',
        'SIW', 
        'IW '
    ],
    {
        I: '#forge:ingots/steel',
        S: '#forge:rods/treated_wood',
        W: '#forge:wires/copper'
    })
})
