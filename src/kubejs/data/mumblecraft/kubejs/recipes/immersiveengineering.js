// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: modifying recipes')

events.listen('recipes', function (event) {

    //Machines
    //Conveyor
    event.shaped(item.of('immersiveengineering:conveyor_basic', 1), [
        '   ',
        'AAA',
        'BCB',
    ], {
        A: 'minecraft:leather',
        B: 'create:brass_ingot',
        C: 'minecraft:redstone',
    })
})