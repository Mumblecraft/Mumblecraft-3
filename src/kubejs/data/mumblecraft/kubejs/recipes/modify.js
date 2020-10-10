// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs Modifying recipes')

events.listen('recipes', function (event) {
    //TODO: uhhhhhhhh

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