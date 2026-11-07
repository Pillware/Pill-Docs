<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1500"></a>

# Function `pill_csharp_bridge::manifest::plan_tag`

```rust
pub(crate) fn plan_tag(type_tag: &str) -> &str;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:723`

Reduce a field's type tag to what the migration plan compares.

For the editor, the registry records a nested struct as
`struct:<owner>::<field>`, while a manifest only knows that the field is a
struct. Comparing those tags as they are would mark every nested field as
retyped, and again on every component rename, because the owner is part of
the tag. Both sides are folded to `struct`, so the plan asks the question it
means: is this field still a struct?
