// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: modifying recipes')

events.listen('recipes', function (event) {
    
    //Machines/Components

    //Steel Casing
    event.remove({id: 'mekanism:steel_casing'})
	
    event.recipes.create.mechanical_crafting(item.of('mekanism:steel_casing', 1), [
        '  A  ',
        ' BCB ',
        'ACDCA',
		' BCB ',
		'  A  ',
    ], {
		A: 'create:shadow_steel',
        B: 'immersiveengineering:plate_steel',
        C: 'immersiveengineering:component_steel',
        D: 'mekanism:block_osmium'
    })

    //Metallurgic Infuser
	event.remove({id: 'mekanism:metallurgic_infuser'})
	
    event.shaped(item.of('mekanism:metallurgic_infuser', 1), [
        'ABA',
        'CDC',
        'EBF',
    ], {
		A: 'kubejs:redstone_alloy',
		B: 'engineersdecor:small_electrical_furnace',
		C: 'create:integrated_circuit',
		D: 'mekanism:steel_casing',
		E: 'immersiveengineering:rs_engineering',
		F: 'immersiveengineering:heavy_engineering'
    })

    //Energized Smelter
    event.remove({id: 'mekanism:energized_smelter'})
	
    event.shaped(item.of('mekanism:energized_smelter', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'kubejs:redstone_alloy',
        B: 'mekanism:basic_control_circuit',
        C: 'engineersdecor:small_electrical_furnace',
        D: 'mekanism:steel_casing'
    })
    
    //Enrichment Chamber
	event.remove({id: 'mekanism:enrichment_chamber'})
	
    event.shaped(item.of('mekanism:enrichment_chamber', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'kubejs:redstone_alloy',
        B: 'mekanism:basic_control_circuit',
        C: 'immersiveengineering:storage_steel',
        D: 'mekanism:steel_casing'
    })

    //Crusher
	event.remove({id: 'mekanism:crusher'})
	
    event.shaped(item.of('mekanism:crusher', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'kubejs:redstone_alloy',
        B: 'mekanism:basic_control_circuit',
        C: 'minecraft:lava_bucket',
        D: 'mekanism:steel_casing'
    })

    //Compressor
	event.remove({id: 'mekanism:osmium_compressor'})
	
    event.shaped(item.of('mekanism:osmium_compressor', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:advanced_control_circuit',
        C: 'immersiveengineering:storage_steel',
        D: 'mekanism:steel_casing'
    })

    //Purification Chamber
	event.remove({id: 'mekanism:purification_chamber'})
	
    event.shaped(item.of('mekanism:purification_chamber', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:advanced_control_circuit',
        C: 'mekanism:block_osmium',
        D: 'mekanism:enrichment_chamber'
    })

    //Chemical Injection Chamber
	event.remove({id: 'mekanism:chemical_injection_chamber'})
	
    event.shaped(item.of('mekanism:chemical_injection_chamber', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:elite_control_circuit',
        C: 'minecraft:gold_block',
        D: 'mekanism:purification_chamber'
    })

    //Sawmill
	event.remove({id: 'mekanism:precision_sawmill'})
	
    event.shaped(item.of('mekanism:precision_sawmill', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'mekanism:basic_control_circuit',
        C: 'mekanism:alloy_infused',
        D: 'mekanism:steel_casing'
    })

    //Basic Bin
	event.remove({id: 'mekanism:bin/basic'})
	
    event.shaped(item.of('mekanism:basic_bin', 1), [
        'ABA',
        'CDC',
        'AAA',
    ], {
        A: 'immersiveengineering:plate_iron',
        B: 'mekanism:basic_control_circuit',
        C: 'create:adjustable_crate',
        D: 'mekanism:steel_casing'
    })

    //Advanced Bin
	event.remove({id: 'mekanism:bin/advanced'})
	
    event.shaped(item.of('mekanism:advanced_bin', 1), [
        'ABA',
        'CDC',
        'AAA',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'mekanism:advanced_control_circuit',
        C: 'create:adjustable_crate',
        D: 'mekanism:basic_bin'
    })

    //Elite Bin
	event.remove({id: 'mekanism:bin/elite'})
	
    event.shaped(item.of('mekanism:elite_bin', 1), [
        'ABA',
        'CDC',
        'AAA',
    ], {
        A: 'immersiveengineering:plate_aluminum',
        B: 'mekanism:elite_control_circuit',
        C: 'mekanism:alloy_reinforced',
        D: 'mekanism:advanced_bin'
    })

    //Ultimate Bin
	event.remove({id: 'mekanism:bin/ultimate'})
	
    event.shaped(item.of('mekanism:ultimate_bin', 1), [
        'ABA',
        'CDC',
        'AAA',
    ], {
        A: 'immersiveengineering:plate_uranium',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mekanism:alloy_atomic',
        D: 'mekanism:elite_bin'
    })

    //Energy Tablet
	event.remove({id: 'mekanism:energy_tablet'})
	
    event.shaped(item.of('mekanism:energy_tablet', 1), [
        'AEA',
        'CBC',
        'ADA',
    ], {
        A: 'immersiveengineering:plate_lead',
        B: 'immersiveengineering:ingot_hop_graphite',
        C: 'mekanism:alloy_infused',
		D: '#forge:ingots/zinc',
		E: 'immersiveengineering:plate_constantan'
    })

    //Basic Energy Cube
	event.remove({id: 'mekanism:energy_cube/basic'})
	
    event.shaped(item.of('mekanism:basic_energy_cube', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'immersiveengineering:plate_lead',
        B: 'mekanism:energy_tablet',
        C: 'immersiveengineering:rs_engineering',
        D: 'mekanism:steel_casing'
    })

    //Basic Universal Cable
	event.remove({id: 'mekanism:transmitter/universal_cable/basic'})
	
    event.shaped(item.of('mekanism:basic_universal_cable', 4), [
        'BAB',
        ' C ',
        'BAB',
    ], {
        A: 'immersiveengineering:plate_constantan',
        B: 'immersiveengineering:plate_copper',
        C: 'kubejs:redstone_alloy'
    })

    //Basic Mechanical Pipe
	event.remove({id: 'mekanism:transmitter/mechanical_pipe/basic'})
	
    event.shaped(item.of('mekanism:basic_mechanical_pipe', 1), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: 'immersiveengineering:plate_lead',
        B: 'create:fluid_pipe'
    })

    //Basic Pressurized Tube
	event.remove({id: 'mekanism:transmitter/pressurized_tube/basic'})
	
    event.shaped(item.of('mekanism:basic_pressurized_tube', 4), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'mekanism:structural_glass'
    })

    //Basic Logistical Transporter
	event.remove({id: 'mekanism:transmitter/logistical_transporter/basic'})
	
    event.shaped(item.of('mekanism:basic_logistical_transporter', 4), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'mekanism:basic_control_circuit'
    })

    //Restrictive Transporter
	event.remove({id: 'mekanism:transmitter/logistical_transporter/restrictive_transporter'})
	
    event.shaped(item.of('mekanism:restrictive_transporter', 1), [
        'ABA',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'minecraft:iron_bars'
    })

    //Diversion Transporter
	event.remove({id: 'mekanism:transmitter/logistical_transporter/diversion_transporter'})
	
    event.shaped(item.of('mekanism:diversion_transporter', 1), [
        'CCC',
        'ABA',
        'CCC',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'minecraft:iron_bars',
        C: 'kubejs:redstone_alloy'
    })

    //Structural Glass
	event.remove({id: 'mekanism:structural_glass'})
	
    event.shaped(item.of('mekanism:structural_glass', 1), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: '#forge:glass'
    })
    
    //Electric Pump
	event.remove({id: 'mekanism:electric_pump'})
	
    event.shaped(item.of('mekanism:electric_pump', 1), [
        ' A ',
        'BCB',
        'DDD',
    ], {
        A: 'immersiveengineering:fluid_pump',
        B: 'mekanism:alloy_infused',
        C: 'mekanism:steel_casing',
        D: 'mekanism:ingot_osmium'
    })
	
	//Basic Chemical Tank
	event.remove({id: 'mekanism:chemical_tank/basic'})
	
    event.shaped(item.of('mekanism:basic_chemical_tank', 1), [
        'ABA',
        'BCB',
        'ABA',
    ], {
        A: 'kubejs:redstone_alloy',
        B: '#forge:ingots/osmium',
        C: 'mekanism:steel_casing'
    })

    //Fission Reactor Casing
	event.remove({id: 'mekanismgenerators:fission_reactor/casing'})
	
    event.shaped(item.of('mekanismgenerators:fission_reactor_casing', 2), [
        'AAA',
        'ABA',
        'AAA',
    ], {
		A: 'immersiveengineering:plate_lead',
		B: 'mekanism:steel_casing',
    })

    //Script to modify a whole tier of machine recipes at once
	//First, remove the old recipes
	var idRemove =[
	//Tier 1 machines
	'mekanism:factory/basic/smelting',
	'mekanism:factory/basic/enriching',
	'mekanism:factory/basic/crushing',
	'mekanism:factory/basic/compressing',
	'mekanism:factory/basic/combining',
	'mekanism:factory/basic/purifying',
	'mekanism:factory/basic/injecting',
	'mekanism:factory/basic/infusing',
	'mekanism:factory/basic/sawing',
	
	//Tier 2 machines
	'mekanism:factory/advanced/smelting',
	'mekanism:factory/advanced/enriching',
	'mekanism:factory/advanced/crushing',
	'mekanism:factory/advanced/compressing',
	'mekanism:factory/advanced/combining',
	'mekanism:factory/advanced/purifying',
	'mekanism:factory/advanced/injecting',
	'mekanism:factory/advanced/infusing',
	'mekanism:factory/advanced/sawing',
	
	//Tier 3 machines
	'mekanism:factory/elite/smelting',
	'mekanism:factory/elite/enriching',
	'mekanism:factory/elite/crushing',
	'mekanism:factory/elite/compressing',
	'mekanism:factory/elite/combining',
	'mekanism:factory/elite/purifying',
	'mekanism:factory/elite/injecting',
	'mekanism:factory/elite/infusing',
	'mekanism:factory/elite/sawing',
	
	//Tier 4 machines
	'mekanism:factory/ultimate/smelting',
	'mekanism:factory/ultimate/enriching',
	'mekanism:factory/ultimate/crushing',
	'mekanism:factory/ultimate/compressing',
	'mekanism:factory/ultimate/combining',
	'mekanism:factory/ultimate/purifying',
	'mekanism:factory/ultimate/injecting',
	'mekanism:factory/ultimate/infusing',
	'mekanism:factory/ultimate/sawing',
	]
	idRemove.forEach(function (remove) {
		event.remove({id: remove})
	})
	
    //Initial tier of machines
    var tierZero = [
        'mekanism:energized_smelter',
        'mekanism:enrichment_chamber',
        'mekanism:crusher',
        'mekanism:osmium_compressor',
        'mekanism:combiner',
        'mekanism:purification_chamber',
        'mekanism:chemical_injection_chamber',
        'mekanism:metallurgic_infuser',
        'mekanism:precision_sawmill'
    ]
    //First tier of 'factory' machines
    var tierOne =[
        'mekanism:basic_smelting_factory',
        'mekanism:basic_enriching_factory',
        'mekanism:basic_crushing_factory',
        'mekanism:basic_compressing_factory',
        'mekanism:basic_combining_factory',
        'mekanism:basic_purifying_factory',
        'mekanism:basic_injecting_factory',
        'mekanism:basic_infusing_factory',
        'mekanism:basic_sawing_factory'
    ]
    //Second tier of 'factory' machines
    var tierTwo =[
        'mekanism:advanced_smelting_factory',
        'mekanism:advanced_enriching_factory',
        'mekanism:advanced_crushing_factory',
        'mekanism:advanced_compressing_factory',
        'mekanism:advanced_combining_factory',
        'mekanism:advanced_purifying_factory',
        'mekanism:advanced_injecting_factory',
        'mekanism:advanced_infusing_factory',
        'mekanism:advanced_sawing_factory'
    ]
    //Third tier of 'factory' machines
    var tierThree =[
        'mekanism:elite_smelting_factory',
        'mekanism:elite_enriching_factory',
        'mekanism:elite_crushing_factory',
        'mekanism:elite_compressing_factory',
        'mekanism:elite_combining_factory',
        'mekanism:elite_purifying_factory',
        'mekanism:elite_injecting_factory',
        'mekanism:elite_infusing_factory',
        'mekanism:elite_sawing_factory'
    ]
    //Fourth tier of 'factory' machines
    var tierFour =[
        'mekanism:ultimate_smelting_factory',
        'mekanism:ultimate_enriching_factory',
        'mekanism:ultimate_crushing_factory',
        'mekanism:ultimate_compressing_factory',
        'mekanism:ultimate_combining_factory',
        'mekanism:ultimate_purifying_factory',
        'mekanism:ultimate_injecting_factory',
        'mekanism:ultimate_infusing_factory',
        'mekanism:ultimate_sawing_factory'
    ]
    var i = 0

    tierOne.forEach(function (t1machine) {
        event.shaped(item.of(t1machine, 1), [
            'ABA',
            'CDC',
            'ABA',
        ], {
            A: 'immersiveengineering:rs_engineering',
            B: 'mekanism:basic_control_circuit',
            C: 'immersiveengineering:plate_iron',
            D: tierZero[i]
        })
        i++
    })
    i = 0

    tierTwo.forEach(function (t2machine) {
        event.shaped(item.of(t2machine, 1), [
            'ABA',
            'CDC',
            'ABA',
        ], {
            A: 'mekanism:alloy_infused',
            B: 'mekanism:advanced_control_circuit',
            C: 'immersiveengineering:plate_steel',
            D: tierOne[i]
        })
        i++
    })
    i = 0

    tierThree.forEach(function (t3machine) {
        event.shaped(item.of(t3machine, 1), [
            'ABA',
            'CDC',
            'ABA',
        ], {
            A: 'mekanism:alloy_reinforced',
            B: 'mekanism:elite_control_circuit',
            C: 'immersiveengineering:plate_aluminum',
            D: tierTwo[i]
        })
        i++
    })
    i = 0

    tierFour.forEach(function (t4machine) {
        event.shaped(item.of(t4machine, 1), [
            'ABA',
            'CDC',
            'ABA',
        ], {
            A: 'mekanism:alloy_atomic',
            B: 'mekanism:ultimate_control_circuit',
            C: 'immersiveengineering:plate_uranium',
            D: tierThree[i]
        })
        i++
    })
	
	//World
	
	//Salt - Convert Pam's Kitchen Salt to Mekanism Salt
	event.shapeless(Item.of('mekanism:salt', 1), 'pamhc2foodcore:saltitem')
})