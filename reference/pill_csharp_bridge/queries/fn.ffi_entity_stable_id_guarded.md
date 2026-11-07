<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1884"></a>

# Function `pill_csharp_bridge::queries::ffi_entity_stable_id_guarded`

```rust
pub(in queries) fn ffi_entity_stable_id_guarded(entity: *const pill_engine::Entity, low_half_output: *mut u64, high_half_output: *mut u64) -> u8;
```

Visibility: `{'restricted': {'parent': 1872, 'path': '::queries'}}` · Source: `csharp\pill_csharp_bridge\src\queries.rs:517`

Write a live entity's stable id, split into two `u64` halves.

Status codes:

- `0`: the id was written.
- `1`: the entity is not live. It was destroyed, or the handle belongs to
  another world.
- `3`: no managed system is scheduled.
- `5`: the entity handle or one of the two output halves was null.

Two `u64` halves stand in for one `u128`, because no C ABI in the engine
table carries one. The managed side joins the pair back into the 32-digit
hex form that saved data records.
