<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3922"></a>

# Struct `pill_development_host::runtime::DevHost`

```rust
pub struct DevHost;
```

Source: `hosting\pill_development_host\src\runtime.rs:130`

The headless development host.

It owns the runtime (the engine and its frame), the loaded project image and
every extension slot, and reloads them at each frame boundary
([`run_frame`](fn.run_frame.md#rustdoc-item-3921)). One struct holds all of it, so the headless, windowed and
editor frontends get the same engine lifetime and the same hot reload.

## Fields

<a id="rustdoc-item-3891"></a>

### `workspace_root`

```rust
workspace_root: std::path::PathBuf
```

The directory every spawned cargo build runs in and every artifact path
is resolved against.

<a id="rustdoc-item-3892"></a>

### `project_module_config`

```rust
project_module_config: crate::ProjectModuleConfig
```

The project module's configuration: its backend, watched sources and
build command.

<a id="rustdoc-item-3893"></a>

### `renderer`

```rust
renderer: Option<String>
```

The renderer GPU module a windowed build loads, from the project's
`renderer:` setting; `None` when it selects no renderer. Its data crate
is already among `extensions`.

<a id="rustdoc-item-3894"></a>

### `runtime`

```rust
runtime: pill_player::Runtime
```

The engine and its frame. Declared before the loaded images: the world
holds values whose drop functions live in those images, so it has to be
gone before any of them unmaps. The engine is boxed, so the raw pointer
in `engine_api` stays valid when the host moves.

<a id="rustdoc-item-3896"></a>

### `engine_api`

```rust
engine_api: pill_engine::EngineApi
```

The C-callable table a loaded artifact is handed at every entry point.

<a id="rustdoc-item-3897"></a>

### `loaded_project`

```rust
loaded_project: loaded::LoadedProject
```

The loaded project image, and the generations retired behind it.

<a id="rustdoc-item-3898"></a>

### `extensions`

```rust
extensions: Vec<slot::ExtensionSlot>
```

Extensions, each with its own watcher and reload transaction.

<a id="rustdoc-item-3899"></a>

### `pending_modules`

```rust
pending_modules: Vec<PendingModule>
```

Tolerated editor-only modules whose first load failed: no slot and no
watcher; [`DevHost::retry_extension`](#rustdoc-item-3866) is their only way in.

<a id="rustdoc-item-3900"></a>

### `source_edit_generation`

```rust
source_edit_generation: std::sync::Arc<std::sync::atomic::AtomicU64>
```

Counter the project watcher adds one to on every source save it cares
about.

The watcher is the only producer. Two consumers read it:
`try_project_fast_path`, which marks a generation handled once its patch
has delivered the edit, and the Step 5 reload transaction, which
rebuilds from it.

<a id="rustdoc-item-3901"></a>

### `last_processed_source_edit`

```rust
last_processed_source_edit: u64
```

The `source_edit_generation` value the frame loop last acted on.

<a id="rustdoc-item-3902"></a>

### `queued_reload_generation`

```rust
queued_reload_generation: u64
```

Counter the reload pipeline adds one to when it owes the project a
rebuild: a module the project links directly reloaded, or a module swap
changed the C# mirror surface.

It is separate from [`Self::source_edit_generation`](#rustdoc-item-3900) on purpose. "A
source save arrived" and "a rebuilt module has to be compiled into the
project again" are different reasons to rebuild. One counter for both
would let a fast-path patch of the project's own edit mark the cascade
handled too, and skip the rebuild without a word.

No fast path reads this counter, so the rebuild stays owed until
`loaded_project.reload` runs. Only the frame thread writes and reads it,
which is why it is a plain integer and not an atomic.

<a id="rustdoc-item-3903"></a>

### `last_processed_queued_reload`

```rust
last_processed_queued_reload: u64
```

The `queued_reload_generation` value the frame loop last rebuilt for.

<a id="rustdoc-item-3904"></a>

### `source_trigger_log`

```rust
source_trigger_log: std::sync::Arc<shared::TriggerLog>
```

The project watcher's recent signals, so the reload this loop starts
can be timed from the save that caused it.

The project's watcher is the only producer: the module and renderer
watchers pass `None`, because nothing times a reload from their
signals. A reload takes the entries up to its generation, so each
signal times exactly one reload.

<a id="rustdoc-item-3906"></a>

### `stale_suspended_owners`

```rust
stale_suspended_owners: Vec<pill_engine::SystemOwner>
```

Owners whose systems this host suspended because their binary was built
against a shared component layout another reload has replaced.

Kept so only these are resumed when they are rebuilt: an owner some
other mechanism suspended (the renderer's pause) is not this code's to
turn back on.

<a id="rustdoc-item-3907"></a>

### `hot_patch`

```rust
hot_patch: Option<crate::hot_patch::HotPatchSession>
```

Per-function fast path, when the project opted in with `#[pill_hot]`.

`None` when the feature is off, when no function is annotated, or when
the project does not also build an `rlib`. In all three cases the
existing whole-module reload stays the only path.

<a id="rustdoc-item-3908"></a>

### `module_hot_patch`

```rust
module_hot_patch: Vec<Option<crate::hot_patch::HotPatchSession>>
```

Per-function fast path for each extension, positionally paired
with `extensions`.

An entry is `None` when that module annotated nothing, so a module that
has not opted in costs nothing beyond one source scan at startup.

<a id="rustdoc-item-3909"></a>

### `patch_attempt`

```rust
patch_attempt: Option<InFlightPatch>
```

The patch build running on its own thread, when one is.

Every reload step defers while this is `Some`: a reload rebuilds the
rlibs the build links against, and a second attempt would race the
first for the same pending edit. The compile runs off the frame loop,
which is the reason the thread exists.

<a id="rustdoc-item-3911"></a>

### `loaded_patches`

```rust
loaded_patches: Vec<routes::LoadedPatch>
```

Every patch library loaded in this process, newest last.

They belong to the process, not to one session. A patch links its own
copy of everything its body calls, so patching one crate also has to
redirect the copies inside another crate's patches. They are never
unloaded, because a jump or a slot may point into any of them for the
rest of the run.

<a id="rustdoc-item-3912"></a>

### `asset_watcher`

```rust
asset_watcher: Option<asset::AssetWatcher>
```

Watches the project's `res` and queues the assets whose source or
metadata file changed; `None` when no asset directory is configured or
the watch could not start.

<a id="rustdoc-item-3914"></a>

### `asset_directory`

```rust
asset_directory: Option<std::path::PathBuf>
```

The project's `res` directory, for the asset browser; `None` when the
configuration did not come from a project directory.

<a id="rustdoc-item-3916"></a>

### `manager_settings_editor_revision`

```rust
manager_settings_editor_revision: u64
```

The [`Self::editor_revision`](#rustdoc-item-3915) the manager settings were last applied for.

A reload replaces managers, so their settings assets are applied again
after one; the revision counter is the signal that something loaded or
unloaded.

<a id="rustdoc-item-3918"></a>

### `ensure_asset_metadata`

```rust
ensure_asset_metadata: bool
```

Whether every source asset is kept paired with a `.meta` file; see
[`DevHost::set_ensure_asset_metadata`](#rustdoc-item-3917). Off unless a frontend asks.

<a id="rustdoc-item-3915"></a>

### `editor_revision`

```rust
editor_revision: u64
```

Counter of reload, rollback and patch events, only ever increased.

The editor uses it as the key for its cached engine metadata. It is not
how the editor learns that entities changed: gameplay changes those
every frame without a reload. It only says that the set of loaded code
changed.

<a id="rustdoc-item-3919"></a>

### `switches`

```rust
switches: crate::switches::HostSwitches
```

What this run's watchers are allowed to do, read once at startup.

<a id="rustdoc-item-3920"></a>

### `patch_switched_off_logged`

```rust
patch_switched_off_logged: bool
```

Whether the startup line about switched-off patching has been written.

The fast path is asked on every frame, and the answer only changes once
per run, so the message belongs to the first edit rather than to a log
that scrolls.

## Associated functions and methods

<a id="rustdoc-item-3924"></a>

### `patch_generations`

```rust
pub fn patch_generations(self: &Self) -> Vec<crate::hot_patch::PatchGeneration>;
```

Every patch generation this process has installed, newest last.

Generation zero - the code each artifact was built with - has no entry
because it needs no loaded library; [`Self::rollback_patch`](#rustdoc-item-3923) still
accepts it.

<a id="rustdoc-item-3923"></a>

### `rollback_patch`

```rust
pub fn rollback_patch(self: &mut Self, function: &str, generation: u32) -> Result<(), String>;
```

Reinstall an earlier generation of one patched function.

`generation` is one-based in the order patches were applied; zero
restores the code the running artifact was built with. Nothing is
rebuilt, reloaded or unloaded. A generation delivered through a dispatch
slot is one pointer store per artifact, and a generation written over
the function's own code is patched back in place. Call it between frames:
it borrows the host mutably.

#### Errors

Returns a message when no session has patched `function`, when the
generation does not exist, or when an artifact refuses the address. A
slot route leaves the running implementation in place; a prologue route
that fails partway leaves the copies it already rewrote as it put them.

<a id="rustdoc-item-3925"></a>

### `engine`

```rust
pub fn engine(self: &Self) -> &Engine;
```

Read-only engine access for rendering and diagnostics.

<a id="rustdoc-item-3926"></a>

### `engine_mut`

```rust
pub fn engine_mut(self: &mut Self) -> &mut Engine;
```

Mutable engine access for frontend-owned ad-hoc work.

<a id="rustdoc-item-3927"></a>

### `revision`

```rust
pub fn revision(self: &Self) -> u64;
```

Monotonic counter of reload/rollback/patch events completed by this
host. Editor caches of engine metadata key on it.

<a id="rustdoc-item-3928"></a>

### `bump_editor_revision`

```rust
pub(in runtime) fn bump_editor_revision(self: &mut Self);
```

Advance the editor revision counter after a reload/rollback/patch.

The increment itself is the editor's cache-invalidation signal; the
log line exists so integration suites can check that the counter moved
without driving a GUI.

<a id="rustdoc-item-3929"></a>

### `extension_names`

```rust
pub fn extension_names(self: &Self) -> Vec<String>;
```

Names of the loaded extensions, in `SystemOwner` order.

`SystemOwner::extension(i)` is `i + 1`, so index `i` of this
vector labels owner `i + 1`; owner `0` is the project.

<a id="rustdoc-item-3931"></a>

### `subject_owners`

```rust
pub(crate) fn subject_owners(self: &Self) -> Vec<(&str, SystemOwner)>;
```

Every subject this host registers systems for, with its owner: the
loaded extensions, the modules whose first load failed and wait for a
retry, and the project.

The renderer is not one of them - it belongs to [`RenderingHost`](struct.RenderingHost.md#rustdoc-item-3930) - so
the windowed host adds it before it checks.

<a id="rustdoc-item-3932"></a>

### `assert_owner_isolation`

```rust
pub(crate) fn assert_owner_isolation(self: &Self);
```

Debug assertion: no two subjects register under one owner.

Owners decide what a reload clears, what a pause suspends and what a
stale suspension resumes. Two subjects sharing one would let a reload of
either retire the other's systems, and let a resume reach a renderer that
was paused against a replaced component layout.

<a id="rustdoc-item-3933"></a>

### `source_work_pending`

```rust
pub fn source_work_pending(self: &Self) -> bool;
```

Whether any watcher's work waits for a frame boundary: the editor's
sleeping heartbeat takes a frame when one does, so an edit reaches a
paused, idle editor without user input.

<a id="rustdoc-item-3866"></a>

### `retry_extension`

```rust
pub fn retry_extension(self: &mut Self, module_name: &str) -> Result<(), String>;
```

Rebuild and load a module the host may have skipped, or force a
rebuild of a loaded one.

For a tolerated editor-only module whose first load failed, runs that
load again and starts its watcher on success. For a loaded module,
asks its reload path to rebuild as if its sources were saved.

#### Errors

Returns the failure text when the module still does not build, load
or register; the notice queue carries the same failure for the
embedder's error UI.

<a id="rustdoc-item-3934"></a>

### `asset_directory`

```rust
pub fn asset_directory(self: &Self) -> Option<&Path>;
```

The project's `res` directory, when the host knows it.

<a id="rustdoc-item-3935"></a>

### `workspace_root`

```rust
pub fn workspace_root(self: &Self) -> &Path;
```

The workspace root every spawned build ran from.

Compiler diagnostics name sources relative to it, so a frontend
handing a stripped path to another tool resolves it against this.

<a id="rustdoc-item-3936"></a>

### `asset_entries`

```rust
pub fn asset_entries(self: &Self) -> Vec<crate::asset_browser::AssetEntry>;
```

The project's `res` tree with each file's asset type, load state and
guid; empty when the host has no `res` directory.

<a id="rustdoc-item-3938"></a>

### `asset_settings`

```rust
pub fn asset_settings(self: &Self, path: &str) -> Result<serde_json::Value, String>;
```

The import settings (or standalone document) of the asset at `path`,
relative to `res`, as JSON.

#### Errors

A message when no registered type imports the path or its file cannot
be read.

<a id="rustdoc-item-3940"></a>

### `save_asset_settings`

```rust
pub fn save_asset_settings(self: &mut Self, path: &str, settings: serde_json::Value) -> Result<serde_json::Value, String>;
```

Save edited import settings for the asset at `path`; the asset watcher
reimports it at the next frame. Returns the normalized settings written.

#### Errors

A message when the settings do not fit the type or the file cannot be
written.

<a id="rustdoc-item-3917"></a>

### `set_ensure_asset_metadata`

```rust
pub fn set_ensure_asset_metadata(self: &mut Self, enabled: bool);
```

Keep every source asset in `res` paired with a `.meta` file.

Turning it on writes the missing files at once. Every source file that a
registered asset type imports gets that type's default settings and a
guid, without being decoded or loaded.

While it stays on, a `.meta` deleted under a running host is written
again, using the loaded asset's guid when it is loaded. A new source
gets one when the watcher imports it. The editor turns this on; a game
run leaves it off.

<a id="rustdoc-item-3941"></a>

### `standalone_asset_types`

```rust
pub fn standalone_asset_types(self: &Self) -> Vec<crate::asset_browser::StandaloneType>;
```

The standalone asset types a new file can be created for.

<a id="rustdoc-item-3944"></a>

### `create_standalone_asset`

```rust
pub fn create_standalone_asset(self: &mut Self, type_name: &str, folder: &str, asset_name: &str) -> Result<String, String>;
```

Create and load a new standalone asset; see
[`crate::asset_browser::create_standalone_asset`](../asset_browser/fn.create_standalone_asset.md#rustdoc-item-3943). Returns its path
relative to `res`.

#### Errors

A message when the input is refused or the file cannot be written.

<a id="rustdoc-item-3945"></a>

### `move_asset`

```rust
pub fn move_asset(self: &Self, from: &str, to: &str) -> Result<(), String>;
```

Move the asset at `from` to `to` (both relative to `res`) with its
`.meta`; the asset watcher follows the move.

#### Errors

A message when a path leaves `res` or the move is refused.

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
- `FrameDriver`
