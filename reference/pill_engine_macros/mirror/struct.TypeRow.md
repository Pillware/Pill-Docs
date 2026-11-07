<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-191"></a>

# Struct `pill_engine_macros::mirror::TypeRow`

```rust
pub(in mirror) struct TypeRow<'a>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::mirror'}}` · Source: `engine\pill_engine_macros\src\mirror.rs:1089`

One `__type` (or other `__`-named) row describing a type rather than a
function.

## Fields

<a id="rustdoc-item-184"></a>

### `ident`

```rust
ident: &'a syn::Ident
```

The type's identifier.

<a id="rustdoc-item-185"></a>

### `name`

```rust
name: proc_macro2::TokenStream
```

The row's name, as the expression the emitted descriptor carries.

<a id="rustdoc-item-186"></a>

### `owner_kind`

```rust
owner_kind: proc_macro2::TokenStream
```

The owner kind it declares, as a path to the facade constant that names
it - the same constant the host matches against.

<a id="rustdoc-item-187"></a>

### `return_tag`

```rust
return_tag: String
```

`return_tag`.

<a id="rustdoc-item-188"></a>

### `arg_tags`

```rust
arg_tags: Vec<String>
```

`arg_tags`.

<a id="rustdoc-item-189"></a>

### `arg_names`

```rust
arg_names: Vec<String>
```

`arg_names`.

<a id="rustdoc-item-190"></a>

### `trampoline`

```rust
trampoline: Option<syn::Ident>
```

The trampoline, when the row has one.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
