<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3383"></a>

# Enum `pill_development_host::project_module::loaded::LoadedProject`

```rust
pub(crate) enum LoadedProject { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\project_module.rs:83`

The backend-specific state the host loop keeps alive.

The host holds either a mapped native library or a managed runtime,
behind one interface. The backend is fixed at startup, so the variant
only changes across a full restart.

## Variants

<a id="rustdoc-item-3380"></a>

### `Native`

```rust
Native
```

A mapped native module plus any retired DLLs that must stay mapped.

<a id="rustdoc-item-3382"></a>

### `CSharp`

```rust
CSharp
```

A collectible managed runtime hosting the C# project assembly,
with the in-process compiler that rebuilds it.

## Associated functions and methods

<a id="rustdoc-item-3384"></a>

### `native_library`

```rust
pub(crate) fn native_library(self: &Self) -> Option<&NativeLibrary>;
```

The native library the loaded project uses now, as a patch target.

`None` for the C# backend, which has no native redirect slots to
install into.

<a id="rustdoc-item-3385"></a>

### `stale_components`

```rust
pub(crate) fn stale_components(self: &Self, world: &pill_engine::World) -> Vec<String>;
```

The persistable components the native project registered whose
layout has been replaced since, by another module's reload. Empty
while the layouts are current, and always empty for the C# backend,
whose components are its own descriptor-defined set. See
[`crate::reload::stale_components`](../../reload/fn.stale_components.md#rustdoc-item-2698).

<a id="rustdoc-item-3386"></a>

### `component_names`

```rust
pub(crate) fn component_names(self: &Self) -> &[String];
```

Every component type name the loaded project's generation
registered, both plain and persistable.

A module reload reads it to decide whether a type it forgot is
still declared by the project. Empty for the C# backend, whose
components are its own descriptor-defined set.

<a id="rustdoc-item-3387"></a>

### `start`

```rust
pub(crate) fn start(engine: &mut Engine, engine_api: &EngineApi, workspace_root: &Path, config: &ProjectModuleConfig, module_exposed_components: &[pill_csharp_bridge::ModuleExposedComponent], mirror_methods: &[pill_csharp_bridge::ResolvedMirrorMethod]) -> Result<Self, HostError>;
```

Build and initialize the configured project backend.

#### Errors

Returns `HostError` when the module fails to build, when its output
artifact is missing, when the native library cannot be loaded, when the
module's `pill_module_init` reports a non-zero initialization status, or
when the managed runtime fails to start the C# project.

<a id="rustdoc-item-3388"></a>

### `reload`

```rust
pub(crate) fn reload(self: &mut Self, engine: &mut Engine, engine_api: &EngineApi, workspace_root: &Path, config: &ProjectModuleConfig, cancel_flag: Option<(&AtomicU64, u64)>, peer_component_names: &[String]) -> bool;
```

Rebuilds and replaces the active module, keeping a working old
generation running whenever compilation, loading or registration
fails.

Returns whether the running image was replaced. Every failed branch
(a build error, a load refusal, a rolled-back init) keeps the
current image and returns `false`. The caller uses that answer to
gate bookkeeping that only a replacement invalidates, such as patch
records pointing into an image the graveyard will unmap.

`cancel_flag` is the watcher's reload signal: a newer save during
the build cancels the compilation in flight, and the next frame
tries again.

<a id="rustdoc-item-3389"></a>

### `poll_managed_reload`

```rust
pub(crate) fn poll_managed_reload(self: &mut Self, engine: &mut Engine) -> bool;
```

Polls the managed loader after its assembly debounce (the short
wait that groups a burst of file changes into one batch).

Returns whether this poll swapped in a new assembly. A managed
reload completes in one of two ways. An in-process compile calls
`NotifyAssemblyReplaced`, which ends the loader's debounce. A
rebuild through the `dotnet build` fallback leaves no completion
signal of its own, so the host polls the loader every frame to give
it a chance to notice the settled assembly. The debounce can last
past the frame that started the build, which is why the swap - and
the bookkeeping it invalidates - is checked here as well as when
the build completes.

<a id="rustdoc-item-3390"></a>

### `arm_managed_reload_timing`

```rust
pub(crate) fn arm_managed_reload_timing(self: &mut Self, trigger: Option<SourceTrigger>);
```

Arms the managed backend's reload timing for the reload this
signal starts.

A native project has no managed reload to time, so it ignores the
signal and arms nothing. The caller takes the trigger out of the
watcher's log for this reload either way, so none is left pending.

<a id="rustdoc-item-3391"></a>

### `abandon_managed_reload_timing`

```rust
pub(crate) fn abandon_managed_reload_timing(self: &mut Self);
```

Drops an armed managed reload timing whose reload produced no swap.

<a id="rustdoc-item-3392"></a>

### `record_assembly_rebuilt_at`

```rust
pub(crate) fn record_assembly_rebuilt_at(self: &mut Self, finished_at: Instant, build_kind: &'static str);
```

Records a managed assembly rebuild that finished at `finished_at`,
and what produced it.

<a id="rustdoc-item-3393"></a>

### `notify_assembly_replaced`

```rust
pub(crate) fn notify_assembly_replaced(self: &mut Self);
```

Collapses the managed loader's debounce after the in-process
compiler wrote a settled assembly.

<a id="rustdoc-item-3394"></a>

### `start_managed_reload`

```rust
pub(crate) fn start_managed_reload(self: &mut Self, workspace_root: &Path, config: &ProjectModuleConfig, cancel_flag: Option<(Arc<AtomicU64>, u64)>) -> ManagedReloadStart;
```

Starts a managed reload: the assembly builds on its own thread
while the frame loop keeps running, and the result is collected
when the build reports. See [`ManagedReloadStart`](enum.ManagedReloadStart.md#rustdoc-item-3350).

<a id="rustdoc-item-3346"></a>

### `collect_managed_build`

```rust
pub(crate) fn collect_managed_build(self: &mut Self) -> BuildCollection;
```

Tries to collect a finished managed assembly build without waiting.

A native project never has one.

<a id="rustdoc-item-3348"></a>

### `build_now`

```rust
pub(crate) fn build_now(self: &mut Self, workspace_root: &Path, config: &ProjectModuleConfig, cancel_flag: Option<(Arc<AtomicU64>, u64)>) -> Option<BuildReport>;
```

Builds the managed assembly on the frame thread and returns the
report.

The synchronous twin of the build worker: the same compiler/MSBuild
selection, wrapped as a [`BuildReport`](../../csharp/struct.BuildReport.md#rustdoc-item-1681) so the caller consumes it
through the one outcome handler the worker's reports also go
through. Used when the worker could not start, or when one stopped
without reporting. `None` for a native project, which has no
assembly to build.

<a id="rustdoc-item-3395"></a>

### `managed_build_in_flight`

```rust
pub(crate) fn managed_build_in_flight(self: &Self) -> bool;
```

Whether a managed assembly build is running on its own thread.

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
