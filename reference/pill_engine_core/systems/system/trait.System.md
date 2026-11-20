<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5722"></a>

# Trait `pill_engine_core::systems::system::System`

```rust
pub trait System: Send { ... }
```

Source: `engine\pill_engine_core\src\systems\system.rs:74`

A function the engine can run as a system.

A system works on `World` data. It runs every frame and can read and write
components, create entities, and more.

A system reports a failure through [`Result::Err`]. The engine records the
failure and carries on with the other systems.

Systems must be `Send`, so the scheduler can run them on several threads.

## Required and provided items

<a id="rustdoc-item-10868"></a>

### `run`

```rust
fn run(self: &mut Self, world: &mut World, queue: &mut CommandQueue) -> Result<(), SystemError>;
```

Runs the system once.

#### Errors

Returns the [`SystemError`](../../error/enum.SystemError.md#rustdoc-item-6033) that ended the call: the one the system
returned, or the one the engine built from a panic in a patched body.
