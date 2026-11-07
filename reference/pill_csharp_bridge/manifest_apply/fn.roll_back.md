<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1725"></a>

# Function `pill_csharp_bridge::manifest_apply::roll_back`

```rust
pub(in manifest_apply) fn roll_back<Declaration, Binding, Undo>(subject: &ManifestSubject<Declaration, Binding, Undo>, engine: &mut pill_engine::Engine, table: &mut std::collections::HashMap<super::components::StableComponentId, Binding>, journal: Vec<JournalEntry<Binding, Undo>>);
```

Visibility: `{'restricted': {'parent': 970, 'path': '::manifest_apply'}}` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:569`

Undo every applied entry, newest first.

The engine side is best effort by design. A rollback that fails leaves the
process in a mixed state. That failure is logged where it happened instead
of being returned in place of the original refusal, which is the error the
caller needs.

The table side is not best effort. When an entry's effect on the engine was
reversed, its table entry is put back exactly as it was. An entry whose
effect could not be reversed keeps the binding it was given, because the
table has to keep describing what the engine actually holds.
