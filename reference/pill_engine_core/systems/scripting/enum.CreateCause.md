<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4684"></a>

# Enum `pill_engine_core::systems::scripting::CreateCause`

```rust
pub enum CreateCause { ... }
```

Source: `engine\pill_engine_core\src\systems\scripting.rs:225`

What made a script component start existing.

## Variants

<a id="rustdoc-item-10598"></a>

### `Spawned`

```rust
Spawned
```

Game code added it, through the frame's command queue or the eager
world API.

<a id="rustdoc-item-10599"></a>

### `PlayStarted`

```rust
PlayStarted
```

Play started, so every script the edit world held started running.

<a id="rustdoc-item-10600"></a>

### `Authored`

```rust
Authored
```

Code outside the simulation added it: the editor, a tool, a test.

<a id="rustdoc-item-10601"></a>

### `SceneLoaded`

```rust
SceneLoaded
```

Loading a scene attached it.

<a id="rustdoc-item-10602"></a>

### `HistoryRestored`

```rust
HistoryRestored
```

An undo or a redo restored it.

<a id="rustdoc-item-10603"></a>

### `PlayStopRestored`

```rust
PlayStopRestored
```

Stopping play restored the edit world's copy of it.

<a id="rustdoc-item-10604"></a>

### `Duplicated`

```rust
Duplicated
```

A paste or a duplicate copied it from another entity.

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
