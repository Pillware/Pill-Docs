<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-814"></a>

# Function `pill_development_host::build_runner::build_extension_batch`

```rust
pub(crate) fn build_extension_batch(workspace_root: &std::path::Path, configs: &[crate::ExtensionConfig], project: Option<&crate::ProjectModuleConfig>, renderer_name: Option<&str>) -> bool;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:2005`

Builds every module of the startup plan in one cargo invocation.

Every module build otherwise pays cargo's fixed cost once: process start,
workspace resolve and fingerprint scan. The extensions' wrappers, the native
project's member and the renderer's wrapper (windowed postures only) differ
only in `--package`, so one invocation selects them all with flags that match
a single module's build. That keeps every unit's fingerprint identical to a
per-module build's. The modules it validated skip their own build when they
load (see [`take_batch_validation`](fn.take_batch_validation.md#rustdoc-item-813)), and an edit later still rebuilds a
module on its own.

A managed (C#) project is never selected, because its `dotnet` build shares
none of cargo's fixed cost. The renderer's wrapper joins the batch because it
is an ordinary wrapper build. Only its load waits for the window (see
`crate::renderer_module`), and a rebuild request drops its token.

Feature unification is the one difference: a selected package that depends on
another selected package receives the union of both feature requests.

Returns whether the batch ran and validated the modules. A failure is not an
error: the modules then build individually.
