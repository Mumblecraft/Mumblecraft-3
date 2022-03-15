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
	'#forge:ingots/constantan',
	'#forge:ingots/electrum',
	'#forge:ingots/steel',
	'minecraft:diamond',
	'minecraft:emerald',
	'minecraft:lapis_lazuli',
	'#forge:ingots/osmium',
	'#forge:ingots/tin',
	'#forge:ingots/zinc'
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
	'emendatusenigmatica:zinc_plate'
	
    ]

    var i = 0
    pressingOutput.forEach(function (plates) {
        event.recipes.create.pressing(item.of(plates, 1), pressingInput[i])
        i++
    })
	
	//Add plates to Immersive Engineering Press
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:diamond_plate', 'minecraft:diamond', 'immersiveengineering:mold_plate')
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:emerald_plate', 'minecraft:emerald', 'immersiveengineering:mold_plate')
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:lapis_plate', 'minecraft:lapis_lazuli', 'immersiveengineering:mold_plate')

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
	]
	
    var i = 0
    smeltingOutput.forEach(function (nuggets) {
        event.smelting(nuggets, smeltingInput[i])
        i++
    })	
		
	//Rods
	//Add rods to Immersive Engineering Press
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:diamond_rod', 'minecraft:diamond', 'immersiveengineering:mold_rod')
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:emerald_rod', 'minecraft:emerald', 'immersiveengineering:mold_rod')
	event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:lapis_rod', 'minecraft:lapis_lazuli', 'immersiveengineering:mold_rod')
	
	//Add rods to Create Additions Rolling Mill
	event.remove({id: 'createaddition/rolling/gold_ingot'})
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/gold"
		},
		"result": {
			"item": "emendatusenigmatica:gold_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/iron"
		},
		"result": {
			"item": "emendatusenigmatica:iron_rod",
			"count": 2
		}
	})

	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"item": "minecraft:diamond"
		},
		"result": {
			"item": "emendatusenigmatica:diamond_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"item": "minecraft:emerald"
		},
		"result": {
			"item": "emendatusenigmatica:emerald_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"item": "minecraft:lapis_lazuli"
		},
		"result": {
			"item": "emendatusenigmatica:lapis_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/copper"
		},
		"result": {
			"item": "emendatusenigmatica:copper_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/aluminum"
		},
		"result": {
			"item": "emendatusenigmatica:aluminum_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/silver"
		},
		"result": {
			"item": "emendatusenigmatica:silver_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/lead"
		},
		"result": {
			"item": "emendatusenigmatica:lead_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/nickel"
		},
		"result": {
			"item": "emendatusenigmatica:nickel_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/uranium"
		},
		"result": {
			"item": "emendatusenigmatica:uranium_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/osmium"
		},
		"result": {
			"item": "emendatusenigmatica:osmium_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/tin"
		},
		"result": {
			"item": "emendatusenigmatica:tin_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/zinc"
		},
		"result": {
			"item": "emendatusenigmatica:zinc_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/bronze"
		},
		"result": {
			"item": "emendatusenigmatica:bronze_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/brass"
		},
		"result": {
			"item": "emendatusenigmatica:brass_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/constantan"
		},
		"result": {
			"item": "emendatusenigmatica:constantan_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/electrum"
		},
		"result": {
			"item": "emendatusenigmatica:electrum_rod",
			"count": 2
		}
	})
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"tag": "forge:ingots/steel"
		},
		"result": {
			"item": "emendatusenigmatica:steel_rod",
			"count": 2
		}
	})
	
	//Crushed Ores
	event.custom({
		"type": "appliedenergistics2:grinder",
		"input": {
			"tag": "forge:ores/zinc"
		},
		"result": {
			"primary": {
			"item": "create:crushed_zinc_ore"
			},
		},
		"turns": 12
	})
	
	event.custom({
		"type": "appliedenergistics2:grinder",
		"input": {
			"tag": "forge:ores/tin"
		},
		"result": {
			"primary": {
			"item": "create:crushed_tin_ore"
			},
		},
		"turns": 12
	})
	
	event.custom({
		"type": "appliedenergistics2:grinder",
		"input": {
			"tag": "forge:ores/copper"
		},
		"result": {
			"primary": {
			"item": "create:crushed_copper_ore"
			},
		},
		"turns": 12
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