<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1747"></a>

# Module `pill_csharp_bridge::mirror_naming`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\mirror_naming.rs:1`

The naming rules a generated C# mirror's fields follow.
The naming rules a generated C# mirror follows for its fields. Both the
mirror generator and the binding check use them, so the two agree about
what a mirror should contain.

## Responsibilities

- Turn Rust field names and type tags into the C# declarations a generated
  mirror carries: a PascalCase name for each field, one numbered field per
  array element, and no public field for a heap container.
- Describe a mirror's public fields as one signature text that both sides
  can build: the generator from the native descriptors, the bridge from the
  managed manifest.

## Design

This module is compiled into every build. Only a development host generates
mirrors, but a shipping host still binds them, and it still has to refuse a
managed struct whose fields disagree with the native component. So the
naming rules cannot live in the generator alone.

## Module contents

### Functions
- [`field_signature_text`](fn.field_signature_text.md#rustdoc-item-1742) — Turns `(offset, name, size)` triples into the signature text
- [`generated_field_signature`](fn.generated_field_signature.md#rustdoc-item-891) — Describes the public fields a generated mirror declares for `fields` as the
- [`is_heap_owned_tag`](fn.is_heap_owned_tag.md#rustdoc-item-1743) — Tells whether a type tag names a field whose bytes are a header for a
- [`is_opaque_container_tag`](fn.is_opaque_container_tag.md#rustdoc-item-1744) — Tells whether a type tag names a Rust-owned container field. Such a field
- [`snake_to_pascal`](fn.snake_to_pascal.md#rustdoc-item-1746) — Converts a snake_case Rust identifier to the PascalCase name a C# mirror
- [`split_array_tag`](fn.split_array_tag.md#rustdoc-item-1745) — Splits an `array:<inner>` type tag into its base tag and whether the field
