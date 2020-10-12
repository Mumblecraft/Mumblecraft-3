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
})