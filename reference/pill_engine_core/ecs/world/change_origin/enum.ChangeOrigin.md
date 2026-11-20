<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4682"></a>

# Enum `pill_engine_core::ecs::world::change_origin::ChangeOrigin`

```rust
pub enum ChangeOrigin { ... }
```

Source: `engine\pill_engine_core\src\ecs\world\change_origin.rs:34`

Who is changing the world.

## Variants

<a id="rustdoc-item-4675"></a>

### `Simulation`

```rust
Simulation
```

Game code, through the frame's command queue or the eager world API.
The default, and the only origin a shipping build produces.

<a id="rustdoc-item-4676"></a>

### `Authoring`

```rust
Authoring
```

Code outside the simulation: the editor, a tool, a test.

<a id="rustdoc-item-4677"></a>

### `HistoryRestore`

```rust
HistoryRestore
```

An undo or a redo replaying a recorded step.

<a id="rustdoc-item-4679"></a>

### `Duplicate`

```rust
Duplicate
```

A paste or a duplicate of an existing entity.

<a id="rustdoc-item-4680"></a>

### `SceneLoad`

```rust
SceneLoad
```

Loading a scene into the world.

<a id="rustdoc-item-4681"></a>

### `PlayStopRestore`

```rust
PlayStopRestore
```

Stopping play, which restores the edit world's components.

## Associated functions and methods

<a id="rustdoc-item-4683"></a>

### `create_cause`

```rust
pub(crate) fn create_cause(self: Self) -> CreateCause;
```

The cause a component created under this origin reports.

<a id="rustdoc-item-4685"></a>

### `duplicated_from`

```rust
pub(crate) fn duplicated_from(self: Self) -> Option<Entity>;
```

The entity a duplicated component was copied from, when the origin names
one.

<a id="rustdoc-item-4686"></a>

### `destroy_cause`

```rust
pub(crate) fn destroy_cause(self: Self) -> DestroyCause;
```

The cause a component destroyed under this origin reports.

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
