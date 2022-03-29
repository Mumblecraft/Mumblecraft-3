// priority: 0

onEvent('item.registry', event => {
  // Register new items here
  // event.create('example_item').displayName('Example Item')

    event.create('mumble_alloy').displayName('Mumble Alloy')
	event.create('coke_brick_blend').displayName('Coke Brick Blend')
	event.create('coke_brick').displayName('Coke Brick')
	event.create('incomplete_steel_scaffolding').displayName('Incomplete Steel Scaffolding')
	event.create('incomplete_aluminum_scaffolding').displayName('Incomplete Aluminum Scaffolding')
})
