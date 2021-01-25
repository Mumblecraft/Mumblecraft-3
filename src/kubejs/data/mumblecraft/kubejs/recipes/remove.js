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
	
	]
	idRemove.forEach(function (remove) {
		event.remove({id: remove})
	})
})