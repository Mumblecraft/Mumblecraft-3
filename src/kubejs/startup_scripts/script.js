console.info('Hello, World! (Running Start-Up Script)')

onEvent('item.registry', event => {

    event.create('dark_steel_ingot').displayName('Dark Steel Ingot')
})