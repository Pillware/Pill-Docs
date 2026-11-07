<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-816"></a>

# Function `pill_development_host::build_runner::forget_batch_validation`

```rust
pub(crate) fn forget_batch_validation(module_name: &str);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:2156`

Drops `module_name`'s batch token, so its next load builds instead of
skipping.

The renderer's rebuild request uses this. A reloaded data crate makes the
artifact the batch built stale even though no renderer source changed.
