// This file is for hiding items in JEI

//Write to console that this file is executing
console.info('Kubejs: removing blocks from JEI')

events.listen('jei.hide.items', function (event) {
	var idHide = [
	//AE2
	'appliedenergistics2:iron_dust',
	'appliedenergistics2:gold_dust',
	
	//Immersive Engineering
	'immersiveengineering:ore_copper',
	'immersiveengineering:ore_uranium',
	'immersiveengineering:wire_lead',
	
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
	'emendatusenigmatica:cast_iron_nugget',
	
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
	'emendatusenigmatica:cast_iron_dust',
	'emendatusenigmatica:bitumen_dust',
	'emendatusenigmatica:cinnabar_dust',
	'emendatusenigmatica:apatite_dust',
	'emendatusenigmatica:potassium_nitrate_dust',
	'emendatusenigmatica:source_dust',
	'emendatusenigmatica:dimensional_dust',
	'emendatusenigmatica:thallasium_dust',
	'emendatusenigmatica:iesnium_dust',
	'emendatusenigmatica:regalium_dust',
	'emendatusenigmatica:utherium_dust',
	'emendatusenigmatica:froststeel_dust',
	'emendatusenigmatica:cloggrum_dust',
	'emendatusenigmatica:nebu_dust',

	//Chunk
	'emendatusenigmatica:iridium_chunk',
	'emendatusenigmatica:ruby_chunk',
	'emendatusenigmatica:sapphire_chunk',
	'emendatusenigmatica:peridot_chunk',
	'emendatusenigmatica:cobalt_chunk',
	'emendatusenigmatica:coal_chunk',
	'emendatusenigmatica:iron_chunk',
	'emendatusenigmatica:gold_chunk',
	'emendatusenigmatica:diamond_chunk',
	'emendatusenigmatica:emerald_chunk',
	'emendatusenigmatica:lapis_chunk',
	'emendatusenigmatica:redstone_chunk',
	'emendatusenigmatica:quartz_chunk',
	'emendatusenigmatica:certus_quartz_chunk',
	'emendatusenigmatica:charged_certus_quartz_chunk',
	'emendatusenigmatica:fluorite_chunk',
	'emendatusenigmatica:bitumen_chunk',
	
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
	'emendatusenigmatica:emerald_gear',
	'emendatusenigmatica:quartz_gear',
	'emendatusenigmatica:aluminum_gear',
	'emendatusenigmatica:silver_gear',
	'emendatusenigmatica:lead_gear',
	'emendatusenigmatica:nickel_gear',
	'emendatusenigmatica:uranium_gear',
	'emendatusenigmatica:osmium_gear',
	'emendatusenigmatica:tin_gear',
	'emendatusenigmatica:zinc_gear',
	'emendatusenigmatica:constantan_gear',
	'emendatusenigmatica:electrum_gear',
	'emendatusenigmatica:cast_iron_gear',
	'emendatusenigmatica:lapis_gear',
	
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
	'emendatusenigmatica:emerald_plate',
	'emendatusenigmatica:quartz_plate',
	'emendatusenigmatica:cast_iron_plate',
	'emendatusenigmatica:tin_plate',
	
	//Cluster
	'emendatusenigmatica:iridium_cluster',
	'emendatusenigmatica:ruby_cluster',
	'emendatusenigmatica:sapphire_cluster',
	'emendatusenigmatica:peridot_cluster',
	'emendatusenigmatica:cobalt_cluster',
	'emendatusenigmatica:coal_cluster',
	'emendatusenigmatica:iron_cluster',
	'emendatusenigmatica:gold_cluster',
	'emendatusenigmatica:diamond_cluster',
	'emendatusenigmatica:emerald_cluster',
	'emendatusenigmatica:lapis_cluster',
	'emendatusenigmatica:redstone_cluster',
	'emendatusenigmatica:copper_cluster',
	'emendatusenigmatica:aluminum_cluster',
	'emendatusenigmatica:silver_cluster',
	'emendatusenigmatica:lead_cluster',
	'emendatusenigmatica:nickel_cluster',
	'emendatusenigmatica:uranium_cluster',
	'emendatusenigmatica:osmium_cluster',
	'emendatusenigmatica:tin_cluster',
	'emendatusenigmatica:zinc_cluster',
	'emendatusenigmatica:quartz_cluster',
	'emendatusenigmatica:certus_quartz_cluster',
	'emendatusenigmatica:charged_certus_quartz_cluster',
	'emendatusenigmatica:fluorite_cluster',
	'emendatusenigmatica:bitumen_cluster',
	'emendatusenigmatica:cinnabar_cluster',
	'emendatusenigmatica:apatite_cluster',
	'emendatusenigmatica:sulfur_cluster',
	'emendatusenigmatica:potassium_nitrate_cluster',
	'emendatusenigmatica:arcane_cluster',
	'emendatusenigmatica:dimensional_cluster',
	'byg:ametrine_cluster',
	'byg:subzero_crystal_cluster',

	//Clump 
	'emendatusenigmatica:iridium_clump',
	'emendatusenigmatica:ruby_clump',
	'emendatusenigmatica:sapphire_clump',
	'emendatusenigmatica:peridot_clump',
	'emendatusenigmatica:cobalt_clump',
	'emendatusenigmatica:coal_clump',
	'emendatusenigmatica:iron_clump',
	'emendatusenigmatica:gold_clump',
	'emendatusenigmatica:diamond_clump',
	'emendatusenigmatica:emerald_clump',
	'emendatusenigmatica:lapis_clump',
	'emendatusenigmatica:redstone_clump',
	'emendatusenigmatica:copper_clump',
	'emendatusenigmatica:aluminum_clump',
	'emendatusenigmatica:silver_clump',
	'emendatusenigmatica:lead_clump',
	'emendatusenigmatica:nickel_clump',
	'emendatusenigmatica:uranium_clump',
	'emendatusenigmatica:osmium_clump',
	'emendatusenigmatica:tin_clump',
	'emendatusenigmatica:zinc_clump',
	'emendatusenigmatica:quartz_clump',
	'emendatusenigmatica:certus_quartz_clump',
	'emendatusenigmatica:charged_certus_quartz_clump',
	'emendatusenigmatica:fluorite_clump',
	'emendatusenigmatica:bitumen_clump',
	'emendatusenigmatica:cinnabar_clump',
	'emendatusenigmatica:apatite_clump',
	'emendatusenigmatica:sulfur_clump',
	'emendatusenigmatica:potassium_nitrate_clump',
	'emendatusenigmatica:source_clump',
	'emendatusenigmatica:dimensional_clump',
	'emendatusenigmatica:thallasium_clump',
	'emendatusenigmatica:iesnium_clump',
	'emendatusenigmatica:regalium_clump',
	'emendatusenigmatica:utherium_clump',
	'emendatusenigmatica:froststeel_clump',
	'emendatusenigmatica:cloggrum_clump',
	'emendatusenigmatica:nebu_clump',
	
	//Crystal
	'emendatusenigmatica:iridium_crystal',
	'emendatusenigmatica:ruby_crystal',
	'emendatusenigmatica:sapphire_crystal',
	'emendatusenigmatica:peridot_crystal',
	'emendatusenigmatica:cobalt_crystal',
	'emendatusenigmatica:coal_crystal',
	'emendatusenigmatica:diamond_crystal',
	'emendatusenigmatica:emerald_crystal',
	'emendatusenigmatica:lapis_crystal',
	'emendatusenigmatica:redstone_crystal',
	'emendatusenigmatica:aluminum_crystal',
	'emendatusenigmatica:silver_crystal',
	'emendatusenigmatica:nickel_crystal',
	'emendatusenigmatica:zinc_crystal',
	'emendatusenigmatica:quartz_crystal',
	'emendatusenigmatica:certus_quartz_crystal',
	'emendatusenigmatica:charged_certus_quartz_crystal',
	'emendatusenigmatica:fluorite_crystal',
	'emendatusenigmatica:bitumen_crystal',
	'emendatusenigmatica:cinnabar_crystal',
	'emendatusenigmatica:apatite_crystal',
	'emendatusenigmatica:sulfur_crystal',
	'emendatusenigmatica:potassium_nitrate_crystal',
	'emendatusenigmatica:source_crystal',
	'emendatusenigmatica:dimensional_crystal',
	'emendatusenigmatica:thallasium_crystal',
	'emendatusenigmatica:iesnium_crystal',
	'emendatusenigmatica:regalium_crystal',
	'emendatusenigmatica:utherium_crystal',
	'emendatusenigmatica:froststeel_crystal',
	'emendatusenigmatica:cloggrum_crystal',
	'emendatusenigmatica:nebu_crystal',

	
	//Dirty Dust
	'emendatusenigmatica:iridium_dirty_dust',
	'emendatusenigmatica:ruby_dirty_dust',
	'emendatusenigmatica:sapphire_dirty_dust',
	'emendatusenigmatica:peridot_dirty_dust',
	'emendatusenigmatica:cobalt_dirty_dust',
	'emendatusenigmatica:coal_dirty_dust',
	'emendatusenigmatica:diamond_dirty_dust',
	'emendatusenigmatica:emerald_dirty_dust',
	'emendatusenigmatica:lapis_dirty_dust',
	'emendatusenigmatica:redstone_dirty_dust',
	'emendatusenigmatica:aluminum_dirty_dust',
	'emendatusenigmatica:silver_dirty_dust',
	'emendatusenigmatica:nickel_dirty_dust',
	'emendatusenigmatica:zinc_dirty_dust',
	'emendatusenigmatica:quartz_dirty_dust',
	'emendatusenigmatica:certus_quartz_dirty_dust',
	'emendatusenigmatica:charged_certus_quartz_dirty_dust',
	'emendatusenigmatica:fluorite_dirty_dust',
	'emendatusenigmatica:bitumen_dirty_dust',
	'emendatusenigmatica:cinnabar_dirty_dust',
	'emendatusenigmatica:apatite_dirty_dust',
	'emendatusenigmatica:sulfur_dirty_dust',
	'emendatusenigmatica:potassium_nitrate_dirty_dust',
	'emendatusenigmatica:source_dirty_dust',
	'emendatusenigmatica:dimensional_dirty_dust',
	'emendatusenigmatica:thallasium_dirty_dust',
	'emendatusenigmatica:iesnium_dirty_dust',
	'emendatusenigmatica:regalium_dirty_dust',
	'emendatusenigmatica:utherium_dirty_dust',
	'emendatusenigmatica:froststeel_dirty_dust',
	'emendatusenigmatica:cloggrum_dirty_dust',
	'emendatusenigmatica:nebu_dirty_dust',
	
	//Shard
	'emendatusenigmatica:iridium_shard',
	'emendatusenigmatica:ruby_shard',
	'emendatusenigmatica:sapphire_shard',
	'emendatusenigmatica:peridot_shard',
	'emendatusenigmatica:cobalt_shard',
	'emendatusenigmatica:coal_shard',
	'emendatusenigmatica:diamond_shard',
	'emendatusenigmatica:emerald_shard',
	'emendatusenigmatica:lapis_shard',
	'emendatusenigmatica:redstone_shard',
	'emendatusenigmatica:aluminum_shard',
	'emendatusenigmatica:silver_shard',
	'emendatusenigmatica:nickel_shard',
	'emendatusenigmatica:zinc_shard',
	'emendatusenigmatica:quartz_shard',
	'emendatusenigmatica:certus_quartz_shard',
	'emendatusenigmatica:charged_certus_quartz_shard',
	'emendatusenigmatica:fluorite_shard',
	'emendatusenigmatica:bitumen_shard',
	'emendatusenigmatica:cinnabar_shard',
	'emendatusenigmatica:apatite_shard',
	'emendatusenigmatica:sulfur_shard',
	'emendatusenigmatica:potassium_nitrate_shard',
	'emendatusenigmatica:source_shard',
	'emendatusenigmatica:dimensional_shard',
	'emendatusenigmatica:thallasium_shard',
	'emendatusenigmatica:iesnium_shard',
	'emendatusenigmatica:regalium_shard',
	'emendatusenigmatica:utherium_shard',
	'emendatusenigmatica:froststeel_shard',
	'emendatusenigmatica:cloggrum_shard',
	'emendatusenigmatica:nebu_shard',
	
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
	'emendatusenigmatica:coal_crushed',
	'emendatusenigmatica:diamond_crushed',
	'emendatusenigmatica:emerald_crushed',
	'emendatusenigmatica:lapis_crushed',
	'emendatusenigmatica:redstone_crushed',
	'emendatusenigmatica:quartz_crushed',
	'emendatusenigmatica:ancient_debris_crushed',
	'emendatusenigmatica:certus_quartz_crushed',
	'emendatusenigmatica:charged_certus_quartz_crushed',
	'emendatusenigmatica:fluorite_crushed',
	'emendatusenigmatica:bitumen_crushed',
	'emendatusenigmatica:cinnabar_crushed',
	'emendatusenigmatica:apatite_crushed',
	'emendatusenigmatica:sulfur_crushed',
	'emendatusenigmatica:potassium_nitrate_crushed',
	'emendatusenigmatica:arcane_crushed',
	'emendatusenigmatica:dimensional_crushed',
	'emendatusenigmatica:bronze_crushed',
	'emendatusenigmatica:constantan_crushed',
	'emendatusenigmatica:electrum_crushed',
	'emendatusenigmatica:steel_crushed',
	'emendatusenigmatica:thallasium_crushed',
	'emendatusenigmatica:iesnium_crushed',
	'emendatusenigmatica:regalium_crushed',
	'emendatusenigmatica:utherium_crushed',
	'emendatusenigmatica:froststeel_crushed',
	'emendatusenigmatica:cloggrum_crushed',
	'emendatusenigmatica:nebu_crushed',
	
	//Fragment
	'emendatusenigmatica:iridium_fragment',
	'emendatusenigmatica:ruby_fragment',
	'emendatusenigmatica:sapphire_fragment',
	'emendatusenigmatica:peridot_fragment',
	'emendatusenigmatica:cobalt_fragment',
	'emendatusenigmatica:coal_fragment',
	'emendatusenigmatica:diamond_fragment',
	'emendatusenigmatica:emerald_fragment',
	'emendatusenigmatica:lapis_fragment',
	'emendatusenigmatica:redstone_fragment',
	'emendatusenigmatica:copper_fragment',
	'emendatusenigmatica:aluminum_fragment',
	'emendatusenigmatica:silver_fragment',
	'emendatusenigmatica:lead_fragment',
	'emendatusenigmatica:nickel_fragment',
	'emendatusenigmatica:uranium_fragment',
	'emendatusenigmatica:osmium_fragment',
	'emendatusenigmatica:tin_fragment',
	'emendatusenigmatica:zinc_fragment',
	'emendatusenigmatica:quartz_fragment',
	'emendatusenigmatica:certus_quartz_fragment',
	'emendatusenigmatica:charged_certus_quartz_fragment',
	'emendatusenigmatica:fluorite_fragment',
	'emendatusenigmatica:bitumen_fragment',
	'emendatusenigmatica:cinnabar_fragment',
	'emendatusenigmatica:apatite_fragment',
	'emendatusenigmatica:sulfur_fragment',
	'emendatusenigmatica:potassium_nitrate_fragment',
	'emendatusenigmatica:source_fragment',
	'emendatusenigmatica:dimensional_fragment',
	'emendatusenigmatica:thallasium_fragment',
	'emendatusenigmatica:iesnium_fragment',
	'emendatusenigmatica:regalium_fragment',
	'emendatusenigmatica:utherium_fragment',
	'emendatusenigmatica:froststeel_fragment',
	'emendatusenigmatica:cloggrum_fragment',
	'emendatusenigmatica:nebu_fragment',
	
	//Gravel
	'emendatusenigmatica:iridium_gravel',
	'emendatusenigmatica:ruby_gravel',
	'emendatusenigmatica:sapphire_gravel',
	'emendatusenigmatica:peridot_gravel',
	'emendatusenigmatica:cobalt_gravel',
	'emendatusenigmatica:coal_gravel',
	'emendatusenigmatica:diamond_gravel',
	'emendatusenigmatica:emerald_gravel',
	'emendatusenigmatica:lapis_gravel',
	'emendatusenigmatica:redstone_gravel',
	'emendatusenigmatica:copper_gravel',
	'emendatusenigmatica:aluminum_gravel',
	'emendatusenigmatica:silver_gravel',
	'emendatusenigmatica:lead_gravel',
	'emendatusenigmatica:nickel_gravel',
	'emendatusenigmatica:uranium_gravel',
	'emendatusenigmatica:osmium_gravel',
	'emendatusenigmatica:tin_gravel',
	'emendatusenigmatica:zinc_gravel',
	'emendatusenigmatica:quartz_gravel',
	'emendatusenigmatica:certus_quartz_gravel',
	'emendatusenigmatica:charged_certus_quartz_gravel',
	'emendatusenigmatica:fluorite_gravel',
	'emendatusenigmatica:bitumen_gravel',
	'emendatusenigmatica:cinnabar_gravel',
	'emendatusenigmatica:apatite_gravel',
	'emendatusenigmatica:sulfur_gravel',
	'emendatusenigmatica:potassium_nitrate_gravel',
	'emendatusenigmatica:source_gravel',
	'emendatusenigmatica:dimensional_gravel',
	'emendatusenigmatica:thallasium_gravel',
	'emendatusenigmatica:iesnium_gravel',
	'emendatusenigmatica:regalium_gravel',
	'emendatusenigmatica:utherium_gravel',
	'emendatusenigmatica:froststeel_gravel',
	'emendatusenigmatica:cloggrum_gravel',
	'emendatusenigmatica:nebu_gravel',
	
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
	'emendatusenigmatica:emerald_rod',
	'emendatusenigmatica:quartz_rod',
	'emendatusenigmatica:aluminum_rod',
	'emendatusenigmatica:osmium_rod',
	'emendatusenigmatica:constantan_rod',
	'emendatusenigmatica:electrum_rod',
	'emendatusenigmatica:cast_iron_rod',
	'emendatusenigmatica:diamond_rod',
	'emendatusenigmatica:lapis_rod',
	'emendatusenigmatica:brass_rod',
	'emendatusenigmatica:tin_rod',
	'emendatusenigmatica:zinc_rod',
	'emendatusenigmatica:bronze_rod',
	
	//Ores
	'#forge:ores/cobalt',
	'#forge:ores/iridium',
	'#forge:ores/sulphur',
	'#forge:ores/cinnabar',
	'#forge:ores/apatite',
	'#forge:ores/potassium_nitrate',
	'#forge:ores/arcane',
	'#forge:ores/dimensional',
	'#forge:ores/ruby',
	'#forge:ores/sapphire',
	'#forge:ores/peridot',
	'emendatusenigmatica:cinnabar_gem',
	'emendatusenigmatica:apatite_gem',
	'emendatusenigmatica:sulfur_gem',
	'emendatusenigmatica:potassium_nitrate_gem',
	'emendatusenigmatica:source_gem',
	'emendatusenigmatica:dimensional_gem',
	'emendatusenigmatica:thallasium_gem',
	'emendatusenigmatica:iesnium_gem',
	'emendatusenigmatica:regalium_gem',
	'emendatusenigmatica:utherium_gem',
	'emendatusenigmatica:froststeel_gem',
	'emendatusenigmatica:cloggrum_gem',
	'emendatusenigmatica:nebu_gem',
	
	//Ingot
	'emendatusenigmatica:ruby_ingot',
	'emendatusenigmatica:sapphire_ingot',
	'emendatusenigmatica:peridot_ingot',
	'emendatusenigmatica:cobalt_ingot',
	'emendatusenigmatica:iridium_ingot',
	'emendatusenigmatica:invar_ingot',
	'emendatusenigmatica:signalum_ingot',
	'emendatusenigmatica:lumium_ingot',
	'emendatusenigmatica:enderium_ingot',
	'emendatusenigmatica:cast_iron_ingot',
	
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
	'emendatusenigmatica:molten_cast_iron_bucket',
	
	//Slurry
	
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
	'emendatusenigmatica:cinnabar_block',
	'emendatusenigmatica:apatite_block',
	'emendatusenigmatica:potassium_nitrate_block',
	'emendatusenigmatica:arcane_block',
	'emendatusenigmatica:dimensional_block',
	'emendatusenigmatica:cast_iron_block',
	'emendatusenigmatica:sulfur_block',
	
	//Remove Ores from unused stone types
	//Netherrack
	'emendatusenigmatica:coal_netherrack_ore',
	'emendatusenigmatica:iron_netherrack_ore',
	'emendatusenigmatica:diamond_netherrack_ore',
	'emendatusenigmatica:emerald_netherrack_ore',
	'emendatusenigmatica:lapis_netherrack_ore',
	'emendatusenigmatica:redstone_netherrack_ore',
	'emendatusenigmatica:certus_quartz_netherrack_ore',
	'emendatusenigmatica:charged_certus_quartz_netherrack_ore',
	'emendatusenigmatica:fluorite_netherrack_ore',
	'emendatusenigmatica:bitumen_netherrack_ore',
	
	//Basalt
	'emendatusenigmatica:coal_basalt_ore',
	'emendatusenigmatica:iron_basalt_ore',
	'emendatusenigmatica:diamond_basalt_ore',
	'emendatusenigmatica:emerald_basalt_ore',
	'emendatusenigmatica:lapis_basalt_ore',
	'emendatusenigmatica:redstone_basalt_ore',
	'emendatusenigmatica:certus_quartz_basalt_ore',
	'emendatusenigmatica:charged_certus_quartz_basalt_ore',
	'emendatusenigmatica:fluorite_basalt_ore',
	'emendatusenigmatica:bitumen_basalt_ore',
	
	//Soul Soil
	'emendatusenigmatica:coal_soul_soil_ore',
	'emendatusenigmatica:iron_soul_soil_ore',
	'emendatusenigmatica:diamond_soul_soil_ore',
	'emendatusenigmatica:emerald_soul_soil_ore',
	'emendatusenigmatica:lapis_soul_soil_ore',
	'emendatusenigmatica:redstone_soul_soil_ore',
	'emendatusenigmatica:certus_quartz_soul_soil_ore',
	'emendatusenigmatica:charged_certus_quartz_soul_soil_ore',
	'emendatusenigmatica:fluorite_soul_soil_ore',
	'emendatusenigmatica:bitumen_soul_soil_ore',
	
	//End Stone
	'emendatusenigmatica:coal_end_stone_ore',
	'emendatusenigmatica:iron_end_stone_ore',
	'emendatusenigmatica:gold_end_stone_ore',
	'emendatusenigmatica:diamond_end_stone_ore',
	'emendatusenigmatica:emerald_end_stone_ore',
	'emendatusenigmatica:lapis_end_stone_ore',
	'emendatusenigmatica:redstone_end_stone_ore',
	'emendatusenigmatica:quartz_end_stone_ore',
	'emendatusenigmatica:certus_quartz_end_stone_ore',
	'emendatusenigmatica:charged_certus_quartz_end_stone_ore',
	'emendatusenigmatica:fluorite_end_stone_ore',
	'emendatusenigmatica:bitumen_end_stone_ore',
	
	//Jasper
	'emendatusenigmatica:coal_jasper_ore',
	'emendatusenigmatica:iron_jasper_ore',
	'emendatusenigmatica:gold_jasper_ore',
	'emendatusenigmatica:diamond_jasper_ore',
	'emendatusenigmatica:emerald_jasper_ore',
	'emendatusenigmatica:lapis_jasper_ore',
	'emendatusenigmatica:redstone_jasper_ore',
	'emendatusenigmatica:quartz_jasper_ore',
	'emendatusenigmatica:certus_quartz_jasper_ore',
	'emendatusenigmatica:charged_certus_quartz_jasper_ore',
	'emendatusenigmatica:fluorite_jasper_ore',
	'emendatusenigmatica:bitumen_jasper_ore',
	
	//Marble
	'emendatusenigmatica:coal_marble_ore',
	'emendatusenigmatica:iron_marble_ore',
	'emendatusenigmatica:gold_marble_ore',
	'emendatusenigmatica:diamond_marble_ore',
	'emendatusenigmatica:emerald_marble_ore',
	'emendatusenigmatica:lapis_marble_ore',
	'emendatusenigmatica:redstone_marble_ore',
	'emendatusenigmatica:quartz_marble_ore',
	'emendatusenigmatica:certus_quartz_marble_ore',
	'emendatusenigmatica:charged_certus_quartz_marble_ore',
	'emendatusenigmatica:fluorite_marble_ore',
	'emendatusenigmatica:bitumen_marble_ore',
	
	//Slate
	'emendatusenigmatica:coal_slate_ore',
	'emendatusenigmatica:iron_slate_ore',
	'emendatusenigmatica:gold_slate_ore',
	'emendatusenigmatica:diamond_slate_ore',
	'emendatusenigmatica:emerald_slate_ore',
	'emendatusenigmatica:lapis_slate_ore',
	'emendatusenigmatica:redstone_slate_ore',
	'emendatusenigmatica:quartz_slate_ore',
	'emendatusenigmatica:certus_quartz_slate_ore',
	'emendatusenigmatica:charged_certus_quartz_slate_ore',
	'emendatusenigmatica:fluorite_slate_ore',
	'emendatusenigmatica:bitumen_slate_ore',
	
	//Deepslate
	'emendatusenigmatica:coal_deepslate_ore',
	'emendatusenigmatica:iron_deepslate_ore',
	'emendatusenigmatica:gold_deepslate_ore',
	'emendatusenigmatica:diamond_deepslate_ore',
	'emendatusenigmatica:emerald_deepslate_ore',
	'emendatusenigmatica:lapis_deepslate_ore',
	'emendatusenigmatica:redstone_deepslate_ore',
	'emendatusenigmatica:quartz_deepslate_ore',
	'emendatusenigmatica:certus_quartz_deepslate_ore',
	'emendatusenigmatica:charged_certus_quartz_deepslate_ore',
	'emendatusenigmatica:fluorite_deepslate_ore',
	
	//Brimstone
	'emendatusenigmatica:coal_brimstone_ore',
	'emendatusenigmatica:iron_brimstone_ore',
	'emendatusenigmatica:diamond_brimstone_ore',
	'emendatusenigmatica:emerald_brimstone_ore',
	'emendatusenigmatica:lapis_brimstone_ore',
	'emendatusenigmatica:redstone_brimstone_ore',
	'emendatusenigmatica:certus_quartz_brimstone_ore',
	'emendatusenigmatica:charged_certus_quartz_brimstone_ore',
	'emendatusenigmatica:fluorite_brimstone_ore',
	'emendatusenigmatica:bitumen_brimstone_ore',
	
	//Subzero Ash Block
	'emendatusenigmatica:coal_subzero_ash_ore',
	'emendatusenigmatica:iron_subzero_ash_ore',
	'emendatusenigmatica:diamond_subzero_ash_ore',
	'emendatusenigmatica:emerald_subzero_ash_ore',
	'emendatusenigmatica:lapis_subzero_ash_ore',
	'emendatusenigmatica:redstone_subzero_ash_ore',
	'emendatusenigmatica:certus_quartz_subzero_ash_ore',
	'emendatusenigmatica:charged_certus_quartz_subzero_ash_ore',
	'emendatusenigmatica:fluorite_subzero_ash_ore',
	'emendatusenigmatica:bitumen_subzero_ash_ore',
	
	//Blue Netherrack
	'emendatusenigmatica:coal_blue_netherrack_ore',
	'emendatusenigmatica:iron_blue_netherrack_ore',
	'emendatusenigmatica:diamond_blue_netherrack_ore',
	'emendatusenigmatica:emerald_blue_netherrack_ore',
	'emendatusenigmatica:lapis_blue_netherrack_ore',
	'emendatusenigmatica:redstone_blue_netherrack_ore',
	'emendatusenigmatica:certus_quartz_blue_netherrack_ore',
	'emendatusenigmatica:charged_certus_quartz_blue_netherrack_ore',
	'emendatusenigmatica:fluorite_blue_netherrack_ore',
	'emendatusenigmatica:bitumen_blue_netherrack_ore',
	
	//Nylium Soul Soil
	'emendatusenigmatica:coal_nylium_soul_soil_ore',
	'emendatusenigmatica:iron_nylium_soul_soil_ore',
	'emendatusenigmatica:diamond_nylium_soul_soil_ore',
	'emendatusenigmatica:emerald_nylium_soul_soil_ore',
	'emendatusenigmatica:lapis_nylium_soul_soil_ore',
	'emendatusenigmatica:redstone_nylium_soul_soil_ore',
	'emendatusenigmatica:certus_quartz_nylium_soul_soil_ore',
	'emendatusenigmatica:charged_certus_quartz_nylium_soul_soil_ore',
	'emendatusenigmatica:fluorite_nylium_soul_soil_ore',
	'emendatusenigmatica:bitumen_nylium_soul_soil_ore',
	
	//Ether Stone
	'emendatusenigmatica:coal_ether_stone_ore',
	'emendatusenigmatica:iron_ether_stone_ore',
	'emendatusenigmatica:gold_ether_stone_ore',
	'emendatusenigmatica:diamond_ether_stone_ore',
	'emendatusenigmatica:emerald_ether_stone_ore',
	'emendatusenigmatica:lapis_ether_stone_ore',
	'emendatusenigmatica:redstone_ether_stone_ore',
	'emendatusenigmatica:quartz_ether_stone_ore',
	'emendatusenigmatica:certus_quartz_ether_stone_ore',
	'emendatusenigmatica:charged_certus_quartz_ether_stone_ore',
	'emendatusenigmatica:fluorite_ether_stone_ore',
	'emendatusenigmatica:bitumen_ether_stone_ore',
	
	//Cryptic Stone
	'emendatusenigmatica:coal_cryptic_stone_ore',
	'emendatusenigmatica:iron_cryptic_stone_ore',
	'emendatusenigmatica:gold_cryptic_stone_ore',
	'emendatusenigmatica:diamond_cryptic_stone_ore',
	'emendatusenigmatica:emerald_cryptic_stone_ore',
	'emendatusenigmatica:lapis_cryptic_stone_ore',
	'emendatusenigmatica:redstone_cryptic_stone_ore',
	'emendatusenigmatica:quartz_cryptic_stone_ore',
	'emendatusenigmatica:certus_quartz_cryptic_stone_ore',
	'emendatusenigmatica:charged_certus_quartz_cryptic_stone_ore',
	'emendatusenigmatica:fluorite_cryptic_stone_ore',
	'emendatusenigmatica:bitumen_cryptic_stone_ore',
	
	//Flavolite
	'emendatusenigmatica:coal_flavolite_ore',
	'emendatusenigmatica:iron_flavolite_ore',
	'emendatusenigmatica:gold_flavolite_ore',
	'emendatusenigmatica:diamond_flavolite_ore',
	'emendatusenigmatica:emerald_flavolite_ore',
	'emendatusenigmatica:lapis_flavolite_ore',
	'emendatusenigmatica:redstone_flavolite_ore',
	'emendatusenigmatica:quartz_flavolite_ore',
	'emendatusenigmatica:certus_quartz_flavolite_ore',
	'emendatusenigmatica:charged_certus_quartz_flavolite_ore',
	'emendatusenigmatica:fluorite_flavolite_ore',
	'emendatusenigmatica:bitumen_flavolite_ore',
	
	//Sulphuric Rock
	'emendatusenigmatica:coal_sulphuric_rock_ore',
	'emendatusenigmatica:iron_sulphuric_rock_ore',
	'emendatusenigmatica:gold_sulphuric_rock_ore',
	'emendatusenigmatica:diamond_sulphuric_rock_ore',
	'emendatusenigmatica:emerald_sulphuric_rock_ore',
	'emendatusenigmatica:lapis_sulphuric_rock_ore',
	'emendatusenigmatica:redstone_sulphuric_rock_ore',
	'emendatusenigmatica:quartz_sulphuric_rock_ore',
	'emendatusenigmatica:certus_quartz_sulphuric_rock_ore',
	'emendatusenigmatica:charged_certus_quartz_sulphuric_rock_ore',
	'emendatusenigmatica:fluorite_sulphuric_rock_ore',
	'emendatusenigmatica:bitumen_sulphuric_rock_ore',
	
	//Violecite
	'emendatusenigmatica:coal_violecite_ore',
	'emendatusenigmatica:iron_violecite_ore',
	'emendatusenigmatica:gold_violecite_ore',
	'emendatusenigmatica:diamond_violecite_ore',
	'emendatusenigmatica:emerald_violecite_ore',
	'emendatusenigmatica:lapis_violecite_ore',
	'emendatusenigmatica:redstone_violecite_ore',
	'emendatusenigmatica:quartz_violecite_ore',
	'emendatusenigmatica:certus_quartz_violecite_ore',
	'emendatusenigmatica:charged_certus_quartz_violecite_ore',
	'emendatusenigmatica:fluorite_violecite_ore',
	'emendatusenigmatica:bitumen_violecite_ore',
	
	//Raw Marble
	'emendatusenigmatica:coal_raw_marble_ore',
	'emendatusenigmatica:iron_raw_marble_ore',
	'emendatusenigmatica:gold_raw_marble_ore',
	'emendatusenigmatica:diamond_raw_marble_ore',
	'emendatusenigmatica:emerald_raw_marble_ore',
	'emendatusenigmatica:lapis_raw_marble_ore',
	'emendatusenigmatica:redstone_raw_marble_ore',
	'emendatusenigmatica:quartz_raw_marble_ore',
	'emendatusenigmatica:certus_quartz_raw_marble_ore',
	'emendatusenigmatica:charged_certus_quartz_raw_marble_ore',
	'emendatusenigmatica:fluorite_raw_marble_ore',
	'emendatusenigmatica:bitumen_raw_marble_ore',
	
	]
	idHide.forEach(function (hide) {
		event.hide(hide)
	})
})
