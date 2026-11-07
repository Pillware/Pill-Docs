<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1745"></a>

# Function `pill_csharp_bridge::mirror_naming::split_array_tag`

```rust
pub fn split_array_tag(type_tag: &str) -> Result<(&str, bool), String>;
```

Source: `csharp\pill_csharp_bridge\src\mirror_naming.rs:116`

Splits an `array:<inner>` type tag into its base tag and whether the field
is an array. A tag without the `array:` prefix comes back unchanged with
`false`.

It never returns `Err`. A tag without the prefix is still a valid answer,
and the `Result` lets callers use `?` beside the other type-tag errors,
which are `String` too.
