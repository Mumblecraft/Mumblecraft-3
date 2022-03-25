// This file is for removing recipes

//Write to console that this file is executing
console.info('Kubejs: Removing recipes')

events.listen('recipes', function (event) {
	var idRemove =[
	//Food
	'minecraft:bread',
	'pamhc2crops:bread_grain',
	'pamhc2foodcore:bread_dough',
	'pamhc2trees:bread_breadfruit',
	'create:crafting/appliances/dough',
	
	//Ores and ingots

	//AE2
	'appliedenergistics2:grinder/gold_dust_ore',
	'appliedenergistics2:grinder/gold_dust_ingot',
	'appliedenergistics2:grinder/iron_dust_ore',
	'appliedenergistics2:grinder/iron_dust_ingot',
	
	//Remove crafting dust alloys
	'immersiveengineering:crafting/ingot_constantan_from_dust',
	'immersiveengineering:crafting/ingot_electrum_from_dust',
	'mekanism:processing/bronze/ingot/from_dust_smelting',

	//Tools/armor
	//Remove Immersive Engineering Steel Pickaxe
	'immersiveengineering:crafting/pickaxe_steel',
	
	//Blocks
	//Remove Treated Wood Crafting
	'immersiveengineering:crafting/treated_wood_horizontal'
	]
	idRemove.forEach(function (remove) {
		event.remove({id: remove})
	})
	event.remove({type: 'valhelsia_structures:axe_crafting'})
	
	//Remove Rod Crafting
	event.remove({output: '#forge:rods', type: 'minecraft:crafting_shaped'})
	
	//Remove Plate Crafting
	event.remove({output: '#forge:plates', type: 'minecraft:crafting_shapeless'})
	
	//Remove Dust Crafting
	event.remove({output: '#forge:dusts', type: 'minecraft:crafting_shapeless'})
	event.remove({type: 'immersiveengineering:hammer_crushing'})
	
	//Minecraft Furnace
	//Remove recipes to cook ores in furnace or blast furnace. Need to crush ores
	event.remove({input: '#forge:ores', type: 'minecraft:smelting'})
	
	event.remove({input: '#forge:ores', type: 'minecraft:blasting'})
})