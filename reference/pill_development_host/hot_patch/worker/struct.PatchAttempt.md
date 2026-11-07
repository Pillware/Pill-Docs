<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2217"></a>

# Struct `pill_development_host::hot_patch::worker::PatchAttempt`

```rust
pub(crate) struct PatchAttempt;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\worker.rs:47`

One pending patch attempt: what the frame thread prepared, and what a
worker or the activation still needs.

It owns its inputs, so it can outlive the frame's borrows while the build
runs. Nothing in it points into the engine, an artifact or the session.

## Fields

<a id="rustdoc-item-2209"></a>

### `path`

```rust
path: std::path::PathBuf
```

The changed file, for the snapshot recorded once every body is live.

<a id="rustdoc-item-2210"></a>

### `new_contents`

```rust
new_contents: String
```

The file's contents as read during classification.

<a id="rustdoc-item-2211"></a>

### `modified`

```rust
modified: Option<std::time::SystemTime>
```

The modification time when those contents were read.

<a id="rustdoc-item-2212"></a>

### `bodies`

```rust
bodies: Vec<PreparedBody>
```

One entry per changed body, in the order they were classified.

<a id="rustdoc-item-2214"></a>

### `stages`

```rust
stages: super::PatchStages
```

Timings so far; the worker and the activation add theirs.

<a id="rustdoc-item-2216"></a>

### `started`

```rust
started: pill_core::platform::Instant
```

When the attempt began, so the reported total covers preparation, the
build and the wait for the next frame boundary. The total is measured
from here because the build happens between frames, so the frame that
collects the attempt cannot time the whole span itself.

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
