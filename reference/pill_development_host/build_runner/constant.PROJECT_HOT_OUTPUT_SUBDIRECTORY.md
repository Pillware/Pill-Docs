<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-565"></a>

# Constant `pill_development_host::build_runner::PROJECT_HOT_OUTPUT_SUBDIRECTORY`

```rust
pub(crate) const PROJECT_HOT_OUTPUT_SUBDIRECTORY: &str = "target/hot";
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:157`

Private directory the host copies the project's loadable artifacts into.
It is also the output directory an extension's configuration defaults to.

This gives a project the same protection an extension's output has. Cargo
writes `project.dll` into a shared per-crate slot that any other
`cargo build` of the same package overwrites, possibly with a different
feature set and therefore a differently configured `pill_engine` compiled
into it. Loading such a DLL crashes with an access violation inside
`LoadLibrary`, before any of the host's own diagnostics can run.
