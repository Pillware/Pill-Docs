<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1999"></a>

# Function `pill_csharp_bridge::resources::execute_resource_manifest`

```rust
pub(crate) fn execute_resource_manifest(engine: &mut pill_engine::Engine, prepared: super::manifest_apply::PreparedManifest<'_, ManagedResourceDeclaration, ResourceBinding>) -> Result<super::manifest_apply::ManifestOutcome, pill_core::error::CSharpError>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\resources.rs:306`

Applies what [`prepare_resource_manifest`](fn.prepare_resource_manifest.md#rustdoc-item-1998) resolved, then publishes the
table.

For each resource the pipeline picks one of five outcomes, comparing the
arriving declaration with the previous binding:

- unchanged: the schema hash matches, so the stored bytes stay;
- added;
- reshaped: the bytes migrate field by field, matched by name;
- renamed through an alias;
- retired.

Aliases are handled first and retirement last.

The table is published on every exit, including a failing one. A reshape
that already ran cannot be undone, so keeping its new binding in the table
is what makes the table describe the layout the engine really holds. A
failed reshape is logged as a failure that needs a host restart.

## Errors

Returns the [`CSharpError`] the engine reports when it refuses a
registration or a byte migration. Entries applied before the refusal are
rolled back where an undo exists; a reshape stays applied, as described
above.
