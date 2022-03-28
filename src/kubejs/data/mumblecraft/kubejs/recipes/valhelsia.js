// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying Valhelsia recipes')

events.listen('recipes', function (event) {
		
	//Oak Post
	event.shaped(item.of('valhelsia_structures:oak_post', 1), [
		' A ',
		' A ',
		'   ',
	], {
		A: 'minecraft:oak_log',
	})
	
	//Spruce Post
	event.shaped(item.of('valhelsia_structures:spruce_post', 1), [
		' A ',
		' A ',
		'   ',
	], {
		A: 'minecraft:spruce_log',
	})
	
	//Birch Post
	event.shaped(item.of('valhelsia_structures:birch_post', 1), [
		' A ',
		' A ',
		'   ',
	], {
		A: 'minecraft:birch_log',
	})
	
	//Jungle Post
	event.shaped(item.of('valhelsia_structures:jungle_post', 1), [
		' A ',
		' A ',
		'   ',
	], {
		A: 'minecraft:jungle_log',
	})
	
	//Acacia Post
	event.shaped(item.of('valhelsia_structures:acacia_post', 1), [
		' A ',
		' A ',
		'   ',
	], {
		A: 'minecraft:acacia_log',
	})
	
	//Dark Oak Post
	event.shaped(item.of('valhelsia_structures:dark_oak_post', 1), [
		' A ',
		' A ',
		'   ',
	], {
		A: 'minecraft:dark_oak_log',
	})
	
	//Warped Post
	event.shaped(item.of('valhelsia_structures:warped_post', 1), [
		' A ',
		' A ',
		'   ',
	], {
		A: 'minecraft:warped_stem',
	})
	
	//Crimson Post
	event.shaped(item.of('valhelsia_structures:crimson_post', 1), [
		' A ',
		' A ',
		'   ',
	], {
		A: 'minecraft:crimson_stem',
	})
	
	//Cut Oak Post
	event.shaped(item.of('valhelsia_structures:cut_oak_post', 4), [
		' A ',
		'   ',
		' A ',
	], {
		A: 'minecraft:oak_log',
	})
	
	//Cut Spruce Post
	event.shaped(item.of('valhelsia_structures:cut_spruce_post', 4), [
		' A ',
		'   ',
		' A ',
	], {
		A: 'minecraft:spruce_log',
	})
	
	//Cut Birch Post
	event.shaped(item.of('valhelsia_structures:cut_birch_post', 4), [
		' A ',
		'   ',
		' A ',
	], {
		A: 'minecraft:birch_log',
	})
	
	//Cut Jungle Post
	event.shaped(item.of('valhelsia_structures:cut_jungle_post', 4), [
		' A ',
		'   ',
		' A ',
	], {
		A: 'minecraft:jungle_log',
	})
	
	//Cut Acacia Post
	event.shaped(item.of('valhelsia_structures:cut_acacia_post', 4), [
		' A ',
		'   ',
		' A ',
	], {
		A: 'minecraft:acacia_log',
	})
	
	//Cut Dark Oak Post
	event.shaped(item.of('valhelsia_structures:cut_dark_oak_post', 4), [
		' A ',
		'   ',
		' A ',
	], {
		A: 'minecraft:dark_oak_log',
	})
	
	//Cut Warped Post
	event.shaped(item.of('valhelsia_structures:cut_warped_post', 4), [
		' A ',
		'   ',
		' A ',
	], {
		A: 'minecraft:warped_stem',
	})
	
	//Cut Crimson Post
	event.shaped(item.of('valhelsia_structures:cut_crimson_post', 4), [
		' A ',
		'   ',
		' A ',
	], {
		A: 'minecraft:crimson_stem',
	})
	
	//Dungeon Door
	event.shaped(item.of('valhelsia_structures:dungeon_door', 1), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: '#forge:ingots/iron',
		B: '#minecraft:logs'
	})
})