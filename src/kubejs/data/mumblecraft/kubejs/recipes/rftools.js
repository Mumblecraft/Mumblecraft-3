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

    //Xnet Cables
    event.remove({id: 'xnet:netcable_red'})
	
    event.shaped(item.of('xnet:netcable_red', 3), [
        ' A ',
        'BBB',
        ' C ',
    ], {
        A: 'mekanism:alloy_infused',
        B: 'appliedenergistics2:red_glass_cable',
        C: 'minecraft:string',
    })

    event.remove({id: 'xnet:netcable_blue'})
	
    event.shaped(item.of('xnet:netcable_blue', 3), [
        ' A ',
        'BBB',
        ' C ',
    ], {
        A: 'mekanism:alloy_infused',
        B: 'appliedenergistics2:blue_glass_cable',
        C: 'minecraft:string',
    })

    event.remove({id: 'xnet:netcable_green'})
	
    event.shaped(item.of('xnet:netcable_green', 3), [
        ' A ',
        'BBB',
        ' C ',
    ], {
        A: 'mekanism:alloy_infused',
        B: 'appliedenergistics2:green_glass_cable',
        C: 'minecraft:string',
    })

    event.remove({id: 'xnet:netcable_yellow'})
	
    event.shaped(item.of('xnet:netcable_yellow', 3), [
        ' A ',
        'BBB',
        ' C ',
    ], {
        A: 'mekanism:alloy_infused',
        B: 'appliedenergistics2:yellow_glass_cable',
        C: 'minecraft:string',
    })

    event.remove({id: 'xnet:netcable_routing'})
	
    event.shaped(item.of('xnet:netcable_routing', 6), [
        ' A ',
        ' B ',
        ' C ',
    ], {
        A: 'minecraft:black_dye',
        B: '#xnet:cables',
        C: 'mekanism:alloy_infused',
    })

    event.remove({id: 'xnet:connector_red'})
	
    event.shaped(item.of('xnet:connector_red', 1), [
        'ABA',
        'CDC',
        'ACA',
    ], {
        A: 'minecraft:red_dye',
        B: '#forge:chests/ender',
        C: 'mekanism:alloy_infused',
	    D: 'appliedenergistics2:logic_processor',
    })

    event.remove({id: 'xnet:connector_green'})
	
    event.shaped(item.of('xnet:connector_green', 1), [
        'ABA',
        'CDC',
        'ACA',
    ], {
        A: 'minecraft:green_dye',
        B: '#forge:chests/ender',
        C: 'mekanism:alloy_infused',
	    D: 'appliedenergistics2:logic_processor',
    })

    event.remove({id: 'xnet:connector_blue'})
	
    event.shaped(item.of('xnet:connector_blue', 1), [
        'ABA',
        'CDC',
        'ACA',
    ], {
        A: 'minecraft:blue_dye',
        B: '#forge:chests/ender',
        C: 'mekanism:alloy_infused',
	    D: 'appliedenergistics2:logic_processor',
    })

    event.remove({id: 'xnet:connector_yellow'})
	
    event.shaped(item.of('xnet:connector_yellow', 1), [
        'ABA',
        'CDC',
        'ACA',
    ], {
        A: '#forge:dyes/yellow',
        B: '#forge:chests/ender',
        C: 'mekanism:alloy_infused',
	    D: 'appliedenergistics2:logic_processor',
    })

    event.remove({id: 'xnet:advanced_connector_red'})
	
    event.shaped(item.of('xnet:advanced_connector_red', 1), [
        'AB ',
        'CD ',
        '   ',
    ], {
        A: 'xnet:connector_red',
        B: 'rftoolsbase:infused_enderpearl',
        C: 'appliedenergistics2:engineering_processor',
	    D: 'mekanism:alloy_atomic',
    })

    event.remove({id: 'xnet:advanced_connector_green'})
	
    event.shaped(item.of('xnet:advanced_connector_green', 1), [
        'AB ',
        'CD ',
        '   ',
    ], {
        A: 'xnet:connector_green',
        B: 'rftoolsbase:infused_enderpearl',
        C: 'appliedenergistics2:engineering_processor',
	    D: 'mekanism:alloy_atomic',
    })


    event.remove({id: 'xnet:advanced_connector_blue'})
	
    event.shaped(item.of('xnet:advanced_connector_blue', 1), [
        'AB ',
        'CD ',
        '   ',
    ], {
        A: 'xnet:connector_blue',
        B: 'rftoolsbase:infused_enderpearl',
        C: 'appliedenergistics2:engineering_processor',
	    D: 'mekanism:alloy_atomic',
    })

    event.remove({id: 'xnet:advanced_connector_yellow'})
	
    event.shaped(item.of('xnet:advanced_connector_yellow', 1), [
        'AB ',
        'CD ',
        '   ',
    ], {
        A: 'xnet:connector_yellow',
        B: 'rftoolsbase:infused_enderpearl',
        C: 'appliedenergistics2:engineering_processor',
	    D: 'mekanism:alloy_atomic',
    })

    event.remove({id: 'xnet:advanced_connector_routing'})
	
    event.shaped(item.of('xnet:advanced_connector_routing', 1), [
        'AB ',
        'CD ',
        '   ',
    ], {
        A: 'xnet:connector_routing',
        B: 'rftoolsbase:infused_enderpearl',
        C: 'appliedenergistics2:engineering_processor',
	    D: 'mekanism:alloy_atomic',
    })

    event.remove({id: 'xnet:connector_upgrade'})

    event.shaped(item.of('xnet:connector_upgrade', 1), [
        'AB ',
        'CD ',
        '   ',
    ], {
        A: 'minecraft:paper',
        B: 'rftoolsbase:infused_enderpearl',
        C: 'appliedenergistics2:engineering_processor',
	    D: 'mekanism:alloy_atomic',
    })
})
