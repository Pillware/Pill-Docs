<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1503"></a>

# Function `pill_csharp_bridge::manifest::format_field_layout_line`

```rust
pub(crate) fn format_field_layout_line(field_layout: &[pill_engine::component_registry::ComponentFieldDescriptor]) -> String;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:823`

Render a registered field layout as one stable, parseable line so
integration suites can check that the managed manifest reached the engine
intact. Each field is `name@offset:size:type_tag`, and the entries are
joined with `|`.
