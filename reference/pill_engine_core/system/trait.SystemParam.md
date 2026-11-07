<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2656"></a>

# Trait `pill_engine_core::system::SystemParam`

```rust
pub trait SystemParam: Sized { ... }
```

Source: `engine\pill_engine_core\src\system.rs:138`

A type that can be used as a parameter of a system function.

This trait is what makes system signatures flexible: any type that
implements it can appear in the parameter list of a system.

## Safety

Implementations change lifetimes with a transmutation. The module-level
docs list the rules that keep this sound.

A parameter must not escape the system function that received it.

## Required and provided items

<a id="rustdoc-item-7059"></a>

### `fetch`

```rust
unsafe fn fetch(world: &mut World, queue: &mut CommandQueue) -> Self;
```

Takes this parameter out of the world and the command queue.

#### Safety

The returned value is marked `'static`, but it really borrows from
`world` and `queue`. The caller must make sure that:

1. the value is dropped before the system function returns,
2. it is never stored in static or global state, and
3. it is never moved onto a background thread or into an async task.

Breaking these rules is undefined behavior. The engine's runner
(`IntoSystem::into_system` / `into_hot_system`) is the one caller that
upholds them, and the signature refuses a safe call from anywhere else:

```compile_fail
use pill_engine::system::SystemParam;

fn fetch_safely<P: SystemParam>(
    world: &mut pill_engine::world::World,
    queue: &mut pill_engine::commands::CommandQueue,
) {
    let _ = P::fetch(world, queue);
}
```

<a id="rustdoc-item-8517"></a>

### `report_access`

```rust
fn report_access(_access: &mut SystemAccess);
```

Records which components and resources this parameter reads and writes.

The engine calls this while registering a system, to build the graph
that decides which systems may run at the same time. The default
implementation records nothing, which suits a parameter that touches
neither components nor resources.
