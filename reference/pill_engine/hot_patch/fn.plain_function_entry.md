<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-534"></a>

# Function `pill_engine::hot_patch::plain_function_entry`

```rust
pub fn plain_function_entry(qualified_name: &str) -> Option<(usize, &'static str)>;
```

Source: `engine\pill_engine\src\hot_patch.rs:174`

Returns the address and signature of a `#[pill_hot_fn]` this artifact
declares.

A host needs both to point another artifact's copy of the same function at
this one: the address to jump to, and the signature text that copy compares
against its own before accepting it.
