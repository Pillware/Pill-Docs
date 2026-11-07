<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-496"></a>

# Struct `pill_csharp_bridge::components::BindingStore`

```rust
pub(crate) struct BindingStore;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\components.rs:95`

The live binding table, replaceable while a managed project runs.

Every managed system closure holds this handle instead of a copy of the
map. A reload can change a component's layout or add a component, and the
invocation scope a system installs when it runs has to see the layout its
columns actually use, not the one that was current when the system was
registered. The lock is held for one system run and taken for writing only
between frames, so the two never overlap.

## Fields

<a id="rustdoc-item-779"></a>

### `bindings`

```rust
bindings: std::sync::RwLock<std::collections::HashMap<StableComponentId, ComponentBinding>>
```

The table itself.

## Associated functions and methods

<a id="rustdoc-item-782"></a>

### `new`

```rust
pub(crate) fn new(bindings: std::collections::HashMap<StableComponentId, ComponentBinding>) -> Self;
```

Wrap one binding table.

<a id="rustdoc-item-783"></a>

### `read`

```rust
pub(crate) fn read(self: &Self) -> RwLockReadGuard<'_, std::collections::HashMap<StableComponentId, ComponentBinding>>;
```

Borrow the table for reading.

If a thread panicked while it held the lock, the table is used anyway.
A panic cannot leave a map of plain data in a wrong state, because a
writer either finishes the one entry it was changing or leaves it out,
so turning the poisoned lock into an error would add a failure mode no
caller can act on.

<a id="rustdoc-item-785"></a>

### `write`

```rust
pub(crate) fn write(self: &Self) -> RwLockWriteGuard<'_, std::collections::HashMap<StableComponentId, ComponentBinding>>;
```

Borrow the table for writing, with the same rule as [`Self::read`](#rustdoc-item-783).

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
