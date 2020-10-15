// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: modifying recipes')

events.listen('recipes', function (event) {

    //Armor/Equipment

    //Change Mekanism steel shield to require steel plates
    event.shaped(item.of('mekanismtools:steel_shield', 1), [
        'ABA',
        'AAA',
        ' A ',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'minecraft:shield'
    })

    //Add coke torches
    event.shaped(item.of('minecraft:torch', 6), [
        'A',
        'B',
    ], {
        A: '#forge:coal_coke',
        B: '#forge:rods/wooden'
    })
})