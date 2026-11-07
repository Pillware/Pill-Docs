<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-676"></a>

# Struct `pill_physics::settings::PhysicsSettingsAsset`

```rust
pub struct PhysicsSettingsAsset;
```

Source: `extensions\pill_physics\pill_physics\src\settings.rs:79`

The `.physics_settings` document a project tunes the simulation through.

The file lives at `res/settings/pill_physics.physics_settings`. The loaded
value is only a carrier: the manager reads the document, not the asset.

The derive declares the type, so every generation of the module registers it
with the world's asset store without a call in `register`.

## Fields

<a id="rustdoc-item-788"></a>

### `settings`

```rust
settings: PhysicsSettings
```

The settings the file holds.

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
- `MaybeSync`
- `SupersetOf<SS>`
- `Same`
- `Downcast`
- `DowncastSend`
- `DowncastSync`
- `Debug`
- `Default`
- `TraitAccessible<dyn Asset>`
- `Asset`
- `StandaloneAsset`
