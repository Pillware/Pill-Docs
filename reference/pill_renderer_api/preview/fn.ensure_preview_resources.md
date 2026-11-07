<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1620"></a>

# Function `pill_renderer_api::preview::ensure_preview_resources`

```rust
pub fn ensure_preview_resources(world: &mut pill_engine::World);
```

Source: `rendering\pill_renderer_api\src\preview.rs:167`

Inserts [`PreviewRequests`](struct.PreviewRequests.md#rustdoc-item-1521) and [`PreviewResults`](struct.PreviewResults.md#rustdoc-item-201) unless the world already
has them, so a reload keeps the requests and answers already waiting.
