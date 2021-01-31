// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: modifying recipes')

events.listen('recipes', function (event) {

    //Machines/Components

    //Coke Brick
    event.remove({id: 'immersiveengineering:crafting/cokebrick'})

    event.shaped(item.of('immersiveengineering:cokebrick', 3), [
        'ABA',
        'BCB',
        'ABA',
    ], {
        A: 'minecraft:clay_ball',
        B: 'minecraft:brick',
        C: 'minecraft:basalt',
    })

    //Kiln Brick
    event.remove({id: 'immersiveengineering:crafting/alloybrick'})

    event.shaped(item.of('immersiveengineering:alloybrick', 2), [
        'ABA',
        'BCB',
        'ABA',
    ], {
        A: '#forge:sandstone',
        B: 'minecraft:brick',
        C: 'minecraft:netherite_ingot',
    })

    //Blast brick
    event.remove({id: 'immersiveengineering:crafting/blastbrick'})

    event.recipes.create.mechanical_crafting(item.of('immersiveengineering:blastbrick', 3), [
	'  A  ',
	' BCB ',
	'ACDCA',
	' BCB ',
	'  A  ',
    ], {
	    A:'minecraft:nether_brick',
	    B:'minecraft:brick',
	    C:'minecraft:magma_block',
	    D:'minecraft:netherite_ingot'
    })

    //Redstone Engineering Block
    event.remove({id: 'immersiveengineering:crafting/rs_engineering'})
	
    event.recipes.create.mechanical_crafting(item.of('immersiveengineering:rs_engineering', 4), [
        '  A  ',
        ' BCB ',
        'ACDCA',
		' BCB ',
		'  A  ',
    ], {
        A: '#forge:ingots/constantan',
        B: 'immersiveengineering:sheetmetal_iron',
        C: 'minecraft:redstone',
		D: '#forge:ingots/copper',
    })

    //Light Engineering Block
    event.remove({id: 'immersiveengineering:light_engineering'})
	
    event.recipes.create.mechanical_crafting(item.of('immersiveengineering:light_engineering', 4), [
        '  A  ',
        ' BCB ',
        'ACDCA',
		' BCB ',
		'  A  ',
    ], {
        A: 'create:brass_ingot',
        B: 'immersiveengineering:sheetmetal_iron',
        C: 'immersiveengineering:component_iron',
		D: '#forge:ingots/copper',
    })

    //Heavy Engineering Block
    event.remove({id: 'immersiveengineering:crafting/heavy_engineering'})
	
    event.recipes.create.mechanical_crafting(item.of('immersiveengineering:heavy_engineering', 4), [
        '  A  ',
        ' BCB ',
        'ACDCA',
		' BCB ',
		'  A  ',
    ], {
        A: '#forge:ingots/bronze',
        B: 'immersiveengineering:sheetmetal_steel',
        C: 'immersiveengineering:component_steel',
		D: '#forge:ingots/electrum',
    })

    //Conveyor
    event.remove({id: 'immersiveengineering:crafting/conveyor_basic'})
	
    event.shaped(item.of('immersiveengineering:conveyor_basic', 1), [
        '   ',
        'AAA',
        'BCB',
    ], {
        A: 'minecraft:leather',
        B: 'create:brass_ingot',
        C: 'minecraft:redstone',
    })

    //Engineer's Decor
    //Small Electrical Furnace
    event.shaped(item.of('engineersdecor:small_electrical_furnace', 1), [
        'ABA',
        'CDC',
        'AAA',
    ], {
        A: '#forge:plates/iron',
        B: 'immersiveengineering:connector_lv',
        C: 'create:electron_tube',
		D: 'minecraft:furnace',
    })

    //Processing
    //Redstone Alloy
	event.recipes.immersiveengineering.arc_furnace(['kubejs:redstone_alloy'],
	'#forge:ingots/iron',
	[
	'#forge:dusts/redstone',
	'#forge:dusts/coal_coke'
	]).time(400).energy(204800)
})