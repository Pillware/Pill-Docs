<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1017"></a>

# Function `pill_master_renderer::overlay::picking::answer_every_request_with_nothing`

```rust
pub(in overlay::picking) fn answer_every_request_with_nothing(requests: Vec<pill_renderer_api::PickRequest>) -> Vec<pill_renderer_api::PickResult>;
```

Visibility: `{'restricted': {'parent': 946, 'path': '::overlay::picking'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\picking.rs:219`

Answers every request in `requests` with [`PickHit::Nothing`].

A readback that never arrived leaves one answer per request, so no caller
waits for an answer that cannot come.
