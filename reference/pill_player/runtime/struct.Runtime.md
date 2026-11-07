<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-235"></a>

# Struct `pill_player::runtime::Runtime`

```rust
pub struct Runtime;
```

Source: `hosting\pill_player\src\runtime.rs:162`

The engine and the frame state every build needs.

## Fields

<a id="rustdoc-item-305"></a>

### `engine`

```rust
engine: Box<pill_engine::Engine>
```

Boxed so its address stays stable when the `Runtime` moves: the
development host hands loaded modules a raw pointer to it.

<a id="rustdoc-item-306"></a>

### `_project_guard`

```rust
_project_guard: Option<Box<dyn Any>>
```

What an external project backend returned, kept until the engine is
gone. Declared after `engine`, so the engine - and every system the
backend registered - drops first.

<a id="rustdoc-item-307"></a>

### `static_renderer`

```rust
static_renderer: Option<(crate::StaticRenderer, pill_engine::SystemOwner)>
```

The renderer a windowed shipping build links, paired with the owner its
`rendering` system registers under; `None` when there is none.

<a id="rustdoc-item-308"></a>

### `frame_errors`

```rust
frame_errors: FrameErrorReporter
```

Collapses repeated frame errors, separately for each message.

<a id="rustdoc-item-310"></a>

### `statistics`

```rust
statistics: FrameStatistics
```

Frames per second, measured over a reporting window.

<a id="rustdoc-item-312"></a>

### `frame_metrics`

```rust
frame_metrics: Option<FrameMetricHandles>
```

The `metrics` handles a frame records through, resolved on the first
frame this runtime runs.

## Associated functions and methods

<a id="rustdoc-item-316"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates a runtime around an empty engine.

A host that registers modules and the project itself - the development
host - calls this directly; [`setup`](fn.setup.md#rustdoc-item-314) and [`setup_with_asset_database`](fn.setup_with_asset_database.md#rustdoc-item-315)
start from it too.

<a id="rustdoc-item-317"></a>

### `engine`

```rust
pub fn engine(self: &Self) -> &Engine;
```

Read-only engine access for rendering and diagnostics.

<a id="rustdoc-item-318"></a>

### `engine_mut`

```rust
pub fn engine_mut(self: &mut Self) -> &mut Engine;
```

Mutable engine access for frontend-owned, frame-boundary work.

<a id="rustdoc-item-319"></a>

### `static_renderer`

```rust
pub(crate) fn static_renderer(self: &Self) -> Option<(crate::StaticRenderer, pill_engine::SystemOwner)>;
```

The linked renderer and its owner, when a windowed shipping build has
one.

<a id="rustdoc-item-320"></a>

### `run_frame_from`

```rust
pub fn run_frame_from(self: &mut Self, frame_start: Instant);
```

Run one scheduler frame and its reporting: systems, deferred commands,
failure reporting, then the frame statistics.

`frame_start` is when the caller's frame began. The frame-time metric
measures from there, so a frontend that did work before the frame can
report it, and a caller with nothing before the frame passes
`Instant::now()`. The statistics are logged here, roughly every three
seconds, so every frontend reports them the same way; the line is
`N FPS | M entities`, which the devops suites wait for.

<a id="rustdoc-item-240"></a>

### `frames_per_second`

```rust
pub fn frames_per_second(self: &Self) -> f64;
```

The rate the reporting window measures right now.

A frontend that displays a live rate calls this - the browser's editor
canvas does. The console line is logged by [`Self::run_frame_from`](#rustdoc-item-320)
itself. While the current window has counted no frame yet, this is the
last completed window's rate.

<a id="rustdoc-item-323"></a>

### `report_frame_error`

```rust
pub(in runtime) fn report_frame_error(self: &mut Self, message: &str);
```

Report one per-frame engine error; see [`FrameErrorReporter::report`](struct.FrameErrorReporter.md#rustdoc-item-322).

<a id="rustdoc-item-324"></a>

### `record_frame_metrics`

```rust
pub(in runtime) fn record_frame_metrics(self: &mut Self, frame_time_ms: f64, fps: f64);
```

Record one frame's numerical state into the shared metrics recorder.

The span measured here is the caller's: it runs from the `frame_start`
the frontend passed in to the end of this frame's systems, so work the
frontend did before the frame is part of it. The engine's own pass
records its span as `ecs.frame_time_ms` from inside
`Engine::process_frame`, so one name covers one span and neither
histogram mixes two meanings. The entity count is the engine's to
report, for the same reason: it describes the world that pass produced,
and the value is the same.

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
- `Default`
- `FrameDriver`
