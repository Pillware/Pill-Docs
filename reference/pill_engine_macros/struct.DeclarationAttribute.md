<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-494"></a>

# Struct `pill_engine_macros::DeclarationAttribute`

```rust
pub(crate) struct DeclarationAttribute;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:3203`

One declaration attribute: the derive it stands for and the arguments it
passes through to it.

## Fields

<a id="rustdoc-item-490"></a>

### `attribute_name`

```rust
attribute_name: &'static str
```

The attribute's name as an author writes it, for the refusal text.

<a id="rustdoc-item-491"></a>

### `derive_name`

```rust
derive_name: &'static str
```

The derive the attribute expands to.

<a id="rustdoc-item-492"></a>

### `accepted_keys`

```rust
accepted_keys: &'static [&'static str]
```

The argument keys the derive accepts, used to check the author's list.

<a id="rustdoc-item-493"></a>

### `accepted_spellings`

```rust
accepted_spellings: &'static [&'static str]
```

The accepted arguments as the refusal text spells them out.

## Associated functions and methods

<a id="rustdoc-item-495"></a>

### `expand`

```rust
pub(crate) fn expand(self: &Self, extras: DeclarationExtras, attribute: proc_macro2::TokenStream, item: proc_macro2::TokenStream) -> syn::Result<proc_macro2::TokenStream>;
```

Expands the attribute into the declaration it stands for.

The author's arguments are re-emitted verbatim, so the derive stays the
one place that judges a shared name, a layout list or a play state.

<a id="rustdoc-item-496"></a>

### `check_asset_kind`

```rust
pub(crate) fn check_asset_kind(self: &Self, arguments: &syn::punctuated::Punctuated<syn::Meta, $crate::token::Comma>, ident: &syn::Ident) -> syn::Result<()>;
```

Refuses an asset declaration that names neither kind or both: a type
imports from a source file or is its own document file.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
