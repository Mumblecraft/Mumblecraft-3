// This file is for removing recipes

//Write to console that this file is executing
console.info('Kubejs: removing recipes')

events.listen('recipes', function (event) {
	var idRemove =[
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
	'immersiveengineering:crafting/conveyor_basic',
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
	'immersiveengineering:crafting/light_engineering',
	
	//Engineer's Decor
	'engineersdecor:independent/small_electrical_furnace_recipe',
	
	]
	idRemove.forEach(function (remove) {
		event.remove({id: remove})
	})
})