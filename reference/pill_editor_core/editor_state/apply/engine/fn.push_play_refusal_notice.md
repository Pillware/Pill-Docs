<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2457"></a>

# Function `pill_editor_core::editor_state::apply::engine::push_play_refusal_notice`

```rust
pub(in editor_state::apply::engine) fn push_play_refusal_notice(world: &mut pill_engine::World, reason: &str);
```

Visibility: `{'restricted': {'parent': 2458, 'path': '::editor_state::apply::engine'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\engine.rs:314`

Adds one error notice for a refused Play, so the person sees the reason as
a toast instead of only in the Console.
