// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: modifying recipes')

events.listen('recipes', function (event) {

    //Plates

    var pressingInput = [
	'#forge:ingots/aluminum',
	'#forge:ingots/lead',
	'#forge:ingots/silver',
	'#forge:ingots/nickel',
	'#forge:ingots/uranium',
	'#forge:ingots/constantan',
	'#forge:ingots/electrum',
	'#forge:ingots/steel',
    ]

    var pressingOutput = [
	'immersiveengineering:plate_aluminum',
	'immersiveengineering:plate_lead',
	'immersiveengineering:plate_silver',
	'immersiveengineering:plate_nickel',
	'immersiveengineering:plate_uranium',
	'immersiveengineering:plate_constantan',
	'immersiveengineering:plate_electrum',
	'immersiveengineering:plate_steel',
    ]

    var i = 0
    pressingOutput.forEach(function (output) {
        event.recipes.create.pressing(item.of(output, 1), pressingInput[i])
        i++
    })

    //Ingots

    //Make bronze with Create mixer
    event.recipes.create.mixing(item.of('mekanism:ingot_bronze', 4), [
 	'#forge:ingots/copper',
 	'#forge:ingots/copper',
 	'#forge:ingots/copper',
 	'#forge:ingots/tin'
        ]).heated()


    //Make netherite ingot with Create Mixer
    event.remove({id: 'minecraft:netherite_ingot'})

    event.recipes.create.mixing('minecraft:netherite_ingot', [
 	'minecraft:netherite_scrap',
 	'minecraft:netherite_scrap',
 	'minecraft:netherite_scrap',
 	'minecraft:netherite_scrap',
 	'#forge:ingots/gold',
 	'#forge:ingots/gold',
 	'#forge:ingots/gold',
	'#forge:ingots/gold'
        ]).superheated()
})