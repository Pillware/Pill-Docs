<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-567"></a>

# Function `pill_engine::hot_patch::resolve_hot_function`

```rust
pub fn resolve_hot_function(qualified_name: &str) -> Option<(usize, u64)>;
```

Source: `engine\pill_engine\src\hot_patch.rs:325`

Returns the dispatch address and signature hash of one `#[pill_hot]`
function this artifact declares.

Returns `None` when no `#[pill_hot]` function carries that qualified name.
A host reaches the same answer through the artifact's exported resolver,
not through this function directly.
