<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-301"></a>

# Enum `pill_engine_macros::HeapFieldKind`

```rust
pub(crate) enum HeapFieldKind { ... }
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:827`

What the managed side needs to know about one heap-owning field.

## Variants

<a id="rustdoc-item-296"></a>

### `Vec`

```rust
Vec
```

A `Vec<E>` field; the element tag drives the generated span type.

<a id="rustdoc-item-298"></a>

### `DynamicBuffer`

```rust
DynamicBuffer
```

A `DynamicBuffer<E>` field: elements in engine-owned native memory,
whose `(ptr, len, cap)` handle the mirror reads straight out of the
row.

<a id="rustdoc-item-299"></a>

### `VecString`

```rust
VecString
```

A `Vec<String>` field: elements are individually allocated, so managed
code reaches each one through its own accessor instead of a span.

<a id="rustdoc-item-300"></a>

### `String`

```rust
String
```

A `String` field, exposed to C# as UTF-8 text.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
