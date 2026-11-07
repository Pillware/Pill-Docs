<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-205"></a>

# Enum `pill_core::error::host::ConfigError`

```rust
pub enum ConfigError { ... }
```

Source: `engine\pill_core\src\error\host.rs:31`

Setup and configuration failures for a project and its modules.

Every one of them except the asset-pack failure is raised before any build
work starts, so a bad setup stops the host at once with a precise message
instead of a confusing error much later.

## Variants

<a id="rustdoc-item-140"></a>

### `EmptyModuleName`

```rust
EmptyModuleName
```

The configured module name is empty.

<a id="rustdoc-item-141"></a>

### `EmptyWatchDirectory`

```rust
EmptyWatchDirectory
```

The configured watch directory is empty.

<a id="rustdoc-item-142"></a>

### `EmptyBuildCommand`

```rust
EmptyBuildCommand
```

The configured build command is empty.

<a id="rustdoc-item-144"></a>

### `MissingEnvironmentVariable`

```rust
MissingEnvironmentVariable
```

A required configuration environment variable was not set.

<a id="rustdoc-item-149"></a>

### `InvalidEnvironmentVariable`

```rust
InvalidEnvironmentVariable
```

A configuration environment variable holds a value the host does not
accept.

<a id="rustdoc-item-150"></a>

### `EngineWorkspaceRootUndetermined`

```rust
EngineWorkspaceRootUndetermined
```

The directory the engine workspace lives in could not be determined.

The host finds it from the build location of its own crate, which is
fixed at compile time, and resolves every stored relative path against
it. The process's working directory is not used: the two agree only
when the host is started from the workspace root, and a launcher that
sets a working directory of its own would resolve `extensions/` to a
directory that does not exist.

<a id="rustdoc-item-152"></a>

### `ProjectDirectoryMissing`

```rust
ProjectDirectoryMissing
```

The configured project directory does not exist.

<a id="rustdoc-item-154"></a>

### `ProjectManifestMissing`

```rust
ProjectManifestMissing
```

The project directory contains no Cargo.toml or .csproj manifest.

<a id="rustdoc-item-158"></a>

### `ProjectManifestReadFailed`

```rust
ProjectManifestReadFailed
```

The project manifest could not be read.

<a id="rustdoc-item-161"></a>

### `ProjectManifestParseFailed`

```rust
ProjectManifestParseFailed
```

The project manifest is not valid TOML, so no workspace member can be
generated from it.

<a id="rustdoc-item-163"></a>

### `ProjectPackageNameMissing`

```rust
ProjectPackageNameMissing
```

The project manifest does not declare a package name.

<a id="rustdoc-item-166"></a>

### `HostProjectMemberCreationFailed`

```rust
HostProjectMemberCreationFailed
```

The generated host workspace member for a native project could not be
created or written.

<a id="rustdoc-item-169"></a>

### `HostModuleMemberCreationFailed`

```rust
HostModuleMemberCreationFailed
```

The generated workspace member that wraps an extension as a loadable
artifact could not be created or written.

<a id="rustdoc-item-173"></a>

### `ProjectDependencyPathMissing`

```rust
ProjectDependencyPathMissing
```

A `path` dependency in the project manifest does not point at a path
that exists, once the host has rewritten it for the generated workspace
member.

Reported instead of writing the member: Cargo refuses the whole
workspace when one member cannot load, which stops every build,
including the one that would replace that member.

<a id="rustdoc-item-175"></a>

### `ProjectSettingsFileMissing`

```rust
ProjectSettingsFileMissing
```

The project's settings file does not exist.

<a id="rustdoc-item-178"></a>

### `ProjectSettingsFileReadFailed`

```rust
ProjectSettingsFileReadFailed
```

The project's settings file could not be read.

<a id="rustdoc-item-181"></a>

### `ProjectSettingsFileParseFailed`

```rust
ProjectSettingsFileParseFailed
```

The project's settings file could not be parsed.

<a id="rustdoc-item-183"></a>

### `MissingProjectName`

```rust
MissingProjectName
```

The project's settings file does not declare a `name`.

<a id="rustdoc-item-185"></a>

### `InvalidBuildBinaryName`

```rust
InvalidBuildBinaryName
```

The project's settings file's `build_binary_name` is missing or not
filename-safe.

<a id="rustdoc-item-188"></a>

### `InvalidLoggingSettings`

```rust
InvalidLoggingSettings
```

The settings file's `logging:` section names a level, a timestamp
format or a target the engine does not recognize.

<a id="rustdoc-item-191"></a>

### `InvalidStartupScene`

```rust
InvalidStartupScene
```

The settings file's `startup_scene:` is not a relative `.scene` path
below the asset directory.

<a id="rustdoc-item-193"></a>

### `InvalidExtensionName`

```rust
InvalidExtensionName
```

An extension name in the settings file is not a usable crate
directory name.

<a id="rustdoc-item-195"></a>

### `DuplicateExtensionName`

```rust
DuplicateExtensionName
```

The settings file lists one extension twice.

<a id="rustdoc-item-197"></a>

### `EditorCrateListed`

```rust
EditorCrateListed
```

The settings file lists an editor crate, which only loads with its
extension in an editor host.

<a id="rustdoc-item-199"></a>

### `RetiredEditorFrontend`

```rust
RetiredEditorFrontend
```

An editor crate is tagged for the `pill_ui` editor frontend, which no
host implements.

<a id="rustdoc-item-201"></a>

### `ExtensionDirectoryMissing`

```rust
ExtensionDirectoryMissing
```

No extension folder holds the configured extension crate.

<a id="rustdoc-item-204"></a>

### `AssetPackInvalid`

```rust
AssetPackInvalid
```

The asset pack a shipped build mounts is not a valid pack.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Diagnostic`
- `Error`
- `Display`
- `EngineMessage`
- `From<ConfigError>`
