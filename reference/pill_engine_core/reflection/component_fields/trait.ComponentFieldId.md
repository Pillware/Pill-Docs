<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7365"></a>

# Trait `pill_engine_core::reflection::component_fields::ComponentFieldId`

```rust
pub trait ComponentFieldId: Copy + core::fmt::Debug + Eq + core::hash::Hash + 'static { ... }
```

Source: `engine\pill_engine_core\src\reflection\component_fields.rs:27`

One field of a component, named in code.

`#[derive(PillComponent)]` implements this for the `<Type>Field` enum it
generates beside the component type.

## Required and provided items

<a id="rustdoc-item-7361"></a>

### `ALL`

```rust
const ALL: &'static [Self];
```

Every field, in the order the type declares them.

<a id="rustdoc-item-7362"></a>

### `name`

```rust
fn name(self: Self) -> &'static str;
```

The field's Rust name, as the field layer spells it.

<a id="rustdoc-item-7363"></a>

### `from_name`

```rust
fn from_name(name: &str) -> Option<Self>;
```

The field `name` names, or `None` when the type has no such field.

<a id="rustdoc-item-7364"></a>

### `value_tag`

```rust
fn value_tag(self: Self) -> &'static str;
```

The field's registered type tag, as its descriptor reports it.
