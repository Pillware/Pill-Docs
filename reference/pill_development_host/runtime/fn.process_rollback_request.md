<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4219"></a>

# Function `pill_development_host::runtime::process_rollback_request`

```rust
pub(in runtime) fn process_rollback_request(host: &mut DevHost);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:3709`

Honour a pending request, if one was dropped.

Called at the frame boundary, where no system is executing. That is the
same guarantee a patch install relies on, and it is a requirement rather
than a convenience for the prologue route, which rewrites live code.
