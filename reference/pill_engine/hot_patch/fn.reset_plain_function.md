<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-524"></a>

# Function `pill_engine::hot_patch::reset_plain_function`

```rust
pub fn reset_plain_function(qualified_name: &str) -> Result<(), HotPatchError>;
```

Source: `engine\pill_engine\src\hot_patch.rs:136`

Returns one `#[pill_hot_fn]` to the body compiled into this artifact.

This empties the slot, so calls go back to this artifact's own body. Every
artifact holding a copy of the function has its own slot and must be reset
separately.

## Errors

Returns [`HotPatchError::UnknownSystem`] if this artifact declares no such
function.
