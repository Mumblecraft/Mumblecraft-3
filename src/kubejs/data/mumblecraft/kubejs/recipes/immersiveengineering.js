// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying Immersive Engineering recipes')

events.listen('recipes', function (event) {

    //Machines/Components

    //Coke Brick

    //Kiln Brick

    //Blast brick

    //Redstone Engineering Block
	event.remove({id: 'immersiveengineering:crafting/rs_engineering'})
	
    event.recipes.create.mechanical_crafting(item.of('immersiveengineering:rs_engineering', 4), [
        ' ABA ',
        ' BCB ',
        ' ABA ',
    ], {
        A: 'immersiveengineering:sheetmetal_iron',
        B: 'minecraft:redstone',
        C: '#forge:ingots/copper',
    })

    //Light Engineering Block
	event.remove({id: 'immersiveengineering:crafting/light_engineering'})
	
    event.recipes.create.mechanical_crafting(item.of('immersiveengineering:light_engineering', 4), [
        ' ABA ',
        ' BCB ',
        ' ABA ',
    ], {
        A: 'immersiveengineering:sheetmetal_iron',
        B: 'immersiveengineering:component_iron',
        C: '#forge:ingots/copper',
    })

    //Heavy Engineering Block
	event.remove({id: 'immersiveengineering:crafting/heavy_engineering'})
	
    event.recipes.create.mechanical_crafting(item.of('immersiveengineering:heavy_engineering', 4), [
        ' ABA ',
        ' BCB ',
        ' ABA ',
    ], {
        A: 'immersiveengineering:sheetmetal_steel',
        B: 'immersiveengineering:component_steel',
        C: '#forge:ingots/electrum',
    })

    //Conveyor

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

    //Processing
    //Mumble Alloy
	event.recipes.immersiveengineering.arc_furnace(['kubejs:mumble_alloy'],
	    '#forge:ingots/iron',
	    [
	    'create:shadow_steel',
	    '#forge:dusts/coal_coke',
	]).time(400).energy(204800)
})