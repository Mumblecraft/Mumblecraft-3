// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying Metal Barrels recipes')

events.listen('recipes', function (event) {

	//Copper Barrel
	event.remove({output: 'metalbarrels:copper_barrel'})
	event.remove({output: 'metalbarrels:wood_to_copper'})
	
	//Add recipe for crafting
	event.shaped(item.of('metalbarrels:copper_barrel', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/copper',
		B: 'minecraft:barrel',
	})

	event.shapeless('metalbarrels:wood_to_copper' , 'ironchest:wood_to_copper_chest_upgrade')
	
	//Iron Barrel
	event.remove({output: 'metalbarrels:iron_barrel'})
	event.remove({output: 'metalbarrels:wood_to_iron'})
	event.remove({output: 'metalbarrels:copper_to_iron'})
	
	//Add recipe for crafting
	event.shaped(item.of('metalbarrels:iron_barrel', 1), [
		'AAA',
		'ABA',
		'AAA',
	], { 
		A: 'minecraft:iron_ingot',
		B: 'minecraft:barrel',
	})
	
	event.shaped(item.of('metalbarrels:iron_barrel', 1), [
		'ABA',
		'BCB',
		'ABA',
	], {
		A: 'minecraft:iron_ingot',
		B: '#forge:glass',
		C: 'metalbarrels:copper_barrel',
	})
	
	event.shapeless('metalbarrels:wood_to_iron' , 'ironchest:wood_to_iron_chest_upgrade')
	event.shapeless('metalbarrels:copper_to_iron' , 'ironchest:copper_to_iron_chest_upgrade')
	
	//Silver Barrel
	event.remove({output: 'metalbarrels:silver_barrel'})
	event.remove({output: 'metalbarrels:copper_to_silver'})
	event.remove({output: 'metalbarrels:iron_to_silver'})
	event.remove({id: 'metalbarrels:upgrades/nested/wood_to_silver_upgrade'})
	
	//Add recipe for crafting
	event.shaped(item.of('metalbarrels:silver_barrel', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/silver',
		B: 'metalbarrels:copper_barrel',
	})
	
	event.shaped(item.of('metalbarrels:silver_barrel', 1), [
		'ABA',
		'ACA',
		'ABA',
	], {
		A: '#forge:ingots/silver',
		B: '#forge:glass',
		C: 'metalbarrels:iron_barrel',
	})
	
	event.shaped(item.of('metalbarrels:wood_to_silver', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/silver',
		B: 'metalbarrels:wood_to_iron',
	})
		
	event.shaped(item.of('metalbarrels:iron_to_silver', 1), [
		'ABA',
		'ACA',
		'ABA',
	], {
		A: '#forge:ingots/silver',
		B: '#forge:glass',
		C: 'minecraft:iron_ingot',
	})

	event.shapeless('metalbarrels:copper_to_silver' , 'ironchest:copper_to_silver_chest_upgrade')
	
	//Gold Barrel
	event.remove({output: 'metalbarrels:gold_barrel'})
	event.remove({output: 'metalbarrels:copper_to_gold'})
	event.remove({output: 'metalbarrels:iron_to_gold'})
	event.remove({output: 'metalbarrels:silver_to_gold'})
	event.remove({id: 'metalbarrels:upgrades/nested/wood_to_gold_upgrade'})
	
	//Add recipe for crafting
	event.shaped(item.of('metalbarrels:gold_barrel', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/gold',
		B: 'metalbarrels:iron_barrel',
	})
	
	event.shaped(item.of('metalbarrels:gold_barrel', 1), [
		'ABA',
		'ACA',
		'ABA',
	], {
		A: '#forge:ingots/gold',
		B: '#forge:glass',
		C: 'metalbarrels:silver_barrel',
	})
	
	event.shaped(item.of('metalbarrels:wood_to_gold', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/gold',
		B: 'metalbarrels:wood_to_silver',
	})
	
	event.shaped(item.of('metalbarrels:copper_to_gold', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/gold',
		B: 'metalbarrels:copper_to_iron',
	})
	
	event.shaped(item.of('metalbarrels:copper_to_gold', 1), [
		'ABA',
		'ACA',
		'ABA',
	], {
		A: '#forge:ingots/gold',
		B: '#forge:glass',
		C: 'metalbarrels:copper_to_silver',
	})
	
	event.shapeless('metalbarrels:iron_to_gold' , 'ironchest:iron_to_gold_chest_upgrade')
	event.shapeless('metalbarrels:silver_to_gold' , 'ironchest:silver_to_gold_chest_upgrade')

	//Diamond Barrel
	event.remove({output: 'metalbarrels:diamond_barrel'})
	event.remove({output: 'metalbarrels:copper_to_diamond'})
	event.remove({output: 'metalbarrels:silver_to_diamond'})
	event.remove({output: 'metalbarrels:gold_to_diamond'})
	event.remove({id: 'metalbarrels:upgrades/nested/iron_to_diamond_upgrade'})
	event.remove({id: 'metalbarrels:upgrades/nested/wood_to_diamond_upgrade'})
	
	//Add recipe for crafting
	 event.shaped(item.of('metalbarrels:diamond_barrel', 1), [
		'AAA',
		'BCB',
		'AAA',
	], {
		A: '#forge:glass',
		B: 'minecraft:diamond',
		C: 'metalbarrels:gold_barrel',
	})
	
	event.shaped(item.of('metalbarrels:diamond_barrel', 1), [
		'AAA',
		'ABA',
		'CCC',
	], {
		A: '#forge:glass',
		B: 'metalbarrels:silver_barrel',
		C: 'minecraft:diamond',
	})
	
	event.shaped(item.of('metalbarrels:wood_to_diamond', 1), [
		'AAA',
		'BCB',
		'AAA',
	], {
		A: '#forge:glass',
		B: 'minecraft:diamond',
		C: 'metalbarrels:wood_to_gold',
	})
	
	event.shaped(item.of('metalbarrels:copper_to_diamond', 1), [
		'AAA',
		'ABA',
		'CCC',
	], {
		A: '#forge:glass',
		B: 'metalbarrels:copper_to_silver',
		C: 'minecraft:diamond',
	})
	
	event.shaped(item.of('metalbarrels:silver_to_diamond', 1), [
		'AAA',
		'ABA',
		'CCC',
	], {
		A: '#forge:glass',
		B: '#forge:ingots/silver',
		C: 'minecraft:diamond',
	})
	
	event.shaped(item.of('metalbarrels:gold_to_diamond', 1), [
		'AAA',
		'BCB',
		'AAA',
	], {
		A: '#forge:glass',
		B: 'minecraft:diamond',
		C: '#forge:ingots/gold',
	})

	//Crystal Barrel
	event.remove({output: 'metalbarrels:crystal_barrel'})
	event.remove({output: 'metalbarrels:wood_to_crystal'})
	event.remove({output: 'metalbarrels:copper_to_crystal'})
	event.remove({output: 'metalbarrels:iron_to_crystal'})
	event.remove({output: 'metalbarrels:silver_to_crystal'})
	event.remove({output: 'metalbarrels:gold_to_crystal'})
	event.remove({output: 'metalbarrels:diamond_to_crystal'})
	
	//Add recipe for crafting
	 event.shaped(item.of('metalbarrels:crystal_barrel', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: 'appliedenergistics2:quartz_vibrant_glass',
		B: 'metalbarrels:diamond_barrel',
	})
	
	event.shaped(item.of('metalbarrels:wood_to_crystal', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: 'appliedenergistics2:quartz_vibrant_glass',
		B: 'metalbarrels:wood_to_diamond',
	})
	
	event.shaped(item.of('metalbarrels:copper_to_crystal', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: 'appliedenergistics2:quartz_vibrant_glass',
		B: 'metalbarrels:copper_to_diamond',
	})
	event.shaped(item.of('metalbarrels:iron_to_crystal', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: 'appliedenergistics2:quartz_vibrant_glass',
		B: 'metalbarrels:iron_to_diamond',
	})
	event.shaped(item.of('metalbarrels:silver_to_crystal', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: 'appliedenergistics2:quartz_vibrant_glass',
		B: 'metalbarrels:silver_to_diamond',
	})
	event.shaped(item.of('metalbarrels:gold_to_crystal', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: 'appliedenergistics2:quartz_vibrant_glass',
		B: 'metalbarrels:gold_to_diamond',
	})
	event.shaped(item.of('metalbarrels:diamond_to_crystal', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: 'appliedenergistics2:quartz_vibrant_glass',
		B: '#forge:glass_panes',
	})
	
	//Obsidian Barrel
	event.remove({output: 'metalbarrels:obsidian_barrel'})
	event.remove({id: 'metalbarrels:upgrades/nested/wood_to_obsidian_upgrade'})
	event.remove({id: 'metalbarrels:upgrades/nested/copper_to_obsidian_upgrade'})
	event.remove({id: 'metalbarrels:upgrades/nested/iron_to_obsidian_upgrade'})
	event.remove({id: 'metalbarrels:upgrades/nested/silver_to_obsidian_upgrade'})
	event.remove({id: 'metalbarrels:upgrades/nested/gold_to_obsidian_upgrade'})
	event.remove({id: 'metalbarrels:upgrades/nested/diamond_to_obsidian_upgrade'})
	
	//Add recipe for crafting
	 event.shaped(item.of('metalbarrels:obsidian_barrel', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/refined_obsidian',
		B: 'metalbarrels:diamond_barrel',
	})
	
	event.shaped(item.of('metalbarrels:wood_to_obsidian', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/refined_obsidian',
		B: 'metalbarrels:wood_to_diamond',
	})
	
		event.shaped(item.of('metalbarrels:copper_to_obsidian', 1), [
		'AAA',
		'ABA',	
		'AAA',
	], {
		A: '#forge:ingots/refined_obsidian',
		B: 'metalbarrels:copper_to_diamond',
	})
		event.shaped(item.of('metalbarrels:iron_to_obsidian', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/refined_obsidian',
		B: 'metalbarrels:iron_to_diamond',
	})
		event.shaped(item.of('metalbarrels:silver_to_obsidian', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/refined_obsidian',
		B: 'metalbarrels:silver_to_diamond',
	})
		event.shaped(item.of('metalbarrels:gold_to_obsidian', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/refined_obsidian',
		B: 'metalbarrels:gold_to_diamond',
	})
		event.shaped(item.of('metalbarrels:diamond_to_obsidian', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/refined_obsidian',
		B: '#forge:glass_panes',
	})
})
