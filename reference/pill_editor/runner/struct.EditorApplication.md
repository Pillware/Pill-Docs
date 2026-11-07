<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1150"></a>

# Struct `pill_editor::runner::EditorApplication`

```rust
pub(in runner) struct EditorApplication;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:318`

The `winit` application: one editor window, created on resume.

## Fields

<a id="rustdoc-item-1146"></a>

### `editor_window`

```rust
editor_window: Option<editor_window::EditorWindow>
```

The window and its host, once the loop resumed.

<a id="rustdoc-item-1147"></a>

### `log_buffer`

```rust
log_buffer: pill_core::telemetry::capture::LogBuffer
```

The telemetry capture ring the window's Console tab reads.

<a id="rustdoc-item-1148"></a>

### `wake_timer`

```rust
wake_timer: WakeTimer
```

The loop's timed wake, when the last frame asked for one.

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
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `ApplicationHandler`
