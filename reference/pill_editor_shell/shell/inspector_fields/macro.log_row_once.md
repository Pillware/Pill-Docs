<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-676"></a>

# Macro `pill_editor_shell::shell::inspector_fields::log_row_once`

```rust
macro_rules! log_row_once {
    ($logged:expr, $flag:expr, $type_name:expr, $kind:literal, $($field:tt)*) => { ... };
}
```

Visibility: `crate` · Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:120`

Logs one drawn Inspector row's line, once per row.

The row's own memory is the gate: its place in the session's cached model
already identifies it, so nothing has to be keyed or allocated. It is a
macro rather than a function because the log fields are typed, and a
`pixels` number and a `text` string must reach the log as themselves.
