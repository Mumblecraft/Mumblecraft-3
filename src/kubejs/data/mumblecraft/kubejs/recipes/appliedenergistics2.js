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
        A: '#forge:stone',
        B: 'create:cogwheel',
        C: '#appliedenergistics2:crystals/quartz',
		D: '#forge:cobblestone',
    })
	
	event.remove({id: 'appliedenergistics2:grinder/flour'})
})