<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-127"></a>

# Enum `pill_engine_macros::mirror::Receiver`

```rust
pub(crate) enum Receiver { ... }
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:752`

How a mirrored function takes its owner.

## Variants

<a id="rustdoc-item-123"></a>

### `None`

```rust
None
```

No receiver: a free or associated function.

<a id="rustdoc-item-124"></a>

### `Ref`

```rust
Ref
```

`&self`.

<a id="rustdoc-item-125"></a>

### `Mut`

```rust
Mut
```

`&mut self`.

<a id="rustdoc-item-126"></a>

### `Value`

```rust
Value
```

`self`.

## Associated functions and methods

<a id="rustdoc-item-128"></a>

### `tag`

```rust
pub(in mirror) fn tag(self: Self) -> &'static str;
```

The descriptor's spelling.

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
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
