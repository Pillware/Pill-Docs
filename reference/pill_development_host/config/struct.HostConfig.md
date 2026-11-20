<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-954"></a>

# Struct `pill_development_host::config::HostConfig`

```rust
pub struct HostConfig;
```

Source: `hosting\pill_development_host\src\config.rs:552`

Complete host configuration: the project module plus every extension
the host should build, watch and load.

Assembled by [`Self::from_environment`](#rustdoc-item-912) so executable crates stay free of
any project or module identity.

## Fields

<a id="rustdoc-item-1002"></a>

### `name`

```rust
name: String
```

The project's display name from `project_settings.yaml`; used as the
window title.

<a id="rustdoc-item-1003"></a>

### `project_directory`

```rust
project_directory: Option<std::path::PathBuf>
```

The project directory the configuration was read from, resolved
against the workspace root and canonicalized when it exists; `None`
when the configuration was not read from a project directory.

<a id="rustdoc-item-1004"></a>

### `build_binary_name`

```rust
build_binary_name: String
```

The artifact file base from `project_settings.yaml`; letters, digits
and underscores only, so it is safe as a file name.

<a id="rustdoc-item-1005"></a>

### `project`

```rust
project: ProjectModuleConfig
```

The project module selected by `PROJECT_PATH`.

<a id="rustdoc-item-1006"></a>

### `extensions`

```rust
extensions: Vec<ExtensionConfig>
```

Extensions selected by the project's `project_settings.yaml`,
loaded before the project. When a renderer is selected, its data crate
(`<renderer>_data`) comes first, whatever the settings list.

<a id="rustdoc-item-1007"></a>

### `load_editor_crates`

```rust
load_editor_crates: bool
```

Whether this host loads extension editor crates: the editor posture.

Only editor frontends set it, through
[`Self::from_environment_for_editor_frontend`](#rustdoc-item-843). Every other build never
builds or loads an editor crate. When set, [`Self::extensions`](#rustdoc-item-1006) ends
with the editor crates of the loaded extensions' folders, then those of
every editor-only folder, then the editor's own modules (the crates
under `editor/` tagged for this frontend, the shell among them).

<a id="rustdoc-item-1008"></a>

### `first_load_optional`

```rust
first_load_optional: Vec<String>
```

Editor-only modules (a folder holding only its `modules/editor`
crate, and the editor's own modules under `editor/`) whose first load
may fail without aborting setup; the embedder handles their absence -
the editor's safe mode covers the shell. Filled by
[`Self::from_environment_for_editor_frontend`](#rustdoc-item-843), empty in every other
posture.

<a id="rustdoc-item-1009"></a>

### `renderer`

```rust
renderer: Option<String>
```

The renderer's GPU module, from the settings' `renderer:` key
(`pill_master_renderer` when absent); `None` for `renderer: none`.

Only a windowed host loads it. Its data crate is among
[`Self::extensions`](#rustdoc-item-1006) in every build, headless included, so a project's
render components exist whether or not anything draws them.

<a id="rustdoc-item-1010"></a>

### `assets`

```rust
assets: ProjectAssetSettings
```

The settings' `assets:` section: what the development host does with
the project's source assets.

<a id="rustdoc-item-1012"></a>

### `logging`

```rust
logging: pill_player::LoggingSettings
```

The settings' `logging:` section, validated: the log levels the
frontend applies over the engine's defaults once the project is read.

<a id="rustdoc-item-1014"></a>

### `shipping_debug_draw`

```rust
shipping_debug_draw: bool
```

The settings' `debug_draw:` key: whether a shipping or web build of
the project starts with debug drawing on (`false` when absent). The
development host always draws.

<a id="rustdoc-item-1015"></a>

### `startup_scene`

```rust
startup_scene: Option<String>
```

The settings' `startup_scene:` key: the `.scene` the project starts
with, as a path below `res`. Queued into the world before any artifact
loads, so the load happens between component registration and the
project's own `init`.

<a id="rustdoc-item-1016"></a>

### `asset_directory`

```rust
asset_directory: Option<std::path::PathBuf>
```

The project's `res` directory, which asset paths are relative to;
`None` when the configuration was not read from a project directory.

<a id="rustdoc-item-1017"></a>

### `project_editor`

```rust
project_editor: Option<ExtensionConfig>
```

The project's own editor crate, when the project has one and this host
is an editor host: `<PROJECT_PATH>/<package>_editor/`, discovered by
convention like an extension's editor crate.

Filled by [`Self::from_environment_for_editor_frontend`](#rustdoc-item-843) and `None` in
every other posture, so a game build neither builds, watches nor loads
it. It loads after the project, because it exists to change the editor
the project runs in.

## Associated functions and methods

<a id="rustdoc-item-912"></a>

### `from_environment`

```rust
pub fn from_environment() -> Result<Self, ConfigError>;
```

Assemble the host configuration from the environment and the project's
own settings file.

`PROJECT_PATH` selects the project, and the project's own
`project_settings.yaml` supplies the extension list, so which project
runs and which modules load are both visible at the project itself.

#### Errors

Returns a [`ConfigError`] when `PROJECT_PATH` is not set, the project
configuration cannot be derived, the project settings file is missing
or cannot be read/parsed, or a configured module is invalid.

<a id="rustdoc-item-843"></a>

### `from_environment_for_editor_frontend`

```rust
pub fn from_environment_for_editor_frontend(editor_frontend: &str) -> Result<Self, ConfigError>;
```

The editor host's configuration: [`Self::from_environment`](#rustdoc-item-912) plus the
extensions' editor crates, for a named editor frontend.

Editor crates load, and one whose manifest declares
`[package.metadata.pill] editor_frontend = "<name>"` loads only when
that name is this host's. Untagged editor crates
load under every editor frontend.

#### Errors

As [`Self::from_environment`](#rustdoc-item-912).

<a id="rustdoc-item-1018"></a>

### `from_environment_in_posture`

```rust
pub(in config) fn from_environment_in_posture(load_editor_crates: bool, editor_frontend: &str) -> Result<Self, ConfigError>;
```

The configuration of either posture; `load_editor_crates` selects the
editor one and `editor_frontend` names this host's editor frontend for
the editor-crate tag convention (`resolve_editor_crates`).

#### Errors

Returns the same [`ConfigError`]s as [`Self::from_environment`](#rustdoc-item-912).

<a id="rustdoc-item-1020"></a>

### `validate_startup_scene`

```rust
pub(in config) fn validate_startup_scene(setting: Option<&str>, settings_path: &Path) -> Result<Option<String>, ConfigError>;
```

The settings' `startup_scene:` value, checked to be a relative path to
a `.scene` file below the asset directory.

A blank value means no startup scene.

#### Errors

Returns [`ConfigError::InvalidStartupScene`] naming the settings file
and the reason when the value is absolute, climbs out of the asset
directory, or does not name a `.scene` file.

<a id="rustdoc-item-1023"></a>

### `resolve_renderer`

```rust
pub(in config) fn resolve_renderer(setting: Option<&str>, extensions_root: &Path) -> Result<Option<String>, ConfigError>;
```

Resolve the settings' `renderer:` value to a renderer name.

Absent means [`DEFAULT_RENDERER`](constant.DEFAULT_RENDERER.md#rustdoc-item-860); [`NO_RENDERER`](constant.NO_RENDERER.md#rustdoc-item-861) means none. A named
renderer must have both of its crates in an extension folder under
`extensions/`: the GPU module `<renderer>` and the data crate
`<renderer>_data`. A missing one is a configuration error here rather
than a failed build later.

#### Errors

Returns [`ConfigError::InvalidExtensionName`] when the name is not a
usable directory name, and [`ConfigError::ExtensionDirectoryMissing`]
when either crate has no folder.

<a id="rustdoc-item-1024"></a>

### `module_names_with_renderer_data`

```rust
pub(in config) fn module_names_with_renderer_data(renderer: Option<&str>, listed_module_names: &[String]) -> Vec<String>;
```

The module load order: the renderer's data crate first, when a renderer
is selected, then the settings' own list without it.

First because extensions and the project may use its components. A
project that also lists the data crate gets it once, not twice.

<a id="rustdoc-item-1027"></a>

### `resolve_extensions`

```rust
pub(in config) fn resolve_extensions(module_names: &[String], extensions_root: &Path) -> Result<Vec<ExtensionConfig>, ConfigError>;
```

Resolves the settings file's module names against the extension folders
under `extensions/`.

Split from [`Self::from_environment`](#rustdoc-item-912) so the validation is testable
without changing the process's working directory; no test in this crate
does that, and it would race the parallel test threads. The checks run
in the order their errors matter: a name that is not a crate directory
is refused before anything is derived from it, a repeat is refused
before a second copy of the module could load, and a folder holding the
crate is required before the module is configured at all.

#### Errors

Returns [`ConfigError::InvalidExtensionName`],
[`ConfigError::EditorCrateListed`] or
[`ConfigError::DuplicateExtensionName`] for a bad entry, and
[`ConfigError::ExtensionDirectoryMissing`] when no folder holds the
crate.

<a id="rustdoc-item-1029"></a>

### `resolve_editor_crates`

```rust
pub(in config) fn resolve_editor_crates(runtime_folders: &[String], extensions_root: &Path, editor_frontend: &str) -> Result<(Vec<ExtensionConfig>, Vec<String>), ConfigError>;
```

Returns the editor crates an editor host loads, in load order, and the
names of the editor-only ones.

First the editor crate of each folder in `runtime_folders` that has one,
in that order. A folder loads its editor crate once, after its runtime
crates. Then every editor-only folder - a folder whose only crate is its
editor crate - in name order, loaded unconditionally. A folder without an
editor crate contributes nothing, silently. Bookkeeping folders (`_...`)
and the older renderers folder (`rendering`) are never searched. The
second half of the return names the editor-only crates, which an editor
host may load tolerantly (`HostConfig::first_load_optional`).

#### Errors

Returns [`ConfigError::RetiredEditorFrontend`] when an editor crate is
tagged for the retired `pill_ui` frontend.

<a id="rustdoc-item-1030"></a>

### `resolve_editor_modules`

```rust
pub(in config) fn resolve_editor_modules(editor_root: &Path, editor_frontend: &str) -> Result<Vec<ExtensionConfig>, ConfigError>;
```

Returns the editor's own modules an editor host of `editor_frontend`
loads, in directory name order.

An editor module is a crate directly under `editor_root` whose manifest
tags an editor frontend; an untagged crate there (an executable, the
shared core) is not a module, and a crate tagged for another frontend
loads only under that one. The `generated/` folder holds the wrappers
and is never searched.

#### Errors

Returns [`ConfigError::RetiredEditorFrontend`] when a crate is tagged for
the retired `pill_ui` frontend.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Clone`
- `From<ProjectModuleConfig>`
