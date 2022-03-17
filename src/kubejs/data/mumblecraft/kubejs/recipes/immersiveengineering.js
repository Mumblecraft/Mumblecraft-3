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
	
	//Sheetmetal
	var idRemove = [
	'immersiveengineering:crafting/sheetmetal_copper',
	'immersiveengineering:crafting/sheetmetal_aluminum',
	'immersiveengineering:crafting/sheetmetal_lead',
	'immersiveengineering:crafting/sheetmetal_silver',
	'immersiveengineering:crafting/sheetmetal_nickel',
	'immersiveengineering:crafting/sheetmetal_uranium',
	'immersiveengineering:crafting/sheetmetal_constantan',
	'immersiveengineering:crafting/sheetmetal_electrum',
	'immersiveengineering:crafting/sheetmetal_steel',
	'immersiveengineering:crafting/sheetmetal_iron',
	'immersiveengineering:crafting/sheetmetal_gold',
	]
	idRemove.forEach(function (remove) {
		event.remove({id: remove})
	})
	
	var sheetmetalInput = [ 
	'emendatusenigmatica:copper_plate',
	'emendatusenigmatica:aluminum_plate',
	'emendatusenigmatica:lead_plate',
	'emendatusenigmatica:silver_plate',
	'emendatusenigmatica:nickel_plate',
	'emendatusenigmatica:uranium_plate',
	'emendatusenigmatica:constantan_plate',
	'emendatusenigmatica:electrum_plate',
	'emendatusenigmatica:steel_plate',
	'emendatusenigmatica:iron_plate',
	'emendatusenigmatica:gold_plate',
	]
	
	var sheetmetalOutput = [
	'immersiveengineering:sheetmetal_copper',
	'immersiveengineering:sheetmetal_aluminum',
	'immersiveengineering:sheetmetal_lead',
	'immersiveengineering:sheetmetal_silver',
	'immersiveengineering:sheetmetal_nickel',
	'immersiveengineering:sheetmetal_uranium',
	'immersiveengineering:sheetmetal_constantan',
	'immersiveengineering:sheetmetal_electrum',
	'immersiveengineering:sheetmetal_steel',
	'immersiveengineering:sheetmetal_iron',
	'immersiveengineering:sheetmetal_gold',
	]
	
	var i = 0
	sheetmetalOutput.forEach(function (sheetmetal) {
		event.shaped(item.of(sheetmetal, 1), [
			' A ',
			'A A',
			' A ',
		], {
			A: sheetmetalInput[i]
		})
		i++
	})
	i = 0
	
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
	
	event.blasting('immersiveengineering:cokebrick', 'immersiveengineering:alloybrick')
	
	//Blast Brick
	event.remove({id: 'immersiveengineering:crafting/blastbrick'})
	
	event.shaped(item.of('immersiveengineering:blastbrick', 2), [
        'ABA',
        'BCB',
		'ABA',
    ], {
        A: 'minecraft:nether_bricks',
        B: 'immersiveengineering:cokebrick',
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
})