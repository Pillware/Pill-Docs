<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-442"></a>

# Procedural macro `pill_engine_macros::pill_project`

```rust
proc_macro pill_project
```

Source: `engine\pill_engine_macros\src\lib.rs:3499`

Wraps a project's `init` function and generates the loadable-artifact exports
(`pill_module_init`, `pill_module_abi_version`) plus the project-only
`project_schema_fingerprint`.

The annotated function must have the signature
`fn(engine: &mut Engine) -> u32`. Before calling it, the macro registers
every component that `#[derive(PillComponent)]` declared in this artifact.
It also generates the schema fingerprint from the same registry, so adding a
component cannot leave the fingerprint stale.

The entry points are [`pill_module`](macro.pill_module.md#rustdoc-item-441)'s, because a project and an extension
follow one DLL contract and are loaded and reloaded the same way. Two things
are project-specific: the schema fingerprint, and the exports that carry no
`#[cfg]` gate. A project is always built as its own artifact, so there is no
second definition to collide with.
