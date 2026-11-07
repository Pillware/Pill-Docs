<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-123"></a>

# pill_test API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Minimal extension module: one persistable component and one system.

## Responsibilities

- Defines the `ModuleTest` component and the `module_test_processor` system.
- Registers both through the extension ABI when the host loads it.
- Keeps its entities filled to a target count across hot reloads.

## Design

The crate is a plain `rlib`. The generated `host_module_pill_test` wrapper
links it into the `cdylib` that the host stages and loads at runtime, beside
the project module and reloaded on its own. All registration work lives in
[`register`](fn.register.md#rustdoc-item-3), a plain Rust function, so the same crate can also be linked
statically into a monolithic build. The `extern "C"` exports that
`#[pill_module]` emits wrap [`register`](fn.register.md#rustdoc-item-3): they catch a panic and turn it
into a status code, because a panic that unwound across the module boundary
would abort the process.

The component is registered as persistable, so its values survive a reload.
The reload matches persisted types by name, gives a newly added field its
default, and ignores a field the type no longer declares.

## Module contents

### Structs
- [`ModuleTest`](struct.ModuleTest.md#rustdoc-item-7) — Per-entity state this module defines.

### Functions
- [`__pill_register_ModuleTest`](fn.__pill_register_ModuleTest.md#rustdoc-item-117) — Registers this component into the world; used by the artifact-wide
- [`init`](fn.init.md#rustdoc-item-121) — The artifact's one-time entry point.
- [`module_test_processor`](fn.module_test_processor.md#rustdoc-item-2) — Advances every `ModuleTest` component by one frame.
- [`register`](fn.register.md#rustdoc-item-3) — Fills the world up to the module's entity count.

### Constants
- [`FIXED_DELTA_TIME`](constant.FIXED_DELTA_TIME.md#rustdoc-item-4) — Fixed time step, in seconds, added to every entity's accumulated time.
- [`MODULE_TEST_ENTITY_COUNT`](constant.MODULE_TEST_ENTITY_COUNT.md#rustdoc-item-0) — Number of entities the module keeps alive.
- [`REPORT_INTERVAL_FRAMES`](constant.REPORT_INTERVAL_FRAMES.md#rustdoc-item-1) — Frame interval a progress report would use, counted in frames.
