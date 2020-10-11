// This file is for hiding items in JEI

//Write to console that this file is executing
console.info('Kubejs: removing blocks from JEI')

events.listen('jei.hide.items', function (event) {
	var idHide = [
	//Ores/ingots

	//BluePower
	'bluepower:copper_ingot',
	'bluepower:silver_ingot',
	'bluepower:copper_block',
	'bluepower:silver_block',
	'bluepower:copper_ore',
	'bluepower:silver_ore',
	//Mekanism
	'mekanism:copper_ore',
	'mekanism:lead_ore',
	'mekanism:uranium_ore',
	'mekanism:block_copper',
	'mekanism:block_lead',
	'mekanism:block_uranium',
	'mekanism:block_steel',
	'mekanism:ingot_lead',
	'mekanism:ingot_copper',
	'mekanism:ingot_uranium',
	'mekanism:ingot_steel',
	//Hide Mekanism nugs; favor IE
	'mekanism:nugget_uranium',
	'mekanism:nugget_copper',
	'mekanism:nugget_lead',
	'mekanism:nugget_steel',
	//Hide Mekanism steel production
	'mekanism:dust_steel',
	'mekanism:enriched_iron',
	
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
	//Disable enriched materials.
	//Effectively resource cost x8 for Mekanism recipes
	'mekanism:enriched_carbon',
	'mekanism:enriched_redstone',
	'mekanism:enriched_diamond',
	'mekanism:enriched_obsidian',
	'mekanism:enriched_gold',
	'mekanism:enriched_tin'
	]
	idHide.forEach(function (hide) {
		event.hide(hide)
	})
})