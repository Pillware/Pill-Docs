<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5315"></a>

# Function `pill_editor_core::layout::persistence::editor_state_directory`

```rust
pub(in layout::persistence) fn editor_state_directory() -> std::path::PathBuf;
```

Visibility: `{'restricted': {'parent': 5269, 'path': '::layout::persistence'}}` · Source: `editor\pill_editor_core\src\layout\persistence.rs:243`

The per-user directory that editor state belongs in.

Windows: `%LOCALAPPDATA%`, or the temp directory when it is not set.
Elsewhere: `$XDG_STATE_HOME`, then `~/.local/state` when that is unset (as
the XDG base directory spec says), then the temp directory when `$HOME` is
unset too.

A browser has no environment and no filesystem, so this function is
compiled out there. The web posture answers a fixed relative directory, and
every load fails into the default dock.
