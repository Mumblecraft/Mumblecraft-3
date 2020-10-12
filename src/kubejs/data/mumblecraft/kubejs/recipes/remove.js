// This file is for removing recipes

//Write to console that this file is executing
console.info('Kubejs: removing recipes')

events.listen('recipes', function (event) {
	var idRemove =[
	//Ores and ingots

	//BluePower
	'bluepower:copper_ingot',
	'bluepower:silver_ingot',
	'bluepower:copper_block',
	'bluepower:silver_block',
	'bluepower:copper_ore',
	'bluepower:silver_ore',
	'bluepower:alloy_furnace/energy_tabletgold_ingot_generated',
	//Mekanism
	'mekanism:copper_ore',
	'mekanism:lead_ore',
	'mekanism:uranium_ore',
	'mekanism:block_copper',
	'mekanism:block_lead',
	'mekanism:block_uranium',
	'mekanism:block_steel',
	'mekanism:storage_blocks/steel',
	'mekanism:ingot_copper',
	'mekanism:ingot_lead',
	'mekanism:ingot_uranium',
	'mekanism:ingot_steel',
	//Remove Mekanism nugs; favor IE
	'mekanism:nugget_copper',
	'mekanism:nugget_lead',
	'mekanism:nugget_uranium',
	'mekanism:nugget_steel',
	//Remove Mekanism steel production
	'mekanism:dust_steel',
	//Disable enriched materials.
	//Effectively resource cost x8 for Mekanism recipes
	'mekanism:enriched_iron',
	'mekanism:enriched_carbon',
	'mekanism:enriched_redstone',
	'mekanism:enriched_diamond',
	'mekanism:enriched_refined_obsidian',
	'mekanism:enriched_gold',
	'mekanism:enriched_tin',

	//Tools/armor

	//Mekanism
	'mekanismtools:steel_pickaxe',
	'mekanismtools:steel_axe',
	'mekanismtools:steel_shovel',
	'mekanismtools:steel_hoe',
	'mekanismtools:steel_sword',
	'mekanismtools:steel_helmet',
	'mekanismtools:steel_chestplate',
	'mekanismtools:steel_leggings',
	'mekanismtools:steel_boots',
	//Should we remove paxels? I think we should. -Doxx
	'mekanismtools:wood_paxel',
	'mekanismtools:stone_paxel',
	'mekanismtools:iron_paxel',
	'mekanismtools:diamond_paxel',
	'mekanismtools:gold_paxel',
	'mekanismtools:netherite_paxel',
	'mekanismtools:bronze_paxel',
	'mekanismtools:lapis_lazuli_paxel',
	'mekanismtools:osmium_paxel',
	'mekanismtools:refined_glowstone_paxel',
	'mekanismtools:refined_obsidian_paxel',
	'mekanismtools:steel_paxel',
	'mekanismtools:steel_shield',
	//No Tree Punching
	//Remove mattocks
	'notreepunching:iron_mattock',
	'notreepunching:gold_mattock',
	'notreepunching:diamond_mattock',
	//Vanilla (Bypassed via flint)
	'minecraft:wooden_sword',
	'minecraft:wooden_shovel',
	'minecraft:wooden_pickaxe',
	'minecraft:wooden_axe',
	'minecraft:wooden_hoe',
	'minecraft:stone_sword',
	'minecraft:stone_shovel',
	'minecraft:stone_pickaxe',
	'minecraft:stone_axe',
	'minecraft:stone_hoe',


	//Machines/Crafting Components

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
	'mekanism:factory/basic/sawing'
	]
	idRemove.forEach(function (remove) {
		event.remove({id: remove})
	})
})
