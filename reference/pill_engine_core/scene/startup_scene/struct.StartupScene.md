<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4309"></a>

# Struct `pill_engine_core::scene::startup_scene::StartupScene`

```rust
pub struct StartupScene;
```

Source: `engine\pill_engine_core\src\scene\startup_scene.rs:44`

A scene the front end asked the engine to load before the project starts.

It is stored as a world resource, and loading it removes it.

## Fields

<a id="rustdoc-item-8073"></a>

### `path`

```rust
path: String
```

The scene's path below the project's asset directory, as
`project_settings.yaml` names it.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Resource`
