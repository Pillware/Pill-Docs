<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-500"></a>

# Struct `pill_csharp_bridge::backend::CSharpRuntime`

```rust
pub struct CSharpRuntime;
```

Source: `csharp\pill_csharp_bridge\src\backend.rs:235`

Owns the hosted .NET context, the stable API table and the reload callback.

Keeping `_runtime` and `_api` alive keeps the managed runtime and every
native function pointer in this struct valid, for as long as registered
scheduler closures may run.

## Fields

<a id="rustdoc-item-482"></a>

### `poll_reload`

```rust
poll_reload: extern "System" fn () -> u8
```

Unmanaged export polling the collectible loader for a rebuilt assembly.

<a id="rustdoc-item-483"></a>

### `subject`

```rust
subject: String
```

The project assembly this runtime hosts, as configured.

Carried so a refusal on the reload path - "declares no `[EcsSystem]`
methods" is the one that needs it - names the artifact that failed
rather than a fixed project name.

<a id="rustdoc-item-485"></a>

### `pending_manifest_length`

```rust
pending_manifest_length: extern "System" fn () -> u32
```

Byte length of the manifest the pending version carries.

<a id="rustdoc-item-486"></a>

### `copy_pending_manifest`

```rust
copy_pending_manifest: extern "System" fn (_: *mut u8, _: u32) -> u8
```

Copies the pending version's manifest for validation.

<a id="rustdoc-item-487"></a>

### `commit_reload`

```rust
commit_reload: extern "System" fn () -> u8
```

Installs the pending version once its manifest is in force.

<a id="rustdoc-item-488"></a>

### `abort_reload`

```rust
abort_reload: extern "System" fn () -> u8
```

Discards the pending version when its manifest cannot be applied.

<a id="rustdoc-item-489"></a>

### `exports`

```rust
exports: SystemExports
```

Every export a re-registration pass needs, including the ones the
reload's metadata comparison reads one system at a time.

Held so a reload can rebuild the scheduler's managed systems from the
arriving assembly, and so the comparison and the re-registration read
the same descriptors.

<a id="rustdoc-item-491"></a>

### `last_poll_status`

```rust
last_poll_status: u8
```

Outcome of the most recent reload poll, for one-shot rejection logging.

<a id="rustdoc-item-492"></a>

### `manifest_applied_without_assembly`

```rust
manifest_applied_without_assembly: bool
```

Set once the world has taken a manifest whose assembly never loaded.

This is the one outcome the commit handshake cannot make safe by
ordering. The manifest is applied while the outgoing assembly still
runs, so a refusal normally costs an unload and nothing else. If the
*commit* then fails, the world holds layouts that belong to an assembly
which was never installed, and every later frame would read migrated
rows through the old assembly's expectations. The project's systems are
cleared, and this flag keeps them cleared until the host restarts.

<a id="rustdoc-item-493"></a>

### `system_snapshot`

```rust
system_snapshot: Vec<ManagedSystemSnapshot>
```

Metadata snapshot the active assembly is verified against after reload.

<a id="rustdoc-item-494"></a>

### `bindings`

```rust
bindings: std::sync::Arc<super::components::BindingStore>
```

The live component-binding table, shared with every registered system.

It is shared instead of copied per system so a reload can rewrite it in
place. Each run takes a read lock, so a component whose layout was
reshaped is seen by the systems already registered to read it.

<a id="rustdoc-item-497"></a>

### `notify_assembly_replaced`

```rust
notify_assembly_replaced: Option<extern "System" fn ()>
```

Clears the loader's poll interval after an in-process compile.

Only an in-process compile knows for certain that the assembly file is
complete, and only `pill_development_host` compiles in process, so no
shipped build ever calls this. The AOT posture has no export for it at
all: a shipped project may only export from its root assembly, and it
would otherwise have to re-export a function it can never call.

<a id="rustdoc-item-498"></a>

### `_runtime`

```rust
_runtime: ManagedRuntimeContext
```

Keeps the hosted .NET runtime alive for the host's lifetime.

<a id="rustdoc-item-499"></a>

### `_api`

```rust
_api: Box<super::abi::CsEngineApi>
```

Keeps the native API table alive so registered closures stay valid.

