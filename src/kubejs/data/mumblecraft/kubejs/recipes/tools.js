// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying Tool recipes')

events.listen('recipes', function (event) {

	//Make tools use treated wood
	var ingots = [
		'#forge:ingots/iron',
		'#forge:ingots/gold',
		'#forge:gems/diamond',
		'#forge:gems/certus_quartz',
		'#forge:gems/quartz',
		'#forge:ingots/neptunium',
		'#forge:gems/lapis',
		'#forge:ingots/osmium',
		'#forge:ingots/refined_glowstone',
		'#forge:ingots/refined_obsidian',
	]
	
	var pickaxes = [
		'minecraft:iron_pickaxe',
		'minecraft:golden_pickaxe',
		'minecraft:diamond_pickaxe',
		'appliedenergistics2:certus_quartz_pickaxe',
		'appliedenergistics2:nether_quartz_pickaxe',
		'aquaculture:neptunium_pickaxe',
		'mekanismtools:lapis_lazuli_pickaxe',
		'mekanismtools:osmium_pickaxe',
		'mekanismtools:refined_glowstone_pickaxe',
		'mekanismtools:refined_obsidian_pickaxe',
	]
	
	var axes = [
		'minecraft:iron_axe',
		'minecraft:golden_axe',
		'minecraft:diamond_axe',
		'appliedenergistics2:certus_quartz_axe',
		'appliedenergistics2:nether_quartz_axe',
		'aquaculture:neptunium_axe',
		'mekanismtools:lapis_lazuli_axe',
		'mekanismtools:osmium_axe',
		'mekanismtools:refined_glowstone_axe',
		'mekanismtools:refined_obsidian_axe',
	]
	
	var shovels = [
		'minecraft:iron_shovel',
		'minecraft:golden_shovel',
		'minecraft:diamond_shovel',
		'appliedenergistics2:certus_quartz_shovel',
		'appliedenergistics2:nether_quartz_shovel',
		'aquaculture:neptunium_shovel',
		'mekanismtools:lapis_lazuli_shovel',
		'mekanismtools:osmium_shovel',
		'mekanismtools:refined_glowstone_shovel',
		'mekanismtools:refined_obsidian_shovel',
	]
	
	var hoes = [
		'minecraft:iron_hoe',
		'minecraft:golden_hoe',
		'minecraft:diamond_hoe',
		'appliedenergistics2:certus_quartz_hoe',
		'appliedenergistics2:nether_quartz_hoe',
		'aquaculture:neptunium_hoe',
		'mekanismtools:lapis_lazuli_hoe',
		'mekanismtools:osmium_hoe',
		'mekanismtools:refined_glowstone_hoe',
		'mekanismtools:refined_obsidian_hoe',
	]
	
	var swords = [
		'minecraft:iron_sword',
		'minecraft:golden_sword',
		'minecraft:diamond_sword',
		'appliedenergistics2:certus_quartz_sword',
		'appliedenergistics2:nether_quartz_sword',
		'aquaculture:neptunium_sword',
		'mekanismtools:lapis_lazuli_sword',
		'mekanismtools:osmium_sword',
		'mekanismtools:refined_glowstone_sword',
		'mekanismtools:refined_obsidian_sword',
	]
	
	var i = 0
	
	ingots.forEach(function (ingot){
		//Remove Pickaxe
		event.remove({output: pickaxes[i]})
		
		//Add Recipe for Crafting Pickaxe
		event.shaped(item.of(pickaxes[i], 1), [
			'AAA',
			' B ',
			' B ',
		], {
			A: ingot,
			B: '#forge:rods/treated_wood',
		})
		
		//Remove Axe
		event.remove({output: axes[i]})
		
		//Add Recipe for Crafting Axe
		event.shaped(item.of(axes[i], 1), [
			'AA ',
			'AB ',
			' B ',
		], {
			A: ingot,
			B: '#forge:rods/treated_wood',
		})
		
		//Remove Shovel
		event.remove({output: shovels[i]})
		
		//Add Recipe for Crafting Shovel
		event.shaped(item.of(shovels[i], 1), [
			' A ',
			' B ',
			' B ',
		], {
			A: ingot,
			B: '#forge:rods/treated_wood',
		})
		
		//Remove Hoes
		event.remove({output: hoes[i]})
		
		//Add Recipe for Crafting Hoes
		event.shaped(item.of(hoes[i], 1), [
			'AA ',
			' B ',
			' B ',
		], {
			A: ingot,
			B: '#forge:rods/treated_wood',
		})
		
		//Remove Swords
		event.remove({output: swords[i]})
		
		//Add Recipe for Crafting Swords
		event.shaped(item.of(swords[i], 1), [
			' A ',
			' A ',
			' B ',
		], {
			A: ingot,
			B: '#forge:rods/treated_wood',
		})
		
		i++
	})
})