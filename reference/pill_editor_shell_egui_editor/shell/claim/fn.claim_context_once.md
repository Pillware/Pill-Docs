<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-199"></a>

# Function `pill_editor_shell_egui_editor::shell::claim::claim_context_once`

```rust
pub fn claim_context_once(claimed: &std::sync::atomic::AtomicBool, context: &egui::Context) -> bool;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\claim.rs:93`

Applies the once-per-generation rule to one context.

The flag is a parameter so a test can pass its own. Two tests sharing one
process-wide static would make each other's expectations depend on the
order they run in. Returns `true` when this call did the clearing and
`false` when the flag was already set.
