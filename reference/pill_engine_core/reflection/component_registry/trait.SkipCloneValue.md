<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7501"></a>

# Trait `pill_engine_core::reflection::component_registry::SkipCloneValue`

```rust
pub trait SkipCloneValue { ... }
```

Source: `engine\pill_engine_core\src\reflection\component_registry.rs:286`

The fallback for a component without `Clone`: records nothing, so the type
is copied row by row only when its rows are plain bytes.

## Required and provided items

<a id="rustdoc-item-7532"></a>

### `record_clone_value`

```rust
fn record_clone_value(self: Self, _world: &mut crate::World);
```

Does nothing.
