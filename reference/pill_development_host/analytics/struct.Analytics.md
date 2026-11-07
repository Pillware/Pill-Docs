<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-395"></a>

# Struct `pill_development_host::analytics::Analytics`

```rust
pub(in analytics) struct Analytics;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:835`

Process-wide analytics state, guarded because builds record from worker
threads while the frame loop prints the reports.

## Fields

<a id="rustdoc-item-379"></a>

### `started`

```rust
started: pill_core::platform::Instant
```

_No documentation provided._

<a id="rustdoc-item-381"></a>

### `modules`

```rust
modules: Vec<ModuleAnalytics>
```

_No documentation provided._

<a id="rustdoc-item-382"></a>

### `pending_reload_events`

```rust
pending_reload_events: Vec<ReloadEvent>
```

_No documentation provided._

<a id="rustdoc-item-384"></a>

### `pending_cargo_crates`

```rust
pending_cargo_crates: std::collections::HashMap<String, u64>
```

Per-crate compile and link times collected from the cargo `--timings`
reports of the builds in the current reload transaction.
[`record_reload`](fn.record_reload.md#rustdoc-item-383) takes a copy and then clears them, so each reload
line shows exactly which crates its own build rebuilt.

<a id="rustdoc-item-385"></a>

### `host_current_bytes`

```rust
host_current_bytes: u64
```

_No documentation provided._

<a id="rustdoc-item-386"></a>

### `host_peak_bytes`

```rust
host_peak_bytes: u64
```

_No documentation provided._

<a id="rustdoc-item-387"></a>

### `cargo_child_peak_bytes`

```rust
cargo_child_peak_bytes: u64
```

_No documentation provided._

<a id="rustdoc-item-388"></a>

### `builds`

```rust
builds: u64
```

_No documentation provided._

<a id="rustdoc-item-389"></a>

### `last_cargo_total_seconds`

```rust
last_cargo_total_seconds: f64
```

Total wall time of the newest cargo `--timings` report, in seconds.

<a id="rustdoc-item-390"></a>

### `patches`

```rust
patches: u64
```

Function patches that went live in this process.

<a id="rustdoc-item-391"></a>

### `reload_events`

```rust
reload_events: u32
```

Reloads and patches recorded so far in this process, which numbers
each event's `number=N`.

<a id="rustdoc-item-392"></a>

### `patch_refusals`

```rust
patch_refusals: u64
```

Changes the fast path declined to patch, which fell through to a reload.

<a id="rustdoc-item-393"></a>

### `patch_failures`

```rust
patch_failures: u64
```

Patches that were attempted and failed, leaving the previous
implementation running.

<a id="rustdoc-item-394"></a>

### `patch_fallbacks`

```rust
patch_fallbacks: Vec<PatchFallback>
```

Why the fast path did not take, one entry per distinct cause.

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
