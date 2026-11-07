<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7356"></a>

# Trait `pill_engine_core::settings::SettingsAssetManager`

```rust
pub trait SettingsAssetManager: Resource { ... }
```

Source: `engine\pill_engine_core\src\settings.rs:79`

A manager whose tuning lives in a settings asset of its own type.

A manager declares the standalone asset type that holds its settings, and
everything else follows from that declaration: the conventional path
(`settings/<settings_name>.<extension>` under the project's mounted `res`),
the file a host writes when the project has none, the check that an edited
file still fits the document, and re-applying it to the live value when its
bytes change.

The value is stored like any manager ([`crate::World::insert_manager_resource`]),
and its settings surface is registered with
[`crate::World::insert_settings_asset_manager`](../world/struct.World.md#rustdoc-item-8438) or
[`crate::World::register_settings_asset_manager`](../world/struct.World.md#rustdoc-item-8439). The development host then
binds and applies every manager's settings asset; a game may point a manager
at another settings asset at runtime with
[`crate::World::bind_manager_settings`](../world/struct.World.md#rustdoc-item-8440).

A manager with nothing to configure does not implement the trait: a settings
file in every project would be a file nobody can act on.

## Required and provided items

<a id="rustdoc-item-8434"></a>

### `Settings`

```rust
type Settings: StandaloneAsset;
```

The standalone asset type that holds this manager's tuning.

Its `Document` is the settings document the manager applies, and its
`FILE_EXTENSION` names the file (`audio_settings`).

<a id="rustdoc-item-8435"></a>

### `settings_name`

```rust
fn settings_name() -> &'static str;
```

The settings name: the file stem and the label a log line uses
(`pill_audio`).

Letters, digits and `_` only, so the name is safe as a file name. The
module's own name is the convention, because a person looking at the
folder knows which module a file belongs to.

<a id="rustdoc-item-8436"></a>

### `settings_asset_path`

```rust
fn settings_asset_path() -> String;
```

Where this manager's settings asset lives while the project keeps the
default: `settings/<settings_name>.<extension>` under the mounted `res`
directory.

<a id="rustdoc-item-8437"></a>

### `apply_settings`

```rust
fn apply_settings(self: &mut Self, settings: &<<Self as >::Settings as StandaloneAsset>::Document) -> SettingsOutcome;
```

Applies a settings document to the live value.

Return [`SettingsOutcome::Refused`](enum.SettingsOutcome.md#rustdoc-item-8399) when the document cannot be used - a
value out of range, a setting that cannot change while the subsystem
runs - and leave the manager exactly as it was. The manager logs the
reason itself; the caller logs which file it came from.
