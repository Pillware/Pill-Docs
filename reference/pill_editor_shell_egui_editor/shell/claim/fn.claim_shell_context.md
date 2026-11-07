<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-196"></a>

# Function `pill_editor_shell_egui_editor::shell::claim::claim_shell_context`

```rust
pub fn claim_shell_context(session: &mut pill_editor_core::session::EguiShellState) -> Option<pill_editor_core::session::ContextClaim>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\claim.rs:70`

Claims every egui context the session owns for this shell generation.

`run_frame` calls it before the egui pass, so no value the previous
generation left behind is still there when the new generation first
draws. Returns what was cleared on that first frame, and `None` on every
later frame of the generation.
