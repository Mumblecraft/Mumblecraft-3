// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying recipes regarding processing')

events.listen('recipes', function (event) {

    //Plates
	//Add plates to Create Mechanical Press
    var pressingInput = [
	'#forge:ingots/aluminum',
	'#forge:ingots/lead',
	'#forge:ingots/silver',
	'#forge:ingots/nickel',
	'#forge:ingots/uranium',
	'emendatusenigmatica:constantan_ingot',
	'emendatusenigmatica:electrum_ingot',
	'#forge:ingots/steel',
	'minecraft:diamond',
	'minecraft:emerald',
	'minecraft:lapis_lazuli',
	'#forge:ingots/osmium',
	'#forge:ingots/tin',
	'#forge:ingots/zinc',
	'#forge:ingots/bronze',
	'#forge:ingots/brass'
    ]

    var pressingOutput = [
	'emendatusenigmatica:aluminum_plate',
	'emendatusenigmatica:lead_plate',
	'emendatusenigmatica:silver_plate',
	'emendatusenigmatica:nickel_plate',
	'emendatusenigmatica:uranium_plate',
	'emendatusenigmatica:constantan_plate',
	'emendatusenigmatica:electrum_plate',
	'emendatusenigmatica:steel_plate',
	'emendatusenigmatica:diamond_plate',
	'emendatusenigmatica:emerald_plate',
	'emendatusenigmatica:lapis_plate',
	'emendatusenigmatica:osmium_plate',
	'emendatusenigmatica:tin_plate',
	'emendatusenigmatica:zinc_plate',
	'emendatusenigmatica:bronze_plate',
	'emendatusenigmatica:brass_plate'
	
    ]

    var i = 0
    pressingOutput.forEach(function (plates) {
        event.recipes.create.pressing(item.of(plates, 1), pressingInput[i])
        i++
    })
	
	//Add plates and rods to Immersive Engineering Press
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:diamond_plate', 'minecraft:diamond', 'immersiveengineering:mold_plate')
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:emerald_plate', 'minecraft:emerald', 'immersiveengineering:mold_plate')
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:lapis_plate', 'minecraft:lapis_lazuli', 'immersiveengineering:mold_plate')
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:constantan_plate', '#forge:ingots/constantan', 'immersiveengineering:mold_plate')
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:electrum_plate', '#forge:ingots/electrum', 'immersiveengineering:mold_plate')
	
    //Ingots
    //Make bronze with Create mixer
    event.recipes.create.mixing(item.of('mekanism:ingot_bronze', 4), [
 	'#forge:ingots/copper',
 	'#forge:ingots/copper',
 	'#forge:ingots/copper',
 	'#forge:ingots/tin'
        ]).heated()
	
	//Nuggets
	//Smelt Crushed Ore into Nuggets
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
	]
	
	var smeltingOutput = [
	'4x minecraft:iron_nugget',
	'4x minecraft:gold_nugget',
	'4x emendatusenigmatica:copper_nugget',
	'4x emendatusenigmatica:zinc_nugget',
	'4x emendatusenigmatica:brass_nugget',
	'4x emendatusenigmatica:osmium_nugget',
	'4x emendatusenigmatica:silver_nugget',
	'4x emendatusenigmatica:tin_nugget',
	'4x emendatusenigmatica:lead_nugget',
	'4x emendatusenigmatica:aluminum_nugget',
	'4x emendatusenigmatica:uranium_nugget',
	'4x emendatusenigmatica:nickel_nugget',
	]
	
    var i = 0
    smeltingOutput.forEach(function (output) {
        event.smelting(output, smeltingInput[i])
        i++
    })	
		
	//Rods
	//Add rods to Immersive Engineering Press
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:diamond_rod', 'minecraft:diamond', 'immersiveengineering:mold_rod')
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:emerald_rod', 'minecraft:emerald', 'immersiveengineering:mold_rod')
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:lapis_rod', 'minecraft:lapis_lazuli', 'immersiveengineering:mold_rod')
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:constantan_rod', '#forge:rods/constantan', 'immersiveengineering:mold_rod')
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:electrum_rod', '#forge:rods/electrum', 'immersiveengineering:mold_rod')
	
	//Add rods to Create Additions Rolling Mill
	event.remove({id: 'createaddition/rolling/gold_ingot'})
	
	var rollingInput = [
		"forge:ingots/gold",
		"forge:ingots/iron",
		"forge:ingots/copper",
		"forge:ingots/aluminum",
		"forge:ingots/silver",
		"forge:ingots/lead",
		"forge:ingots/nickel",
		"forge:ingots/uranium",
		"forge:ingots/osmium",
		"forge:ingots/tin",
		"forge:ingots/zinc",
		"forge:ingots/bronze",
		"forge:ingots/brass",
		"forge:ingots/constantan",
		"forge:ingots/electrum",
		"forge:ingots/steel",
		"forge:gems/lapis",
		"forge:gems/diamond",
		"forge:gems/emerald",
	]
	
	var rollingOutput = [
		"emendatusenigmatica:gold_rod",
		"emendatusenigmatica:iron_rod",
		"emendatusenigmatica:copper_rod",
		"emendatusenigmatica:aluminum_rod",
		"emendatusenigmatica:silver_rod",
		"emendatusenigmatica:lead_rod",
		"emendatusenigmatica:nickel_rod",
		"emendatusenigmatica:uranium_rod",
		"emendatusenigmatica:osmium_rod",
		"emendatusenigmatica:tin_rod",
		"emendatusenigmatica:zinc_rod",
		"emendatusenigmatica:bronze_rod",
		"emendatusenigmatica:brass_rod",
		"emendatusenigmatica:constantan_rod",
		"emendatusenigmatica:electrum_rod",
		"emendatusenigmatica:steel_rod",
		"emendatusenigmatica:lapis_rod",
		"emendatusenigmatica:diamond_rod",
		"emendatusenigmatica:emerald_rod"
	]
	
	var i = 0
	
	rollingOutput.forEach(function (output) {
		event.custom({
			"type":"createaddition:rolling",
			"input": {
				"tag": rollingInput[i]
			},
			"result": {
				"item": output,
				"count": 2
			}
		})
		i++
	})
	
	//Crushed Ores
	var crushedInput = [
		"forge:ores/zinc",
		"forge:ores/tin",
		"forge:ores/copper"
	]
	
	var crushedOutput = [
		"create:crushed_zinc_ore",
		"create:crushed_tin_ore",
		"create:crushed_copper_ore"
	]
	
	var i = 0
	
	crushedOutput.forEach(function (output) {
		event.custom({
			"type": "appliedenergistics2:grinder",
			"input": {
				"tag": crushedInput[i]
			},
			"result": {
				"primary": {
				"item": output
				},
			},
			"turns": 12
		})
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
	
	event.recipes.immersiveengineeringAlloy(item.of('emendatusenigmatica:brass_ingot',2),
	'#forge:ingots/copper',
	'#forge:ingots/zinc',
	).time(1600)
	
	event.recipes.immersiveengineeringAlloy(item.of('emendatusenigmatica:constantan_ingot',2),
	'#forge:ingots/copper',
	'#forge:ingots/nickel',
	).time(1600)
	
	event.recipes.immersiveengineeringAlloy(item.of('emendatusenigmatica:electrum_ingot',2),
	'#forge:ingots/gold',
	'#forge:ingots/silver',
	).time(1600)
	
	event.recipes.immersiveengineeringAlloy(item.of('emendatusenigmatica:bronze_ingot',4),
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