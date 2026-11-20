<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2999"></a>

# Trait `pill_engine_core::reflection::component_registry::ComponentLayout`

```rust
pub trait ComponentLayout { ... }
```

Source: `engine\pill_engine_core\src\reflection\component_registry.rs:151`

The compile-time field layout of a type, as the derive macros emit it.

The `#[derive(PillLayout)]`, `#[derive(PillComponent)]` and
`#[derive(PillMirror)]` macros all implement it. It lets a layout reach
[`World::register_component_with_layout`] without restating the
descriptors. The same list is also the type's inherent `FIELD_LAYOUT`
const.

[`World::register_component_with_layout`]: ../../ecs/world/struct.World.md#rustdoc-item-5243

## Required and provided items

<a id="rustdoc-item-7460"></a>

### `FIELDS`

```rust
const FIELDS: &'static [ComponentFieldDescriptor];
```

The declared field list, in declaration order.
