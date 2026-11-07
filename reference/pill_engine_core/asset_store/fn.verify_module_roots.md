<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2401"></a>

# Function `pill_engine_core::asset_store::verify_module_roots`

```rust
pub fn verify_module_roots();
```

Source: `engine\pill_engine_core\src\asset_store.rs:393`

Assert every declared module root still holds its resources.

A module declares its roots while its init runs, and the host runs init
inside `catch_unwind`. This re-checks the roots outside that, so a file
that went missing stops the process with the module and the path in the
message. It also refuses two roots of one module that hold a file at the
same relative path, which the editor would show twice under two keys.

## Panics

Panics when a declared directory or required file is missing, or when two
of a module's roots claim one path.
