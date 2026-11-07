<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-533"></a>

# Function `pill_engine::hot_patch::plain_function_signature`

```rust
pub fn plain_function_signature(qualified_name: &str) -> Option<&'static str>;
```

Source: `engine\pill_engine\src\hot_patch.rs:164`

Returns the signature text this artifact recorded for a `#[pill_hot_fn]`.

Pass this text back to [`install_plain_function`](fn.install_plain_function.md#rustdoc-item-528) instead of writing it out
again. The exact spelling comes from `stringify!` inside the macro, so a
hand-written copy fails the install gate over a single stray space. A patch
derives its own copy from the same source through the same macro, which is
what makes the two texts comparable.
