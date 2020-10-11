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
        B: '#forge:glass',
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
        C: 'minecraft:redstone_block',
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
})