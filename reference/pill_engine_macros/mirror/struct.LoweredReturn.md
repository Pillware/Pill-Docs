<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-105"></a>

# Struct `pill_engine_macros::mirror::LoweredReturn`

```rust
pub(crate) struct LoweredReturn;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:588`

A lowered result: its tag, and the statements that write `__value`.

## Fields

<a id="rustdoc-item-101"></a>

### `tag`

```rust
tag: String
```

The codegen's tag for the result; empty for `()`.

<a id="rustdoc-item-102"></a>

### `fallible`

```rust
fallible: bool
```

Whether the function returns a `Result` whose `Err` fails the call.

<a id="rustdoc-item-103"></a>

### `has_value`

```rust
has_value: bool
```

Whether there is a value to write at all.

<a id="rustdoc-item-104"></a>

### `write`

```rust
write: proc_macro2::TokenStream
```

Statements writing `__value` (the `Ok` value, for a `Result`).

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
