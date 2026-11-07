<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1142"></a>

# Function `pill_editor::runner::no_overlay_requested`

```rust
pub(in runner) fn no_overlay_requested() -> bool;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:223`

Whether [`NO_OVERLAY_ENV`](constant.NO_OVERLAY_ENV.md#rustdoc-item-1120) asks for the window-surface posture.

As with the continuous-redraw switch, any value except an empty string or
`0` turns this on, so `PILL_EDITOR_NO_OVERLAY=1` in a shell is enough.
