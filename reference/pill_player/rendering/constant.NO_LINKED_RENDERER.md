<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-136"></a>

# Constant `pill_player::rendering::NO_LINKED_RENDERER`

```rust
pub(in rendering) const NO_LINKED_RENDERER: &str = "this build links no renderer: the project selects no `renderer:`, or its shipping bundle was generated without the rendering feature";
```

Visibility: `{'restricted': {'parent': 137, 'path': '::rendering'}}` · Source: `hosting\pill_player\src\rendering.rs:51`

The message a windowed build reports when it has no renderer to attach.

Both ways to reach this are build decisions rather than runtime failures: a
project whose settings select no `renderer:`, and a shipping bundle
generated without the rendering feature. The message names those two, not
the feature, because the code that reports it is only compiled when that
feature is on.
