// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: modifying recipes')

events.listen('recipes', function (event) {
    //Armor/Equipment

    //Change Mekanism steel shield to require steel plates
    event.shaped(item.of('mekanismtools:steel_shield', 1), [
        'ABA',
        'AAA',
        ' A ',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'minecraft:shield'
    })

    //Machines/Components

    //Mekanism
    //Steel Casing
    event.shaped(item.of('mekanism:steel_casing', 1), [
        'ABA',
        'BCB',
        'ABA',
    ], {
        A: 'immersiveengineering:heavy_engineering',
        B: 'mekanism:structural_glass',
        C: 'mekanism:block_osmium'
    })

    //Metallurgic Infuser
    event.shaped(item.of('mekanism:metallurgic_infuser', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'engineersdecor:small_electrical_furnace',
        C: 'mekanism:rs_engineering',
        D: 'mekanism:steel_casing'
    })

    //Energized Smelter
    event.shaped(item.of('mekanism:energized_smelter', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'mekanism:basic_control_circuit',
        C: 'engineersdecor:small_electrical_furnace',
        D: 'mekanism:steel_casing'
    })
    
    //Enrichment Chamber
    event.shaped(item.of('mekanism:enrichment_chamber', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'mekanism:basic_control_circuit',
        C: 'immersiveengineering:storage_steel',
        D: 'mekanism:steel_casing'
    })

    //Crusher
    event.shaped(item.of('mekanism:crusher', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'mekanism:basic_control_circuit',
        C: 'minecraft:lava_bucket',
        D: 'mekanism:steel_casing'
    })

    //Compressor
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
    event.shaped(item.of('mekanism:basic_bin', 1), [
        'ABA',
        'CDC',
        'AAA',
    ], {
        A: 'immersiveengineering:plate_iron',
        B: 'mekanism:basic_control_circuit',
        C: 'immersiveengineering:crate',
        D: 'mekanism:steel_casing'
    })

    //Advanced Bin
    event.shaped(item.of('mekanism:advanced_bin', 1), [
        'ABA',
        'CDC',
        'AAA',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'mekanism:advanced_control_circuit',
        C: 'immersiveengineering:reinforced_crate',
        D: 'mekanism:basic_bin'
    })

    //Elite Bin
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
    event.shaped(item.of('mekanism:energy_tablet', 1), [
        'ABA',
        'CBC',
        'ABA',
    ], {
        A: 'immersiveengineering:plate_lead',
        B: 'immersiveengineering:ingot_hop_graphite',
        C: 'mekanism:alloy_infused'
    })

    //Basic Energy Cube
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
    event.shaped(item.of('mekanism:basic_universal_cable', 1), [
        ' A ',
        'BCB',
        ' A ',
    ], {
        A: 'immersiveengineering:plate_constantan',
        B: 'immersiveengineering:plate_copper',
        C: 'mekanism:rs_engineering'
    })

    //Basic Mechanical Pipe
    event.shaped(item.of('mekanism:basic_mechanical_pipe', 1), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: 'immersiveengineering:plate_lead',
        B: 'immersiveengineering:fluid_pipe'
    })

    //Basic Pressurized Tube
    event.shaped(item.of('mekanism:basic_pressurized_tube', 1), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'mekanism:structural_glass'
    })

    //Basic Logistical Transporter
    event.shaped(item.of('mekanism:basic_logistical_transporter', 1), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'mekanism:basic_control_circuit'
    })

    //Restrictive Transporter
    event.shaped(item.of('mekanism:restrictive_transporter', 1), [
        'ABA',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'minecraft:iron_bars'
    })

    //Diversion Transporter
    event.shaped(item.of('mekanism:diversion_transporter', 1), [
        'CCC',
        'ABA',
        'CCC',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'minecraft:iron_bars',
        C: 'minecraft:redstone'
    })

    //Structural Glass
    event.shaped(item.of('mekanism:structural_glass', 1), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: '#forge:glass'
    })
    
    //Electric Pump
    event.shaped(item.of('mekanism:electric_pump', 1), [
        ' A ',
        'BCB',
        'DDD',
    ], {
        A: 'immersiveengineering:fluid_pump',
        B: 'mekanism:alloy_infused',
        C: 'mekanism:steel_casing',
        D: 'mekanism:ignot_osmium'
    })

    //Test script to modify a whole tier of machine recipes at once
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

})