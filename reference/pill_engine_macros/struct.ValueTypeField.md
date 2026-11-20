<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-389"></a>

# Struct `pill_engine_macros::ValueTypeField`

```rust
pub(crate) struct ValueTypeField;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:2120`

One `field: type` entry of a [`pill_value_type!`](macro.pill_value_type.md#rustdoc-item-386) declaration.

## Fields

<a id="rustdoc-item-387"></a>

### `field_name`

```rust
field_name: syn::Ident
```

The field's name, as it appears on the foreign type.

<a id="rustdoc-item-388"></a>

### `field_type`

```rust
field_type: syn::Type
```

The field's type, used for its size, alignment and tag.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Parse`
