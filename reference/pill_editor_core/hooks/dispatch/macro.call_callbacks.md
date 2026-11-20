<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5121"></a>

# Macro `pill_editor_core::hooks::dispatch::call_callbacks`

```rust
macro_rules! call_callbacks {
    ($session:ident, $engine:ident, $event:expr, $kind:ident, $payload:expr) => { ... };
}
```

Visibility: `crate` · Source: `editor\pill_editor_core\src\hooks\dispatch.rs:48`

Calls every live callback of one event with one payload.

This is the one place a plain callback is pulled out of its erased
registry entry, so the pattern and the payload stay next to each other.
Each callback gets a context of its own, because a callback's follow-ups
and notices belong to the drain, not to the callback.
