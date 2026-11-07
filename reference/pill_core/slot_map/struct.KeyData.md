<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1451"></a>

# Struct `pill_core::slot_map::KeyData`

```rust
pub struct KeyData;
```

Source: `engine\pill_core\src\slot_map.rs:42`

The slot index and version a handle was issued with.

A handle carries its `KeyData`, and the slot stores its own version. A
lookup succeeds only while the two versions match. Freeing a slot increases
its version, so a handle made before the free stops matching. It then reads
as "no value" instead of naming the value that refills the slot.

## Fields

<a id="rustdoc-item-1448"></a>

### `index`

```rust
index: u32
```

Position of the slot in the map's internal vector of slots.

<a id="rustdoc-item-1449"></a>

### `version`

```rust
version: std::num::NonZeroU32
```

The version the slot must still have for the handle to work.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Hash`
