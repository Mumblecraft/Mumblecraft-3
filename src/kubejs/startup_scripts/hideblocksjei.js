// This file is for hiding items in JEI

//Write to console that this file is executing
console.info('Kubejs: removing blocks from JEI')

events.listen('jei.hide.items', function (event) {
	var idHide = [
	//Ores/ingots

	//AE2
	'appliedenergistics2:iron_dust',
	'appliedenergistics2:gold_dust',
	
	//Immersive Engineering
	'immersiveengineering:ore_copper',
	'immersiveengineering:ore_uranium',
	'immersiveengineering:ore_lead',

	]
	idHide.forEach(function (hide) {
		event.hide(hide)
	})
})