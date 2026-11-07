<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-933"></a>

# Function `pill_csharp_bridge::components::apply_component_manifest_on_reload`

```rust
pub(crate) fn apply_component_manifest_on_reload(engine: &mut pill_engine::Engine, bytes: &[u8], store: &BindingStore) -> Result<ManifestApplyReport, pill_core::error::CSharpError>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\components.rs:575`

Apply a swapped assembly's component manifest to the live world.

The reload counterpart of [`register_component_manifest`](fn.register_component_manifest.md#rustdoc-item-890): where startup may
register what it likes, this one has to *migrate*, so a managed component
whose layout changed keeps its entities and its rows and only the bytes
move. This kind's contribution to that pipeline is [`COMPONENT_SUBJECT`](constant.COMPONENT_SUBJECT.md#rustdoc-item-932).

These cases are refused rather than migrated:

- a `Native` or `ModuleNative` binding whose layout or schema changed - the
  Rust side did not change, so the mirror is simply wrong;
- a shared component with no native binding, exactly as at startup;
- a managed entry whose aliases name more than one previous registration,
  because picking one would silently drop the other's rows;
- an entry that is already registered and also declares an alias, because
  treating it as unchanged would leave the predecessor's rows in a binding
  that nothing tracks.

A managed component the manifest stopped naming is not refused: its storage
is retired after everything else has applied, so a removed type does not
force a restart while developing.

## Errors

Returns a [`CSharpError`] for any of the refusals above, for a malformed
manifest, or when the engine refuses a registration or a relayout.
