<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4285"></a>

# Struct `pill_engine_core::hot_patch::HotPatchRegistry`

```rust
pub struct HotPatchRegistry;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:364`

Engine-owned map from registered system name to its dispatch slot.

Lives on the [`Engine`](../engine/struct.Engine.md#rustdoc-item-2) rather than in a global, which ties
each slot's lifetime to the engine that owns it and keeps the slots out of
process-wide state.

## Fields

<a id="rustdoc-item-5131"></a>

### `slots`

```rust
slots: std::collections::HashMap<String, std::sync::Arc<HotSlot>>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-5132"></a>

### `new`

```rust
pub fn new() -> Self;
```

An empty registry.

<a id="rustdoc-item-5133"></a>

### `insert`

```rust
pub fn insert<impl Into<String>: Into<String>>(self: &mut Self, name: impl Into<String>, slot: Arc<HotSlot>);
```

Records a system's slot under its registration name.

A repeated name replaces the previous entry, matching the engine's
behaviour of allowing duplicate system names.

<a id="rustdoc-item-5134"></a>

### `remove`

```rust
pub fn remove(self: &mut Self, name: &str);
```

Forgets one system's slot, so a cleared system can never be patched.

Every entry referring to the same slot is dropped, not just the one
matching `name`. A system is registered under both its display name and
its function path, and leaving either behind would let a patch install
into a system the scheduler has already dropped.

<a id="rustdoc-item-5135"></a>

### `get`

```rust
pub fn get(self: &Self, name: &str) -> Option<&Arc<HotSlot>>;
```

The slot registered for `name`, if any.

<a id="rustdoc-item-5136"></a>

### `names`

```rust
pub fn names(self: &Self) -> impl Iterator<Item = _>;
```

Every name a hot-patchable system is registered under, for diagnostics
and tooling.

<a id="rustdoc-item-5137"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

How many systems are hot-patchable.

<a id="rustdoc-item-5138"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether no system is hot-patchable.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Default`
