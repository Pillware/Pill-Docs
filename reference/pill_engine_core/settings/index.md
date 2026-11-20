<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10307"></a>

# Module `pill_engine_core::settings`

Source: `engine\pill_engine_core\src\settings\mod.rs:1`

The settings group: the settings asset a manager resource reads its tuning
from, and the bindings that point it at one. Its modules keep their old
crate-root paths through the re-exports below.
Manager settings: the settings asset a manager reads its tuning from.

## Responsibilities

- Declare the settings surface a manager resource implements, the applier
  that moves a document into the live value, and the outcome it reports
  ([`settings`](#rustdoc-item-10307)).
- Hold the settings *asset* side: the bindings that point a manager at one,
  the file a host creates when the project has none, and the change
  detection that re-applies an edited file ([`manager_settings`](manager_settings/index.md#rustdoc-item-5560)).

## Design

Each module keeps its old crate-root path: the crate re-exports both
(`pub use settings::manager_settings` in `lib.rs`), so moving a file into
this group changes no caller.

This group and the settings module inside it share a name, so the items of
[`settings`](#rustdoc-item-10307) are re-exported here as well: `crate::settings::SettingsOutcome`
is the path callers have always used, and `crate::settings::settings::…` is
the same item by its new path.

## Module contents

### Modules
- [`manager_settings`](manager_settings/index.md#rustdoc-item-5560) — Settings assets that configure manager resources: the bindings that point a
- [`settings`](settings/index.md#rustdoc-item-10304) — Manager settings: the settings asset a manager resource reads, its

## Re-exports

- [`pub use self::settings;`](settings/index.md#rustdoc-item-10304)
