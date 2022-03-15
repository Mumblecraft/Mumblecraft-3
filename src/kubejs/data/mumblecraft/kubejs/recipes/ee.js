// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying EE recipes')

events.listen('recipes', function (event) {

	//Gears
	var gearType = [
		'emendatusenigmatica:bronze_gear',
		'emendatusenigmatica:iron_gear',
		'emendatusenigmatica:gold_gear',
		'emendatusenigmatica:diamond_gear',
		'emendatusenigmatica:steel_gear',
	]
	
	var previousGearType = [
		'#appliedenergistics2:gears/wooden',
		'emendatusenigmatica:bronze_gear',
		'emendatusenigmatica:iron_gear',
		'emendatusenigmatica:gold_gear',
		'emendatusenigmatica:diamond_gear',
	]
	
	var ingot = [
		'#forge:ingots/bronze',
		'#forge:ingots/iron',
		'#forge:ingots/gold',
		'#forge:gems/diamond',
		'#forge:ingots/steel',
	]
	
	var i = 0
	
	gearType.forEach(function (gear){
		//Remove Gear
		event.remove({output: gear})
		
		//Add recipe for crafting
		 event.shaped(item.of(gear, 1), [
			' B ',
			'BAB',
			' B ',
		], {
			A: previousGearType[i],
			B: ingot[i],
		})
		
		//Add recipe for metal press
		//Add plates and rods to Immersive Engineering Press
		event.recipes.immersiveengineeringMetalPress(gear, '4x ' + ingot[i], 'immersiveengineering:mold_gear')
		
		i++
	})
	
	//Remove
	//Remove the following plates
	var gears = [
		'emendatusenigmatica:emerald_gear',
		'emendatusenigmatica:quartz_gear',
		'emendatusenigmatica:copper_gear',
		'emendatusenigmatica:aluminum_gear',
		'emendatusenigmatica:silver_gear',
		'emendatusenigmatica:lead_gear',
		'emendatusenigmatica:nickel_gear',
		'emendatusenigmatica:uranium_gear',
		'emendatusenigmatica:osmium_gear',
		'emendatusenigmatica:tin_gear',
		'emendatusenigmatica:zinc_gear',
		'emendatusenigmatica:brass_gear',
		'emendatusenigmatica:constantan_gear',
		'emendatusenigmatica:electrum_gear',
		'emendatusenigmatica:cast_iron_gear',
	]
	
	gears.forEach(function (gear){
		event.remove({output: gear})
	})
	
	//Remove the following plates
	var plates = [
		'emendatusenigmatica:emerald_plate',
		'emendatusenigmatica:quartz_plate',
		'emendatusenigmatica:aluminum_plate',
		'emendatusenigmatica:silver_plate',
		'emendatusenigmatica:lead_plate',
		'emendatusenigmatica:osmium_plate',
		'emendatusenigmatica:constantan_plate',
		'emendatusenigmatica:electrum_plate',
		'emendatusenigmatica:cast_iron_plate',
	]
	
	plates.forEach(function (plate){
		event.remove({output: plate})
	})
	
	//Remove the following rods
	var rods = [
		'emendatusenigmatica:emerald_rod',
		'emendatusenigmatica:quartz_rod',
		'emendatusenigmatica:aluminum_rod',
		'emendatusenigmatica:osmium_rod',
		'emendatusenigmatica:constantan_rod',
		'emendatusenigmatica:electrum_rod',
		'emendatusenigmatica:cast_iron_rod',
	]
	
	rods.forEach(function (rod){
		event.remove({output: rod})
	})
})