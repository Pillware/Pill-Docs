<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-571"></a>

# Constant `pill_editor_core::cadence::IDLE_POLL`

```rust
pub const IDLE_POLL: std::time::Duration = _;
```

Source: `editor\pill_editor_core\src\cadence.rs:45`

How long an idle editor sleeps between frames.

A change the host makes on one of its own threads - a notice, a build
finishing, a console line - cannot wake the waiting loop the way a window
event does. The loop wakes on this timer instead and draws the change, so
this value is the Console tab's worst-case delay. Input still wakes the
loop sooner.
