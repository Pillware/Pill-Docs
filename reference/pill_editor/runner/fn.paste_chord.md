<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1258"></a>

# Function `pill_editor::runner::paste_chord`

```rust
pub(in runner) fn paste_chord(events: &[pill_engine_core::InputEvent]) -> bool;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3296`

Whether one frame's shell events carry a paste chord.

The clipboard commands stay un-global while a widget holds the focus, so
this is what makes Ctrl+V reach a text field: the chord is recognised here
and the OS clipboard's text rides the frame's input.
