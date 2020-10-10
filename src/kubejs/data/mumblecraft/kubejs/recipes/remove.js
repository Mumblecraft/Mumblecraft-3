// This file is for removing recipes

//Write to console that this file is executing
console.info('Kubejs Removing recipes')

events.listen('recipes', function (event) {
	//Ores and ingots

	//BluePower
	event.remove({id: 'bluepower:copper_ingot'})
	event.remove({id: 'bluepower:silver_ingot'})
	event.remove({id: 'bluepower:copper_block'})
	event.remove({id: 'bluepower:silver_block'})
	event.remove({id: 'bluepower:copper_ore'})
	event.remove({id: 'bluepower:silver_ore'})
	//Mekanism
	event.remove({id: 'mekanism:copper_ore'})
	event.remove({id: 'mekanism:lead_ore'})
	event.remove({id: 'mekanism:uranium_ore'})
	event.remove({id: 'mekanism:block_copper'})
	event.remove({id: 'mekanism:block_lead'})
	event.remove({id: 'mekanism:block_uranium'})
	event.remove({id: 'mekanism:block_steel'})
	event.remove({id: 'mekanism:ingot_copper'})
	event.remove({id: 'mekanism:ingot_lead'})
	event.remove({id: 'mekanism:ingot_uranium'})
	event.remove({id: 'mekanism:ingot_steel'})
	//Remove Mekanism nugs; favor IE
	event.remove({id: 'mekanism:nugget_copper'})
	event.remove({id: 'mekanism:nugget_lead'})
	event.remove({id: 'mekanism:nugget_uranium'})
	event.remove({id: 'mekanism:nugget_steel'})
	//Remove Mekanism steel production
	event.remove({id: 'mekanism:dust_steel'})
	event.remove({id: 'mekanism:enriched_iron'})

	//Tools/armor

	//Mekanism
	event.remove({id: 'mekanismtools:steel_pickaxe'})
	event.remove({id: 'mekanismtools:steel_axe'})
	event.remove({id: 'mekanismtools:steel_shovel'})
	event.remove({id: 'mekanismtools:steel_hoe'})
	event.remove({id: 'mekanismtools:steel_sword'})
	event.remove({id: 'mekanismtools:steel_helmet'})
	event.remove({id: 'mekanismtools:steel_chestplate'})
	event.remove({id: 'mekanismtools:steel_leggings'})
	event.remove({id: 'mekanismtools:steel_boots'})
	//Should we remove paxels? I think we should. -Doxx
	event.remove({id: 'mekanismtools:wood_paxel'})
	event.remove({id: 'mekanismtools:stone_paxel'})
	event.remove({id: 'mekanismtools:iron_paxel'})
	event.remove({id: 'mekanismtools:diamond_paxel'})
	event.remove({id: 'mekanismtools:gold_paxel'})
	event.remove({id: 'mekanismtools:netherite_paxel'})
	event.remove({id: 'mekanismtools:bronze_paxel'})
	event.remove({id: 'mekanismtools:lapis_lazuli_paxel'})
	event.remove({id: 'mekanismtools:osmium_paxel'})
	event.remove({id: 'mekanismtools:refined_glowstone_paxel'})
	event.remove({id: 'mekanismtools:refined_obsidian_paxel'})
	event.remove({id: 'mekanismtools:steel_paxel'})
	event.remove({id: 'mekanismtools:steel_shield'})
})
