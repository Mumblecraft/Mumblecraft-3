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
	
	//Create
	'create:crafting/appliances/dough',
	
	//Ores and ingots

	//AE2
	'appliedenergistics2:grinder/gold_dust_ore',
	'appliedenergistics2:grinder/gold_dust_ingot',
	'appliedenergistics2:grinder/iron_dust_ore',
	'appliedenergistics2:grinder/iron_dust_ingot',
	
	//Dust alloys
	'immersiveengineering:crafting/ingot_constantan_from_dust',
	'immersiveengineering:crafting/ingot_electrum_from_dust',
	'mekanism:processing/bronze/ingot/from_dust_smelting',

	//Tools/armor
	
	//No Tree Punching
	//Remove mattocks
	'notreepunching:iron_mattock',
	'notreepunching:gold_mattock',
	'notreepunching:diamond_mattock',

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
	
	//Remove Rod Crafting
	event.remove({output: '#forge:rods', type: 'minecraft:crafting_shaped'})
	
	//Remove Plate Crafting
	event.remove({output: '#forge:plates', type: 'minecraft:crafting_shapeless'})
	
	//Remove Dust Crafting
	event.remove({output: '#forge:dusts', type: 'minecraft:crafting_shapeless'})
	event.remove({type: 'immersiveengineering:hammer_crushing'})
})