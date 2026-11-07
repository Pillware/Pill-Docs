<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8136"></a>

# Trait `pill_engine_core::scripting::ScriptComponent`

```rust
pub trait ScriptComponent: Component { ... }
```

Source: `engine\pill_engine_core\src\scripting.rs:222`

A component that runs its own update logic every frame.

The engine calls `update` once per frame for every entity that carries the
component. The call gets a [`ScriptContext`](struct.ScriptContext.md#rustdoc-item-8100), which offers:
- read access to components and resources;
- a mutable borrow of a component;
- structural commands that are queued.

Adding or removing a component and destroying an entity all happen after
every script in the frame has returned.

## Examples

```ignore
struct PlayerController {
    speed: f32,
}

impl ScriptComponent for PlayerController {
    fn update(&mut self, script_context: &mut ScriptContext) {
        // Read a component through the context.
        if let Some(position) = script_context.get_component::<Position>(script_context.get_owning_entity()) {
            println!("Player at {:?}", position);
        }

        // Structural changes are only queued.
        if self.speed > 100.0 {
            script_context.destroy_entity(script_context.get_owning_entity());
        }

        // The script's own fields stay directly usable.
        self.speed += 1.0;
    }
}
```

## Required and provided items

<a id="rustdoc-item-8135"></a>

### `update`

```rust
fn update(self: &mut Self, script_context: &mut ScriptContext<'_>);
```

Updates this script component.

The engine calls it once per frame for every entity that carries this
component. `script_context.get_owning_entity()` returns the entity the
script is attached to.
