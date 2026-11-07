<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8395"></a>

# Module `pill_engine_core::manager_settings`

Source: `engine\pill_engine_core\src\manager_settings.rs:1`

Settings assets that configure manager resources: the bindings that point a
manager at one, the file a host creates when the project has none, and the
change detection that re-applies an edited file.
Settings assets that configure manager resources: the bindings, the readers
and the change detection.

## Responsibilities

- Binds a manager resource to the settings asset it reads, defaulting to the
  conventional `settings/<name>.<extension>` path.
- Reports which managers have no settings file yet, with the bytes a host
  writes to create one from the document defaults.
- Reads a settings asset's bytes, applies them through the manager's typed
  applier, and re-applies when the bytes change.
- Turns every failure into one sentence naming the manager, the path and the
  reason, so a host logs it once.

## Design

The module never writes a file: creating one needs the project's `res`
directory, which only a host knows, so a host asks
[`World::missing_manager_settings`](../world/struct.World.md#rustdoc-item-8397) for the bytes and writes them. Reading
goes through the asset store, so a packed build answers exactly like a
directory does.

Change detection is a fingerprint of the bytes last applied, not a
modification time and not an asset content version. A settings file may be
reimported without the world ever seeing a handle, and a shipped pack has no
modification time at all.

## Related

- `settings` - the manager traits and the per-type applier tables.
- `asset_standalone` - the standalone files a settings asset is stored as.

## Module contents

### Structs
- [`ManagerSettingsApplied`](struct.ManagerSettingsApplied.md#rustdoc-item-8180) — One manager whose settings file reached it.
- [`ManagerSettingsBinding`](struct.ManagerSettingsBinding.md#rustdoc-item-8331) — One manager's binding: the path it reads and the fingerprint of what reached
- [`ManagerSettingsBindings`](struct.ManagerSettingsBindings.md#rustdoc-item-7255) — The path each manager's settings asset was bound to, and the bytes it last
- [`ManagerSettingsFailure`](struct.ManagerSettingsFailure.md#rustdoc-item-8218) — A settings file that could not be applied.
- [`ManagerSettingsReport`](struct.ManagerSettingsReport.md#rustdoc-item-8254) — What one pass over every manager's settings asset did.
- [`ManagerSettingsSurface`](struct.ManagerSettingsSurface.md#rustdoc-item-8296) — What one manager's settings asset declares, copied out of its table.
- [`MissingManagerSettings`](struct.MissingManagerSettings.md#rustdoc-item-8141) — A manager whose settings file does not exist yet, with the bytes that create

### Functions
- [`conventional_path`](fn.conventional_path.md#rustdoc-item-8394) — The path a manager's settings asset takes when nothing binds another one.
- [`fingerprint_of`](fn.fingerprint_of.md#rustdoc-item-8396) — A fingerprint of the bytes that reached a manager.
