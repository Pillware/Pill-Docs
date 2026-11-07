<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-326"></a>

# Struct `pill_development_host::analytics::ReloadEvent`

```rust
pub(in analytics) struct ReloadEvent;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:787`

A snapshot of one completed hot reload, printed once the frame's reloads
have all finished.

## Fields

<a id="rustdoc-item-315"></a>

### `kind`

```rust
kind: EventKind
```

Whether this was a whole-artifact reload or an in-place patch.

<a id="rustdoc-item-316"></a>

### `route`

```rust
route: Option<(Vec<PatchRoute>, usize)>
```

Which mechanisms delivered a patch, and how many copies they reached in
total. `None` for a reload, which has no route because it replaces the
whole artifact instead of redirecting a function.

<a id="rustdoc-item-317"></a>

### `name`

```rust
name: String
```

The module's name, or the names of the patched functions.

<a id="rustdoc-item-318"></a>

### `build_ms`

```rust
build_ms: u64
```

_No documentation provided._

<a id="rustdoc-item-319"></a>

### `stage_ms`

```rust
stage_ms: f64
```

_No documentation provided._

<a id="rustdoc-item-320"></a>

### `load_ms`

```rust
load_ms: f64
```

_No documentation provided._

<a id="rustdoc-item-321"></a>

### `init_ms`

```rust
init_ms: f64
```

_No documentation provided._

<a id="rustdoc-item-322"></a>

### `migrate_ms`

```rust
migrate_ms: f64
```

_No documentation provided._

<a id="rustdoc-item-323"></a>

### `artifact_bytes`

```rust
artifact_bytes: u64
```

_No documentation provided._

<a id="rustdoc-item-324"></a>

### `reload_count`

```rust
reload_count: u32
```

This event's ordinal among every reload and patch of the process, so
no two events in one session print the same `number=N`.

<a id="rustdoc-item-325"></a>

### `cargo_crates`

```rust
cargo_crates: Vec<(String, u64)>
```

Crates that actually compiled or linked in this reload's cargo
invocations, with their wall times, sorted by time descending. This is
how a dependent crate that was relinked shows up: editing
`pill_dummy_color`, for example, also relinks `pill_spline`.

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
