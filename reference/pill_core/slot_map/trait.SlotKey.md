<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1488"></a>

# Trait `pill_core::slot_map::SlotKey`

```rust
pub trait SlotKey: Copy + Eq { ... }
```

Source: `engine\pill_core\src\slot_map.rs:59`

A typed handle for one entry of a [`SlotMap`](struct.SlotMap.md#rustdoc-item-1487).

Each implementation is a thin wrapper around a [`KeyData`](struct.KeyData.md#rustdoc-item-1451), so a handle
stays `Copy` and never borrows the value it names. The wrapper type is the
only record of which map a handle belongs to: a map accepts just the key
type it was declared with.

## Required and provided items

<a id="rustdoc-item-1485"></a>

### `new`

```rust
fn new(index: u32, version: NonZeroU32) -> Self;
```

Builds a handle from a slot index and the version the slot must still
have for the handle to work.

Handles are also built outside the map. A storage starts with stand-in
handles and replaces them as its real values are inserted, and a test
needs handles for slots it never fills. The map's own `insert` calls
this too.

<a id="rustdoc-item-1486"></a>

### `data`

```rust
fn data(self: Self) -> KeyData;
```

Returns the index and version the handle carries.
