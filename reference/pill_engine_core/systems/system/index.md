<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10945"></a>

# Module `pill_engine_core::systems::system`

Source: `engine\pill_engine_core\src\systems\system.rs:1`

How a plain function's parameters are pulled from the world so the function
can run as a system.
System parameter infrastructure: how a plain function becomes a [`System`].

## Responsibilities

- Defines the [`SystemParam`] trait that lets a function's parameters take
  themselves out of the [`World`] (`Query<T>`, `Commands`, `Res<T>`).
- Provides [`IntoSystem`] to turn a plain function into a boxed [`System`].
- Implements [`System`] for the closure each adapted function is boxed
  into, so the engine can call every system the same way.

## Design

Four traits work together. [`SystemParam`] takes a system's arguments out of
the [`World`] and the [`CommandQueue`], and reports what they access to the
scheduler. [`SystemParamFunction`] adapts a `FnMut` that takes those
arguments into something callable. [`IntoSystem`] boxes that function into a
[`System`] the engine can store and call. [`SystemOutput`] turns the
function's return value (`()` or `Result<(), SystemError>`) into one shared
result type.

## Safety

[`SystemParam::fetch`] returns a value the compiler treats as `'static`,
even though it borrows from the world and the command queue. A system's
parameter type is fixed when the system is registered, so it cannot name the
lifetime of the borrow it gets when it is called. The transmutation that
hides this is deliberate, and it is sound only while the parameter does not
outlive the system call:

1. A system parameter must not be stored: no static or global state, and
   nothing the system call outlives.
2. It must not escape through a closure that outlives the system: a
   background thread, an async task, a callback registered for later.
3. It must not be returned.

The engine's runner (`IntoSystem::into_system` / `into_hot_system`) is the
one audited caller, and the signature refuses a safe call from anywhere
else. Breaking these rules is undefined behavior.

```no_run
# use pill_engine::*;
# #[derive(Debug, Clone)] struct Position { x: f32, y: f32 }
# impl Component for Position {}
# #[derive(Debug, Clone)] struct Velocity { x: f32, y: f32 }
# impl Component for Velocity {}
fn movement_system(mut query: Query<(&mut Position, &Velocity)>) {
    for (mut position, velocity) in query.iter_mut() {
        position.x += velocity.x;  // used within the system
    }
}  // query dropped here - the borrow ends with the call
```

## Module contents

### Traits
- [`IntoSystem`](trait.IntoSystem.md#rustdoc-item-6025) — Converts a function into a [`System`] the engine can run.
- [`ReadOnlySystemParam`](trait.ReadOnlySystemParam.md#rustdoc-item-4087) — A system parameter that only reads, so a
- [`System`](trait.System.md#rustdoc-item-5722) — A function the engine can run as a system.
- [`SystemOutput`](trait.SystemOutput.md#rustdoc-item-10872) — A value a system function can return.
- [`SystemParam`](trait.SystemParam.md#rustdoc-item-2921) — A type that can be used as a parameter of a system function.
- [`SystemParamFunction`](trait.SystemParamFunction.md#rustdoc-item-6720) — A function that can become a system.

### Macros
- [`impl_read_only_system_param_tuple`](macro.impl_read_only_system_param_tuple.md#rustdoc-item-10912) — Implements [`ReadOnlySystemParam`] for tuples whose members all read, so a
- [`impl_system_param_function`](macro.impl_system_param_function.md#rustdoc-item-10939) — Implements [`SystemParamFunction`] for functions with one to seven
- [`impl_system_param_tuple`](macro.impl_system_param_tuple.md#rustdoc-item-10903) — Implements [`SystemParam`] for tuples, so a system can take more than one
