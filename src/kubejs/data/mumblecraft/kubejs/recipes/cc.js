// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying Computer Craft recipes')

events.listen('recipes', function (event) {
	//Normal Computer
	event.remove({id: 'computercraft:computer_normal'})
	
	 event.shaped(item.of('computercraft:computer_normal', 1), [
		'AAA',
		'ABA',
		'CDC',
	], {
		A: '#forge:stone',
		B: 'appliedenergistics2:printed_logic_processor',
		C: 'minecraft:smooth_stone',
		D: '#forge:plates/gold',
	})
	
	//Advanced Computer
	event.remove({id: 'computercraft:computer_advanced'})
	
	 event.shaped(item.of('computercraft:computer_advanced', 1), [
		'AAA',
		'ABA',
		'A A',
	], {
		A: '#forge:plates/gold',
		B: 'computercraft:computer_normal',
	})
	
	//Pocket Computer
	event.remove({id: 'computercraft:pocket_computer_normal'})
	
	 event.shaped(item.of('computercraft:pocket_computer_normal', 1), [
		'AAA',
		'ABA',
		'ACA',
	], {
		A: '#forge:stone',
		B: 'appliedenergistics2:printed_logic_processor',
		C: '#forge:plates/gold',
	})
	
	//Advanced Pocket Computer
	event.remove({id: 'computercraft:pocket_computer_advanced'})
	
	 event.shaped(item.of('computercraft:pocket_computer_advanced', 1), [
		'AAA',
		'ABA',
		'A A',
	], {
		A: '#forge:plates/gold',
		B: 'computercraft:pocket_computer_normal',
	})
	
	//Turtle
	event.remove({id: 'computercraft:turtle_normal'})
	
	 event.shaped(item.of('computercraft:turtle_normal', 1), [
		'AAA',
		'ABA',
		'ACA',
	], {
		A: '#forge:plates/iron',
		B: 'computercraft:computer_normal',
		C: 'ironchest:iron_chest',
	})
})