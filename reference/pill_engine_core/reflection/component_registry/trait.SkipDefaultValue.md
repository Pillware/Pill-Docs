<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7464"></a>

# Trait `pill_engine_core::reflection::component_registry::SkipDefaultValue`

```rust
pub trait SkipDefaultValue { ... }
```

Source: `engine\pill_engine_core\src\reflection\component_registry.rs:224`

The fallback for a component without `Default`: records nothing, so the
component keeps starting from zeros.

## Required and provided items

<a id="rustdoc-item-7496"></a>

### `record_default_value`

```rust
fn record_default_value(self: Self, world: &mut crate::World);
```

Does nothing.
