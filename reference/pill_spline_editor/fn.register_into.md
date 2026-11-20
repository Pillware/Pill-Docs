<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-98"></a>

# Function `pill_spline_editor::register_into`

```rust
pub fn register_into(registry: &mut pill_editor_core::tools::ToolRegistry);
```

Source: `extensions\pill_spline\modules\editor\src\pill_spline_editor.rs:141`

Registers the spline tool and its element hooks into `registry`.

Registration replaces a record of the same name, which is what a reload of
this crate relies on: the arriving image's hooks take the old ones' place.
