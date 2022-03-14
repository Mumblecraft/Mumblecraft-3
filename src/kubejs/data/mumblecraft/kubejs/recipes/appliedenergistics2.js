// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying AE2 recipes')

events.listen('recipes', function (event) {

    //Machines
    //Grindstone
	event.remove({id: 'appliedenergistics2:misc/grindstone'})
	
    event.shaped(item.of('appliedenergistics2:grindstone', 1), [
        'ABA',
        'CAC',
        'DCD',
    ], {
        A: 'minecraft:smooth_stone',
        B: 'appliedenergistics2:wooden_gear',
        C: '#appliedenergistics2:crystals/quartz',
		D: '#forge:cobblestone',
   })
	
	event.remove({id: 'appliedenergistics2:grinder/flour'})
	
	//Inscriber
	event.remove({id: 'appliedenergistics2:network/blocks/inscribers'})
	
	event.shaped(item.of('appliedenergistics2:inscriber'), [
        'ABA',
        'C D',
		'ABA',
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:sticky_piston',
		C: '#appliedenergistics2:crystals/fluix',
		D: 'mekanism:ingot_refined_obsidian',
    })
	
	//Charger
	event.remove({id: 'appliedenergistics2:network/blocks/crystal_processing_charger'})
	
	event.shaped(item.of('appliedenergistics2:charger'), [
        'ABA',
        'C  ',
		'ABA',
    ], {
        A: 'minecraft:iron_ingot',
        B: '#appliedenergistics2:crystals/fluix',
		C: 'mekanism:ingot_refined_obsidian',
    })
	
	//Make sky stone chests require iron nugget
	event.remove({id: 'appliedenergistics2:misc/chests_sky_stone'})
	
	event.shaped(item.of('appliedenergistics2:sky_stone_chest'), [
        'AAA',
        'ABA',
		'AAA',
    ], {
        A: 'appliedenergistics2:sky_stone_block',
        B: 'minecraft:iron_nugget',
    })
	
	event.remove({id: 'appliedenergistics2:misc/chests_smooth_sky_stone'})
	
	event.shaped(item.of('appliedenergistics2:smooth_sky_stone_chest'), [
        'AAA',
        'ABA',
		'AAA',
    ], {
        A: 'appliedenergistics2:smooth_sky_stone_block',
        B: 'minecraft:iron_nugget',
    })
})