## Associated functions and methods

<a id="rustdoc-item-507"></a>

### `start`

```rust
pub fn start(engine: &mut Engine, workspace_root: &Path, config: &CSharpModuleConfig, exposed_components: &[ModuleExposedComponent], mirror_methods: &[ResolvedMirrorMethod], on_runtime_booted: &mut dyn FnMut(&DotnetRuntimeContext)) -> Result<Self, CSharpError>;
```

Starts .NET, loads `csharp_runtime`, discovers the managed systems and
registers each one under its reflected read/write access declaration.

`on_runtime_booted` receives the .NET runtime once it is up and before
the project starts. Development tooling loads its own assemblies into it
at that point: `pill_development_host` starts its in-process compiler
here, so the compiler's warmup runs during startup rather than during
the developer's first edit. A shipped CoreCLR build passes a no-op.

#### Errors

Returns a [`CSharpError`] when .NET cannot be started, such as
[`CSharpError::HostfxrNotFound`] or
[`CSharpError::RuntimeInitializationFailed`].
[`CSharpError::ManagedEntryPointFailed`] reports an export that could not
be resolved, [`CSharpError::InteropVersionMismatch`] a runtime built for
another ABI version, and [`CSharpError::RuntimeInitFailed`] a runtime
that refused host initialization.

