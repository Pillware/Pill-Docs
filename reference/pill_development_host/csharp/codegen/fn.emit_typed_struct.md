<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1325"></a>

# Function `pill_development_host::csharp::codegen::emit_typed_struct`

```rust
pub(in csharp::codegen) fn emit_typed_struct(name: &str, fields: &[pill_engine::component_registry::ComponentFieldDescriptor], size: usize, align: usize, value_types: &[pill_engine::component_registry::PillValueTypeDescriptor], emitted_structs: &mut Vec<EmittedStruct>, methods: &[pill_csharp_bridge::ResolvedMirrorMethod], qualified: &str, accessors: &[pill_csharp_bridge::ResolvedFieldAccessor], owner_type_name: &str, scope: &mirror_codegen::MirrorScope) -> Result<String, String>;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:514`

Writes a typed C# struct from a compile-time field layout.

`size` and `align` come from the Rust type. An alignment above 8 is
rejected because no C# primitive can drive it. `struct:` fields are looked
up among the module's registered `#[derive(PillMirror)]` types, recursively;
when a type is not declared, an opaque blob of the field's size is used
instead. Nested definitions are added to `emitted_structs` in dependency
order.

`owner_type_name` is the component's Rust type name when the struct mirrors
a component row, which turns on the heap-field accessor members. It is empty
for a `PillMirror` value type. The many parameters are the descriptor fields
plus the recursion context; clippy's argument threshold is lower than their
count.

`qualified` is the Rust path that mirrored methods resolve against. A
component row passes its own name, so `#[pill_mirror_impl]` methods attach
to it just as they attach to a `PillMirror` value type.

## Errors

Returns a message when a field has no size or runs past the type's bytes;
an array reports zero elements or a size its count does not divide; two
emitted fields overlap; a type tag or element alignment has no C# mirror; a
container field has no published accessor or trampoline; a nested value
type collides on its C# name or disagrees with the field using it; a
mirrored member cannot be lowered; or no free range is left for the
alignment pad.
