<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4311"></a>

# Trait `pill_engine_core::system::IntoSystem`

```rust
pub trait IntoSystem<Input: SystemParam> { ... }
```

Source: `engine\pill_engine_core\src\system.rs:416`

Converts a function into a [`System`](trait.System.md#rustdoc-item-4162) the engine can run.

It uses the [`SystemParam`](trait.SystemParam.md#rustdoc-item-2656) machinery to fetch the function's parameters.
`engine.register_system(name, function)` relies on this trait to turn a
plain function into a boxed `System`.

## Required and provided items

<a id="rustdoc-item-8570"></a>

### `into_system`

```rust
fn into_system(self: Self) -> Box<dyn System>;
```

Boxes this function into a [`System`](trait.System.md#rustdoc-item-4162) trait object the engine can store
and invoke generically.

<a id="rustdoc-item-8571"></a>

### `into_hot_system`

```rust
fn into_hot_system(self: Self, slot: std::sync::Arc<crate::hot_patch::HotSlot>, name: String) -> Box<dyn System>;
```

Boxes this function so its body can be replaced while the game runs.

It works like [`Self::into_system`](#rustdoc-item-8570), except that the call to the user's
function goes through `slot`. Replacing the body is then a single atomic
store: the returned box, its vtable, the scheduler graph and the
system's metadata stay where they are, and the `World` is left alone.

The slot is set up here because this is the only place that knows the
concrete `F` and `Input`. `name` is the identity a panicking patched body
is reported under, which lets the host roll that function back.
