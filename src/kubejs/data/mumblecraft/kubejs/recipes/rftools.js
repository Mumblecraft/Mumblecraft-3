// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying RFTools recipes')

events.listen('recipes', function (event) {

    //Machines/Components

    //Machine Frame
    event.remove({id: 'rftoolsbase:machine_frame'})
	
    event.recipes.create.mechanical_crafting(item.of('rftoolsbase:machine_frame', 1), [
        ' AAA ',
        'ABCBA',
        'ADEDA',
	    'ABCBA',
	    ' AAA ',
    ], {
        B: 'mekanism:ingot_refined_obsidian',
        A: 'immersiveengineering:plate_steel',
        C: 'appliedenergistics2:engineering_processor',
	    D: '#forge:ingots/electrum',
	    E: 'mekanism:steel_casing',
    })
	
    //Machine Base
    event.remove({id: 'rftoolsbase:machine_base'})

    event.shaped(item.of('rftoolsbase:machine_base', 1), [
        '   ',
        'ABA',
        'CCC',
    ], {
        A: 'minecraft:gold_nugget',
        B: 'appliedenergistics2:logic_processor',
        C: '#forge:stone',
    })
	
	//Module Template
	event.remove({id: 'rftoolsutility:module_template'})

    event.shaped(item.of('rftoolsutility:module_template', 1), [
        'ABA',
        'BCB',
        'ABA',
    ], {
        A: 'rftoolsbase:dimensionalshard',
        B: 'mekanism:alloy_atomic',
		C: 'rftoolsbase:infused_diamond'
    })
})
