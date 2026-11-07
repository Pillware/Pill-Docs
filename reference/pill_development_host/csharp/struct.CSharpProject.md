<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1669"></a>

# Struct `pill_development_host::csharp::CSharpProject`

```rust
pub(crate) struct CSharpProject;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\csharp\mod.rs:69`

A running C# project in the reloading host, made of the bridge's runtime
and the in-process compiler that rebuilds its assembly.

## Fields

<a id="rustdoc-item-1661"></a>

### `runtime`

```rust
runtime: pill_csharp_bridge::CSharpRuntime
```

The managed runtime running the project's systems.

<a id="rustdoc-item-1663"></a>

### `fast_compiler`

```rust
fast_compiler: Option<std::sync::Arc<fast_compile::FastCompiler>>
```

The in-process Roslyn compiler, when one could be loaded.

`None` leaves every reload on the ordinary `dotnet build` path, the
fallback when the compiler cannot be built or loaded. It is shared
behind an `Arc` because a reload hands a clone to a build thread. Its
own state is a set of export addresses and paths, so sharing it is
safe.

<a id="rustdoc-item-1665"></a>

### `assembly_build`

```rust
assembly_build: Option<InFlightAssemblyBuild>
```

The assembly build running on its own thread, when one is.

The build compiles the sources and writes the assembly. No other reload
step may run while it does, because the build compiles the generated
mirror files that a module reload rewrites. The frame itself keeps
rendering and running systems. Collecting the build hands its outcome
to the reload path, which tells the loader and polls for the swap.

<a id="rustdoc-item-1667"></a>

### `reload_timing`

```rust
reload_timing: Option<ManagedReloadTiming>
```

Timing of the managed reload currently in flight, when one is armed.

It is armed when the frame loop consumes the source signal that starts
a reload, and finished when the loader swaps the new assembly in. The
log can then report the whole save-to-swap span instead of the compile
alone.

## Associated functions and methods

<a id="rustdoc-item-1671"></a>

### `start`

```rust
pub(crate) fn start(engine: &mut Engine, workspace_root: &Path, module_config: &pill_csharp_bridge::CSharpModuleConfig, module_exposed_components: &[ModuleExposedComponent], mirror_methods: &[ResolvedMirrorMethod]) -> Result<Self, CSharpError>;
```

Starts the project through the bridge and loads the in-process compiler
into the same .NET runtime as soon as it is running.

The compiler is loaded before the project starts, not after, so its
background warmup runs during startup; see [`CSharpRuntime::start`].

#### Errors

Returns the same errors as [`CSharpRuntime::start`]. A compiler that
cannot be built or loaded is not an error: the failure is logged once,
and reloads run a full `dotnet build`.

<a id="rustdoc-item-1674"></a>

### `poll_reload`

```rust
pub(crate) fn poll_reload(self: &mut Self, engine: &mut Engine) -> Result<u8, CSharpError>;
```

Asks the managed loader whether it can swap in a rebuilt assembly; see
[`CSharpRuntime::poll_reload`].

#### Errors

Returns the same errors as [`CSharpRuntime::poll_reload`].

<a id="rustdoc-item-1675"></a>

### `arm_reload_timing`

```rust
pub(crate) fn arm_reload_timing(self: &mut Self, trigger: Option<SourceTrigger>);
```

Arms reload timing for the reload this signal starts.

`trigger` is the project watcher's record of the save that fired the
signal. `None` means the pipeline queued the reload itself, for example
because a module swap changed the mirror surface. That case times from
now and reports no detection delay, because there is no file save to
measure it from.

<a id="rustdoc-item-1677"></a>

### `record_assembly_rebuilt_at`

```rust
pub(crate) fn record_assembly_rebuilt_at(self: &mut Self, finished_at: Instant, build_kind: &'static str);
```

Records that an assembly rebuild finished at `finished_at`, and how it
was produced.

The build worker reports the instant it finished, so a build that ran
between two frames still adds its own duration to the total instead of
the wait before the frame collected it.

<a id="rustdoc-item-1678"></a>

### `compiler_handle`

```rust
pub(crate) fn compiler_handle(self: &Self) -> Option<Arc<fast_compile::FastCompiler>>;
```

Returns a handle to the in-process compiler for one build, or `None`
when no compiler is loaded; that build then runs the full `dotnet build`
fallback.

<a id="rustdoc-item-1679"></a>

### `track_build`

```rust
pub(crate) fn track_build(self: &mut Self, receiver: Receiver<BuildReport>, thread: JoinHandle<()>);
```

Stores a build that a worker thread has just started, so the frame loop
can collect its report and complete the reload.

<a id="rustdoc-item-1682"></a>

### `build_in_flight`

```rust
pub(crate) fn build_in_flight(self: &Self) -> bool;
```

Tells whether an assembly build is running on its own thread right now.

<a id="rustdoc-item-1684"></a>

### `collect_build`

```rust
pub(crate) fn collect_build(self: &mut Self) -> BuildCollection;
```

Tries to collect a finished build report without waiting.

Collecting a report waits for the worker thread to end and clears the
in-flight state. A worker that stopped without a report is reported as
[`BuildCollection::Died`](enum.BuildCollection.md#rustdoc-item-1683), so the caller can fall back to building on
the frame thread.

<a id="rustdoc-item-1687"></a>

### `notify_assembly_replaced`

```rust
pub(crate) fn notify_assembly_replaced(self: &mut Self);
```

Tells the managed loader that the in-process compiler has already
written a complete assembly. The loader's next poll can then skip its
debounce (the wait for the file to stop changing); see
[`CSharpRuntime::notify_assembly_replaced`].

<a id="rustdoc-item-1688"></a>

### `abandon_reload_timing`

```rust
pub(crate) fn abandon_reload_timing(self: &mut Self);
```

Drops an armed timing whose reload produced no swap.

A failed or cancelled build replaces nothing. Keeping the timing would
count a later swap, whichever build produced it, as caused by this
signal.

<a id="rustdoc-item-1689"></a>

### `finish_reload_timing`

```rust
pub(crate) fn finish_reload_timing(self: &mut Self) -> Option<ManagedReloadSummary>;
```

Finishes an armed timing at the swap and returns its breakdown.

Returns `None` when no timing was armed. A swap with no recorded build,
such as the loader picking up an assembly this host did not time,
reports `NaN` for the build phase rather than a made-up number.

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
