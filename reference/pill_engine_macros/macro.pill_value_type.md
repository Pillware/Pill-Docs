<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-386"></a>

# Procedural macro `pill_engine_macros::pill_value_type`

```rust
proc_macro pill_value_type
```

Source: `engine\pill_engine_macros\src\lib.rs:2022`

Declares the layout of a foreign value type for the managed mirror.

`#[derive(PillMirror)]` reads the type definition, so a type this crate does
not define (say `glam::Vec3`) cannot carry the derive. This macro takes the
declaration the derive would read: the type path and its `field: type` list.
It emits the same
[`PillValueTypeDescriptor`](::pill_engine::component_registry::PillValueTypeDescriptor)
into the calling artifact's registry. Managed code then gets typed members
for the fields instead of an opaque byte blob.

The declaration is stored under the path's first and last segment
(`pill_core::Vector2f`), the `<crate>::<Type>` shape every stored name has.
The field tag stays the path as spelled at the field site (`Vector3f` for a
`[Vector3f; 16]` field), and the readers resolve it against the stored name
by its last segment. A generated
assertion fails the build when the last declared field does not end the
type, so a field added behind the declaration cannot go unseen. The
declaration belongs to the artifact whose mirror needs it: another module's
registry does not see it.
