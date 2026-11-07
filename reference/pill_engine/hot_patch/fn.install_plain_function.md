<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-528"></a>

# Function `pill_engine::hot_patch::install_plain_function`

```rust
pub fn install_plain_function(qualified_name: &str, address: usize, signature: &str) -> Result<(), HotPatchError>;
```

Source: `engine\pill_engine\src\hot_patch.rs:99`

Redirects every call to one `#[pill_hot_fn]` this artifact declares.

`address` is the replacement to call, and `signature` is the replacement's
signature text, which must match the text recorded at build time. A
replacement is called through the slot until [`reset_plain_function`](fn.reset_plain_function.md#rustdoc-item-524)
empties it.

## Errors

Returns [`HotPatchError::UnknownSystem`] if this artifact declares no such
function, [`HotPatchError::NullAddress`] if `address` is zero, and
[`HotPatchError::SignatureMismatch`] if `signature` differs from the
recorded text. The signature check is what keeps a reshaped function from
being installed behind call sites compiled for the old shape.
