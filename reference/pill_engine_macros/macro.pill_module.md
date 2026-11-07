<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-441"></a>

# Procedural macro `pill_engine_macros::pill_module`

```rust
proc_macro pill_module
```

Source: `engine\pill_engine_macros\src\lib.rs:3261`

Wraps an extension's `init` function and generates the `pill_module_*`
C-ABI exports. The annotated function must have the signature
`fn(engine: &mut Engine) -> u32`.

`#[pill_module(register = path)]` also names the artifact's registration
half: the repeatable work the host calls on every generation after the
first, so the one-time `init` does not run against a world that already has
its entities. Without the argument the artifact exports `pill_module_init`
alone, which is what every module built before the split does.

Before calling it, the macro registers every component that
`#[derive(PillComponent)]` declared in this artifact. It also derives the
module name from `CARGO_PKG_NAME`, null-terminated, and reads the ABI
version from `::pill_engine::module_abi::MODULE_ABI_VERSION`, so module and
host cannot drift apart. The whole init runs inside `catch_unwind`, so a
panic becomes a non-zero status and the host rolls back instead of unwinding
across the C ABI.

The `#[no_mangle]` exports come from `__pill_module_entry_points!`, the macro
this attribute emits. The loadable artifact is the generated
`host_module_<name>` wrapper crate. It compiles this crate as a plain library
and expands the macro, so a crate linked into several artifacts never defines
a symbol more than once. The wrapped function itself is always compiled,
because a statically linked build calls it directly.
