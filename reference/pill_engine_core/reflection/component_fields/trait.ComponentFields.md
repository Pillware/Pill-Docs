<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7367"></a>

# Trait `pill_engine_core::reflection::component_fields::ComponentFields`

```rust
pub trait ComponentFields: Component { ... }
```

Source: `engine\pill_engine_core\src\reflection\component_fields.rs:42`

A component type together with the field enum its derive generated.

## Required and provided items

<a id="rustdoc-item-7366"></a>

### `Field`

```rust
type Field: ComponentFieldId;
```

The component's generated `<Type>Field` enum.
