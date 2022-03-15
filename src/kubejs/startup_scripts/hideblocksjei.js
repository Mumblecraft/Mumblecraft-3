// This file is for hiding items in JEI

//Write to console that this file is executing
console.info('Kubejs: removing blocks from JEI')

events.listen('jei.hide.items', function (event) {
	var idHide = [
	//AE2
	'appliedenergistics2:iron_dust',
	'appliedenergistics2:gold_dust',
	'appliedenergistics2:facade',
	
	//Immersive Engineering
	'immersiveengineering:ore_copper',
	'immersiveengineering:ore_uranium',
	
	//rods
	
	'immersiveposts:stick_lead',
	'immersiveposts:stick_silver',
	'immersiveposts:stick_nickel',
	'immersiveposts:stick_constantan',
	'immersiveposts:stick_electrum',
	'emendatusenigmatica:iridium_rod',
	'emendatusenigmatica:ruby_rod',
	'emendatusenigmatica:sapphire_rod',
	'emendatusenigmatica:peridot_rod',
	'emendatusenigmatica:invar_rod',
	'emendatusenigmatica:signalum_rod',
	'emendatusenigmatica:lumium_rod',
	'emendatusenigmatica:enderium_rod',
	'emendatusenigmatica:cobalt_rod',

	]
	idHide.forEach(function (hide) {
		event.hide(hide)
	})
})