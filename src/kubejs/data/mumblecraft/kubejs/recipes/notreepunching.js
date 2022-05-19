// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying No Tree Punching recipes')

events.listen('recipes', function (event) {
    
    //Saw recipes
    
	//Remove default recipes
	var idRemove =[
	
	//Minecraft
	'minecraft:warped_planks',
	'minecraft:crimson_planks',
	
	//No Tree Punching
	'immersiveengineering:crafting/stick_treated',
	'biomesoplenty:fir_planks',
	'biomesoplenty:redwood_planks',
	'biomesoplenty:cherry_planks',
	'biomesoplenty:mahogany_planks',
	'biomesoplenty:jacaranda_planks',
	'biomesoplenty:palm_planks',
	'biomesoplenty:willow_planks',
	'biomesoplenty:dead_planks',
	'biomesoplenty:magic_planks',
	'biomesoplenty:umbran_planks',
	'biomesoplenty:hellbark_planks',
	
	]
	
	idRemove.forEach(function (remove) {
		event.remove({id: remove})
	})

	//Saws
	//Iron
	event.remove({id: 'notreepunching:iron_saw'})
	
	//Add recipe for crafting
	 event.shaped(item.of('notreepunching:iron_saw', 1), [
		'  A',
		' AB',
		'AB ',
	], {
		A: '#forge:rods/wooden',
		B: '#forge:plates/iron',
	})
	
	//Gold
	event.remove({id: 'notreepunching:gold_saw'})
	
	//Add recipe for crafting
	 event.shaped(item.of('notreepunching:gold_saw', 1), [
		'  A',
		' AB',
		'AB ',
	], {
		A: '#forge:rods/wooden',
		B: '#forge:plates/gold',
	})
	
	//Diamond
	event.remove({id: 'notreepunching:diamond_saw'})
	
	//Add recipe for crafting
	 event.shaped(item.of('notreepunching:diamond_saw', 1), [
		'  A',
		' AB',
		'AB ',
	], {
		A: '#forge:rods/wooden',
		B: '#forge:plates/diamond',
	})
})