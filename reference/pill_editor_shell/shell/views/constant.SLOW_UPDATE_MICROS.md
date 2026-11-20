<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-387"></a>

# Constant `pill_editor_shell::shell::views::SLOW_UPDATE_MICROS`

```rust
pub const SLOW_UPDATE_MICROS: u64 = 16_000;
```

Source: `editor\pill_editor_shell\src\shell\views.rs:30`

A shell update slower than this logs its own `[editor] egui frame` line,
besides the 210-frame heartbeat. The limit is one whole 60 Hz frame
(16 milliseconds): a debug build's pass takes several milliseconds, so a
lower limit would log a line every frame. A pass that takes a whole frame
is worth its own record.
