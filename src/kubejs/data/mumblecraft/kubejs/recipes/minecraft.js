// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying Minecraft recipes')

events.listen('recipes', function (event) {

	//Chest
    event.remove({id: 'minecraft:chest'})
	
    event.shaped(item.of('minecraft:chest', 1), [
        'AAA',
        'ABA',
        'AAA',
    ], {
        A: '#minecraft:planks',
        B: 'minecraft:iron_nugget',
    })

	//Noteblock
    event.remove({id: 'minecraft:note_block'})
	
    event.shaped(item.of('minecraft:note_block', 1), [
        'AAA',
        'ABA',
        'CCC',
    ], {
        A: '#minecraft:planks',
        B: 'minecraft:redstone',
        C: '#forge:ingots/brass'
    })

	//Torches
	//Add torches to campfire with a long  processing time
	event.recipes.minecraft.campfire_cooking({
		ingredient: '#forge:rods/wooden',
		result: 'minecraft:torch',
		cookingtime: 240
	})
	
	//event.recipes.minecraft.campfire_cooking('minecraft:torch', '#forge:rods/wooden')
	
	//Add Coke Torches
    event.shaped(item.of('minecraft:torch', 6), [
        'A',
        'B',
    ], {
        A: '#forge:coal_coke',
        B: '#forge:rods/wooden'
    })
	
	//Furnace
	//Make recipe for furnace harder
	event.remove({id: 'minecraft:furnace'})
	
    event.shaped(item.of('minecraft:furnace', 1), [
        'ABA',
        'AAA',
        'AAA',
    ], {
        A: 'minecraft:bricks',
		B: 'minecraft:cobblestone'
    })
	
	//Rails
	//Powered Rail
	event.remove({id: 'minecraft:powered_rail'})
	
    event.shaped(item.of('minecraft:powered_rail', 6), [
        'A A',
        'BEB',
		'CDC',
    ], {
        A: '#forge:rods/constantan',
        B: '#forge:rods/electrum',
        C: '#forge:plates/iron',
		D: '#forge:dusts/redstone',
		E: '#forge:rods/wooden',
    })
	
	//Rail
	event.remove({id: 'minecraft:rail'})
	event.remove({id: 'mekanism:rails'})
	
    event.shaped(item.of('minecraft:rail', 16), [
        'A A',
        'BCB',
		'A A',
    ], {
        A: '#forge:rods/iron',
        B: '#forge:plates/iron',
        C: '#forge:rods/wooden',
    })
	
	event.shaped(item.of('minecraft:rail', 24), [
        'A A',
        'BCB',
		'A A',
    ], {
        A: '#forge:rods/steel',
        B: '#forge:plates/steel',
        C: '#forge:rods/wooden',
    })
	
	//Detector Rail
	event.remove({id: 'minecraft:detector_rail'})
	
    event.shaped(item.of('minecraft:detector_rail', 6), [
        'D D',
        'ABA',
		'DCD',
    ], {
        A: '#forge:plates/steel',
        B: 'minecraft:stone_pressure_plate',
        C: '#forge:dusts/redstone',
		D: '#forge:rods/steel',
    })
	
	//Activator Rail
	event.remove({id: 'minecraft:activator_rail'})
	
    event.shaped(item.of('minecraft:activator_rail', 6), [
        'DCD',
        'ABA',
		'DCD',
    ], {
        A: '#forge:plates/steel',
        B: 'minecraft:redstone_torch',
        C: '#forge:rods/wooden',
		D: '#forge:rods/steel',
    })
	
	//Minecart
	event.remove({id: 'minecraft:minecart'})
	
    event.shaped(item.of('minecraft:minecart', 1), [
        '   ',
        'A A',
		'BBB',
    ], {
        A: '#forge:plates/iron',
        B: '#forge:ingots/iron',
    })
	
	//Bucket
	event.remove({id: 'minecraft:bucket'})
	
    event.shaped(item.of('minecraft:bucket', 1), [
        '   ',
        'A A',
		' A ',
    ], {
        A: '#forge:plates/iron',
    })
	
	//Cauldron
	event.remove({id: 'minecraft:cauldron'})
	
    event.shaped(item.of('minecraft:cauldron', 1), [
        'A A',
        'A A',
		'AAA',
    ], {
        A: '#forge:plates/steel',
    })
	
	//Weapons
	//Make bow craftable with plant string
	event.remove({id: 'minecraft:bow'})
	
    event.shaped(item.of('minecraft:bow', 1), [
        ' AB',
        'A B',
		' AB',
    ], {
		A: '#forge:rods/wooden',
        B: '#forge:string',
    })
	
})