<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7463"></a>

# Trait `pill_engine_core::reflection::component_registry::RecordDefaultValue`

```rust
pub trait RecordDefaultValue { ... }
```

Source: `engine\pill_engine_core\src\reflection\component_registry.rs:208`

Records `T::default()` for a component that implements `Default`.

The impl takes `self` by value, and the fallback below takes one more
reference. Method lookup then matches this one on the call's own reference
and only reaches the fallback through an automatic borrow, which is the
order that lets a type without `Default` compile.

## Required and provided items

<a id="rustdoc-item-7495"></a>

### `record_default_value`

```rust
fn record_default_value(self: Self, world: &mut crate::World);
```

Records the component's default value in `world`.
