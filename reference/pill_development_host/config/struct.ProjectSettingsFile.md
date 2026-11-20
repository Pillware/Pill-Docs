<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1236"></a>

# Struct `pill_development_host::config::ProjectSettingsFile`

```rust
pub(in config) struct ProjectSettingsFile;
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1470`

Values declared by the project's own `project_settings.yaml`.

`name` and `build_binary_name` are required (the display/window title and
the artifact file base respectively). The rest is optional package
metadata.

Unknown keys are refused rather than dropped, so `module:` instead of
`modules:` is an error rather than a silently empty extension list.

## Fields

<a id="rustdoc-item-1225"></a>

### `name`

```rust
name: Option<String>
```

Project display name; required, used as the window title.

<a id="rustdoc-item-1226"></a>

### `build_binary_name`

```rust
build_binary_name: Option<String>
```

Artifact file base; required, letters/digits/underscores only.

<a id="rustdoc-item-1227"></a>

### `version`

```rust
version: Option<String>
```

Optional package version.

<a id="rustdoc-item-1228"></a>

### `author`

```rust
author: Option<String>
```

Optional package author.

<a id="rustdoc-item-1229"></a>

### `description`

```rust
description: Option<String>
```

Optional one-line package description.

<a id="rustdoc-item-1230"></a>

### `modules`

```rust
modules: Vec<String>
```

Extension crate names, in load order. This key is the only source for
the list: there is no environment-variable override, so the file is
always the complete answer to "which modules load". The one exception
is the selected renderer's data crate, which loads first by convention.

<a id="rustdoc-item-1231"></a>

### `renderer`

```rust
renderer: Option<String>
```

The renderer the project draws with: the name of its GPU module under
`extensions/` (`pill_master_renderer` when absent), or `none`. Its data
crate, `<renderer>_data`, loads in every build.

<a id="rustdoc-item-1232"></a>

### `assets`

```rust
assets: ProjectAssetSettings
```

What the development host does with the project's source assets.

<a id="rustdoc-item-1233"></a>

### `logging`

```rust
logging: ProjectLoggingSettings
```

Log levels over the engine's defaults.

<a id="rustdoc-item-1234"></a>

### `debug_draw`

```rust
debug_draw: Option<bool>
```

Whether a shipping or web build starts with debug drawing on; the
development host always draws.

<a id="rustdoc-item-1235"></a>

### `startup_scene`

```rust
startup_scene: Option<String>
```

The `.scene` the project starts with, as a path below `res`; loaded
after every component is registered and before the project's `init`
seeds anything.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `DeserializeOwned`
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
- `Default`
- `Deserialize<'de>`
