<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4687"></a>

# Enum `pill_engine_core::systems::scripting::DestroyCause`

```rust
pub enum DestroyCause { ... }
```

Source: `engine\pill_engine_core\src\systems\scripting.rs:292`

What made a script component stop existing.

## Variants

<a id="rustdoc-item-10826"></a>

### `Despawned`

```rust
Despawned
```

Game code removed it or destroyed its entity.

<a id="rustdoc-item-10827"></a>

### `Authored`

```rust
Authored
```

Code outside the simulation removed it: the editor, a tool, a test.

<a id="rustdoc-item-10828"></a>

### `SceneUnloaded`

```rust
SceneUnloaded
```

Unloading a scene removed it.

<a id="rustdoc-item-10829"></a>

### `HistoryRestored`

```rust
HistoryRestored
```

An undo or a redo removed it.

<a id="rustdoc-item-10830"></a>

### `PlayStopRestored`

```rust
PlayStopRestored
```

Stopping play discarded the running copy of it.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
