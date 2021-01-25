// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: modifying recipes')

events.listen('recipes', function (event) {
    
    //Ores/Processing
    
    var smeltingInput = [
        '#forge:dusts/uranium',
        '#forge:dusts/steel',
        '#forge:dusts/copper',
        '#forge:dusts/lead'
    ]

    var smeltingOutput = [
        'immersiveengineering:ingot_uranium',
        'immersiveengineering:ingot_steel',
        'immersiveengineering:ingot_copper',
        'immersiveengineering:ingot_lead'
    ]

    var i = 0
    smeltingOutput.forEach(function (output) {
        event.smelting(item.of(output, 1), smeltingInput[i])
        event.blasting(item.of(output, 1), smeltingInput[i])
        i++
    })

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
})