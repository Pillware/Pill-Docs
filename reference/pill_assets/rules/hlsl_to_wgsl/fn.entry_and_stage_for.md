<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-79"></a>

# Function `pill_assets::rules::hlsl_to_wgsl::entry_and_stage_for`

```rust
pub(in rules::hlsl_to_wgsl) fn entry_and_stage_for(file: &std::path::Path) -> Result<(&'static str, &'static str), crate::CookError>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::rules::hlsl_to_wgsl'}}` · Source: `assets\pill_assets\src\rules\hlsl_to_wgsl.rs:360`

The entry point and stage `file` declares through its name.

## Errors

Returns [`CookError::Rule`](../../enum.CookError.md#rustdoc-item-78) when the name ends in neither `_vertex.hlsl` nor
`_fragment.hlsl`. A guessed stage would produce a shader that fails at
pipeline creation instead of here.
