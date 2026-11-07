<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-594"></a>

# Constant `pill_master_renderer::preview::MESH_BUDGET_BYTES`

```rust
pub(in preview) const MESH_BUDGET_BYTES: u64 = _;
```

Visibility: `{'restricted': {'parent': 592, 'path': '::preview'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\preview.rs:63`

How many GPU bytes the decoded mesh files may hold.

A mesh is far smaller than a texture, so the same limit covers a whole
browsing session.
