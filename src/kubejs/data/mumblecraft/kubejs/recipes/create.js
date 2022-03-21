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
		C: '#minecraft:planks',
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
		A: '#forge:gears/bronze',
		B: 'create:andesite_alloy',
		C: '#minecraft:planks',
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
		D: 'emendatusenigmatica:iron_plate',
		E: 'emendatusenigmatica:steel_gear',
	})
	
	//Nozzle
	event.remove({id: 'create:crafting/kinetics/nozzle'})
	
	event.shaped(item.of('create:nozzle', 1), [
		' A ',
		' B ',
		'CCC',
	], {
		A: 'emendatusenigmatica:iron_rod',
		B: '#minecraft:wool',
		C: 'emendatusenigmatica:iron_plate',
	})
	
	//Basin
	event.remove({id: 'create:crafting/kinetics/basin'})
	
	event.shaped(item.of('create:basin', 1), [
		'   ',
		'A A',
		'BBB',
	], {
		A: 'create:andesite_alloy',
		B: 'emendatusenigmatica:iron_plate',
	})
	
	//Mechanical Saw
	event.remove({id: 'create:crafting/kinetics/mechanical_saw'})
	
	event.shaped(item.of('create:mechanical_saw', 1), [
		' A ',
		'ABA',
		' C ',
	], {
		A: 'emendatusenigmatica:steel_plate',
		B: 'emendatusenigmatica:steel_gear',
		C: 'create:andesite_casing',
	})
	
	//Mechanical Harvester
	event.remove({id: 'create:crafting/kinetics/mechanical_harvester'})
	
	event.shaped(item.of('create:mechanical_harvester', 1), [
		'ABA',
		'CEC',
		' D ',
	], {
		A: 'emendatusenigmatica:steel_gear',
		B: 'emendatusenigmatica:steel_rod',
		C: 'emendatusenigmatica:steel_plate',
		D: 'create:andesite_casing',
		E: 'emendatusenigmatica:iron_plate',
	})
	
	//Windmill Bearing
	event.remove({id: 'create:crafting/kinetics/windmill_bearing'})
	
	event.shaped(item.of('create:windmill_bearing', 1), [
		' A ',
		'BCB',
		' D ',
	], {
		A: 'create:turntable',
		B: '#forge:stone',
		C: 'emendatusenigmatica:bronze_gear',
		D: 'create:shaft',
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
        A: 'emendatusenigmatica:bronze_plate',
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
})