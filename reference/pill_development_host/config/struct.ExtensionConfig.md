<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-817"></a>

# Struct `pill_development_host::config::ExtensionConfig`

```rust
pub struct ExtensionConfig;
```

Source: `hosting\pill_development_host\src\config.rs:369`

Build, watch and load description for one extension.

Extensions are workspace members of the engine workspace. Each is built
through a generated `host_module_<name>` wrapper crate
([`materialize_host_module_wrapper`](fn.materialize_host_module_wrapper.md#rustdoc-item-965)) whose `cdylib` carries the
loadable-artifact entry points, with the extension itself compiled inside
it as a plain library. Wrapper and extension share the workspace's
lockfile and Cargo configuration. That shared setup is what lets them link
the engine dynamically and share one copy of its statics with the host.

## Fields

<a id="rustdoc-item-955"></a>

### `name`

```rust
name: String
```

The crate's package name, also the log field and temporary-copy prefix.

<a id="rustdoc-item-956"></a>

### `folder`

```rust
folder: String
```

The extension folder under `extensions/` that holds the crate, or
`editor` for one of the editor's own modules, which no runtime crate
shares.

<a id="rustdoc-item-957"></a>

### `crate_directory`

```rust
crate_directory: String
```

The crate's directory, relative to the workspace root, with `/`
separators.

<a id="rustdoc-item-958"></a>

### `is_editor_crate`

```rust
is_editor_crate: bool
```

Whether this is an editor crate: a folder's `modules/editor` crate,
which an editor host loads after the folder's runtime crates and reloads
whenever one of them reloads, or a crate only an editor host loads at
all (an editor module, a project's editor crate).

<a id="rustdoc-item-959"></a>

### `library_name`

```rust
library_name: String
```

Library name of the artifact the host loads, which is the extension's
own name. The wrapper's DLL is staged under it, and the host names the
module by it in logs, analytics and the reload graveyard.

<a id="rustdoc-item-960"></a>

### `wrapper_library_name`

```rust
wrapper_library_name: String
```

Library name of the generated wrapper crate the build command selects;
the artifact it produces is staged under [`Self::library_name`](#rustdoc-item-959).

<a id="rustdoc-item-961"></a>

### `wrapper_directory`

```rust
wrapper_directory: String
```

Directory of that generated wrapper crate, relative to the workspace
root, with `/` separators: inside the `generated/` folder of the
extension folder or the editor folder that holds the crate, or under
`projects_generated/` for a project's editor crate.

<a id="rustdoc-item-962"></a>

### `watch_directory`

```rust
watch_directory: String
```

Directory to watch for source changes, relative to the workspace root.

<a id="rustdoc-item-963"></a>

### `build_command`

```rust
build_command: Vec<String>
```

Build command: the first element is the program and the rest are
arguments.

<a id="rustdoc-item-964"></a>

### `output_subdirectory`

```rust
output_subdirectory: String
```

Directory of the hot-load artifact, relative to the workspace root.

Cargo writes the freshly built library into the shared output slot
first. The host copies it into this private directory and loads it from
there, so a project build that overwrites the shared slot cannot
corrupt the loaded module.

## Associated functions and methods

<a id="rustdoc-item-966"></a>

### `workspace_member`

```rust
pub(crate) fn workspace_member(location: &ExtensionCrateLocation) -> Self;
```

Derives the configuration of an extension crate from where it lives.

The location determines everything: sources in the crate directory's
`src`, the generated `host_module_<name>` wrapper carrying the loadable
artifact, and the private `target/hot` directory it is copied into.
Both are workspace members found by glob, so a new module needs no
manifest edit.

Building inside the workspace is required, not merely convenient: it
makes the module resolve the same dependency graph as the host. That
keeps component type identities and the mangled symbol names of the
shared `pill_core` library in agreement.

<a id="rustdoc-item-968"></a>

### `editor_module`

```rust
pub(crate) fn editor_module(directory_name: &str, package_name: &str) -> Self;
```

The configuration of one of the editor's own modules: the crate in
`editor/<directory_name>` whose manifest declares `package_name`.

Its generated wrapper is the `host_module_<package>` member in
`editor/generated/`. `folder` is `editor`, which no extension folder's
runtime crate carries, so no runtime crate's reload cascades into the
module.

<a id="rustdoc-item-969"></a>

### `located_workspace_member`

```rust
pub fn located_workspace_member(workspace_root: &Path, name: &str) -> Self;
```

[`Self::workspace_member`](#rustdoc-item-966) for the crate `name`, in whichever extension
folder under `workspace_root` holds it (the folder of its own name when
none does yet, so a missing crate fails at its watch path).

<a id="rustdoc-item-970"></a>

### `project_editor`

```rust
pub fn project_editor(project_path: &str, package_name: &str) -> Self;
```

The configuration of a project's own editor crate.

The crate lives at `<project_path>/<package>_editor/`, the project
directory's analogue of an extension's `modules/editor` folder. Its
generated wrapper is the `host_module_<package>_editor` member under
`projects_generated/`, so the workspace glob that already finds the
generated project members finds this one too.

`folder` is the project's package name, which is what makes
[`Self::is_editor_crate`](#rustdoc-item-958) true for it and keeps the log lines naming
the project rather than a path.

<a id="rustdoc-item-971"></a>

### `validate`

```rust
pub fn validate(self: &Self) -> Result<(), ConfigError>;
```

Verify that the configuration is internally consistent.

#### Errors

Returns a typed [`ConfigError`] naming the first invalid field.

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
