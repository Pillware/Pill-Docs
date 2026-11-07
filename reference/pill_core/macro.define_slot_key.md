<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1543"></a>

# Macro `pill_core::define_slot_key`

```rust
macro_rules! define_slot_key {
    ($name:ident) => { ... };
}
```

Source: `engine\pill_core\src\slot_map.rs:90`

Defines a typed handle over [`KeyData`](slot_map/struct.KeyData.md#rustdoc-item-1451), with its constructor, its accessor
and its [`SlotKey`](slot_map/trait.SlotKey.md#rustdoc-item-1488) implementation.

Every handle type a crate needs is the same wrapper; only the name and the
map that accepts it differ. The macro writes the wrapper out so each
resource does not get a hand-written copy of it.

## Examples

```ignore
pill_core::define_slot_key!(MeshHandle);
```
