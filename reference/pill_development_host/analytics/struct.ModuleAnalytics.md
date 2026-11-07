<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-204"></a>

# Struct `pill_development_host::analytics::ModuleAnalytics`

```rust
pub(in analytics) struct ModuleAnalytics;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:674`

One module's cumulative analytics across startup and every reload.

## Fields

<a id="rustdoc-item-191"></a>

### `name`

```rust
name: String
```

_No documentation provided._

<a id="rustdoc-item-192"></a>

### `kind`

```rust
kind: ModuleKind
```

_No documentation provided._

<a id="rustdoc-item-193"></a>

### `build_wall_ms`

```rust
build_wall_ms: u64
```

The last cargo build's wall time; `0` until a build records one.

<a id="rustdoc-item-194"></a>

### `stage_ms`

```rust
stage_ms: f64
```

The phase timings carry fractional milliseconds so fast operations
(stage, load, init) do not round to zero.

<a id="rustdoc-item-195"></a>

### `load_ms`

```rust
load_ms: f64
```

_No documentation provided._

<a id="rustdoc-item-196"></a>

### `init_ms`

```rust
init_ms: f64
```

_No documentation provided._

<a id="rustdoc-item-197"></a>

### `migrate_ms`

```rust
migrate_ms: f64
```

_No documentation provided._

<a id="rustdoc-item-198"></a>

### `artifact_bytes`

```rust
artifact_bytes: u64
```

The DLL's size on disk, as the build left it.

<a id="rustdoc-item-199"></a>

### `image_size`

```rust
image_size: u64
```

`SizeOfImage` from the DLL's PE header, in bytes.

<a id="rustdoc-item-200"></a>

### `import_dlls`

```rust
import_dlls: Vec<String>
```

_No documentation provided._

<a id="rustdoc-item-201"></a>

### `cargo_deps`

```rust
cargo_deps: Vec<String>
```

Direct cargo dependencies, read from the crate's fingerprint.

<a id="rustdoc-item-202"></a>

### `cargo_unit_ms`

```rust
cargo_unit_ms: Option<u64>
```

This module's own unit in the newest cargo `--timings` report, when the
build ran in that invocation.

<a id="rustdoc-item-203"></a>

### `reloads`

```rust
reloads: u32
```

Completed reloads of this module.

## Associated functions and methods

<a id="rustdoc-item-205"></a>

### `new`

```rust
pub(in analytics) fn new(name: &str, kind: ModuleKind) -> Self;
```

_No documentation provided._

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
