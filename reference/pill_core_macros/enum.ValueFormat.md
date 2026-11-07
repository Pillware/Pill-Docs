<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-93"></a>

# Enum `pill_core_macros::ValueFormat`

```rust
pub(crate) enum ValueFormat { ... }
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:127`

Display format of a dynamic message value.

Chooses which formatting trait a dynamic value uses, both in the plain
message and in the semantic renderer.

## Variants

<a id="rustdoc-item-91"></a>

### `Display`

```rust
Display
```

Render the value with `Display`.

<a id="rustdoc-item-92"></a>

### `Debug`

```rust
Debug
```

Render the value with `Debug` (`{:?}`).

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
