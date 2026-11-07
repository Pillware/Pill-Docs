<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5310"></a>

# Function `pill_editor_core::layout::persistence::load_from_path`

```rust
pub(in layout::persistence) fn load_from_path(path: &std::path::Path) -> super::EditorDock;
```

Visibility: `{'restricted': {'parent': 5269, 'path': '::layout::persistence'}}` · Source: `editor\pill_editor_core\src\layout\persistence.rs:91`

Load the dock document at `path`, falling back to the default on any
document this build cannot read.

An older document that [`migrate`](fn.migrate.md#rustdoc-item-5309) has a rule for is upgraded and written
back before it is returned. Any other document this build cannot use - a
schema it does not know, a file that does not parse - is replaced by the
default layout, so the editor always opens.

A replacement is logged once, at info, as `[editor] layout reset`, with the
reason in its own field: the message is the stable token a suite can match,
and the reason is what a person reads.
