// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying EE recipes')

events.listen('recipes', function (event) {

	//Gears
	var gearType = [
	    'emendatusenigmatica:copper_gear',
		'emendatusenigmatica:bronze_gear',
		'emendatusenigmatica:iron_gear',
		'emendatusenigmatica:brass_gear',
		'emendatusenigmatica:gold_gear',
		'emendatusenigmatica:diamond_gear',
		'emendatusenigmatica:steel_gear',
	]
	
	var ingot = [
	    '#forge:ingots/copper',
		'#forge:ingots/bronze',
		'#forge:ingots/iron',
		'#forge:ingots/brass',
		'#forge:ingots/gold',
		'#forge:gems/diamond',
		'#forge:ingots/steel',
	]
	
	var incompleteGear = [
	    'kubejs:incomplete_copper_gear',
		'kubejs:incomplete_bronze_gear',
		'kubejs:incomplete_iron_gear',
		'kubejs:incomplete_brass_gear',
		'kubejs:incomplete_gold_gear',
		'kubejs:incomplete_diamond_gear',
		'kubejs:incomplete_steel_gear'
	]
	
	var i = 0
	
	gearType.forEach(function (gear){
		//Remove gear
		event.remove({output: gear})
		
		//Add recipe for crafting
		event.recipes.createSequencedAssembly([
			Item.of(gear).withChance(80.0),
			Item.of(ingot[i]).withChance(2.0),
				'create:andesite_alloy',
				], 
				'create:andesite_alloy', [
			event.recipes.createDeploying(incompleteGear[i], [incompleteGear[i], ingot[i]]),
			event.recipes.createPressing(incompleteGear[i], incompleteGear[i]),
		]).transitionalItem(incompleteGear[i]).loops(4)
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
		'emendatusenigmatica:lapis_gear',
		'emendatusenigmatica:cobalt_gear',
		'emendatusenigmatica:signalum_gear',
		'emendatusenigmatica:sapphire_gear',
		'emendatusenigmatica:invar_gear',
		'emendatusenigmatica:iridium_gear',
		'emendatusenigmatica:enderium_gear',
		'emendatusenigmatica:lumium_gear',
		'emendatusenigmatica:ruby_gear',
		'emendatusenigmatica:peridot_gear',
	]
	
	gears.forEach(function (gear){
		event.remove({output: gear})
	})
	
	//Remove the following plates
	var plates = [
		'emendatusenigmatica:emerald_plate',
		'emendatusenigmatica:quartz_plate',
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
	
	//Remove cluster crafting
	event.remove({input: '#forge:clusters'})
	event.remove({output: '#forge:clusters'})
})