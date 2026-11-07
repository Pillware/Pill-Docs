<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-764"></a>

# Struct `pill_development_host::config::ProjectModuleConfig`

```rust
pub struct ProjectModuleConfig;
```

Source: `hosting\pill_development_host\src\config.rs:291`

Configuration for a hot-reloadable project module.

Describes how to build the module, where to find its output, and which
source directories to watch. [`Self::from_environment`](#rustdoc-item-900) builds it from the
`PROJECT_PATH` variable plus the project's manifest, and it owns every
value, so no project identity is compiled into the host binary.

`#[non_exhaustive]` lets new fields be added without breaking frontends, so
prefer [`Self::from_environment`](#rustdoc-item-900) over struct literals.

## Fields

<a id="rustdoc-item-894"></a>

### `name`

```rust
name: String
```

Human-readable name used in log messages.

<a id="rustdoc-item-895"></a>

### `manifest_path`

```rust
manifest_path: Option<String>
```

Workspace-relative path to the project's manifest file.

The host re-reads it at runtime to answer dependency questions, such as
whether a reloaded extension is linked by this project.

<a id="rustdoc-item-896"></a>

### `watch_directory`

```rust
watch_directory: String
```

Directory to watch for source changes, relative to the workspace root.

<a id="rustdoc-item-897"></a>

### `build_command`

```rust
build_command: Vec<String>
```

Build command: the first element is the program and the rest are
arguments.

<a id="rustdoc-item-898"></a>

### `build_environment`

```rust
build_environment: Vec<(String, String)>
```

Environment variables applied to the build process.

Used to override values the build would otherwise inherit from the
host's environment or from the workspace Cargo configuration.

<a id="rustdoc-item-899"></a>

### `backend`

```rust
backend: ProjectModuleBackend
```

How the built module is loaded and executed.

## Associated functions and methods

<a id="rustdoc-item-902"></a>

### `validate`

```rust
pub fn validate(self: &Self) -> Result<(), ConfigError>;
```

Checks that the configuration is internally consistent.

Every field that must be non-empty is checked, and the first violation
returns at once so callers can fix one problem at a time.

#### Errors

Returns a typed [`ConfigError`] naming the first invalid field.

<a id="rustdoc-item-900"></a>

### `from_environment`

```rust
pub fn from_environment() -> Result<Self, ConfigError>;
```

Assemble the module configuration from the single `PROJECT_PATH` variable.

The backend comes from the directory contents (`Cargo.toml` selects the
native Rust backend, a `*.csproj` the managed C# one), and every path,
command and assembly name is derived from the project manifest.

#### Errors

Returns a [`ConfigError`] when the variable is missing, the directory
cannot be inspected, no supported manifest exists, or a manifest field
cannot be read.

<a id="rustdoc-item-904"></a>

### `from_path`

```rust
pub(in config) fn from_path(project_path: &str) -> Result<Self, ConfigError>;
```

Assembles the module configuration from an explicit workspace-relative
project path.

Backend detection and path derivation are shared with
[`Self::from_environment`](#rustdoc-item-900). [`HostConfig::from_environment`](struct.HostConfig.md#rustdoc-item-903) uses this
entry point to apply the `PROJECT_PATH` value.

#### Errors

Returns a [`ConfigError`] when the directory cannot be inspected, no
supported manifest exists, or a manifest field cannot be read.

<a id="rustdoc-item-908"></a>

### `native_from_manifest`

```rust
pub(in config) fn native_from_manifest(workspace_root: &Path, project_path: &str, manifest_path: &Path) -> Result<Self, ConfigError>;
```

Derive a native shared-library configuration from a `Cargo.toml`.

#### Errors

Returns [`ConfigError::ProjectManifestReadFailed`] or
[`ConfigError::ProjectPackageNameMissing`], plus the errors
[`materialize_host_project_member`](fn.materialize_host_project_member.md#rustdoc-item-907) reports while it writes the
generated member.

<a id="rustdoc-item-912"></a>

### `csharp_from_manifest`

```rust
pub(in config) fn csharp_from_manifest(project_path: &str, csproj_path: &Path) -> Result<Self, ConfigError>;
```

Derive a managed C# configuration from a `.csproj` manifest.

#### Errors

Returns [`ConfigError::ProjectManifestMissing`] when the file name has
no stem, [`ConfigError::InvalidEnvironmentVariable`] when the selected
configuration is not one of [`CSHARP_CONFIGURATIONS`](constant.CSHARP_CONFIGURATIONS.md#rustdoc-item-827), and
[`ConfigError::EngineWorkspaceRootUndetermined`] when the workspace
root cannot be derived.

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
