<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1013"></a>

# Function `pill_master_renderer::overlay::picking::answer_every_request_with_nothing`

```rust
pub(in overlay::picking) fn answer_every_request_with_nothing(requests: Vec<pill_renderer_api::PickRequest>) -> Vec<pill_renderer_api::PickResult>;
```

Visibility: `{'restricted': {'parent': 942, 'path': '::overlay::picking'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\picking.rs:219`

Answers every request in `requests` with [`PickHit::Nothing`].

A readback that never arrived leaves one answer per request, so no caller
waits for an answer that cannot come.
