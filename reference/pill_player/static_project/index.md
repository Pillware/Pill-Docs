<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-737"></a>

# Module `pill_player::static_project`

Visibility: `crate` · Source: `hosting\pill_player\src\static_project.rs:1`

Statically linked project and module registration.
Statically linked project and module registration, for shipping builds.

## Responsibilities

- Describes a project and its extensions as ordinary Rust functions that
  are compiled into the binary, rather than as DLLs found at run time.
- Initializes them in the same order, and under the same owners, that the
  hot-reloading host uses.
- Defines [`ProjectBackend`](trait.ProjectBackend.md#rustdoc-item-589), the extension point through which a project
  that is not Rust (a C# assembly, through `pill_csharp_bridge`) starts.

## Design

The dependency direction forces this shape. This crate cannot name the
project crate, or every game would need its own player, so the crate that
links both - the generated shipping bundle - passes the functions in. That
also makes the set of linked modules visible at the call site. A shipping
build wants exactly that: the bundle generator reads
`project_settings.yaml` while the binary is built, and the released binary
holds what the generator baked in instead of reading a settings file.

For the same reason this crate names no C# type: a managed project arrives
as a [`StaticProjectBackend::External`](enum.StaticProjectBackend.md#rustdoc-item-595) backend the bridge implements, so a
build that runs no C# links none of it.

A linked entry point runs the same transaction as the macro-generated
`pill_module_init` wrapper. `register_all_components` drains this artifact's
`inventory` registry into the world first; skipping it fails as "my
components do not exist" rather than as a link error. The wrapper also
catches panics. Here there is no C ABI to unwind across, so a panic stays an
ordinary Rust panic instead of becoming a status that hides the backtrace.

## Module contents

### Structs
- [`StaticLogging`](struct.StaticLogging.md#rustdoc-item-663) — A project's logging settings, compiled into the binary as text.
- [`StaticModule`](struct.StaticModule.md#rustdoc-item-559) — One extension compiled into the binary.
- [`StaticProject`](struct.StaticProject.md#rustdoc-item-278) — A project and its extensions, compiled into the binary.
- [`StaticRenderer`](struct.StaticRenderer.md#rustdoc-item-280) — The renderer a windowed shipping build links, as the two functions this

### Enums
- [`StaticProjectBackend`](enum.StaticProjectBackend.md#rustdoc-item-596) — How a shipping build reaches its project.

### Traits
- [`ProjectBackend`](trait.ProjectBackend.md#rustdoc-item-589) — A project that registers itself by other means than a linked Rust

### Functions
- [`apply_manager_settings`](fn.apply_manager_settings.md#rustdoc-item-736) — Applies every manager's settings asset, reading each one from the mounted
- [`apply_project_startup_scene`](fn.apply_project_startup_scene.md#rustdoc-item-738) — Queue and load a project's startup scene, warning when it cannot be read.
- [`no_project_registration`](fn.no_project_registration.md#rustdoc-item-739) — A project registration half that does nothing.
- [`run_linked_entry_point`](fn.run_linked_entry_point.md#rustdoc-item-740) — Run one linked entry point the way its generated ABI wrapper would.

### Type aliases
- [`StaticRendererAttachFn`](type.StaticRendererAttachFn.md#rustdoc-item-626) — `attach(window, width, height)`: a renderer backend being built on `window`.
