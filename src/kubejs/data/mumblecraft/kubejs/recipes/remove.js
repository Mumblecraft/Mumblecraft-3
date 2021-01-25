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

	//Machines/Crafting Components

	//AE2
	'appliedenergistics2:misc/grindstone',
	
	//Immersive Engineering
	'immersiveengineering:crafting/conveyor_basic',
	
	//Mekanism
	'mekanism:metallurgic_infuser',
	'mekanism:steel_casing',
    'mekanism:energized_smelter',
    'mekanism:enrichment_chamber',
    'mekanism:crusher',
    'mekanism:osmium_compressor',
    'mekanism:purification_chamber',
    'mekanism:chemical_injection_chamber',
    'mekanism:precision_sawmill',
    'mekanism:bin/basic',
    'mekanism:bin/advanced',
    'mekanism:bin/elite',
	'mekanism:bin/ultimate',
	'mekanism:energy_tablet',
	'mekanism:energy_cube/basic',
	'mekanism:transmitter/universal_cable/basic',
	'mekanism:transmitter/mechanical_pipe/basic',
	'mekanism:transmitter/pressurized_tube/basic',
	'mekanism:transmitter/logistical_transporter/basic',
	'mekanism:transmitter/logistical_transporter/restrictive_transporter',
	'mekanism:transmitter/logistical_transporter/diversion_transporter',
	'mekanism:structural_glass',
	
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

	//No Tree Punching
	'immersiveengineering:crafting/stick_treated',
	'biomesoplenty:fir_planks',
	'biomesoplenty:redwood_planks',
	'biomesoplenty:cherry_planks',
	'biomesoplenty:mahogany_planks',
	'biomesoplenty:jacaranda_planks',
	'biomesoplenty:palm_planks',
	'biomesoplenty:willow_planks',
	'biomesoplenty:dead_planks',
	'biomesoplenty:magic_planks',
	'biomesoplenty:umbran_planks',
	'biomesoplenty:hellbark_planks',
	
	]
	idRemove.forEach(function (remove) {
		event.remove({id: remove})
	})
})
