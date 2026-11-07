<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-74"></a>

# Struct `pill_engine_macros::mirror::LoweredParameter`

```rust
pub(crate) struct LoweredParameter;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:151`

One parameter, lowered.

## Fields

<a id="rustdoc-item-71"></a>

### `tag`

```rust
tag: String
```

The codegen's tag for this parameter.

<a id="rustdoc-item-72"></a>

### `binding`

```rust
binding: proc_macro2::TokenStream
```

The statement that reads it into its binding.

<a id="rustdoc-item-73"></a>

### `pass`

```rust
pass: proc_macro2::TokenStream
```

The expression the call receives.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
