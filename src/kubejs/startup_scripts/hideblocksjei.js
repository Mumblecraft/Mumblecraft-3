// This file is for hiding items in JEI

//Write to console that this file is executing
console.info('Kubejs: removing blocks from JEI')

events.listen('jei.hide.items', function (event) {
	var idHide = [
	//AE2
	'appliedenergistics2:iron_dust',
	'appliedenergistics2:gold_dust',
	'appliedenergistics2:facade',
	
	//Immersive Engineering
	'immersiveengineering:ore_copper',
	'immersiveengineering:ore_uranium',
	
	//Metals
	'#forge:ores/iridium',
	'#forge:ores/ruby',
	'#forge:ores/sapphire',
	'#forge:ores/peridot',
	'#forge:ores/invar',
	'#forge:ores/signalum',
	'#forge:ores/lumium',
	'#forge:ores/enderium',
	'#forge:ores/cobalt',
	
	//Nuggets
	'emendatusenigmatica:iridium_nugget',
	'emendatusenigmatica:ruby_nugget',
	'emendatusenigmatica:sapphire_nugget',
	'emendatusenigmatica:peridot_nugget',
	'emendatusenigmatica:invar_nugget',
	'emendatusenigmatica:signalum_nugget',
	'emendatusenigmatica:lumium_nugget',
	'emendatusenigmatica:enderium_nugget',
	'emendatusenigmatica:cobalt_nugget',
	'create:brass_nugget',
	'immersiveengineering:nugget_constantan',
	'immersiveengineering:nugget_electrum',
	
	//Dust
	'emendatusenigmatica:iridium_dust',
	'emendatusenigmatica:ruby_dust',
	'emendatusenigmatica:sapphire_dust',
	'emendatusenigmatica:peridot_dust',
	'emendatusenigmatica:invar_dust',
	'emendatusenigmatica:signalum_dust',
	'emendatusenigmatica:lumium_dust',
	'emendatusenigmatica:enderium_dust',
	'emendatusenigmatica:cobalt_dust',
	
	//Chunk
	'emendatusenigmatica:iridium_chunk',
	'emendatusenigmatica:ruby_chunk',
	'emendatusenigmatica:sapphire_chunk',
	'emendatusenigmatica:peridot_chunk',
	'emendatusenigmatica:invar_chunk',
	'emendatusenigmatica:signalum_chunk',
	'emendatusenigmatica:lumium_chunk',
	'emendatusenigmatica:enderium_chunk',
	'emendatusenigmatica:cobalt_chunk',
	
	//Gear
	'emendatusenigmatica:iridium_gear',
	'emendatusenigmatica:ruby_gear',
	'emendatusenigmatica:sapphire_gear',
	'emendatusenigmatica:peridot_gear',
	'emendatusenigmatica:invar_gear',
	'emendatusenigmatica:signalum_gear',
	'emendatusenigmatica:lumium_gear',
	'emendatusenigmatica:enderium_gear',
	'emendatusenigmatica:cobalt_gear',
	
	//Plate
	'emendatusenigmatica:iridium_plate',
	'emendatusenigmatica:ruby_plate',
	'emendatusenigmatica:sapphire_plate',
	'emendatusenigmatica:peridot_plate',
	'emendatusenigmatica:invar_plate',
	'emendatusenigmatica:signalum_plate',
	'emendatusenigmatica:lumium_plate',
	'emendatusenigmatica:enderium_plate',
	'emendatusenigmatica:cobalt_plate',
	
	//Cluster
	'emendatusenigmatica:iridium_cluster',
	'emendatusenigmatica:ruby_cluster',
	'emendatusenigmatica:sapphire_cluster',
	'emendatusenigmatica:peridot_cluster',
	'emendatusenigmatica:invar_cluster',
	'emendatusenigmatica:signalum_cluster',
	'emendatusenigmatica:lumium_cluster',
	'emendatusenigmatica:enderium_cluster',
	'emendatusenigmatica:cobalt_cluster',
	
	//Clump
	'emendatusenigmatica:iridium_clump',
	'emendatusenigmatica:ruby_clump',
	'emendatusenigmatica:sapphire_clump',
	'emendatusenigmatica:peridot_clump',
	'emendatusenigmatica:invar_clump',
	'emendatusenigmatica:signalum_clump',
	'emendatusenigmatica:lumium_clump',
	'emendatusenigmatica:enderium_clump',
	'emendatusenigmatica:cobalt_clump',
	
	//Crystal
	'emendatusenigmatica:iridium_crystal',
	'emendatusenigmatica:ruby_crystal',
	'emendatusenigmatica:sapphire_crystal',
	'emendatusenigmatica:peridot_crystal',
	'emendatusenigmatica:invar_crystal',
	'emendatusenigmatica:signalum_crystal',
	'emendatusenigmatica:lumium_crystal',
	'emendatusenigmatica:enderium_crystal',
	'emendatusenigmatica:cobalt_crystal',
	
	//Dirty Dust
	'emendatusenigmatica:iridium_dirty_dust',
	'emendatusenigmatica:ruby_dirty_dust',
	'emendatusenigmatica:sapphire_dirty_dust',
	'emendatusenigmatica:peridot_dirty_dust',
	'emendatusenigmatica:invar_dirty_dust',
	'emendatusenigmatica:signalum_dirty_dust',
	'emendatusenigmatica:lumium_dirty_dust',
	'emendatusenigmatica:enderium_dirty_dust',
	'emendatusenigmatica:cobalt_dirty_dust',
	
	//Shard
	'emendatusenigmatica:iridium_shard',
	'emendatusenigmatica:ruby_shard',
	'emendatusenigmatica:sapphire_shard',
	'emendatusenigmatica:peridot_shard',
	'emendatusenigmatica:invar_shard',
	'emendatusenigmatica:signalum_shard',
	'emendatusenigmatica:lumium_shard',
	'emendatusenigmatica:enderium_shard',
	'emendatusenigmatica:cobalt_shard',
	
	//Crushed
	'emendatusenigmatica:iridium_crushed',
	'emendatusenigmatica:ruby_crushed',
	'emendatusenigmatica:sapphire_crushed',
	'emendatusenigmatica:peridot_crushed',
	'emendatusenigmatica:invar_crushed',
	'emendatusenigmatica:signalum_crushed',
	'emendatusenigmatica:lumium_crushed',
	'emendatusenigmatica:enderium_crushed',
	'emendatusenigmatica:cobalt_crushed',
	
	//Fragment
	'emendatusenigmatica:iridium_fragment',
	'emendatusenigmatica:ruby_fragment',
	'emendatusenigmatica:sapphire_fragment',
	'emendatusenigmatica:peridot_fragment',
	'emendatusenigmatica:invar_fragment',
	'emendatusenigmatica:signalum_fragment',
	'emendatusenigmatica:lumium_fragment',
	'emendatusenigmatica:enderium_fragment',
	'emendatusenigmatica:cobalt_fragment',
	
	//Gravel
	'emendatusenigmatica:iridium_gravel',
	'emendatusenigmatica:ruby_gravel',
	'emendatusenigmatica:sapphire_gravel',
	'emendatusenigmatica:peridot_gravel',
	'emendatusenigmatica:invar_gravel',
	'emendatusenigmatica:signalum_gravel',
	'emendatusenigmatica:lumium_gravel',
	'emendatusenigmatica:enderium_gravel',
	'emendatusenigmatica:cobalt_gravel',
	
	//Rod
	'immersiveposts:stick_lead',
	'immersiveposts:stick_silver',
	'immersiveposts:stick_nickel',
	'immersiveposts:stick_constantan',
	'immersiveposts:stick_electrum',
	'emendatusenigmatica:iridium_rod',
	'emendatusenigmatica:ruby_rod',
	'emendatusenigmatica:sapphire_rod',
	'emendatusenigmatica:peridot_rod',
	'emendatusenigmatica:invar_rod',
	'emendatusenigmatica:signalum_rod',
	'emendatusenigmatica:lumium_rod',
	'emendatusenigmatica:enderium_rod',
	'emendatusenigmatica:cobalt_rod',
	
	//Ingot
	'emendatusenigmatica:iridium_ingot',
	'emendatusenigmatica:ruby_ingot',
	'emendatusenigmatica:sapphire_ingot',
	'emendatusenigmatica:peridot_ingot',
	'emendatusenigmatica:invar_ingot',
	'emendatusenigmatica:signalum_ingot',
	'emendatusenigmatica:lumium_ingot',
	'emendatusenigmatica:enderium_ingot',
	'emendatusenigmatica:cobalt_ingot',
	'immersiveengineering:ingot_constantan',
	'immersiveengineering:ingot_electrum',
	
	//Molten Bucket
	'emendatusenigmatica:molten_iridium_bucket',
	'emendatusenigmatica:molten_ruby_bucket',
	'emendatusenigmatica:molten_sapphire_bucket',
	'emendatusenigmatica:molten_peridot_bucket',
	'emendatusenigmatica:molten_invar_bucket',
	'emendatusenigmatica:molten_signalum_bucket',
	'emendatusenigmatica:molten_lumium_bucket',
	'emendatusenigmatica:molten_enderium_bucket',
	'emendatusenigmatica:molten_cobalt_bucket',
	
	//Block
	'emendatusenigmatica:iridium_block',
	'emendatusenigmatica:ruby_block',
	'emendatusenigmatica:sapphire_block',
	'emendatusenigmatica:peridot_block',
	'emendatusenigmatica:invar_block',
	'emendatusenigmatica:signalum_block',
	'emendatusenigmatica:lumium_block',
	'emendatusenigmatica:enderium_block',
	'emendatusenigmatica:cobalt_block',
	
	]
	idHide.forEach(function (hide) {
		event.hide(hide)
	})
})