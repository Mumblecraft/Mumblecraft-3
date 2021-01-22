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
    
})