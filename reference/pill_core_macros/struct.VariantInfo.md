<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-177"></a>

# Struct `pill_core_macros::VariantInfo`

```rust
pub(crate) struct VariantInfo;
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:266`

Everything the macro extracted from one variant.

## Fields

<a id="rustdoc-item-169"></a>

### `attributes`

```rust
attributes: Vec<syn::Attribute>
```

Attributes passed through to the generated enum.

<a id="rustdoc-item-172"></a>

### `message`

```rust
message: Option<Vec<MessageNode>>
```

Parsed `#[message(...)]` nodes, when present.

<a id="rustdoc-item-173"></a>

### `is_transparent`

```rust
is_transparent: bool
```

Whether `#[transparent]` was present.

<a id="rustdoc-item-174"></a>

### `code_override`

```rust
code_override: Option<syn::Ident>
```

`#[code(...)]` override for the generated diagnostic code.

<a id="rustdoc-item-175"></a>

### `user_diagnostic`

```rust
user_diagnostic: Option<syn::Attribute>
```

User-supplied `#[diagnostic(...)]` attribute, kept to merge the code.

<a id="rustdoc-item-176"></a>

### `user_declares_code`

```rust
user_declares_code: bool
```

Whether the user's diagnostic attribute already declares a code.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
