<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1362"></a>

# Module `pill_development_host::csharp::codegen`

Visibility: `{'restricted': {'parent': 1405, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:1`

Host-side generation of a module's `<module>_Components.g.cs` mirror file.
Host-side C# mirror codegen.

## Responsibilities

- Generate `generated/<module>_Components.g.cs` inside each extension that
  exposes a managed surface: its components, its `#[derive(PillMirror)]`
  value types, the object classes, enums and resource markers its type rows
  declare, and its mirrored free functions. Everything comes from the
  descriptors the module itself registered - name, size, alignment and
  field layout.
- Write the declaration into the module's own folder: nothing in the C#
  project is hand-written, so the file derives only from what the Rust
  module registered.

## Design

A component with a registered field layout becomes a `LayoutKind.Explicit`
struct whose fields sit at the descriptor's byte offsets; a component with
no field metadata becomes an opaque
`[StructLayout(LayoutKind.Sequential, Size = N)]` struct whose only field
is an alignment pad. Both expose the live bytes as a `Raw` span in safe
code. The explicit struct also adds a pad when its fields alone would not
give it the module's alignment. When the managed manifest is registered,
the host compares the mirror's size and alignment with the module binding,
so a generator bug cannot ship a mismatched mirror silently.

The file is regenerated on every startup and module reload of a C# project.
A committed copy lets standalone C# builds (IDE, `dotnet build`, the C#
runtime regression tests) compile without a prior host run. Identical
content is left untouched, so a matching module keeps the tree clean.

## Module contents

### Structs
- [`EmittedStruct`](struct.EmittedStruct.md#rustdoc-item-1365) — One nested C# struct to write out, keyed by the Rust path it came from.

### Functions
- [`alignment_primitive`](fn.alignment_primitive.md#rustdoc-item-1389) — The C# primitive used as a pad field to force a struct's alignment.
- [`cs_primitive`](fn.cs_primitive.md#rustdoc-item-1413) — Returns the C# type, byte size and alignment for a primitive type tag, or
- [`csharp_parameter_name`](fn.csharp_parameter_name.md#rustdoc-item-1404) — Returns the parameter name the generated C# uses for one mirrored-method
- [`declared_value_type`](fn.declared_value_type.md#rustdoc-item-1409) — The declared value type a `struct:<path>` field tag names, or `None` when
- [`default_value_namespace`](fn.default_value_namespace.md#rustdoc-item-1407) — Returns the namespace for a value type that no component references: the
- [`emit_blob_component`](fn.emit_blob_component.md#rustdoc-item-1398) — Writes the opaque ABI-blob mirror for a component with no field metadata.
- [`emit_heap_field_accessors`](fn.emit_heap_field_accessors.md#rustdoc-item-1411) — Writes the C# members that reach a component's heap-owning fields.
- [`emit_nested_struct`](fn.emit_nested_struct.md#rustdoc-item-1402) — Writes the typed C# struct for a `struct:<path>` field tag, once.
- [`emit_opaque_struct`](fn.emit_opaque_struct.md#rustdoc-item-1403) — Writes an opaque blob struct for a nested type with no `PillMirror`
- [`emit_typed_struct`](fn.emit_typed_struct.md#rustdoc-item-1399) — Writes a typed C# struct from a compile-time field layout.
- [`emit_value_type_methods`](fn.emit_value_type_methods.md#rustdoc-item-1406) — Writes the C# members that mirror a value type's (or a component row's)
- [`generate_components_csharp`](fn.generate_components_csharp.md#rustdoc-item-1397) — Writes `generated/<module_name>_Components.g.cs` inside `crate_root`.
- [`generate_module_components_csharp`](fn.generate_module_components_csharp.md#rustdoc-item-1392) — Generates `<module>_Components.g.cs` in the extension's `generated`
- [`last_path_segment`](fn.last_path_segment.md#rustdoc-item-1415) — Returns the last segment of a fully-qualified Rust type name.
- [`opaque_namespaces`](fn.opaque_namespaces.md#rustdoc-item-1408) — Returns the namespace of the first component whose fields name `qualified`.
- [`path_namespace`](fn.path_namespace.md#rustdoc-item-1391) — Returns the C# namespace of a Rust path: every segment before the last,
- [`resolve_span_element_type`](fn.resolve_span_element_type.md#rustdoc-item-1412) — Returns the C# element type for a generated span to iterate.
- [`snake_to_camel`](fn.snake_to_camel.md#rustdoc-item-1414) — Returns a snake_case Rust identifier in the camelCase form used for
- [`split_csharp_name`](fn.split_csharp_name.md#rustdoc-item-1390) — Splits a C# name such as `pill_spline.Spline` into its namespace and its
- [`value_type_namespaces`](fn.value_type_namespaces.md#rustdoc-item-1410) — Works out the namespace of every value type before anything is written.

### Constants
- [`CSHARP_RESERVED_KEYWORDS`](constant.CSHARP_RESERVED_KEYWORDS.md#rustdoc-item-1361) — C# reserved keywords that cannot name a parameter.