It also reports every failure of [`Self::start_with`](#rustdoc-item-506): a component
manifest that could not be read or registered, a startup method that
failed, an assembly that declares no systems, and a reflected access
that names a component or resource nobody registered.

<a id="rustdoc-item-506"></a>

### `start_with`

```rust
pub(in backend) fn start_with(engine: &mut Engine, runtime: ManagedRuntimeContext, exports: ManagedExports, exposed_components: &[ModuleExposedComponent], mirror_methods: &[ResolvedMirrorMethod], subject: &str) -> Result<Self, CSharpError>;
```

The one startup lifecycle, shared by both postures.

Consumes an already-resolved [`ManagedExports`](struct.ManagedExports.md#rustdoc-item-512) and the runtime it was
resolved from: registers the component manifest, runs the managed
startup methods transactionally, reflects each system's accesses and
registers it with the scheduler. Everything here has one copy, so the
`unsafe` access-registration closure and the startup rollback guarantee
cannot drift between the hostfxr and NativeAOT paths.

#### Errors

[`CSharpError::RuntimeInitFailed`] when the managed side refuses host
initialization. The manifest copy reports
[`CSharpError::ManifestLengthOutOfRange`],
[`CSharpError::ManifestAllocationFailed`] or
[`CSharpError::ManifestCopyFailed`], and registering it reports a parse
or validation failure of the manifest itself.
[`CSharpError::StartupFailed`] reports a startup method that failed and
[`CSharpError::StartupCommandsFailed`] commands that would not apply.
System registration returns what [`prepare_managed_systems`](fn.prepare_managed_systems.md#rustdoc-item-518) refuses.

<a id="rustdoc-item-519"></a>

### `notify_assembly_replaced`

```rust
pub fn notify_assembly_replaced(self: &Self);
```

Tells the loader that a complete project assembly is already on disk.

The loader samples the assembly's timestamp on an interval because it
cannot otherwise tell a finished build from a half-copied one. An
in-process compile writes the file itself, through an atomic rename,
so its caller uses this to let the next poll skip that wait entirely.
Does nothing in the AOT posture, which never reloads.

<a id="rustdoc-item-520"></a>

### `start_aot`

```rust
pub fn start_aot(engine: &mut Engine, workspace_root: &Path, config: &CSharpModuleConfig, exposed_components: &[ModuleExposedComponent], mirror_methods: &[ResolvedMirrorMethod]) -> Result<Self, CSharpError>;
```

Starts a NativeAOT-published library, resolves the loader exports by
symbol, discovers the managed systems and registers each one under its
declared read/write access.

Mirrors [`Self::start`](#rustdoc-item-507): only the export resolution differs - a direct
`libloading` load of the AOT native library (which embeds a trimmed
runtime, so no .NET install and no JIT are involved) instead of the
hostfxr bootstrap. Everything after that is [`Self::start_with`](#rustdoc-item-506).

#### Errors

Returns [`CSharpError::AotLibraryNotFound`] or
[`CSharpError::AotLibraryLoadFailed`] when the library cannot be loaded,
[`CSharpError::AotExportMissing`] for a symbol the library does not
export, and [`CSharpError::InteropVersionMismatch`] for a library built
against another ABI version.

It also reports every failure of [`Self::start_with`](#rustdoc-item-506).

<a id="rustdoc-item-522"></a>

### `poll_reload`

```rust
pub fn poll_reload(self: &mut Self, engine: &mut Engine) -> Result<u8, CSharpError>;
```

Polls the collectible loader and reports the outcome of any swap attempt.

The managed loader checks the rebuilt assembly's component manifest and
system signatures before it swaps anything. A rejection is logged once
per attempt, so the poll that runs every frame cannot flood the terminal.

#### Errors

Returns [`CSharpError::UnknownPollStatus`] for a code outside
[`POLL_NO_CHANGE`](constant.POLL_NO_CHANGE.md#rustdoc-item-394), [`POLL_RELOADED`](constant.POLL_RELOADED.md#rustdoc-item-395), [`POLL_REJECTED`](constant.POLL_REJECTED.md#rustdoc-item-396) and
[`POLL_MANIFEST_PENDING`](constant.POLL_MANIFEST_PENDING.md#rustdoc-item-397): a status the host cannot interpret is a
failure to report, not a change that never happened. The currently
loaded assembly is kept either way.

<a id="rustdoc-item-523"></a>

### `decide_pending_manifest`

```rust
pub(in backend) fn decide_pending_manifest(self: &mut Self, engine: &mut Engine) -> Result<u8, CSharpError>;
```

Decides what happens to the pending version: applies its manifest, then
commits or aborts the swap.

The ordering is the point of the handshake. The manifest is applied
while the outgoing assembly is still the running one, so a refusal only
costs an unload. Committing afterwards means the world and the arriving
assembly agree from the moment the swap happens. Applying the manifest
after a swap would leave a running assembly against a world that never
took its layout.

Returns the status the caller should report: `POLL_RELOADED` when the
swap happened, `POLL_REJECTED` when it did not.

#### Errors

Whatever re-registering the arriving assembly's systems refuses, when
the committed version changed them.

<a id="rustdoc-item-524"></a>

### `read_pending_manifest`

```rust
pub(in backend) fn read_pending_manifest(self: &Self) -> Option<Vec<u8>>;
```

Copies the pending version's manifest, or `None` when it cannot be read.

<a id="rustdoc-item-525"></a>

### `abort_pending_version`

```rust
pub(in backend) fn abort_pending_version(self: &mut Self, reason: &str);
```

Tells the managed loader to discard the pending version, and says why.

<a id="rustdoc-item-526"></a>

### `reregister_systems`

```rust
pub(in backend) fn reregister_systems(self: &mut Self, engine: &mut Engine) -> Result<(), CSharpError>;
```

Rebuilds the scheduler's managed systems from the arriving assembly.

Only the project's systems are cleared, so a module's systems survive
untouched (the same scoping a module reload relies on). This runs
between frames, at the point the swap is applied, because clearing
systems while the scheduler is running them is not safe.

A failed re-registration leaves the running generation's systems, and
the snapshot that describes them, in place: every system is resolved
before anything is cleared.

#### Errors

Whatever [`prepare_managed_systems`](fn.prepare_managed_systems.md#rustdoc-item-518) refuses - most often a system
declaring a component or resource the arriving manifest never
registered.

<a id="rustdoc-item-527"></a>

### `verify_systems_unchanged`

```rust
pub(in backend) fn verify_systems_unchanged(self: &Self) -> bool;
```

Re-reads the active project assembly and reports whether its system
metadata still matches the snapshot taken at registration.

The answer decides how much work the reload has to do. On a match only
the behaviour changed, so the scheduler graph stays as it is and the
reload costs one comparison. On a mismatch the reload goes through
[`CSharpRuntime::reregister_systems`](#rustdoc-item-526) and rebuilds that graph. The
comparison is worth its cost because a match is the common case: most
reloads edit a system body, not its signature.

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
