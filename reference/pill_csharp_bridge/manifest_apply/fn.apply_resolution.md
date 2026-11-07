<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1724"></a>

# Function `pill_csharp_bridge::manifest_apply::apply_resolution`

```rust
pub(in manifest_apply) fn apply_resolution<Declaration, Binding, Undo>(subject: &ManifestSubject<Declaration, Binding, Undo>, engine: &mut pill_engine::Engine, table: &mut std::collections::HashMap<super::components::StableComponentId, Binding>, identity: super::components::StableComponentId, resolution: Resolution<'_, Declaration>, outcome: &mut ManifestOutcome) -> Result<Option<JournalEntry<Binding, Undo>>, pill_core::error::CSharpError> where Binding: Clone;
```

Visibility: `{'restricted': {'parent': 970, 'path': '::manifest_apply'}}` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:483`

Apply one resolved entry, recording what it wrote.

## Errors

Whatever the subject's action reports. The table is only written after the
action succeeded, so a refusal here leaves the entry untouched and the
journal describes only the entries that did apply.

## Panics

Panics when a resolution names an entry the table does not hold, which the
resolve half makes impossible.
