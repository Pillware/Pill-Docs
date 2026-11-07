<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-815"></a>

# Struct `pill_development_host::config::ExtensionConfig`

```rust
pub struct ExtensionConfig;
```

Source: `hosting\pill_development_host\src\config.rs:329`

Build, watch and load description for one extension.

Extensions are workspace members of the engine workspace. Each is built
through a generated `host_module_<name>` wrapper crate
([`materialize_host_module_wrapper`](fn.materialize_host_module_wrapper.md#rustdoc-item-954)) whose `cdylib` carries the
loadable-artifact entry points, with the extension itself compiled inside
it as a plain library. Wrapper and extension share the workspace's
lockfile and Cargo configuration. That shared setup is what lets them link
the engine dynamically and share one copy of its statics with the host.

## Fields

<a id="rustdoc-item-946"></a>

### `name`

```rust
name: String
```

Crate directory name, also the log field and temporary-copy prefix.

<a id="rustdoc-item-947"></a>

### `folder`

```rust
folder: String
```

The extension folder under `extensions/` that holds the crate; the
crate itself is `extensions/<folder>/<name>/`.

<a id="rustdoc-item-948"></a>

### `is_editor_crate`

```rust
is_editor_crate: bool
```

Whether this is the folder's editor crate (`<folder>_editor`), which an
editor host loads after the folder's runtime crates and reloads whenever
one of them reloads.

<a id="rustdoc-item-949"></a>

### `library_name`

```rust
library_name: String
```

Library name of the artifact the host loads, which is the extension's
own name. The wrapper's DLL is staged under it, and the host names the
module by it in logs, analytics and the reload graveyard.

<a id="rustdoc-item-950"></a>

### `wrapper_library_name`

```rust
wrapper_library_name: String
```

Library name of the generated wrapper crate the build command selects;
the artifact it produces is staged under [`Self::library_name`](#rustdoc-item-949).

<a id="rustdoc-item-951"></a>

### `watch_directory`

```rust
watch_directory: String
```

Directory to watch for source changes, relative to the workspace root.

<a id="rustdoc-item-952"></a>

### `build_command`

```rust
build_command: Vec<String>
```

Build command: the first element is the program and the rest are
arguments.

<a id="rustdoc-item-953"></a>

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

<a id="rustdoc-item-955"></a>

### `workspace_member`

```rust
pub fn workspace_member(name: &str, folder: &str) -> Self;
```

Derives the configuration of an extension crate from its name and the
extension folder that holds it.

The folder and crate name determine everything: sources in
`extensions/<folder>/<name>/src`, the generated `host_module_<name>`
wrapper carrying the loadable artifact, and the private `target/hot`
directory it is copied into. Both are workspace members found by glob,
so a new module needs no manifest edit.

Building inside the workspace is required, not merely convenient: it
makes the module resolve the same dependency graph as the host. That
keeps component type identities and the mangled symbol names of the
shared `pill_core` library in agreement.

<a id="rustdoc-item-956"></a>

### `located_workspace_member`

```rust
pub fn located_workspace_member(workspace_root: &Path, name: &str) -> Self;
```

[`Self::workspace_member`](#rustdoc-item-955) for the crate `name`, in whichever extension
folder under `workspace_root` holds it (the folder of its own name when
none does yet, so a missing crate fails at its watch path).

<a id="rustdoc-item-957"></a>

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
