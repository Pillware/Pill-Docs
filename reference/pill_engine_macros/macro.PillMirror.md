<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-361"></a>

# Procedural macro `pill_engine_macros::PillMirror`

```rust
proc_macro PillMirror
```

Source: `engine\pill_engine_macros\src\lib.rs:1575`

Turns a plain (non-component) value type, or a fieldless enum, into a typed
C# mirror.

A struct with named fields gets a [`PillValueTypeDescriptor`] submitted into
this artifact's inventory, so the host's C# codegen can resolve
`struct:<path>` field tags to typed nested structs. It also gets the
encodings that let mirrored functions take and return the type by value.

A fieldless enum with an integer `#[repr]` becomes a C# `enum`, and
mirrored functions pass its values as the discriminant. Generic types are
rejected.

[`PillValueTypeDescriptor`]: ::pill_engine::component_registry::PillValueTypeDescriptor
