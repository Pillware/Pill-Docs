<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6"></a>

# Struct `pill_engine_macros::mirror::Owner`

```rust
pub(crate) struct Owner;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:64`

The type a mirrored method or associated function belongs to, as the
trampoline names it.

## Fields

<a id="rustdoc-item-4"></a>

### `ident`

```rust
ident: syn::Ident
```

The type's identifier; `Self` in a signature resolves to it.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `Clone`
