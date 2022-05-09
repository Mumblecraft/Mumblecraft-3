// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying Create recipes')

events.listen('recipes', function (event) {
	//Large Cogwheel
	event.remove({id: 'create:crafting/kinetics/large_cogwheel'})
	
	 event.shaped(item.of('create:large_cogwheel', 1), [
		'CBC',
		'BAB',
		'CBC',
	], {
		A: 'create:andesite_alloy',
		B: '#appliedenergistics2:gears/wooden',
		C: '#minecraft:buttons',
	})
	
	//Water Wheel
	event.remove({id: 'create:crafting/kinetics/water_wheel'})
	
	event.shaped(item.of('create:water_wheel', 1), [
		'CBC',
		'CAC',
		'CBC',
	], {
		A: '#forge:gears/bronze',
		B: 'create:large_cogwheel',
		C: '#minecraft:wooden_slabs',
	})
	
	//Andesite Casing
	event.remove({id: 'create:crafting/materials/andesite_casing'})
	
	event.shaped(item.of('create:andesite_casing', 1), [
		'CCC',
		'BAB',
		'CCC',
	], {
		A: 'appliedenergistics2:wooden_gear',
		B: 'create:andesite_alloy',
		C: '#minecraft:planks',
	})
	
	//Brass Casing
	event.remove({id: 'create:crafting/materials/brass_casing'})
	
	event.shaped(item.of('create:brass_casing', 1), [
		'CCC',
		'BAB',
		'CCC',
	], {
		A: '#forge:gears/brass',
		B: '#forge:plates/brass',
		C: '#forge:planks',
	})
	
	//Copper Casing
		event.remove({id: 'create:crafting/materials/copper_casing'})
	
	event.shaped(item.of('create:copper_casing', 1), [
		'CCC',
		'BAB',
		'CCC',
	], {
		A: '#forge:gears/copper',
		B: '#forge:plates/copper',
		C: '#forge:planks',
	})
	
	//Schematicannon
	event.remove({id: 'create:crafting/schematics/schematicannon'})
	
	event.shaped(item.of('create:schematicannon', 1), [
		' A ',
		'BCB',
		'DED',
	], {
		A: 'minecraft:cauldron',
		B: '#minecraft:logs',
		C: 'minecraft:dispenser',
		D: '#forge:plates/iron',
		E: '#forge:gears/steel',
	})
	
	//Nozzle
	event.remove({id: 'create:crafting/kinetics/nozzle'})
	
	event.shaped(item.of('create:nozzle', 1), [
		' A ',
		' B ',
		'CCC',
	], {
		A: '#forge:rods/iron',
		B: '#minecraft:wool',
		C: '#forge:plates/iron',
	})
	
	//Basin
	event.remove({id: 'create:crafting/kinetics/basin'})
	
	event.shaped(item.of('create:basin', 1), [
		'   ',
		'A A',
		'BBB',
	], {
		A: 'create:andesite_alloy',
		B: '#forge:plates/iron',
	})
	
	//Mechanical Saw
	event.remove({id: 'create:crafting/kinetics/mechanical_saw'})
	
	event.shaped(item.of('create:mechanical_saw', 1), [
		' A ',
		'ABA',
		' C ',
	], {
		A: '#forge:plates/steel',
		B: '#forge:gears/steel',
		C: 'create:andesite_casing',
	})
	
	//Mechanical Harvester
	event.remove({id: 'create:crafting/kinetics/mechanical_harvester'})
	
	event.shaped(item.of('create:mechanical_harvester', 1), [
		'ABA',
		'CEC',
		' D ',
	], {
		A: '#forge:gears/steel',
		B: '#forge:rods/steel',
		C: '#forge:plates/steel',
		D: 'create:andesite_casing',
		E: '#forge:plates/iron',
	})
	
	//Windmill Bearing
	event.remove({id: 'create:crafting/kinetics/windmill_bearing'})
	
	event.shaped(item.of('create:windmill_bearing', 1), [
		'CAC',
		'BEB',
		'CDC',
	], {
		A: 'create:turntable',
		B: '#forge:stone',
		C: '#forge:plates/bronze',
		D: 'create:shaft',
		E: 'create:andesite_casing',
	})
	
	//Add Alternative bronze recipe for Mechanical Press
    event.shaped(item.of('create:mechanical_press', 1), [
        ' A ',
        'BCB',
        ' D ',
    ], {
        A: 'create:andesite_alloy',
        B: 'create:cogwheel',
		C: 'create:andesite_casing',
		D: '#forge:storage_blocks/bronze'
    })

	//Add Alternative bronze recipe for propeller
	event.shaped(item.of('create:propeller', 1), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: '#forge:plates/bronze',
        B: 'create:andesite_alloy',
    })
	
	//Controller Rail
	event.remove({id: 'create:crafting/kinetics/controller_rail'})
	
	event.shaped(item.of('create:controller_rail', 6), [
		'A A',
		'ABA',
		'ACA',
	], {
		A: '#forge:rods/gold',
		B: '#forge:rods/wooden',
		C: 'create:electron_tube',
	})
	
	//Coal Coke Blend
	event.recipes.createMixing('kubejs:coke_brick_blend', [
        '#forge:sand',
        '#forge:sand',
        'minecraft:clay_ball',
        'minecraft:clay_ball',
    ]).heated()
	
	//Washing
	//Reduce Crushed Ores>Nuggets output
	event.remove({type: 'create:splashing', input: '#create:crushed_ores'})
	
	var crushedInput = [
		'create:crushed_iron_ore',
		'create:crushed_gold_ore',
		'create:crushed_copper_ore',
		'create:crushed_zinc_ore',
		'create:crushed_brass',
		'create:crushed_osmium_ore',
		'create:crushed_silver_ore',
		'create:crushed_tin_ore',
		'create:crushed_lead_ore',
		'create:crushed_aluminum_ore',
		'create:crushed_uranium_ore',
		'create:crushed_nickel_ore',
		
	]
	var nuggetsOutput = [
		'minecraft:iron_nugget',
		'minecraft:gold_nugget',
		'emendatusenigmatica:copper_nugget',
		'emendatusenigmatica:zinc_nugget',
		'emendatusenigmatica:brass_nugget',
		'emendatusenigmatica:osmium_nugget',
		'emendatusenigmatica:silver_nugget',
		'emendatusenigmatica:tin_nugget',
		'emendatusenigmatica:lead_nugget',
		'emendatusenigmatica:aluminum_nugget',
		'emendatusenigmatica:uranium_nugget',
		'emendatusenigmatica:nickel_nugget',	
		
	]
	var i = 0
    nuggetsOutput.forEach(function (output) {
        event.recipes.createSplashing([
         Item.of(output, 7),
         Item.of(output, 4).withChance(0.5)
	],   
	     crushedInput[i]
    )
        i++
    })

})