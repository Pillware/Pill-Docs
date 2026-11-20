<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6720"></a>

# Trait `pill_engine_core::systems::system::SystemParamFunction`

```rust
pub trait SystemParamFunction<Input: SystemParam>: 'static { ... }
```

Source: `engine\pill_engine_core\src\systems\system.rs:398`

A function that can become a system.

The trait is implemented for functions with one to seven [`SystemParam`](trait.SystemParam.md#rustdoc-item-2921)
parameters, plus the case with none. It is the bridge between a function a
project writes and the [`System`](trait.System.md#rustdoc-item-5722) the engine runs. The associated
[`Output`] is the function's return type, `()` or
`Result<(), SystemError>`.

[`Output`]: #rustdoc-item-10913

## Required and provided items

<a id="rustdoc-item-10913"></a>

### `Output`

```rust
type Output: SystemOutput;
```

The function's return value, `()` or `Result<(), SystemError>`.

<a id="rustdoc-item-10914"></a>

### `run`

```rust
fn run(self: &mut Self, input: Input) -> <Self as >::Output;
```

Calls the wrapped function with the parameters it was given.

`input` is the tuple fetched from the [`World`](../../ecs/world/struct.World.md#rustdoc-item-2848) and the
[`CommandQueue`](../../ecs/commands/struct.CommandQueue.md#rustdoc-item-2835). The return value goes through [`SystemOutput`](trait.SystemOutput.md#rustdoc-item-10872) to
become a result.
