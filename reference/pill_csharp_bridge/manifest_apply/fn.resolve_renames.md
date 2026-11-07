<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1722"></a>

# Function `pill_csharp_bridge::manifest_apply::resolve_renames`

```rust
pub(in manifest_apply) fn resolve_renames<Declaration, Binding, Undo>(subject: &ManifestSubject<Declaration, Binding, Undo>, engine: &pill_engine::Engine, previous: &std::collections::HashMap<super::components::StableComponentId, Binding>, declarations: &[Declaration]) -> Result<std::collections::HashMap<super::components::StableComponentId, (super::components::StableComponentId, String)>, pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 970, 'path': '::manifest_apply'}}` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:383`

Resolve every declaration's aliases to the live entries they name.

Each alias is looked up once, and only among live entries: an entry that is
no longer registered has no data left to carry. The entry an alias names
becomes a rename instead of an add. An alias that matches nothing is left
alone: it names nothing this path owns, and a later registration under that
name is an ordinary add.

## Errors

Returns a [`CSharpError`] when an alias is ambiguous, or when one entry
collects predecessors through more than one alias. Two old registrations
cannot both be an entry's past, and picking one would silently drop the
other's data.
