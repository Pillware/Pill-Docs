<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2296"></a>

# Constant `pill_editor_core::drain::HOOK_ROUNDS_MAX`

```rust
pub(in drain) const HOOK_ROUNDS_MAX: usize = 4;
```

Visibility: `{'restricted': {'parent': 2297, 'path': '::drain'}}` · Source: `editor\pill_editor_core\src\drain.rs:64`

How many rounds of callback-queued work one drain applies.

A callback that answers a difference it caused itself would otherwise keep
producing work for the next round; the bound ends that instead of looping
for the frame. Four rounds is far more than an honest chain needs.
