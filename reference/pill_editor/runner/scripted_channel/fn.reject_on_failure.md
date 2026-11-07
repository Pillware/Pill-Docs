<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1070"></a>

# Function `pill_editor::runner::scripted_channel::reject_on_failure`

```rust
pub(in runner::scripted_channel) fn reject_on_failure(line: &str, outcome: Result<(), String>);
```

Visibility: `{'restricted': {'parent': 1069, 'path': '::runner::scripted_channel'}}` · Source: `editor\pill_editor\src\runner\scripted_channel.rs:58`

Refuses a failed scripted step through [`reject_scripted_command`](fn.reject_scripted_command.md#rustdoc-item-1068).

A handler that answers `Result<(), String>` fails for a reason about the
line itself: a handle that resolves to nothing, a field that is not
editable, or a value the field's kind cannot read. Neither this function
nor [`reject_scripted_command`](fn.reject_scripted_command.md#rustdoc-item-1068) takes the window, so an arm of
[`EditorWindow::run_scripted`](../editor_window/struct.EditorWindow.md#rustdoc-item-689) can pass a handler's result here without
borrowing the window a second time.
