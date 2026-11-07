<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-652"></a>

# Macro `pill_editor_shell_egui_editor::shell::inspector_fields::log_row_once`

```rust
macro_rules! log_row_once {
    ($logged:expr, $flag:expr, $type_name:expr, $kind:literal, $($field:tt)*) => { ... };
}
```

Visibility: `crate` · Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_fields.rs:104`

Logs one drawn Inspector row's line, once per row.

The row's own memory is the gate: its place in the session's cached model
already identifies it, so nothing has to be keyed or allocated. It is a
macro rather than a function because the log fields are typed, and a
`pixels` number and a `text` string must reach the log as themselves.
