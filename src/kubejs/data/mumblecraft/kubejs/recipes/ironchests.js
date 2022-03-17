// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying Iron Chests recipes')

events.listen('recipes', function (event) {

	//Diamond Chest
	event.remove({output: 'ironchest:diamond_chest'})
	event.remove({output: 'ironchest:gold_to_diamond_chest_upgrade'})
	
	//Add recipe for crafting
	 event.shaped(item.of('ironchest:diamond_chest', 1), [
		'AAA',
		'BCB',
		'AAA',
	], {
		A: '#forge:glass',
		B: '#forge:plates/diamond',
		C: 'ironchest:gold_chest',
	})
	
	event.shaped(item.of('ironchest:diamond_chest', 1), [
		'AAA',
		'ABA',
		'CCC',
	], {
		A: '#forge:glass',
		B: 'ironchest:silver_chest',
		C: '#forge:plates/diamond',
	})
	
	event.shaped(item.of('ironchest:gold_to_diamond_chest_upgrade', 1), [
		'AAA',
		'BCB',
		'AAA',
	], {
		A: '#forge:glass',
		B: '#forge:plates/diamond',
		C: '#forge:ingots/gold',
	})
	
	//Crystal Chest
	event.remove({output: 'ironchest:crystal_chest'})
	event.remove({output: 'ironchest:diamond_to_crystal_chest_upgrade'})
	
	//Add recipe for crafting
	 event.shaped(item.of('ironchest:crystal_chest', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: 'appliedenergistics2:quartz_vibrant_glass',
		B: 'ironchest:diamond_chest',
	})
	
	event.shaped(item.of('ironchest:diamond_to_crystal_chest_upgrade', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: 'appliedenergistics2:quartz_vibrant_glass',
		B: '#forge:obsidian',
	})
	
	//Obsidian Chest
	event.remove({output: 'ironchest:obsidian_chest'})
	event.remove({output: 'ironchest:diamond_to_obsidian_chest_upgrade'})
	
	//Add recipe for crafting
	 event.shaped(item.of('ironchest:obsidian_chest', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/refined_obsidian',
		B: 'ironchest:diamond_chest',
	})
	
	event.shaped(item.of('ironchest:diamond_to_obsidian_chest_upgrade', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/refined_obsidian',
		B: '#forge:glass',
	})
})