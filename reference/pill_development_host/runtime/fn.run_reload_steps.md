<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4206"></a>

# Function `pill_development_host::runtime::run_reload_steps`

```rust
pub(in runtime) fn run_reload_steps(host: &mut DevHost) -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2788`

Run every reload step of one frame. That covers the extensions' own
reloads, the per-function fast paths and a pending project reload. It also
covers suspending a subject left on a replaced component layout, and the
analytics line that reports all of it.

Returns the names of the extensions that reloaded, in load order, for a
windowed host's renderer step. A step that owes a background build leaves
the rest to a later frame instead of blocking this one.
