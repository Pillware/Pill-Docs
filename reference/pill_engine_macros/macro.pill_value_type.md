<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-362"></a>

# Procedural macro `pill_engine_macros::pill_value_type`

```rust
proc_macro pill_value_type
```

Source: `engine\pill_engine_macros\src\lib.rs:1649`

Declares the layout of a foreign value type for the managed mirror.

`#[derive(PillMirror)]` reads the type definition, so a type this crate does
not define (say `glam::Vec3`) cannot carry the derive. This macro takes the
declaration the derive would read: the type path and its `field: type` list.
It emits the same
[`PillValueTypeDescriptor`](::pill_engine::component_registry::PillValueTypeDescriptor)
into the calling artifact's registry. Managed code then gets typed members
for the fields instead of an opaque byte blob.

Spell the path exactly as the component field is written. The field tag is
the path as spelled at the field site (`Vector3f` for a `[Vector3f; 16]`
field), and the host resolves descriptors by exact name. A generated
assertion fails the build when the last declared field does not end the
type, so a field added behind the declaration cannot go unseen. The
declaration belongs to the artifact whose mirror needs it: another module's
registry does not see it.
