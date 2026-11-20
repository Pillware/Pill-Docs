<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-361"></a>

# Struct `pill_engine_macros::AccessorEmission`

```rust
pub(crate) struct AccessorEmission;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:1188`

One trampoline an accessor kind offers, and what the descriptor says about
it.

[`emit_heap_field_accessor`](fn.emit_heap_field_accessor.md#rustdoc-item-360) decides the list, so which operations a
container has is visible in one place.

## Fields

<a id="rustdoc-item-357"></a>

### `operation`

```rust
operation: &'static str
```

The operation the descriptor names it by (`view`, `resize`, ...).

<a id="rustdoc-item-358"></a>

### `symbol`

```rust
symbol: String
```

The exported symbol the host resolves.

<a id="rustdoc-item-359"></a>

### `trampoline`

```rust
trampoline: proc_macro2::TokenStream
```

The trampoline itself.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
