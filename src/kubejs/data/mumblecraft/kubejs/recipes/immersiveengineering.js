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
		C: '#forge:rods/wooden'
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
	
	event.shaped(item.of('immersiveengineering:cokebrick', 1), [
        'AA ',
        'AA ',
		'   ',
    ], {
        A: 'kubejs:coke_brick',
    })
	
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
	
	//Aluminum Scaffolding
	event.remove({id: 'immersiveengineering:crafting/alu_scaffolding_standard'})
	
	event.recipes.createSequencedAssembly([
        Item.of('4x immersiveengineering:alu_scaffolding_standard').withChance(80.0),
        Item.of('emendatusenigmatica:aluminum_ingot').withChance(2.0),
            'emendatusenigmatica:aluminum_dust',
            'emendatusenigmatica:aluminum_nugget'
            ], 
			'emendatusenigmatica:aluminum_ingot', [
        event.recipes.createDeploying('kubejs:incomplete_aluminum_scaffolding', ['kubejs:incomplete_aluminum_scaffolding', 'emendatusenigmatica:aluminum_rod']),
        event.recipes.createDeploying('kubejs:incomplete_aluminum_scaffolding', ['kubejs:incomplete_aluminum_scaffolding', 'emendatusenigmatica:aluminum_rod']),
        event.recipes.createDeploying('kubejs:incomplete_aluminum_scaffolding', ['kubejs:incomplete_aluminum_scaffolding', 'emendatusenigmatica:aluminum_ingot'])
    ]).transitionalItem('kubejs:incomplete_aluminum_scaffolding').loops(3)

	
	//Steel Scaffolding
	event.remove({id: 'immersiveengineering:crafting/steel_scaffolding_standard'})
	
	event.recipes.createSequencedAssembly([
        Item.of('4x immersiveengineering:steel_scaffolding_standard').withChance(80.0),
        Item.of('emendatusenigmatica:steel_ingot').withChance(2.0),
            'emendatusenigmatica:steel_dust',
            'emendatusenigmatica:steel_nugget'
            ], 
			'emendatusenigmatica:steel_ingot', [
        event.recipes.createDeploying('kubejs:incomplete_steel_scaffolding', ['kubejs:incomplete_steel_scaffolding', 'emendatusenigmatica:steel_rod']),
        event.recipes.createDeploying('kubejs:incomplete_steel_scaffolding', ['kubejs:incomplete_steel_scaffolding', 'emendatusenigmatica:steel_rod']),
        event.recipes.createDeploying('kubejs:incomplete_steel_scaffolding', ['kubejs:incomplete_steel_scaffolding', 'emendatusenigmatica:steel_ingot'])
    ]).transitionalItem('kubejs:incomplete_steel_scaffolding').loops(3)

	
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

	//MV Capacitor
	event.shaped(item.of('immersiveengineering:capacitor_mv', 1), [
        'AAA',
        'BCB',
        'DED',
    ], {
        A: '#forge:plates/iron',
        B: '#forge:ingots/electrum',
        C: '#forge:ingots/lead',
	    D: '#forge:treated_wood',
		E: '#forge:storage_blocks/redstone',
    })
	
	//MV Relay
	event.shaped(item.of('immersiveengineering:connector_mv_relay', 8), [
        ' A ',
        'BAB',
        '   ',
    ], {
        A: '#forge:ingots/electrum',
        B: '#mekanism:colorable/terracotta',
    })
	
	//MV Connector
	event.shaped(item.of('immersiveengineering:connector_mv', 4), [
        ' A ',
        'BAB',
        'BAB',
    ], {
        A: '#forge:ingots/electrum',
        B: '#mekanism:colorable/terracotta',
    })
	
	//Furnace Heater
	event.shaped(item.of('immersiveengineering:furnace_heater', 1), [
        'ABA',
        'BCB',
        'ADA',
    ], {
        A: '#forge:plates/iron',
        B: '#forge:ingots/copper',
		C: 'immersiveengineering:coil_lv',
	    D: '#forge:dusts/redstone',
    })
	
	//Rockcutter Blade
	event.remove({id: 'immersiveengineering:crafting/rockcutter'})
	
	event.shaped(item.of('immersiveengineering:rockcutter', 1), [
        'ABA',
        'BCB',
        'ABA',
    ], {
        A: '#forge:gems/diamond',
        B: '#forge:plates/steel',
		C: '#forge:gears/diamond',
    })
	
	//Water Wheel
	event.remove({id: 'immersiveengineering:crafting/watermill'})
	
	event.shaped(item.of('immersiveengineering:watermill', 1), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: 'immersiveengineering:waterwheel_segment',
        B: '#forge:gears/steel',
    })
	
	//Windmill
	event.remove({id: 'immersiveengineering:crafting/windmill'})
	
	event.shaped(item.of('immersiveengineering:windmill', 1), [
        'AAA',
        'ABA',
        'AAA',
    ], {
        A: 'immersiveengineering:windmill_blade',
        B: '#forge:gears/iron',
		
    })
	
    //Engineer's Decor
    //Small Electrical Furnace
	event.remove({id: 'engineersdecor:independent/small_electrical_furnace_recipe'})
	
    event.shaped(item.of('engineersdecor:small_electrical_furnace', 1), [
        'ABA',
        'CDC',
        'AAA',
    ], {
        A: '#forge:plates/steel',
        B: 'immersiveengineering:connector_lv',
        C: 'create:electron_tube',
	    D: 'minecraft:blast_furnace',
    })
	
	//Asphalt
	event.remove({id: 'immersivepetroleum:asphalt'})
	
    event.shaped(item.of('immersivepetroleum:asphalt', 12), [
        'ABA',
        'BCB',
        'ABA',
    ], {
        A: '#forge:slag',
        B: '#forge:gems/bitumen',
        C: 'minecraft:water_bucket',
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
