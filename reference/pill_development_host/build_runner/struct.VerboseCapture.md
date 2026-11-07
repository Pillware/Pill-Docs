<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-594"></a>

# Struct `pill_development_host::build_runner::VerboseCapture`

```rust
pub(in build_runner) struct VerboseCapture;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:697`

Harvests the module crate's `rustc` invocation out of a build the host was
going to run anyway.

A fast patch replays the exact compiler line cargo uses for the module, so
the patch links the identical dependency closure. Discovering that line
costs a `cargo build -v`, and cargo prints the invocation only when it
actually compiles - so an on-demand probe would have to touch the crate to
force a rebuild, once per reload, because a reload is what makes the cached
line stale. Taking the line from the build the host just ran makes the
discovery free.

`-v` is appended at spawn time only, never to the configured build command:
that command is part of the cache key and of the artifact stamp. Stderr is
piped so it can be scanned, and every line is written straight back out so
the console still streams - minus the `Running`, `Fresh` and `Dirty` lines
`-v` adds. Colour is requested explicitly when the host's own stderr is a
terminal, because cargo turns it off for a pipe.

## Fields

<a id="rustdoc-item-590"></a>

### `crate_names`

```rust
crate_names: Vec<String>
```

The crate names to look for: the modules that one invocation builds.

<a id="rustdoc-item-591"></a>

### `workspace_root`

```rust
workspace_root: std::path::PathBuf
```

The workspace the build runs in. The flags cache lands under that
workspace, not in a shared temporary directory.

<a id="rustdoc-item-592"></a>

### `reader`

```rust
reader: Option<std::thread::JoinHandle<Vec<(String, compile::CargoRustcLine)>>>
```

The reader thread and the lines it found, available once joined.

## Associated functions and methods

<a id="rustdoc-item-595"></a>

### `arm`

```rust
pub(in build_runner) fn arm(command: &mut Command, program: &str, crate_names: &[&str], workspace_root: &Path) -> Option<Self>;
```

Makes `command` a verbose build whose stderr is read through a pipe, for
cargo only.

Returns `None` for a build that is not cargo (the managed backend's
`dotnet`): it has no rustc line to harvest and must keep its inherited
streams. It also returns `None` when nothing asked for a capture.

<a id="rustdoc-item-596"></a>

### `start`

```rust
pub(in build_runner) fn start(self: Self, child: &mut std::process::Child) -> Self;
```

Starts reading the child's stderr on a thread.

<a id="rustdoc-item-597"></a>

### `finish`

```rust
pub(in build_runner) fn finish(self: Self, commands: &[(&str, &[String])]);
```

Joins the reader and caches every line it found.

A build that recompiled nothing prints no invocation. That is not a
failure: the line cached when the crate was last compiled still
describes it, and the patch pipeline's own freshness check decides
whether that line still holds. `commands` pairs each requested name with
the build command its flags cache records.

<a id="rustdoc-item-598"></a>

### `abandon`

```rust
pub(in build_runner) fn abandon(self: Self);
```

Joins the reader without caching anything.

A failed build's stderr still has to finish draining before the ring
buffer ([`recent_build_output`](fn.recent_build_output.md#rustdoc-item-557)) is read for the failure notice. The
harvested rustc lines are dropped because no artifact appeared to
describe.

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
