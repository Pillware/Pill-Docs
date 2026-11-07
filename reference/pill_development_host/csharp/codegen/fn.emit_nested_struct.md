<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1328"></a>

# Function `pill_development_host::csharp::codegen::emit_nested_struct`

```rust
pub(in csharp::codegen) fn emit_nested_struct(qualified: &str, size: usize, align: usize, value_types: &[pill_engine::component_registry::PillValueTypeDescriptor], emitted_structs: &mut Vec<EmittedStruct>, methods: &[pill_csharp_bridge::ResolvedMirrorMethod], scope: &mirror_codegen::MirrorScope) -> Result<String, String>;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:777`

Writes the typed C# struct for a `struct:<path>` field tag, once.

The path is looked up among the module's registered `#[derive(PillMirror)]`
types. A declared type is written from its own field layout, recursively.
Anything else - an enum, a plain struct that never derived `PillMirror`, a
foreign type - becomes an opaque blob of the field's element size and
alignment, so the mirror still compiles and keeps the right size.

## Errors

Returns a message when two nested types map to one C# name; when a declared
value type's size or alignment disagrees with the field using it; or when a
recursive definition or the opaque fallback cannot be written.
