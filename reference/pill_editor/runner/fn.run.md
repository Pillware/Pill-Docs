<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1145"></a>

# Function `pill_editor::runner::run`

```rust
pub fn run(log_buffer: pill_core::telemetry::capture::LogBuffer) -> Result<(), crate::frontend::EditorError>;
```

Source: `editor\pill_editor\src\runner\mod.rs:304`

Run the editor until the last window closes.

`log_buffer` is the console's capture ring: every frame the editor folds
the lines it has not seen into the Console tab's history.

## Errors

Returns [`EditorError::EventLoopCreation`](../frontend/enum.EditorError.md#rustdoc-item-254) when the platform refuses the
event loop, and [`EditorError::EventLoopRun`](../frontend/enum.EditorError.md#rustdoc-item-256) when running it fails.
