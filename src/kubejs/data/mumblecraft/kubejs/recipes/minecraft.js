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
	
	//Blast Furnace
	//Make blast furnace require bronze
	event.remove({id: 'minecraft:blast_furnace'})
	
    event.shaped(item.of('minecraft:blast_furnace', 1), [
        'AAA',
        'BCB',
        'DDD',
    ], {
        A: '#forge:ingots/iron',
		B: '#forge:ingots/bronze',
		C: 'minecraft:furnace',
		D: 'minecraft:smooth_stone'
    })
})