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
    //Light Engineering Block
    event.shaped(item.of('immersiveengineering:light_engineering', 4), [
        'ABA',
        'BCB',
        'ABA',
    ], {
        A: 'immersiveengineering:sheetmetal_iron',
        B: 'immersiveengineering:component_iron',
        C: '#forge:ingots/brass',
    })
    //Engineer's Decor
    //Small Electrical Furnace
    event.shaped(item.of('engineersdecor:small_electrical_furnace', 1), [
        'ABA',
        'CDC',
        'AAA',
    ], {
        A: '#forge:plates/iron',
        B: 'immersiveengineering:connector_lv',
        C: 'create:electron_tube',
	D: 'minecraft:furnace',
    })
})