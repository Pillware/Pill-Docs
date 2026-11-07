<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1522"></a>

# Function `pill_master_renderer_data::config::post_processing::lottes_bc`

```rust
pub(in config::post_processing) fn lottes_bc(contrast: f32, shoulder: f32, hdr_max: f32, mid_grey_in: f32, mid_grey_out: f32) -> (f32, f32);
```

Visibility: `{'restricted': {'parent': 1483, 'path': '::config::post_processing'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\post_processing\mod.rs:329`

Solve the two constants that define the shape of Lottes' tonemap.

`b` and `c` are solved rather than authored: an artist says where mid grey
should be on the display and how much highlight the display has to fit, and
these two follow. See Tim Lottes' GDC 2016 talk on HDR color pipelines; the
fragment shader's own `lottes` function evaluates the curve these place.
