<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7529"></a>

# Function `pill_editor_core::menubar::play_title`

```rust
pub fn play_title(run_mode: pill_engine::RunMode) -> &'static str;
```

Source: `editor\pill_editor_core\src\menubar.rs:432`

The play control's label for a run mode: what pressing it does.

The toolbar's first button and the View menu's row share it, so both read
`Play` while the editor is being edited and `Stop` while a game runs.
