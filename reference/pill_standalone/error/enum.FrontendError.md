<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6"></a>

# Enum `pill_standalone::error::FrontendError`

```rust
pub enum FrontendError { ... }
```

Source: `frontends\pill_standalone\src\error.rs:38`

Failures of the windowed frontend, all reported by `winit`.

Only a build with the `rendering` feature has this type. It is raised while
the event loop is created or run, or while the native standalone window is
created.

## Variants

<a id="rustdoc-item-2"></a>

### `EventLoopCreation`

```rust
EventLoopCreation
```

The `winit` event loop could not be created, or failed while running.

<a id="rustdoc-item-5"></a>

### `WindowCreation`

```rust
WindowCreation
```

The native window could not be created.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `ToSmolStr`
- `Debug`
- `Diagnostic`
- `Error`
- `Display`
- `EngineMessage`
- `From<FrontendError>`
