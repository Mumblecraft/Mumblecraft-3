// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying Mekanism recipes')

events.listen('recipes', function (event) {

    //Machines/Components

	//Replace Ingots with Plates
	event.replaceInput(
	    {type: 'minecraft:crafting_shaped',mod: 'mekanism'},
		'#forge:ingots/iron',
		'#forge:plates/iron'
	)
	
    //Steel Casing
	event.remove({id: 'mekanism:steel_casing'})
	
    event.recipes.create.mechanical_crafting(item.of('mekanism:steel_casing'), [
        ' AAA ',
        'ABCBA',
        'ACDCA',
		'ABCBA',
		' AAA ',
    ], {
        A: '#forge:plates/steel',
        B: 'kubejs:mumble_alloy',
        C: '#forge:glass',
		D: 'mekanism:block_osmium',
    })
	
    //Heat Generator
    event.remove({id: 'mekanismgenerators:generator/heat'})
	
    event.shaped(item.of('mekanismgenerators:heat_generator', 1), [
        'AAA',
        'BCB',
        'DED',
    ], {
    A: '#forge:plates/iron',
    B: '#forge:plates/constantan',
    C: 'mekanism:steel_casing',
    D: '#forge:plates/copper',
	E: 'minecraft:furnace'
    })
	
    //Metallurgic Infuser
    event.remove({id: 'mekanism:metallurgic_infuser'})
	
    event.shaped(item.of('mekanism:metallurgic_infuser', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
    A: '#forge:plates/iron',
    B: 'engineersdecor:small_electrical_furnace',
    C: 'minecraft:redstone',
    D: 'mekanism:steel_casing',
    })

    //Energized Smelter
    event.remove({id: 'mekanism:energized_smelter'})

    event.shaped(item.of('mekanism:energized_smelter', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'minecraft:redstone',
        B: 'mekanism:basic_control_circuit',
        C: 'engineersdecor:small_electrical_furnace',
        D: 'mekanism:steel_casing'
    })

    //Enrichment Chamber
    event.remove({id: 'mekanism:enrichment_chamber'})

    event.shaped(item.of('mekanism:enrichment_chamber', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'minecraft:redstone',
        B: 'mekanism:basic_control_circuit',
        C: '#forge:storage_blocks/steel',
        D: 'mekanism:steel_casing'
    })

    //Crusher
    event.remove({id: 'mekanism:crusher'})

    event.shaped(item.of('mekanism:crusher', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'minecraft:redstone',
        B: 'mekanism:basic_control_circuit',
        C: 'minecraft:lava_bucket',
        D: 'mekanism:steel_casing'
    })

    //Compressor
    event.remove({id: 'mekanism:osmium_compressor'})
	
    event.shaped(item.of('mekanism:osmium_compressor', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:advanced_control_circuit',
        C: '#forge:storage_blocks/steel',
        D: 'mekanism:steel_casing'
    })

    //Purification Chamber
    event.remove({id: 'mekanism:purification_chamber'})

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
    event.remove({id: 'mekanism:chemical_injection_chamber'})
	
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
    event.remove({id: 'mekanism:precision_sawmill'})
	
    event.shaped(item.of('mekanism:precision_sawmill', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: '#forge:plates/steel',
        B: 'mekanism:basic_control_circuit',
        C: 'mekanism:alloy_infused',
        D: 'mekanism:steel_casing'
    })

    //Basic Bin
    event.remove({id: 'mekanism:bin/basic'})
	
    event.shaped(item.of('mekanism:basic_bin', 1), [
        'ABA',
        'CDC',
        'AAA',
    ], {
        A: '#forge:plates/iron',
        B: 'mekanism:basic_control_circuit',
        C: 'create:adjustable_crate',
        D: 'mekanism:steel_casing'
    })

    //Advanced Bin
    event.remove({id: 'mekanism:bin/advanced'})
	
    event.shaped(item.of('mekanism:advanced_bin', 1), [
        'ABA',
        'CDC',
        'AAA',
    ], {
        A: '#forge:plates/steel',
        B: 'mekanism:advanced_control_circuit',
        C: 'create:adjustable_crate',
        D: 'mekanism:basic_bin'
    })

    //Elite Bin
    event.remove({id: 'mekanism:bin/elite'})
	
    event.shaped(item.of('mekanism:elite_bin', 1), [
        'ABA',
        'CDC',
        'AAA',
    ], {
        A: '#forge:plates/aluminum',
        B: 'mekanism:elite_control_circuit',
        C: 'mekanism:alloy_reinforced',
        D: 'mekanism:advanced_bin'
    })

    //Ultimate Bin
    event.remove({id: 'mekanism:bin/ultimate'})
	
    event.shaped(item.of('mekanism:ultimate_bin', 1), [
        'ABA',
        'CDC',
        'AAA',
    ], {
        A: '#forge:plates/uranium',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mekanism:alloy_atomic',
        D: 'mekanism:elite_bin'
    })

    //Energy Tablet
    event.remove({id: 'mekanism:energy_tablet'})
	
    event.shaped(item.of('mekanism:energy_tablet', 1), [
        'AEA',
        'CBC',
        'ADA',
    ], {
        A: '#forge:plates/lead',
        B: 'immersiveengineering:ingot_hop_graphite',
        C: 'mekanism:alloy_infused',
        D: '#forge:ingots/zinc',
        E: '#forge:plates/constantan'
    })

    //Basic Energy Cube
    event.remove({id: 'mekanism:energy_cube/basic'})
	
    event.shaped(item.of('mekanism:basic_energy_cube', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: '#forge:plates/lead',
        B: 'mekanism:energy_tablet',
        C: 'immersiveengineering:rs_engineering',
        D: 'mekanism:steel_casing'
    })

    //Basic Universal Cable
    event.remove({id: 'mekanism:transmitter/universal_cable/basic'})
	
    event.shaped(item.of('mekanism:basic_universal_cable', 4), [
        'BAB',
        ' C ',
        'BAB',
    ], {
        A: '#forge:plates/constantan',
        B: '#forge:plates/copper',
        C: 'minecraft:redstone'
    })
	
	//Basic Thermodynamic Conductor
	event.remove({id: 'mekanism:transmitter/thermodynamic_conductor/basic'})
	
    event.shaped(item.of('mekanism:basic_thermodynamic_conductor', 4), [
        'BAB',
        ' C ',
        'BAB',
    ], {
        A: '#forge:plates/constantan',
        B: '#forge:plates/steel',
        C: '#forge:plates/copper'
    })

    //Basic Mechanical Pipe
    event.remove({id: 'mekanism:transmitter/mechanical_pipe/basic'})
	
    event.shaped(item.of('mekanism:basic_mechanical_pipe', 1), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: '#forge:plates/lead',
        B: 'create:fluid_pipe'
    })

    //Basic Pressurized Tube
    event.remove({id: 'mekanism:transmitter/pressurized_tube/basic'})
	
    event.shaped(item.of('mekanism:basic_pressurized_tube', 4), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: '#forge:plates/steel',
        B: 'mekanism:structural_glass'
    })

    //Basic Logistical Transporter
    event.remove({id: 'mekanism:transmitter/logistical_transporter/basic'})
	
    event.shaped(item.of('mekanism:basic_logistical_transporter', 4), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: '#forge:plates/steel',
        B: 'mekanism:basic_control_circuit'
    })
	
    //Restrictive Transporter
    event.remove({id: 'mekanism:transmitter/logistical_transporter/restrictive_transporter'})
	
    event.shaped(item.of('mekanism:restrictive_transporter', 1), [
        'ABA',
    ], {
        A: '#forge:plates/steel',
        B: 'minecraft:iron_bars'
    })

    //Diversion Transporter
    event.remove({id: 'mekanism:transmitter/logistical_transporter/diversion_transporter'})
	
    event.shaped(item.of('mekanism:diversion_transporter', 1), [
        'CCC',
        'ABA',
        'CCC',
    ], {
        A: '#forge:plates/steel',
        B: 'minecraft:iron_bars',
        C: 'minecraft:redstone'
    })

    //Structural Glass
    event.remove({id: 'mekanism:structural_glass'})
	
    event.shaped(item.of('mekanism:structural_glass', 1), [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: '#forge:plates/steel',
        B: '#forge:glass'
    })
    
    //Electric Pump
    event.remove({id: 'mekanism:electric_pump'})
	
    event.shaped(item.of('mekanism:electric_pump', 1), [
        ' A ',
        'BCB',
        'DDD',
    ], {
        A: 'immersiveengineering:fluid_pump',
        B: 'mekanism:alloy_infused',
        C: 'mekanism:steel_casing',
        D: 'mekanism:ingot_osmium'
    })

    //Basic Chemical Tank
    event.remove({id: 'mekanism:chemical_tank/basic'})
	
    event.shaped(item.of('mekanism:basic_chemical_tank', 1), [
        'ABA',
        'B B',
        'ABA',
    ], {
        A: 'mekanism:enriched_redstone',
        B: '#forge:plates/osmium',
    })

    //Fission Reactor Casing
    event.remove({id: 'mekanismgenerators:fission_reactor/casing'})
	
    event.shaped(item.of('mekanismgenerators:fission_reactor_casing', 2), [
        'AAA',
        'ABA',
        'AAA',
    ], {
        A: '#forge:plates/lead',
        B: 'mekanism:steel_casing',
    })
	
	//Turbine Casing
	event.remove({id: 'mekanismgenerators:turbine/casing'})
	
    event.shaped(item.of('mekanismgenerators:turbine_casing', 4), [
        'AAA',
        'ABA',
        'AAA',
    ], {
        A: '#forge:plates/steel',
        B: 'mekanism:block_osmium',
    })

    //Script to modify a whole tier of machine recipes at once
	//First, remove the old recipes
	var idRemove =[
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
	'mekanism:tier_installer/basic',
	
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
	'mekanism:tier_installer/advanced',
	
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
	'mekanism:tier_installer/elite',
	
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
	'mekanism:tier_installer/ultimate',
	]
	idRemove.forEach(function (remove) {
		event.remove({id: remove})
	})
	
    //Initial tier of machines
    var tierZero = [
        'mekanism:energized_smelter',
        'mekanism:enrichment_chamber',
        'mekanism:crusher',
        'mekanism:osmium_compressor',
        'mekanism:combiner',
        'mekanism:purification_chamber',
        'mekanism:chemical_injection_chamber',
        'mekanism:metallurgic_infuser',
        'mekanism:precision_sawmill',
		'#minecraft:planks'
    ]
    //First tier of 'factory' machines
    var tierOne =[
        'mekanism:basic_smelting_factory',
        'mekanism:basic_enriching_factory',
        'mekanism:basic_crushing_factory',
        'mekanism:basic_compressing_factory',
        'mekanism:basic_combining_factory',
        'mekanism:basic_purifying_factory',
        'mekanism:basic_injecting_factory',
        'mekanism:basic_infusing_factory',
        'mekanism:basic_sawing_factory',
        'mekanism:basic_tier_installer'
    ]
    //Second tier of 'factory' machines
    var tierTwo =[
        'mekanism:advanced_smelting_factory',
        'mekanism:advanced_enriching_factory',
        'mekanism:advanced_crushing_factory',
        'mekanism:advanced_compressing_factory',
        'mekanism:advanced_combining_factory',
        'mekanism:advanced_purifying_factory',
        'mekanism:advanced_injecting_factory',
        'mekanism:advanced_infusing_factory',
        'mekanism:advanced_sawing_factory',
    ]
    //Third tier of 'factory' machines
    var tierThree =[
        'mekanism:elite_smelting_factory',
        'mekanism:elite_enriching_factory',
        'mekanism:elite_crushing_factory',
        'mekanism:elite_compressing_factory',
        'mekanism:elite_combining_factory',
        'mekanism:elite_purifying_factory',
        'mekanism:elite_injecting_factory',
        'mekanism:elite_infusing_factory',
        'mekanism:elite_sawing_factory',
    ]
    //Fourth tier of 'factory' machines
    var tierFour =[
        'mekanism:ultimate_smelting_factory',
        'mekanism:ultimate_enriching_factory',
        'mekanism:ultimate_crushing_factory',
        'mekanism:ultimate_compressing_factory',
        'mekanism:ultimate_combining_factory',
        'mekanism:ultimate_purifying_factory',
        'mekanism:ultimate_injecting_factory',
        'mekanism:ultimate_infusing_factory',
        'mekanism:ultimate_sawing_factory',
    ]
    var i = 0

    tierOne.forEach(function (t1machine) {
        event.shaped(item.of(t1machine, 1), [
            'ABA',
            'CDC',
            'ABA',
        ], {
            A: 'immersiveengineering:rs_engineering',
            B: 'mekanism:basic_control_circuit',
            C: '#forge:plates/iron',
            D: tierZero[i]
        })
        i++
    })
    i = 0

    tierTwo.forEach(function (t2machine) {
        event.shaped(item.of(t2machine, 1), [
            'ABA',
            'CDC',
            'ABA',
        ], {
            A: 'mekanism:alloy_infused',
            B: 'mekanism:advanced_control_circuit',
            C: '#forge:plates/steel',
            D: tierOne[i]
        })
        i++
    })
    i = 0

    tierThree.forEach(function (t3machine) {
        event.shaped(item.of(t3machine, 1), [
            'ABA',
            'CDC',
            'ABA',
        ], {
            A: 'mekanism:alloy_reinforced',
            B: 'mekanism:elite_control_circuit',
            C: '#forge:plates/aluminum',
            D: tierTwo[i]
        })
        i++
    })
    i = 0

    tierFour.forEach(function (t4machine) {
        event.shaped(item.of(t4machine, 1), [
            'ABA',
            'CDC',
            'ABA',
        ], {
            A: 'mekanism:alloy_atomic',
            B: 'mekanism:ultimate_control_circuit',
            C: 'rftoolsbase:infused_diamond',
            D: tierThree[i]
        })
        i++
    })
	
	//Tier Installers
	event.shaped(item.of('mekanism:advanced_tier_installer', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:advanced_control_circuit',
        C: '#forge:plates/steel',
        D: '#minecraft:planks'
    })
		
    event.shaped(item.of('mekanism:elite_tier_installer', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:elite_control_circuit',
        C: '#forge:plates/aluminum',
        D: '#minecraft:planks'
    })
	
	event.shaped(item.of('mekanism:ultimate_tier_installer'), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:ultimate_control_circuit',
        C: 'rftoolsbase:infused_diamond',
        D: '#minecraft:planks'
    })
	
	//Fission Fuel Assembly
	event.remove({id: 'mekanismgenerators:fission_reactor/fuel_assembly'})
	
    event.shaped(item.of('mekanismgenerators:fission_fuel_assembly'), [
        'ABA',
        'ACA',
        'ABA',
    ], {
        A: '#forge:rods/lead',
        B: 'mekanism:ultimate_control_circuit',
        C: '#forge:plates/steel',
	})

	//Control Rod Assembly
	event.remove({id: 'mekanismgenerators:fission_reactor/control_rod_assembly'})
	
    event.shaped(item.of('mekanismgenerators:control_rod_assembly'), [
        'ABA',
        'CAC',
        'CAC',
    ], {
        A: '#forge:rods/lead',
        B: 'mekanism:elite_control_circuit',
        C: '#forge:plates/steel',
	})
	
	//Fusion Reactor Controller
	event.remove({id: 'mekanismgenerators:reactor/controller'})
	
    event.recipes.create.mechanical_crafting(item.of('mekanismgenerators:fusion_reactor_controller', 1), [
        'ABCBA',
        'ADEDA',
        'AFGFA',
		'AHFHA',
		'AAAAA',
    ], {
        A: 'mekanismgenerators:fusion_reactor_frame',
        B: 'rftoolsutility:screen',
        C: 'rftoolsutility:screen_controller',
		D: '#forge:circuits/ultimate',
		E: 'rftoolscontrol:processor',
		F: 'mekanism:ultimate_chemical_tank',
		G: 'rftoolscontrol:tank',
		H: 'appliedenergistics2:engineering_processor'
    })
	
	//Saw Treated Wood
	event.recipes.mekanismSawing('6x immersiveengineering:stick_treated', '#forge:treated_wood', item.of('mekanism:sawdust').chance(0.25))

    //Process ores from other mods
	
	var ores = [
	'#forge:ores/aluminum',
	'#forge:ores/nickel',
	'#forge:ores/silver',
	'#forge:ores/zinc'
	]

	var dirtySlurries = [
	'emendatusenigmatica:dirty_aluminum',
	'emendatusenigmatica:dirty_nickel',
	'emendatusenigmatica:dirty_silver',
	'emendatusenigmatica:dirty_zinc'
	]
	
	var cleanSlurries = [
	'emendatusenigmatica:clean_aluminum',
	'emendatusenigmatica:clean_nickel',
	'emendatusenigmatica:clean_silver',
	'emendatusenigmatica:clean_zinc',
	]
	
	var crystals = [
	'emendatusenigmatica:aluminum_crystal',
	'emendatusenigmatica:nickel_crystal',
	'emendatusenigmatica:silver_crystal',
	'emendatusenigmatica:zinc_crystal'
	]
	
	var shards = [
	'emendatusenigmatica:aluminum_shard',
	'emendatusenigmatica:nickel_shard',
	'emendatusenigmatica:silver_shard',
	'emendatusenigmatica:zinc_shard'
	]
	
	var clumps = [
	'emendatusenigmatica:aluminum_clump',
	'emendatusenigmatica:nickel_clump',
	'emendatusenigmatica:silver_clump',
	'emendatusenigmatica:zinc_clump'
	]
	
	var dirtyDusts = [
	'emendatusenigmatica:aluminum_dirty_dust',
	'emendatusenigmatica:nickel_dirty_dust',
	'emendatusenigmatica:silver_dirty_dust',
	'emendatusenigmatica:zinc_dirty_dust'
	]
	
	var dusts = [
	'emendatusenigmatica:aluminum_dust',
	'emendatusenigmatica:nickel_dust',
	'emendatusenigmatica:silver_dust',
	'emendatusenigmatica:zinc_dust'
	]
	
	i = 0
	
	dirtySlurries.forEach(function (output) {
	event.custom({
            type: 'mekanism:dissolution',
            itemInput:{ingredient: item.of(ores[i]).toResultJson()},
			gasInput:{amount: 1, gas: 'mekanism:sulfuric_acid'},
            output: {slurry: output, amount: 1000, chemicalType: 'slurry'}
		})
		i++
	})
	i = 0
	
	cleanSlurries.forEach(function (output) {
		event.custom({			
			type:'mekanism:washing',
			fluidInput:{ amount:5, tag: 'minecraft:water'},
			slurryInput:{ amount:1, slurry: dirtySlurries[i]},
			output:{ slurry: output, amount: 1}
		})
		i++
	})
	i = 0
	
	crystals.forEach(function (output) {
	event.custom({
            type: 'mekanism:crystallizing',
            chemicalType: 'slurry',
            input: { amount: 200, slurry: cleanSlurries[i] },
            output: item.of(output).toJson()
		})
		i++
	})
	i = 0
	
	shards.forEach(function (output) {
	event.recipes.mekanismInjecting(
			item.of(output, 4), ores[i], {
			gas: 'mekanism:hydrogen_chloride', amount: 1
		})
		i++
	})
	i = 0
	
	shards.forEach(function (output) {
	event.recipes.mekanismInjecting(
			output, crystals[i], {
			gas: 'mekanism:hydrogen_chloride', amount: 1
		})
		i++
	})
	i = 0
	
	clumps.forEach(function (output) {
	event.recipes.mekanismPurifying(
			output, shards[i], {
			gas: 'mekanism:oxygen', amount: 1
		})
		i++
	})
	i = 0
	
	clumps.forEach(function (output) {
	event.recipes.mekanismPurifying(
			item.of(output, 3), item.of(ores[i]).toResultJson(), {
			gas: 'mekanism:oxygen', amount: 1
		})
		i++
	})
	i = 0
	
	dirtyDusts.forEach(function (output) {
	event.recipes.mekanismCrushing(output, clumps[i])
		i++
	})
	i = 0
	
	dusts.forEach(function (output) {
	event.recipes.mekanismEnriching(output, dirtyDusts[i])
		i++
	})
	
	event.recipes.mekanismInjecting('minecraft:obsidian', 'minecraft:lava_bucket', {gas: 'mekanism:oxygen', amount: 200})
	//World
	//Salt - Convert Pam's Kitchen Salt to Mekanism Salt
	event.shapeless(Item.of('mekanism:salt', 1), 'pamhc2foodcore:saltitem')
	
})