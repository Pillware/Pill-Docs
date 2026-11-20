<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-410"></a>

# Struct `pill_engine_macros::ValueTypeDeclaration`

```rust
pub(crate) struct ValueTypeDeclaration;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:2140`

The `Type { field: type, ... }` form [`pill_value_type!`](macro.pill_value_type.md#rustdoc-item-386) accepts.

## Fields

<a id="rustdoc-item-408"></a>

### `type_path`

```rust
type_path: syn::Path
```

The foreign type's path, spelled as the component field is.

<a id="rustdoc-item-409"></a>

### `fields`

```rust
fields: Vec<ValueTypeField>
```

The declared fields, in `repr(C)` order.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Parse`
