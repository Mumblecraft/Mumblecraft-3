// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying More Minecarts recipes')

events.listen('recipes', function (event) {

    //Maglev
	event.remove({id: 'moreminecarts:silica_steel_mix'})
	
    event.shaped(item.of('moreminecarts:silica_steel_mix', 2), [
        'ABA',
        'C C',
    ], {
        A: '#forge:dusts/steel',
        B: '#minecraft:coals',
        C: '#forge:dusts/quartz',
    })
	
	//Powered Maglev
	event.remove({id: 'moreminecarts:maglev_powered_rail'})
	
    event.shaped(item.of('moreminecarts:maglev_powered_rail', 8), [
        'ABA',
        'DED',
		'CBC',
    ], {
        A: '#forge:rods/constantan',
        B: 'moreminecarts:levitation_powder',
        C: '#forge:rods/electrum',
		D: 'moreminecarts:silica_steel',
		E: '#forge:dusts/redstone',
    })
})