// This file is for hiding items in JEI

//Write to console that this file is executing
console.info('Kubejs Removing blocks from JEI')

events.listen('jei.hide.items', function (event) {
	//Ores/ingots

	//BluePower
	event.hide('bluepower:copper_ingot')
	event.hide('bluepower:silver_ingot')
	event.hide('bluepower:copper_block')
	event.hide('bluepower:silver_block')
	event.hide('bluepower:copper_ore')
	event.hide('bluepower:silver_ore')
	//Mekanism
	event.hide('mekanism:copper_ore')
	event.hide('mekanism:lead_ore')
	event.hide('mekanism:uranium_ore')
	event.hide('mekanism:block_copper')
	event.hide('mekanism:block_lead')
	event.hide('mekanism:block_uranium')
	event.hide('mekanism:block_steel')
	event.hide('mekanism:ingot_lead')
	event.hide('mekanism:ingot_copper')
	event.hide('mekanism:ingot_uranium')
	event.hide('mekanism:ingot_steel')
	//Hide Mekanism nugs; favor IE
	event.hide('mekanism:nugget_uranium')
	event.hide('mekanism:nugget_copper')
	event.hide('mekanism:nugget_lead')
	event.hide('mekanism:nugget_steel')
	//Hide Mekanism steel production
	event.hide('mekanism:dust_steel')
	event.hide('mekanism:enriched_iron')
	
	//Tools/armor
	
	//Mekanism
	event.hide('mekanismtools:steel_pickaxe')
	event.hide('mekanismtools:steel_axe')
	event.hide('mekanismtools:steel_shovel')
	event.hide('mekanismtools:steel_hoe')
	event.hide('mekanismtools:steel_sword')
	event.hide('mekanismtools:steel_helmet')
	event.hide('mekanismtools:steel_chestplate')
	event.hide('mekanismtools:steel_leggings')
	event.hide('mekanismtools:steel_boots')
	//Should we remove paxels? I think we should. -Doxx
	event.hide('mekanismtools:wood_paxel')
	event.hide('mekanismtools:stone_paxel')
	event.hide('mekanismtools:iron_paxel')
	event.hide('mekanismtools:diamond_paxel')
	event.hide('mekanismtools:gold_paxel')
	event.hide('mekanismtools:netherite_paxel')
	event.hide('mekanismtools:bronze_paxel')
	event.hide('mekanismtools:lapis_lazuli_paxel')
	event.hide('mekanismtools:osmium_paxel')
	event.hide('mekanismtools:refined_glowstone_paxel')
	event.hide('mekanismtools:refined_obsidian_paxel')
	event.hide('mekanismtools:steel_paxel')
})