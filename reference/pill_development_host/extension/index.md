<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2770"></a>

# Module `pill_development_host::extension`

Visibility: `crate` · Source: `hosting\pill_development_host\src\extension.rs:1`

Builds, loads and reloads the extension modules.
Loading and reloading of extension modules.

## Responsibilities

- Builds, checks and loads one extension when the host starts.
- Reloads one module on its own: after a source edit, after a runtime crate
  in its folder reloads, or when a retry is requested.
- Clears only that module's systems when it is replaced.

## Design

Each loaded module has one [`ExtensionSlot`]. The slot holds the module's
configuration, its [`SystemOwner`], the library that is loaded now and the
retired libraries that are still mapped. It keeps a limited number of
retired libraries unless the module asks to keep every generation. A reload
works like the project reload: the replacement is compiled and loaded
before any engine state is touched, and a failure at any step leaves the
previous generation running.

The module reloads on its own. Its own watcher adds to a counter that only
this module reads, and its systems are removed through
[`Engine::clear_systems_owned_by`] instead of the global clear. Reloading
one module therefore never disturbs the project or another module.

## Module contents

### Modules
- [`slot`](slot/index.md#rustdoc-item-2658)

## Re-exports

- `pub use pill_engine::module_abi::MODULE_ABI_VERSION;`
