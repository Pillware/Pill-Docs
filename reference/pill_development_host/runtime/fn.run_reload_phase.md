<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4209"></a>

# Function `pill_development_host::runtime::run_reload_phase`

```rust
pub(crate) fn run_reload_phase(host: &mut DevHost) -> Vec<String>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\runtime.rs:3252`

Everything reloading does at a frame boundary, before any system runs:
extension and project reloads, patches, and the managed loader's swap.

Returns the names of the extensions that reloaded. Separate from
[`run_frame_phase`](fn.run_frame_phase.md#rustdoc-item-4208) so a windowed host can reload its renderer between the
two - after the data it draws reloaded, before any system reads it.
