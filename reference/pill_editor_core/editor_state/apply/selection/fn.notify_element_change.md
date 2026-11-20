<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2461"></a>

# Function `pill_editor_core::editor_state::apply::selection::notify_element_change`

```rust
pub(in editor_state::apply::selection) fn notify_element_change(world: &pill_engine::World, previous: &ElementSelection);
```

Visibility: `{'restricted': {'parent': 2463, 'path': '::editor_state::apply::selection'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\selection.rs:252`

Tells the active tool that the element selection moved.

Every arm that can change the element slot calls this with the slot as it
was, so a tool hears about an undo, a marquee and a scripted command the
same way it hears about a click: one rule, whatever the source.
