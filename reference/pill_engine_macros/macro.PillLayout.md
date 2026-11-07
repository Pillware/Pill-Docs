<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-244"></a>

# Procedural macro `pill_engine_macros::PillLayout`

```rust
proc_macro PillLayout
```

Source: `engine\pill_engine_macros\src\lib.rs:338`

Emits a type's compile-time field layout without the component
registration machinery.

Generates the same descriptor list as [`PillComponent`], built from
`offset_of!`, `size_of` and `align_of` over the same tag vocabulary. The
list appears as an inherent `FIELD_LAYOUT` const plus a [`ComponentLayout`]
impl.

Use it for a type that registers itself explicitly: an engine type, a
host-linked extension, or anything else that must not submit an inventory
registration into every artifact that links it.

A nested struct field is tagged `struct:<path>`. The world flattens those
into dotted leaf rows at registration, provided the nested type's own layout
is registered first.

[`ComponentLayout`]: ::pill_engine::component_registry::ComponentLayout
