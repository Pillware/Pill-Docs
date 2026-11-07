<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3728"></a>

# Struct `pill_development_host::renderer_module::RendererModule`

```rust
pub(crate) struct RendererModule;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\renderer_module.rs:83`

The renderer module: the slot a loaded generation lives in, and the edit
counter its source watcher moves. The host compares that counter to decide
when to reload the module or retry a failed first load.

## Fields

<a id="rustdoc-item-3723"></a>

### `slot`

```rust
slot: Option<slot::ExtensionSlot>
```

The slot of the loaded generation, or `None` while no generation has
loaded yet.

<a id="rustdoc-item-3724"></a>

### `extension_config`

```rust
extension_config: Option<crate::config::ExtensionConfig>
```

How to build, watch and output the module, derived from its name (the
project's `renderer:` setting). `None` when the project selects no
renderer, which leaves the module unloaded for the whole run.

<a id="rustdoc-item-3725"></a>

### `source_edit_generation`

```rust
source_edit_generation: std::sync::Arc<std::sync::atomic::AtomicU64>
```

Shared with the source watcher, which adds one on every save under the
module's `src/`.

<a id="rustdoc-item-3726"></a>

### `last_failed_source_edit_generation`

```rust
last_failed_source_edit_generation: u64
```

The source-edit generation the last failed first load was tried at. It
makes the host retry a failure once per edit, not once per frame.

<a id="rustdoc-item-3727"></a>

### `system_owner`

```rust
system_owner: pill_engine::SystemOwner
```

The engine owner every generation's systems are registered under.

## Associated functions and methods

<a id="rustdoc-item-3729"></a>

### `start`

```rust
pub(crate) fn start(renderer_name: Option<&str>, engine: &mut Engine, engine_api: &EngineApi, workspace_root: &Path, system_owner: SystemOwner) -> Result<Self, HostError>;
```

Watch the renderer module's sources and try its first load.

A first load that fails - because it does not build, load, pass the ABI
check or initialize, or because it registers data - is logged, not
returned: the host keeps running with the window blank, and the next
save tries again. The module's `init` registers the `rendering` system
under `system_owner`; the components, assets and resources it draws
belong to `pill_renderer_api` and to the renderer data crate, and other
subjects registered them before it loaded.

#### Errors

Returns a [`HostError`] only when the configuration is invalid or the
sources cannot be watched. A later renderer edit fixes neither.

<a id="rustdoc-item-3730"></a>

### `slot`

```rust
pub(crate) fn slot(self: &Self) -> Option<&ExtensionSlot>;
```

The slot of the loaded generation, if one has loaded.

<a id="rustdoc-item-3731"></a>

### `owner`

```rust
pub(crate) fn owner(self: &Self) -> SystemOwner;
```

The engine owner every generation's systems are registered under.

<a id="rustdoc-item-3733"></a>

### `request_rebuild`

```rust
pub(crate) fn request_rebuild(self: &Self);
```

Ask for a rebuild and reload on the next [`Self::reload_if_changed`](#rustdoc-item-3732), as
a save under the module's sources would.

Used when the renderer's data crate reloaded. The renderer compiles that
crate into its own image, so it must be rebuilt against the new source
before it may read the data again. A no-op when no renderer is
selected.

<a id="rustdoc-item-3732"></a>

### `reload_if_changed`

```rust
pub(crate) fn reload_if_changed(self: &mut Self, engine: &mut Engine, engine_api: &EngineApi, workspace_root: &Path, peer_component_names: &[String], before_commit: &mut dyn FnMut()) -> RendererModuleChange;
```

Reload the module when its sources changed, or retry a first load that
failed.

`before_commit` is the reload's hook (see
[`ExtensionSlot::reload_if_changed_with`](../extension/slot/struct.ExtensionSlot.md#rustdoc-item-2687)). A first load has no backend
to detach, so it does not run. `peer_component_names` lists every
component name the other live subjects declare. A type the new
generation forgets is dropped only when no other subject declares it,
so a shared type is kept.

<a id="rustdoc-item-3735"></a>

### `try_first_load`

```rust
pub(in renderer_module) fn try_first_load(self: &mut Self, engine: &mut Engine, engine_api: &EngineApi, workspace_root: &Path, source_edit_generation: u64) -> bool;
```

Build, load and initialize the first generation from the sources as of
`source_edit_generation`, and return `true` when it loaded.

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
