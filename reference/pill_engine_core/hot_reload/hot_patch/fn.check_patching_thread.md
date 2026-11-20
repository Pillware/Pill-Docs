<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6765"></a>

# Function `pill_engine_core::hot_reload::hot_patch::check_patching_thread`

```rust
pub(in hot_reload::hot_patch) fn check_patching_thread() -> Result<(), String>;
```

Visibility: `{'restricted': {'parent': 6553, 'path': '::hot_reload::hot_patch'}}` · Source: `engine\pill_engine_core\src\hot_reload\hot_patch.rs:633`

Refuses a patch attempted from anywhere but the declared thread.

## Errors

Returns the message to refuse with. Undeclared means unrestricted.
