<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-195"></a>

# Static `pill_editor_shell::shell::claim::CONTEXT_CLAIMED`

```rust
pub(in shell::claim) static CONTEXT_CLAIMED: std::sync::atomic::AtomicBool = _;
```

Visibility: `{'restricted': {'parent': 197, 'path': '::shell::claim'}}` · Source: `editor\pill_editor_shell\src\shell\claim.rs:58`

Whether this shell generation has cleared egui's temporary data yet.

The flag lives in the module's own image, so a reloaded shell always
starts from `false`. That is what makes the claim run exactly once per
generation.
