<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5211"></a>

# Function `pill_engine_core::hot_patch::declare_patching_thread`

```rust
pub fn declare_patching_thread();
```

Source: `engine\pill_engine_core\src\hot_patch.rs:620`

Declares the calling thread the only one permitted to rewrite live code.

A host calls this from its frame loop. Idempotent, and cheap enough to call
every frame: one relaxed load in the common case.

Nothing forces a host to call it: a process that never does leaves every
thread allowed to patch, which is what tests and offline tools want.
