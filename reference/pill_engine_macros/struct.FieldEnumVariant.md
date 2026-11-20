<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-285"></a>

# Struct `pill_engine_macros::FieldEnumVariant`

```rust
pub(crate) struct FieldEnumVariant;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:723`

One variant of a component's generated field enum: the variant, the field
name it answers to, and the tag its descriptor carries.

## Fields

<a id="rustdoc-item-282"></a>

### `variant_ident`

```rust
variant_ident: syn::Ident
```

The enum variant's identifier.

<a id="rustdoc-item-283"></a>

### `field_name`

```rust
field_name: String
```

The field's Rust name, as its descriptor spells it.

<a id="rustdoc-item-284"></a>

### `tag_text`

```rust
tag_text: String
```

The field's type tag, as its descriptor carries it.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
