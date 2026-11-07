<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2333"></a>

# Function `pill_development_host::hot_patch::worker::build_body`

```rust
pub(in hot_patch::worker) fn build_body(body: &PreparedBody) -> Result<BuiltBody, super::PatchRefusal>;
```

Visibility: `{'restricted': {'parent': 2334, 'path': '::hot_patch::worker'}}` · Source: `hosting\pill_development_host\src\hot_patch\worker.rs:152`

Runs the replayed compiler over one body and loads what it produces.

## Errors

`failure_code::COMPILE` when the compiler cannot be started or rejects the
generated source, and `failure_code::LOAD` when the produced library cannot
be loaded into the process.
