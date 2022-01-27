// This file is for removing recipes

//Write to console that this file is executing
console.info('Kubejs: Removing recipes')

events.listen('recipes', function (event) {
	var idRemove =[
	//Minecraft
	'minecraft:bread',
	'pamhc2crops:bread_grain',
	'pamhc2foodcore:bread_dough',
	'pamhc2trees:bread_breadfruit',
	
	//Ores and ingots

	//AE2
	'appliedenergistics2:grinder/gold_dust_ore',
	'appliedenergistics2:grinder/gold_dust_ingot',
	'appliedenergistics2:grinder/iron_dust_ore',
	'appliedenergistics2:grinder/iron_dust_ingot',

	//Tools/armor
	
	//No Tree Punching
	//Remove mattocks
	'notreepunching:iron_mattock',
	'notreepunching:gold_mattock',
	'notreepunching:diamond_mattock',
	
	//Machines/Crafting Components
	
	//Immersive Engineering
    //Plates
	'immersiveengineering:crafting/plate_copper_hammering',
	'immersiveengineering:crafting/plate_aluminum_hammering',
	'immersiveengineering:crafting/plate_lead_hammering',
	'immersiveengineering:crafting/plate_silver_hammering',
	'immersiveengineering:crafting/plate_nickel_hammering',
	'immersiveengineering:crafting/plate_uranium_hammering',
	'immersiveengineering:crafting/plate_constantan_hammering',
	'immersiveengineering:crafting/plate_electrum_hammering',
	'immersiveengineering:crafting/plate_steel_hammering',
	'immersiveengineering:crafting/plate_iron_hammering',
	'immersiveengineering:crafting/plate_gold_hammering',
	'immersiveengineering:crafting/hammercrushing_iron',
	//Rods
	'immersiveengineering:crafting/stick_iron',
	'immersiveengineering:crafting/stick_steel',
	'immersiveengineering:crafting/stick_aluminum',
	'immersiveposts:has_gold_rod',
	'immersiveposts:has_copper_rod',
	'immersiveposts:has_lead_rod',
	'immersiveposts:has_silver_rod',
	'immersiveposts:has_nickel_rod',
	'immersiveposts:has_constantan_rod',
	'immersiveposts:has_electrum_rod',
	'immersiveposts:has_uranium_rod',
	
	
	
	

	]
	idRemove.forEach(function (remove) {
		event.remove({id: remove})
	})
	
	event.remove({type: 'valhelsia_structures:axe_crafting'})
	
	//Immersive Engineering Steel Pickaxe
	event.remove({id: 'immersiveengineering:crafting/pickaxe_steel'})
	
	
	//Minecraft Furnace
	//Remove recipes to cook ores in furnace
	event.remove({input: '#forge:ores', type: 'minecraft:smelting'})
})