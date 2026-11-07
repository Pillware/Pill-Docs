<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6"></a>

# Enum `pill_player::error::RenderingError`

```rust
pub enum RenderingError { ... }
```

Source: `hosting\pill_player\src\error.rs:29`

Anything that can go wrong while a windowed runtime is set up or runs.

Both arms are transparent, so `?` keeps the original error's code, message
and source chain.

## Variants

<a id="rustdoc-item-2"></a>

### `Host`

```rust
Host
```

Host setup failed. In the development host this includes starting its
renderer module, whose configuration or source watcher can fail. The
error is a [`pill_core::error::HostError`].

<a id="rustdoc-item-5"></a>

### `Renderer`

```rust
Renderer
```

The renderer failed: registration or attach, the GPU's surface or
device, a resource it needs, or a frame it could not draw.

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
- `Debug`
- `Diagnostic`
- `Error`
- `Display`
- `From<HostError>`
- `From<RendererError>`
- `EngineMessage`
