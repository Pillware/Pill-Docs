<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2674"></a>

# Struct `pill_development_host::extension::slot::ExtensionSlot`

```rust
pub(crate) struct ExtensionSlot;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\extension.rs:67`

One loaded extension module, with the state a reload needs.

## Fields

<a id="rustdoc-item-2657"></a>

### `extension_config`

```rust
extension_config: crate::ExtensionConfig
```

The module's configuration: how it is built, watched and loaded.

<a id="rustdoc-item-2659"></a>

### `system_owner`

```rust
system_owner: pill_engine::SystemOwner
```

The owner tag applied to every system this module registers.

<a id="rustdoc-item-2661"></a>

### `current_library`

```rust
current_library: crate::native_library::NativeLibrary
```

The library of the generation that is loaded now.

<a id="rustdoc-item-2662"></a>

### `retired_libraries`

```rust
retired_libraries: Vec<crate::native_library::NativeLibrary>
```

The retired libraries, kept mapped because engine-owned pointers and
vtables may still refer to their code.

<a id="rustdoc-item-2664"></a>

### `source_edit_generation`

```rust
source_edit_generation: std::sync::Arc<std::sync::atomic::AtomicU64>
```

The watcher adds one when this module's sources change, and
[`Self::request_reload`](#rustdoc-item-2663) adds one to fake a save. Only the watcher
is a real producer, so the counter never mixes a source save with a
rebuild the reload pipeline queues for another reason.

<a id="rustdoc-item-2665"></a>

### `last_processed_source_edit_generation`

```rust
last_processed_source_edit_generation: u64
```

The last generation the reload pass acted on.

<a id="rustdoc-item-2666"></a>

### `cascade_reload_queued`

```rust
cascade_reload_queued: bool
```

A rebuild that the reload pipeline queued instead of the watcher: an
editor crate's, after a runtime crate in its folder reloaded. It is
a flag of its own, not part of the watcher's counter, so a fast-path
patch of a source edit cannot consume it by accident.

<a id="rustdoc-item-2667"></a>

### `registered_type_names`

```rust
registered_type_names: Vec<String>
```

The persistable component type names the last `init` registered,
used to detect types the next generation forgets to re-register.

<a id="rustdoc-item-2668"></a>

### `registered_schema_hashes`

```rust
registered_schema_hashes: Vec<(String, u64)>
```

The schema hash of each of those types, as the last `init` declared
it. Comparing them with the world's current hashes finds the types
whose layout another module's reload has replaced since.

<a id="rustdoc-item-2669"></a>

### `registered_resource_ids`

```rust
registered_resource_ids: Vec<pill_engine::ResourceId>
```

The resource ids the last `init` registered. They let the reload
drop a resource this module stops owning while the image that
created it is still mapped.

<a id="rustdoc-item-2671"></a>

### `exposed_component_names`

```rust
exposed_component_names: Vec<String>
```

Every component type name, plain or persistable, that the last
`init` registered. The C# mirror codegen binds the module's native
components from this list, and the renderer's capability check uses
it to name the components the active renderer does not draw.

<a id="rustdoc-item-2672"></a>

### `graveyard_policy`

```rust
graveyard_policy: crate::reload::GraveyardPolicy
```

Whether this module's retired generations may be unmapped.

## Associated functions and methods

<a id="rustdoc-item-2676"></a>

### `start`

```rust
pub(crate) fn start(engine: &mut Engine, engine_api: &EngineApi, workspace_root: &Path, extension_config: &ExtensionConfig, system_owner: SystemOwner, source_edit_generation: Arc<AtomicU64>, first_load_failure: crate::reload::FirstLoadFailure) -> Result<Self, HostError>;
```

Builds, loads and initializes one extension.

`source_edit_generation` is the module's edit counter, shared with
its watcher. `first_load_failure` decides what a failed `init` costs
the world.

#### Errors

Returns a [`HostError`] when the module fails to compile, cannot be
loaded, reports a missing or incompatible ABI revision, returns a
non-zero status from `init`, or registers data that the first-load
failure policy forbids.

<a id="rustdoc-item-2680"></a>

### `keep_every_generation`

```rust
pub(crate) fn keep_every_generation(self: &mut Self);
```

Never unmap this module's retired generations.

Use it for a module whose images leave behind state that the reload
transaction cannot track; see [`crate::reload::GraveyardPolicy::KeepAll`](../../reload/enum.GraveyardPolicy.md#rustdoc-item-2679).

<a id="rustdoc-item-2681"></a>

### `has_pending_reload`

```rust
pub(crate) fn has_pending_reload(self: &Self) -> bool;
```

Whether a watcher signal is waiting to become a reload.

The caller asks this before it gathers the peer declaration set, so
the per-frame reload pass allocates nothing for modules that have no
pending change.

<a id="rustdoc-item-2685"></a>

### `reload_if_changed`

```rust
pub(crate) fn reload_if_changed(self: &mut Self, engine: &mut Engine, engine_api: &EngineApi, workspace_root: &Path, peer_component_names: &[String]) -> ReloadOutcome;
```

Reloads this module when a source edit or a queued cascade reload is
pending.

Returns [`ReloadOutcome::Reloaded`](enum.ReloadOutcome.md#rustdoc-item-2682) when a new generation replaced
the current one, [`ReloadOutcome::Failed`](enum.ReloadOutcome.md#rustdoc-item-2683) when an attempt was made
and the previous generation was kept, and
[`ReloadOutcome::Unchanged`](enum.ReloadOutcome.md#rustdoc-item-2684) when nothing was pending. The caller
decides what to do from the outcome: a failed attempt leaves every
patch, baseline and record of the current generation in place.
Every module has its own counter, so this never rebuilds another
module or the project.

<a id="rustdoc-item-2687"></a>

### `reload_if_changed_with`

```rust
pub(crate) fn reload_if_changed_with(self: &mut Self, engine: &mut Engine, engine_api: &EngineApi, workspace_root: &Path, peer_component_names: &[String], on_before_commit: &mut dyn FnMut()) -> ReloadOutcome;
```

Same as [`Self::reload_if_changed`](#rustdoc-item-2685), but runs `on_before_commit` once
the replacement has built, loaded and passed the ABI check, just
before it is swapped in. It does not run at all when an earlier step
refuses the replacement.

Use it for a module whose caller holds state built on the current
image that has to be released while that image is still mapped: the
renderer module's GPU backend.

`peer_component_names` lists every component name the other live
subjects declare. A type that only they name is not this module's to
drop when the new generation forgets it.

<a id="rustdoc-item-2688"></a>

### `name`

```rust
pub(crate) fn name(self: &Self) -> &str;
```

The crate name of this module. It is the field the log lines carry
and the key callers use to find a module.

<a id="rustdoc-item-2689"></a>

### `folder`

```rust
pub(crate) fn folder(self: &Self) -> &str;
```

The extension folder holding this module's crate.

<a id="rustdoc-item-2690"></a>

### `is_editor_crate`

```rust
pub(crate) fn is_editor_crate(self: &Self) -> bool;
```

Whether this module is its folder's editor crate.

<a id="rustdoc-item-2691"></a>

### `queue_cascade_reload`

```rust
pub(crate) fn queue_cascade_reload(self: &mut Self);
```

Rebuilds and reloads this module on the next reload pass, although
its own sources did not change. An editor crate links its folder's
runtime crates, so it is out of date once one of them reloads.

<a id="rustdoc-item-2663"></a>

### `request_reload`

```rust
pub(crate) fn request_reload(self: &mut Self);
```

Forces a full rebuild and reload on the next pass, as if a source
save had arrived. The editor's safe-mode Retry rebuilds a loaded
shell module this way.

<a id="rustdoc-item-2692"></a>

### `crate_directory`

```rust
pub(crate) fn crate_directory(self: &Self) -> &Path;
```

The module's crate directory, relative to the workspace root. It is
the parent of the source directory the watcher watches.

<a id="rustdoc-item-2694"></a>

### `pending_reload_generation`

```rust
pub(crate) fn pending_reload_generation(self: &Self) -> Option<u64>;
```

The generation the watcher has signalled but nothing has handled
yet, if any.

The per-function fast path uses it to look at a pending change
before [`Self::reload_if_changed`](#rustdoc-item-2685) turns the change into a full
rebuild. It returns the generation itself rather than a flag, so the
caller can pass the exact generation it handled to
[`Self::consume_pending_reload`](#rustdoc-item-2693).

<a id="rustdoc-item-2693"></a>

### `consume_pending_reload`

```rust
pub(crate) fn consume_pending_reload(self: &mut Self, generation: u64);
```

Marks one generation as handled without rebuilding.

Call this only when a patch has already delivered that edit; the
reload it would otherwise cause has nothing left to do.

It takes the generation the caller acted on instead of reading a
fresh one, for the same reason [`Self::reload_if_changed`](#rustdoc-item-2685) records
its baseline: a save that arrives while the patch is compiling moves
the counter past that generation, and nothing has delivered that
save. Recording it as handled would leave the edit on disk, never
compiled.

<a id="rustdoc-item-2695"></a>

### `current_library`

```rust
pub(crate) fn current_library(self: &Self) -> &NativeLibrary;
```

The library of the generation that is loaded now. It is a patch
target, and the renderer module resolves its attach and detach
exports from it.

<a id="rustdoc-item-2696"></a>

### `export_address`

```rust
pub(crate) fn export_address(self: &Self, export_name: &str) -> Option<pill_engine::component_registry::ExportAddress>;
```

The address of the current generation's export named `export_name`,
if it has one. The windowed host uses this to find the renderer data
crate's shader reload function.

The address is valid only while this generation stays current, so
callers look it up again after every reload instead of keeping it
across one.

<a id="rustdoc-item-2699"></a>

### `stale_components`

```rust
pub(crate) fn stale_components(self: &Self, world: &pill_engine::World) -> Vec<String>;
```

The persistable components this module registered whose layout
another module's reload has replaced since. The list is empty while
this generation is current. See [`crate::reload::stale_components`](../../reload/fn.stale_components.md#rustdoc-item-2698).

<a id="rustdoc-item-2701"></a>

### `owner`

```rust
pub(crate) fn owner(self: &Self) -> SystemOwner;
```

The owner tag this module's systems are registered under.

<a id="rustdoc-item-2702"></a>

### `exposed_component_names`

```rust
pub(crate) fn exposed_component_names(self: &Self) -> &[String];
```

Every component type name the current generation registered, for
the C# mirror codegen and the renderer's capability check.

<a id="rustdoc-item-2703"></a>

### `value_type_descriptors`

```rust
pub(crate) fn value_type_descriptors(self: &Self) -> Vec<pill_engine::component_registry::PillValueTypeDescriptor>;
```

The `#[derive(PillMirror)]` value-type descriptors of this module's
own crate in the current generation, which the C# codegen uses to
resolve nested struct tags.

Only the descriptors this module's own package declared. An artifact
also carries the declarations of every crate it links (an extension
can depend on another extension), and those belong to the module that
owns them. Emitting them here would add a second C# type with the
same name to the owner's generated file.

<a id="rustdoc-item-2704"></a>

### `mirror_methods`

```rust
pub(crate) fn mirror_methods(self: &Self) -> Vec<pill_csharp_bridge::ResolvedMirrorMethod>;
```

The `#[pill_mirror_method]` entries of the current generation, each
with the resolved address of its C-ABI trampoline. The C# codegen
and the managed runtime's method table use them.

Filtered to this module's own declarations for the same reason as
[`Self::value_type_descriptors`](#rustdoc-item-2703). The managed table is keyed by the
declaring names, and a linked dependency's copy of the same
trampoline would hide the owner's address. A patch reaches the
owner's copy, so a managed call through that address would run stale
code.

<a id="rustdoc-item-2705"></a>

### `field_accessors`

```rust
pub(crate) fn field_accessors(self: &Self) -> Vec<pill_csharp_bridge::ResolvedFieldAccessor>;
```

The heap-field accessors of the current generation, each with the
resolved addresses of the trampolines for its operations. The C#
mirror codegen and the managed runtime's method table use them.

<a id="rustdoc-item-2706"></a>

### `reload`

```rust
pub(in extension::slot) fn reload(self: &mut Self, engine: &mut Engine, engine_api: &EngineApi, workspace_root: &Path, generation: u64, peer_component_names: &[String], on_before_commit: &mut dyn FnMut()) -> ReloadOutcome;
```

Rebuilds and swaps one generation, and keeps the previous one on any
failure.

Returns [`ReloadOutcome::Reloaded`](enum.ReloadOutcome.md#rustdoc-item-2682) when the swap happened. Every
refusal on the way - build, load, ABI check or a rolled-back init -
returns [`ReloadOutcome::Failed`](enum.ReloadOutcome.md#rustdoc-item-2683) with the generation, so the caller
can skip the bookkeeping that only a replaced image justifies and
still log which edit was lost.

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
- `Drop`
