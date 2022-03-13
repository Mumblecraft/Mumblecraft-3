// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying recipes regarding processing')

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
    pressingOutput.forEach(function (plates) {
        event.recipes.create.pressing(item.of(plates, 1), pressingInput[i])
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
	
	//Nuggets
	event.remove({type: 'minecraft:smelting', input: '#create:crushed_ores'})
	
	var smeltingInput = [
	'create:crushed_iron_ore',
	'create:crushed_gold_ore',
	'create:crushed_copper_ore',
	'create:crushed_zinc_ore',
	'create:crushed_brass',
	'create:crushed_osmium_ore',
	'create:crushed_silver_ore',
	'create:crushed_tin_ore',
	'create:crushed_lead_ore',
	'create:crushed_aluminum_ore',
	'create:crushed_uranium_ore',
	'create:crushed_nickel_ore',
	'#forge:ores/copper',
	'#forge:ores/tin',
	'#forge:ores/zinc'
	]
	
	var smeltingOutput = [
	'4x minecraft:iron_nugget',
	'4x minecraft:gold_nugget',
	'4x create:copper_nugget',
	'4x create:zinc_nugget',
	'4x create:brass_nugget',
	'4x mekanism:nugget_osmium',
	'4x immersiveengineering:nugget_silver',
	'4x mekanism:nugget_tin',
	'4x mekanism:nugget_lead',
	'4x immersiveengineering:nugget_aluminum',
	'4x mekanism:nugget_uranium',
	'4x immersiveengineering:nugget_nickel',
	'3x create:copper_nugget',
	'3x mekanism:nugget_tin',
	'3x create:zinc_nugget'
	]
	
    var i = 0
    smeltingOutput.forEach(function (nuggets) {
        event.smelting(nuggets, smeltingInput[i])
        i++
    })
	
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

    //Make Alloy Kiln Slower
	event.remove({id: 'immersiveengineering:alloysmelter/brass'})
	event.remove({id: 'immersiveengineering:alloysmelter/constantan'})
	event.remove({id: 'immersiveengineering:alloysmelter/electrum'})
	event.remove({id: 'immersiveengineering:alloysmelter/bronze'})
	
	event.recipes.immersiveengineeringAlloy(item.of('create:brass_ingot',2),
	'#forge:ingots/copper',
	'#forge:ingots/zinc',
	).time(1600)
	
		event.recipes.immersiveengineeringAlloy(item.of('immersiveengineering:ingot_constantan',2),
	'#forge:ingots/copper',
	'#forge:ingots/nickel',
	).time(1600)
	
		event.recipes.immersiveengineeringAlloy(item.of('immersiveengineering:ingot_electrum',2),
	'#forge:ingots/gold',
	'#forge:ingots/silver',
	).time(1600)
	
		event.recipes.immersiveengineeringAlloy(item.of('mekanism:ingot_bronze',4),
	'3x #forge:ingots/copper',
	'#forge:ingots/tin',
	).time(1600)
	
	//Food
	//Merge Create and Pam's flour and dough
		event.replaceInput({type: 'minecraft:crafting_shapeless'},
	'pamhc2foodcore:doughitem', '#forge:dough'
	)
		event.replaceInput({type: 'minecraft:crafting_shapeless'},
	'pamhc2foodcore:flouritem', '#forge:flour'
	)
		event.replaceInput({type: 'minecraft:crafting_shapeless'},
	'create:dough', '#forge:dough'
	)
})