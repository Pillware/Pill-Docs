<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4196"></a>

# Function `pill_development_host::runtime::try_project_fast_path`

```rust
pub(in runtime) fn try_project_fast_path(host: &mut DevHost, may_start: bool);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2469`

Try to deliver a pending project edit by patching, not rebuilding.

This runs at a frame boundary. Reloads are already processed here, before
`process_frame`, so no system is executing while a dispatch slot is written.
A successful patch marks the pending generation handled, which is what skips
the full rebuild. Anything refused falls through to it.
