<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-836"></a>

# Module `pill_physics::settings`

Source: `extensions\pill_physics\pill_physics\src\settings.rs:1`

The tuning document and its `.physics_settings` asset.
The manager's tuning document and its settings asset.

## Responsibilities

- Declares [`PhysicsSettings`](struct.PhysicsSettings.md#rustdoc-item-598), the values a project tunes in one file.
- Declares [`PhysicsSettingsAsset`](struct.PhysicsSettingsAsset.md#rustdoc-item-676), the `.physics_settings` file the values
  are read from and written to.
- Applies a loaded document to the running manager, refusing values the
  simulation cannot run with.

## Design

The document holds plain numbers, as every value on this crate's boundary
does. A file is hand-editable, so a value that would make the simulation
meaningless - a zero timestep, a negative gravity scale - is refused by name
rather than clamped, and the manager keeps what it had.

## Module contents

### Structs
- [`PhysicsSettings`](struct.PhysicsSettings.md#rustdoc-item-598) — The tuning of the simulation.
- [`PhysicsSettingsAsset`](struct.PhysicsSettingsAsset.md#rustdoc-item-676) — The `.physics_settings` document a project tunes the simulation through.

## Re-exports

- [`pub use crate::manager::PhysicsManager;`](../manager/struct.PhysicsManager.md#rustdoc-item-337)
