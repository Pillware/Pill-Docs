<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3011"></a>

# Module `pill_engine_core::ecs::component`

Source: `engine\pill_engine_core\src\ecs\component.rs:1`

Component trait, type identification, and change-detection primitives.
Component trait, type identification, and change-detection primitives.

## Responsibilities

- Defines the [`Component`] marker trait required by all ECS component types.
- Provides [`ComponentId`] for type-erased component identification.
- Implements [`Tick`] and [`ComponentTicks`] for frame-based change detection.
- Manages the [`ComponentRegistry`] that assigns bit indices for archetype masks.
- Defines [`ComponentMask`] (u128) for O(1) archetype matching.

## Design

A component type is registered at runtime and gets one bit in a 128-bit
mask. Each archetype carries the mask of its component set, and a query
builds a mask from the types it asks for. Matching an archetype is then one
bitwise AND, whatever the number of types. Change detection uses one world
tick that moves forward each frame. Each component row records the tick
when it was added and when it last changed, and a filter compares those
ticks with the tick at which the calling system last ran.

## Module contents

### Structs
- [`ComponentMask`](struct.ComponentMask.md#rustdoc-item-2638) — A set of component types, one bit per type.
- [`ComponentRegistration`](struct.ComponentRegistration.md#rustdoc-item-3169) — What one component registration declared about its layout.
- [`ComponentRegistry`](struct.ComponentRegistry.md#rustdoc-item-2696) — Maps component types to bit indices in the component mask.
- [`ComponentTicks`](struct.ComponentTicks.md#rustdoc-item-2556) — The change-detection ticks of one component row.
- [`Tick`](struct.Tick.md#rustdoc-item-3022) — A counter that says whether a component is new or changed.

### Enums
- [`ComponentId`](enum.ComponentId.md#rustdoc-item-2117) — Identifier for a registered component type, with the Rust type erased.
- [`Registration`](enum.Registration.md#rustdoc-item-3274) — What a registration call found and did.

### Traits
- [`Component`](trait.Component.md#rustdoc-item-2515) — Marker trait that every ECS component type implements.

### Functions
- [`component_name_hash`](fn.component_name_hash.md#rustdoc-item-3164) — Hashes a name to one 64-bit half of a stable component identity.
- [`component_schema_hash`](fn.component_schema_hash.md#rustdoc-item-3208) — Structural hash over a component's declared field layout.
- [`shared_component_identity`](fn.shared_component_identity.md#rustdoc-item-3165) — Derives the stable 128-bit identity of a component from its declared name.

### Constants
- [`DESCRIPTOR_HASH_SALT`](constant.DESCRIPTOR_HASH_SALT.md#rustdoc-item-3012) — Salts that keep the two 128-bit identity variants apart when they hold the
- [`SHARED_HASH_SALT`](constant.SHARED_HASH_SALT.md#rustdoc-item-3013)
- [`TICK_WRAP_HALF_RANGE`](constant.TICK_WRAP_HALF_RANGE.md#rustdoc-item-3010) — Half the tick range, which is where the wrapping comparison stops telling
