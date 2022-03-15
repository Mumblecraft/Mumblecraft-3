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
	
	//Ingots
	
	'emendatusenigmatica:cobalt_ingot',
	'emendatusenigmatica:iridium_ingot',
	'emendatusenigmatica:invar_ingot',
	'emendatusenigmatica:signalum_ingot',
	'emendatusenigmatica:lumium_ingot',
	'emendatusenigmatica:enderium_ingot',
	'emendatusenigmatica:cast_iron_ingot',
	
	//Blocks
	
	'emendatusenigmatica:cobalt_block',
	'emendatusenigmatica:iridium_block',
	'emendatusenigmatica:cinnabar_block',
	'emendatusenigmatica:apatite_block',
	'emendatusenigmatica:potassium_nitrate_block',
	'emendatusenigmatica:arcane_block',
	'emendatusenigmatica:dimensional_block',
	'emendatusenigmatica:ruby_block',
	'emendatusenigmatica:sapphire_block',
	'emendatusenigmatica:peridot_block',
	'emendatusenigmatica:invar_block',
	'emendatusenigmatica:signalum_block',
	'emendatusenigmatica:lumium_block',
	'emendatusenigmatica:enderium_block',
	'emendatusenigmatica:cast_iron_block',
	'emendatusenigmatica:sulfur_block',
	
	//Plates
	
	'emendatusenigmatica:cobalt_plate',
	'emendatusenigmatica:iridium_plate',
	'emendatusenigmatica:ruby_plate',
	'emendatusenigmatica:sapphire_plate',
	'emendatusenigmatica:peridot_plate',
	'emendatusenigmatica:invar_plate',
	'emendatusenigmatica:signalum_plate',
	'emendatusenigmatica:lumium_plate',
	'emendatusenigmatica:enderium_plate',
	'emendatusenigmatica:cast_iron_plate',
	
	//Rods
	
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
	'emendatusenigmatica:cast_iron_rod',
	
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
	'emendatusenigmatica:bitumen_raw_marble_ore'
	
	]
	idHide.forEach(function (hide) {
		event.hide(hide)
	})
})