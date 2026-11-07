<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8511"></a>

# Trait `pill_engine_core::system::SystemOutput`

```rust
pub trait SystemOutput: 'static { ... }
```

Source: `engine\pill_engine_core\src\system.rs:106`

A value a system function can return.

A system returns `()` when it cannot fail, or `Result<(), SystemError>` when
it can. The engine turns either one into the same result type.

## Required and provided items

<a id="rustdoc-item-8512"></a>

### `into_system_result`

```rust
fn into_system_result(self: Self) -> Result<(), SystemError>;
```

Turns this return value into the result type the engine runs on.
