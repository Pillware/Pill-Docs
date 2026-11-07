<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1337"></a>

# Function `pill_development_host::csharp::codegen::resolve_span_element_type`

```rust
pub(in csharp::codegen) fn resolve_span_element_type(element_tag: &str, cs_name: &str, field_name: &str, value_types: &[pill_engine::component_registry::PillValueTypeDescriptor], emitted: &mut Vec<EmittedStruct>, methods: &[pill_csharp_bridge::ResolvedMirrorMethod], scope: &mirror_codegen::MirrorScope) -> Result<String, String>;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:1555`

Returns the C# element type for a generated span to iterate.

A primitive maps straight across. A `struct:<path>` element must be declared
with `#[derive(PillMirror)]`, because that descriptor supplies both the C#
struct and the size a span of it needs.

## Errors

Returns a message when a `struct:` element carries no `PillMirror`
descriptor, when the tag is neither a primitive nor a struct, or when the
element's own definition cannot be written.
