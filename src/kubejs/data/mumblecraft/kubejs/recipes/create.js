// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying Create recipes')

events.listen('recipes', function (event) {
	
	//Machines
	
	//Add Alternative bronze recipe for Mechanical Press
    event.shaped(item.of('create:mechanical_press', 1), [
        ' A ',
        'BCB',
        ' D ',
    ], {
        A: 'create:andesite_alloy',
        B: 'create:cogwheel',
		C: 'create:andesite_casing',
		D: '#forge:storage_blocks/bronze'
    })
	
	//Add Alternative bronze recipe for propeller
	event.shaped(item.of('create:propeller', 1), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: 'emendatusenigmatica:bronze_plate',
        B: 'create:andesite_alloy',
    })
})