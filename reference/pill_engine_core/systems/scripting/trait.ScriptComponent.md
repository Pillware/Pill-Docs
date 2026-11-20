<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5398"></a>

# Trait `pill_engine_core::systems::scripting::ScriptComponent`

```rust
pub trait ScriptComponent: Component + ScriptDeclaration { ... }
```

Source: `engine\pill_engine_core\src\systems\scripting.rs:483`

A component the engine runs as a script, with a lifecycle method for each
step of its life.

Every lifecycle method has a no-op default, so an implementation defines
only the ones it needs, and each one is ordered by its own `#[order(n)]`:

```ignore
#[derive(PillComponent)]
struct PlayerController {
    speed: f32,
}

#[script]
impl ScriptComponent for PlayerController {
    fn on_update(&mut self, script_context: &mut ScriptContext) {
        // Read a component through the context.
        if let Some(position) = script_context
            .get_component::<Position>(script_context.get_owning_entity())
        {
            println!("player at {position:?}");
        }

        // Structural changes are only queued.
        if self.speed > 100.0 {
            script_context.destroy_entity(script_context.get_owning_entity());
        }

        self.speed += 1.0;
    }
}
```

The lifecycle methods mirror Unity's `MonoBehaviour` messages:
[`on_create`](#rustdoc-item-10562) is `Awake`,
[`on_start`](#rustdoc-item-10641) is `Start`,
[`on_update`](#rustdoc-item-10866) is `Update`,
[`on_stop`](#rustdoc-item-10716) has no Unity equivalent, and
[`on_destroy`](#rustdoc-item-10790) is `OnDestroy`.

Every lifecycle method receives a [`ScriptContext`](struct.ScriptContext.md#rustdoc-item-4793), which offers read
access to components and resources, a mutable borrow of a component, and
structural commands that are queued. Adding or removing a component and
destroying an entity all happen after every script in the frame has
returned.

A script component needs the `#[script]` attribute: without it the type
does not implement [`ScriptDeclaration`], and implementing this trait
therefore does not compile.

## Required and provided items

<a id="rustdoc-item-10562"></a>

### `on_create`

```rust
fn on_create(self: &mut Self, _script_context: &mut ScriptContext<'_>, _create_info: &CreateInfo);
```

Runs when the component starts existing.

This is Unity's `Awake`. It fires when the component is added to an
entity - by game code, by the editor, by a scene load, by an undo or by
the stop of a play session - and once for every script in the world
when play starts. [`CreateInfo::cause`](struct.CreateInfo.md#rustdoc-item-10559) says which of those happened.

It fires only where the script runs: always while playing, and while
editing only for a script declared with `#[script(edit_mode)]`.

<a id="rustdoc-item-10641"></a>

### `on_start`

```rust
fn on_start(self: &mut Self, _script_context: &mut ScriptContext<'_>, _start_info: &StartInfo);
```

Runs once, right before the script's first
[`on_update`](#rustdoc-item-10866).

This is Unity's `Start`. It fires when play starts, for every script
the world already held, and for a component added while the game is
running. It never fires while the editor edits, and never again after a
reload or a hot patch.

<a id="rustdoc-item-10866"></a>

### `on_update`

```rust
fn on_update(self: &mut Self, _script_context: &mut ScriptContext<'_>);
```

Runs once per frame while the script is running.

This is Unity's `Update`. It runs while the game plays, and while the
editor edits only for a script declared with `#[script(edit_mode)]`.

<a id="rustdoc-item-10716"></a>

### `on_stop`

```rust
fn on_stop(self: &mut Self, _script_context: &mut ScriptContext<'_>, _stop_info: &StopInfo);
```

Runs when the script stops running, before
[`on_destroy`](#rustdoc-item-10790).

It fires when play stops, for every running script, and when a running
script's component is removed while the game plays. Releasing external
resources here is what keeps a stopped session from leaking them.

<a id="rustdoc-item-10790"></a>

### `on_destroy`

```rust
fn on_destroy(self: &mut Self, _script_context: &mut ScriptContext<'_>, _destroy_info: &DestroyInfo);
```

Runs when the component stops existing.

This is Unity's `OnDestroy`. It fires for a removal or a destroy the
command queue applies - which is every removal game code, a script and
the editor make - and for the running copy a play session discards when
it stops. A direct [`crate::World::remove_component`](../../ecs/world/struct.World.md#rustdoc-item-5280) or
[`crate::World::destroy_entity`](../../ecs/world/struct.World.md#rustdoc-item-5437) call is the tooling path and reports
nothing, because there is no command queue to hand the lifecycle method.
The component is still readable during the call.
