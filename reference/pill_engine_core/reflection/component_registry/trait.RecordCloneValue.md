<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7500"></a>

# Trait `pill_engine_core::reflection::component_registry::RecordCloneValue`

```rust
pub trait RecordCloneValue { ... }
```

Source: `engine\pill_engine_core\src\reflection\component_registry.rs:270`

Records `T`'s row-cloning function for a component that implements `Clone`.

The impls follow [`RecordDefaultValue`](trait.RecordDefaultValue.md#rustdoc-item-7463)'s arrangement, which is what makes
the specific one win.

## Required and provided items

<a id="rustdoc-item-7531"></a>

### `record_clone_value`

```rust
fn record_clone_value(self: Self, world: &mut crate::World);
```

Records the component's clone function in `world`.
