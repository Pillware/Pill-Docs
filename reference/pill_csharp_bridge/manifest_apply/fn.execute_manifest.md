<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1721"></a>

# Function `pill_csharp_bridge::manifest_apply::execute_manifest`

```rust
pub(crate) fn execute_manifest<Declaration, Binding, Undo>(subject: &ManifestSubject<Declaration, Binding, Undo>, engine: &mut pill_engine::Engine, prepared: PreparedManifest<'_, Declaration, Binding>) -> (Result<ManifestOutcome, pill_core::error::CSharpError>, std::collections::HashMap<super::components::StableComponentId, Binding>) where Binding: Clone;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:299`

The half of the pipeline that changes things: applies what
[`prepare_manifest`](fn.prepare_manifest.md#rustdoc-item-1696) resolved, unwinds on a refusal, and retires last.

## Errors

Returns the error that one of the subject's `register`, `reshape` or
`rename` actions reported, after every entry applied so far has been rolled
back. The table comes back in every case, so the caller can publish it
either way.
