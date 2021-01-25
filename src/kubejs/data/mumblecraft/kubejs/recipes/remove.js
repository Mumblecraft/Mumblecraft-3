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
	'mekanism:processing/uranium/ingot/from_dust_blasting',
	'mekanism:processing/uranium/ingot/from_dust_smelting',
	'mekanism:processing/copper/ingot/from_dust_blasting',
	'mekanism:processing/copper/ingot/from_dust_smelting',
	'mekanism:processing/lead/ingot/from_dust_blasting',
	'mekanism:processing/lead/ingot/from_dust_smelting',
	'mekanism:processing/steel/ingot/from_dust_blasting',
	'mekanism:processing/steel/ingot/from_dust_smelting',
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

	//AE2
	'appliedenergistics2:misc/grindstone',
	//Immersive Engineering
	'immersiveengineering:crafting/conveyor_basic',
	'immersiveengineering:crafting/plate_copper_hammering',
	'immersiveengineering:crafting/plate_aluminum_hammering',
	'immersiveengineering:crafting/plate_lead_hammering',
	'immersiveengineering:crafting/plate_silver_hammering',
	'immersiveengineering:crafting/plate_nickel_hammering',
	'immersiveengineering:crafting/plate_uranium_hammering',
	'immersiveengineering:crafting/plate_constantan_hammering',
	'immersiveengineering:crafting/plate_electrum_hammering',
	'immersiveengineering:crafting/plate_steel_hammering',
	'immersiveengineering:crafting/plate_iron_hammering',
	'immersiveengineering:crafting/plate_gold_hammering',
	'immersiveengineering:crafting/light_engineering',
	//Engineer's Decor
	'engineersdecor:independent/small_electrical_furnace_recipe',
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
