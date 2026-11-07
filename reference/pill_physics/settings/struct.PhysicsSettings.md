<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-598"></a>

# Struct `pill_physics::settings::PhysicsSettings`

```rust
pub struct PhysicsSettings;
```

Source: `extensions\pill_physics\pill_physics\src\settings.rs:34`

The tuning of the simulation.

## Fields

<a id="rustdoc-item-736"></a>

### `gravity`

```rust
gravity: [f32; 3]
```

World gravity in world units per second squared. The default is the
earth's, pointing down.

<a id="rustdoc-item-737"></a>

### `fixed_timestep`

```rust
fixed_timestep: f32
```

The length of one simulation step in seconds. Every step advances the
world by exactly this much, so the same scene settles the same way at
any frame rate.

<a id="rustdoc-item-738"></a>

### `max_substeps`

```rust
max_substeps: u32
```

The most steps one frame may run, so a long frame cannot spiral into a
longer one.

<a id="rustdoc-item-739"></a>

### `interpolate`

```rust
interpolate: bool
```

Whether a body's drawn pose is blended between its last two steps. It
smooths motion at frame rates that are not a multiple of the step rate.

<a id="rustdoc-item-740"></a>

### `debug_draw`

```rust
debug_draw: bool
```

Whether the colliders are drawn as outlines, for looking at what the
simulation actually sees.

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
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `MaybeSync`
- `SupersetOf<SS>`
- `Scalar`
- `Same`
- `Downcast`
- `DowncastSend`
- `DowncastSync`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Serialize`
- `Deserialize<'de>`
- `Default`
