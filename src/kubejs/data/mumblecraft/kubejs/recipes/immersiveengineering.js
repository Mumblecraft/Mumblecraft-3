// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying Immersive Engineering recipes')

events.listen('recipes', function (event) {

    //Machines/Components
	
	//Kiln Brick
	event.remove({id: 'immersiveengineering:crafting/alloybrick'})
	
	event.shaped(item.of('immersiveengineering:alloybrick', 2), [
        'ABA',
        'BAB',
		'ABA',
    ], {
        A: '#forge:sandstone',
        B: 'minecraft:bricks',
    })
	
	//Coke Brick
	event.remove({id: 'immersiveengineering:crafting/cokebrick'})
	
	event.shaped(item.of('immersiveengineering:cokebrick', 3), [
        'ABA',
        'BCB',
		'ABA',
    ], {
        A: 'minecraft:clay_ball',
        B: 'minecraft:bricks',
		C: '#forge:sandstone',
    })
	
	//Blast Brick
	event.remove({id: 'immersiveengineering:crafting/blastbrick'})
	
	event.shaped(item.of('immersiveengineering:blastbrick', 3), [
        'ABA',
        'BCB',
		'ABA',
    ], {
        A: 'minecraft:nether_bricks',
        B: 'minecraft:bricks',
		C: 'minecraft:magma_block',
    })
	
    //Redstone Engineering Block
	event.remove({id: 'immersiveengineering:crafting/rs_engineering'})
	
    event.recipes.create.mechanical_crafting(item.of('immersiveengineering:rs_engineering', 4), [
        ' AAA ',
        'ABBBA',
        'ABCBA',
		'ABBBA',
		' AAA ',
    ], {
        A: 'immersiveengineering:sheetmetal_iron',
        B: 'minecraft:redstone',
        C: '#forge:storage_blocks/copper',
    })

    //Light Engineering Block
	event.remove({id: 'immersiveengineering:crafting/light_engineering'})
	
    event.recipes.create.mechanical_crafting(item.of('immersiveengineering:light_engineering', 4), [
        ' AAA ',
        'ABBBA',
        'ABCBA',
		'ABBBA',
		' AAA ',
    ], {
        A: 'immersiveengineering:sheetmetal_iron',
        B: 'immersiveengineering:component_iron',
        C: '#forge:storage_blocks/copper',
    })

    //Heavy Engineering Block
	event.remove({id: 'immersiveengineering:crafting/heavy_engineering'})
	
    event.recipes.create.mechanical_crafting(item.of('immersiveengineering:heavy_engineering', 4), [
        ' AAA ',
        'ABBBA',
        'ABCBA',
		'ABBBA',
		' AAA ',
    ], {
        A: 'immersiveengineering:sheetmetal_steel',
        B: 'immersiveengineering:component_steel',
        C: '#forge:storage_blocks/electrum',
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