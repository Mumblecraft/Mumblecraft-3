// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: modifying recipes')

events.listen('recipes', function (event) {
    
    //Saw recipes
    
    event.shaped(item.of('immersiveengineering:stick_treated', 2), [
        'AB',
    ], {
        A: '#notreepunching:saws',
        B: '#forge:treated_wood'
    })

    //Add BoP logs->planks
    var planksList =[
        'biomesoplenty:fir_planks',
        'biomesoplenty:redwood_planks',
        'biomesoplenty:cherry_planks',
        'biomesoplenty:mahogany_planks',
        'biomesoplenty:jacaranda_planks',
        'biomesoplenty:palm_planks',
        'biomesoplenty:willow_planks',
        'biomesoplenty:dead_planks',
        'biomesoplenty:magic_planks',
        'biomesoplenty:umbran_planks',
        'biomesoplenty:hellbark_planks',
    ]

    var logsList =[
        '#biomesoplenty:fir_logs',
        '#biomesoplenty:redwood_logs',
        '#biomesoplenty:cherry_logs',
        '#biomesoplenty:mahogany_logs',
        '#biomesoplenty:jacaranda_logs',
        '#biomesoplenty:palm_logs',
        '#biomesoplenty:willow_logs',
        '#biomesoplenty:dead_logs',
        '#biomesoplenty:magic_logs',
        '#biomesoplenty:umbran_logs',
        '#biomesoplenty:hellbark_logs',
    ]
    var i = 0

    planksList.forEach(function (planks) {
        event.shaped(item.of(planks, 4), [
            'A',
            'B'
        ], {
            A: '#notreepunching:saws',
            B: logsList[i]
        })
        i++
    })
})