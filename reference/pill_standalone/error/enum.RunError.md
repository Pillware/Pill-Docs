<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-105"></a>

# Enum `pill_standalone::error::RunError`

```rust
pub enum RunError { ... }
```

Source: `frontends\pill_standalone\src\error.rs:63`

Anything that can end a standalone run.

Every arm passes through to the error it carries, so `?` keeps the original
error's diagnostic code, message and source chain.

## Variants

<a id="rustdoc-item-108"></a>

### `Host`

```rust
Host
```

Setting up the host or runtime failed before any frame ran.

<a id="rustdoc-item-110"></a>

### `Frontend`

```rust
Frontend
```

The event loop could not be created or run, or the window could not be
created.

<a id="rustdoc-item-113"></a>

### `Renderer`

```rust
Renderer
```

The renderer failed: it could not create a GPU surface or device, a
resource it needed is missing, or it could not draw a frame.

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
- `From<HostError>`
- `From<FrontendError>`
- `From<RendererError>`
- `EngineMessage`
- `From<RenderingError>`
- `From<Infallible>`
