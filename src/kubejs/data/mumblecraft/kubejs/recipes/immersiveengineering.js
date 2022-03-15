// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying Immersive Engineering recipes')

events.listen('recipes', function (event) {

	//Tools
	event.shaped(item.of('immersiveengineering:hammer', 1), [
        ' AB',
        ' CA',
		'C  ',
    ], {
        A: '#forge:ingots/copper',
        B: '#forge:string',
		C: 'minecraft:stick'
    })
	
    //Machines/Components
	
	//Kiln Brick
	event.remove({id: 'immersiveengineering:crafting/alloybrick'})
	
	event.shaped(item.of('immersiveengineering:alloybrick', 1), [
        'ABA',
        'BAB',
		'ABA',
    ], {
        A: '#forge:sandstone/smooth',
        B: 'minecraft:bricks',
    })
	
	//Coke Brick
	event.remove({id: 'immersiveengineering:crafting/cokebrick'})
	
	event.shaped(item.of('immersiveengineering:cokebrick', 2), [
        'ABA',
        'BCB',
		'ABA',
    ], {
        A: 'minecraft:clay',
        B: 'minecraft:bricks',
		C: '#forge:sandstone',
    })
	
	//Blast Brick
	event.remove({id: 'immersiveengineering:crafting/blastbrick'})
	
	event.shaped(item.of('immersiveengineering:blastbrick', 2), [
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
	
    event.recipes.create.mechanical_crafting(item.of('immersiveengineering:rs_engineering', 2), [
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
	
    event.recipes.create.mechanical_crafting(item.of('immersiveengineering:light_engineering', 2), [
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
	
    event.recipes.create.mechanical_crafting(item.of('immersiveengineering:heavy_engineering', 2), [
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
	
	//Remove nuggets/ingots added in EE
	event.remove({input: 'immersiveengineering:nugget_constantan'})
	event.remove({input: 'immersiveengineering:ingot_constantan'})
	event.remove({output: 'immersiveengineering:ingot_constantan'})
	event.remove({input: 'immersiveengineering:nugget_electrum'})
	event.remove({input: 'immersiveengineering:ingot_electrum'})
	event.remove({output: 'immersiveengineering:ingot_electrum'})
	
})