<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-357"></a>

# Function `pill_engine_macros::field_type_tag`

```rust
pub(crate) fn field_type_tag(field_type: &syn::Type, containers_allowed: bool) -> syn::Result<FieldTag>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:1334`

Maps a Rust field type to the closed C#-mirror type-tag vocabulary.

Primitives and fixed-size arrays have a tag of their own. Any other path
type is tagged as a nested struct by its fully-qualified name. The codegen
resolves that against the artifact's `PillMirror` inventory, and falls back
to an opaque blob of the field's size when no declaration exists.

`String`, `Vec<E>` and `DynamicBuffer<E>` become the heap-owning container
tags `string`, `vec:<element>` and `dynbuf:<element>` when the caller allows
containers. Component rows allow them, because managed code reaches their
buffers through generated accessor members. Mirrored value types do not,
because they cross the boundary as plain data.

A `char` field is rejected: Rust's `char` is 4 bytes and C#'s is 2.
