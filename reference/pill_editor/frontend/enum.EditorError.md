<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-272"></a>

# Enum `pill_editor::frontend::EditorError`

```rust
pub enum EditorError { ... }
```

Source: `editor\pill_editor\src\frontend.rs:20`

Anything that can end an editor run.

## Variants

<a id="rustdoc-item-254"></a>

### `EventLoopCreation`

```rust
EventLoopCreation
```

The `winit` event loop could not be created.

<a id="rustdoc-item-256"></a>

### `EventLoopRun`

```rust
EventLoopRun
```

The event loop's `run_app` reported a failure.

<a id="rustdoc-item-259"></a>

### `Host`

```rust
Host
```

Setting up the host failed before any frame ran.

<a id="rustdoc-item-262"></a>

### `Renderer`

```rust
Renderer
```

A frame through the project's renderer failed.

<a id="rustdoc-item-265"></a>

### `WindowCreation`

```rust
WindowCreation
```

The native window could not be created.

<a id="rustdoc-item-268"></a>

### `AdapterRequest`

```rust
AdapterRequest
```

No GPU adapter could be found for the editor.

<a id="rustdoc-item-271"></a>

### `DeviceRequest`

```rust
DeviceRequest
```

The editor's GPU device could not be created.

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
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `ToSmolStr`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Debug`
- `Diagnostic`
- `Error`
- `Display`
- `From<HostError>`
- `From<RendererError>`
- `EngineMessage`
- `From<RenderingError>`
