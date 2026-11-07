<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1490"></a>

# Module `pill_core::slot_map`

Source: `engine\pill_core\src\slot_map.rs:1`

Generational slot arena for values addressed by stable handles.
A generational slot arena: numbered slots that hand out stable handles.

## Responsibilities

- Hand out `Copy` handles that name one slot each, so a caller can pass
  them around while the map keeps owning the values.
- Check every access against the version a handle was issued with, so a
  handle to a removed value fails instead of reaching whatever value refills
  its slot.
- Provide [`define_slot_key!`](../macro.define_slot_key.md#rustdoc-item-1543) so a crate can stamp out its own handle types
  over the shared machinery instead of reimplementing the check.

## Design

Each slot stores the version it is at (its generation), and each handle
carries the version its slot had when the handle was made. A lookup compares
the two versions and reads a mismatch as "no value". That comparison is what
turns an old handle into a miss once its slot is freed and reused.

[`SlotMap`] is generic over the key type, so one implementation serves every
kind of resource a crate wants to address this way.

This is deliberately not the engine's asset storage. An asset is registered
by type, addressed by a guid and has to outlive a module reload. This map
holds built objects in a flat list, and a value has no identity beyond the
slot it sits in.

## Module contents

### Structs
- [`KeyData`](struct.KeyData.md#rustdoc-item-1451) — The slot index and version a handle was issued with.
- [`Slot`](struct.Slot.md#rustdoc-item-1492) — One entry of a [`SlotMap`]. It holds the slot's current version and the
- [`SlotMap`](struct.SlotMap.md#rustdoc-item-1487) — A vector of slots that hands out typed [`SlotKey`] handles.

### Traits
- [`SlotKey`](trait.SlotKey.md#rustdoc-item-1488) — A typed handle for one entry of a [`SlotMap`].
