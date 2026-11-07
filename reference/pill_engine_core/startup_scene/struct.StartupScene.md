<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7257"></a>

# Struct `pill_engine_core::startup_scene::StartupScene`

```rust
pub struct StartupScene;
```

Source: `engine\pill_engine_core\src\startup_scene.rs:44`

A scene the front end asked the engine to load before the project starts.

It is stored as a world resource, and loading it removes it.

## Fields

<a id="rustdoc-item-8479"></a>

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Resource`
