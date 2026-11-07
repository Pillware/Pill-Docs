<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8477"></a>

# Module `pill_engine_core::settings`

Source: `engine\pill_engine_core\src\settings.rs:1`

Manager settings: the settings asset a manager resource reads, its
conventional path, and the applier that moves its document into the live
value.
Manager settings: what a project configures on a subsystem-owning resource.

## Responsibilities

- Declares [`SettingsAssetManager`](trait.SettingsAssetManager.md#rustdoc-item-7356): the standalone asset type a manager
  reads, its settings name, its conventional path, and the applier that moves
  a document into the live value.
- Carries each manager's settings surface as plain data
  ([`SettingsAssetOps`](struct.SettingsAssetOps.md#rustdoc-item-7358)) so it can live in the per-type table that a reload
  re-points at the newest image: rendering a created file and applying an
  edited one.
- Declares [`SettingsOutcome`](enum.SettingsOutcome.md#rustdoc-item-8179): what the manager decided about a document.

## Design

A settings asset is a standalone asset - a real file in the project's `res`
with a header, a guid and a document - at
`settings/<settings_name>.<extension>`. The manager owns the document type,
so an edit is checked against the type before it reaches the live value, and
the Inspector can draw the same fields a component shows.

A manager is a [`Resource`](../resource/trait.Resource.md#rustdoc-item-715) that owns a subsystem - the asset store, the
audio device, a physics world. The host creates the manager's file from its
document defaults when it is missing, applies it after a load, and
re-applies it when the file changes.

The applier is a function pointer into the artifact that registered the
manager. It therefore has the same lifetime rule as the drop function it sits
beside: valid while that image is mapped, and refreshed by the world's
re-homing pass together with the rest of the table. A manager that has to
survive a reload needs a `shared_name`, because an id built from `TypeId`
differs in every generation.

## Module contents

### Structs
- [`SettingsAssetOps`](struct.SettingsAssetOps.md#rustdoc-item-7358) — A settings-asset manager's surface as plain data, stored in its per-type

### Enums
- [`SettingsOutcome`](enum.SettingsOutcome.md#rustdoc-item-8179) — What a manager did with a document.

### Traits
- [`SettingsAssetManager`](trait.SettingsAssetManager.md#rustdoc-item-7356) — A manager whose tuning lives in a settings asset of its own type.

### Functions
- [`apply_settings_bytes_of`](fn.apply_settings_bytes_of.md#rustdoc-item-8478) — Applies a settings file's bytes to the `T` at `value_pointer`.
- [`render_settings_default_of`](fn.render_settings_default_of.md#rustdoc-item-8476) — Renders a settings file holding `T`'s document defaults.
