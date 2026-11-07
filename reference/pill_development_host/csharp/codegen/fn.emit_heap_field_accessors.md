<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1336"></a>

# Function `pill_development_host::csharp::codegen::emit_heap_field_accessors`

```rust
pub(in csharp::codegen) fn emit_heap_field_accessors(cs_name: &str, type_name: &str, fields: &[pill_engine::component_registry::ComponentFieldDescriptor], value_types: &[pill_engine::component_registry::PillValueTypeDescriptor], emitted_structs: &mut Vec<EmittedStruct>, methods: &[pill_csharp_bridge::ResolvedMirrorMethod], accessors: &[pill_csharp_bridge::ResolvedFieldAccessor], scope: &mirror_codegen::MirrorScope) -> Result<String, String>;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:1061`

Writes the C# members that reach a component's heap-owning fields.

A `Vec<E>` field becomes a count, a read-only span, a writable span and a
resize method. A `DynamicBuffer<E>` field becomes a count and two spans
that read straight out of the row, plus a resize method. A `Vec<String>`
field becomes a count, element get and set, an append and a resize - one
boundary call per element, never a span. A `String` field becomes a getter
and a setter.

A member that calls native code passes the row's address to the module's
trampoline through a `MirrorMethods.Invoke*` helper, so the buffer is read
and written where it lives: one boundary call per member use, none per
element. Those calls go through raw C-ABI function pointers, with no
delegate stub and no marshalling layer. The trampoline addresses come from
a per-struct `EnsureAccessorsBound()` cache keyed on
`MirrorMethods.Generation`: a reload maps the declaring module at a fresh
base address, so the addresses from the previous bind would dangle. All of
it stays safe C#, so the reloadable project assembly needs no
`AllowUnsafeBlocks`.

Read-only members stay on the value type; the ones that call native code
address it with `MirrorMethods.AddressOf(ref Unsafe.AsRef(in this))`.
Reading through a copy reads the same container header, so a copy is
harmless there.

The members that MUTATE a container header - every `Resize`, `Set` and
`Push`, each of which reallocates through the address it is handed - are
written on a nested `ref struct {Name}RowRef` instead, bound once to the
live row with `Bind(ref row)`. A C# struct is copied on assignment, so a
mutator on the value type would reallocate through the copy and leave the
live row pointing at the freed block. On the row-ref type that call does
not compile, and copying the handle copies only a pointer.

Every span is a loan, not ownership: resizing or replacing the container
makes it invalid, as growing a Rust `Vec` makes its earlier slices invalid.

The parameters are the descriptor fields plus the recursion context, as in
[`emit_typed_struct`](fn.emit_typed_struct.md#rustdoc-item-1325); clippy's threshold is below the (internal)
signature's size.

## Errors

Returns a message when a container field has no published accessor; when the
accessor's kind or element tag disagrees with the field; when a trampoline
the generated members call was not published; or when a span's element type
cannot be resolved.
