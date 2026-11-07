<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-163"></a>

# Struct `pill_engine_macros::mirror::MirroredFunction`

```rust
pub(crate) struct MirroredFunction<'a>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:776`

Everything one trampoline and its descriptor need.

## Fields

<a id="rustdoc-item-157"></a>

### `ident`

```rust
ident: &'a syn::Ident
```

The Rust function's name.

<a id="rustdoc-item-158"></a>

### `signature`

```rust
signature: &'a syn::Signature
```

Its signature.

<a id="rustdoc-item-160"></a>

### `owner`

```rust
owner: Option<Owner>
```

The owning type, for a method or associated function.

<a id="rustdoc-item-161"></a>

### `type_name`

```rust
type_name: proc_macro2::TokenStream
```

The descriptor's `type_name`: the owner's qualified name, or the
declaring module's path for a free function.

<a id="rustdoc-item-162"></a>

### `owner_kind`

```rust
owner_kind: proc_macro2::TokenStream
```

The descriptor's `owner_kind`, as a path to the facade constant that
names it; the unknown kind when the attribute cannot know it.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
