<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2656"></a>

# Module `pill_development_host::project_module`

Visibility: `crate` · Source: `hosting\pill_development_host\src\project_module.rs:1`

The loaded project module: its startup build and load, and each reload
after that.
Lifecycle management for the active native or managed project module.

## Responsibilities

- Builds and loads the selected backend during startup.
- Reloads a native generation through a graveyard (the retired library
  images the host keeps mapped), so pointers into an earlier image stay
  valid.
- Leaves managed reload polling to the C# bridge's runtime, through
  `crate::csharp`.
- Keeps a record of each generation's registrations - persistable type
  names, schema hashes, resource ids and every component name - so the next
  reload can tell what changed and what another module still declares.

## Design

The host keeps exactly one [`LoadedProject`] alive at a time. A native
reload runs through [`reload_native`], which hands the build, the private
copy and the swap to `crate::reload`. The replaced DLL moves into a bounded
graveyard and stays mapped until no column needs its tables, so
engine-owned pointers into the old image stay valid while changed persist
schemas are migrated. A managed backend leaves assembly discovery and
validation to the C# bridge's runtime, which reports success or rejection
through `poll_reload`.

## Module contents

### Modules
- [`loaded`](loaded/index.md#rustdoc-item-3421)
