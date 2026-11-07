<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-211"></a>

# Function `pill_editor_shell_egui_editor::shell::toasts::push_notices`

```rust
pub fn push_notices(state: &mut EguiShellState, notices: &EditorNotices);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\toasts.rs:52`

Queues every notice the stack has not shown yet as a toast.

The newest notice is drawn at the top of the stack, so the latest activity
is the first row a reader sees.
