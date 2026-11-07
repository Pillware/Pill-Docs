<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4448"></a>

# Function `pill_development_host::watchers::shared::is_relevant_path`

```rust
pub(in watchers::shared) fn is_relevant_path(path: &std::path::Path, watch_root: &std::path::Path) -> bool;
```

Visibility: `{'restricted': {'parent': 4377, 'path': '::watchers::shared'}}` · Source: `hosting\pill_development_host\src\watchers\shared.rs:184`

Whether a changed absolute path should start a rebuild.

Both sides are turned into their real paths first, so a symlinked directory
cannot pass events from outside the watch tree. The remaining rules are
then applied to the relative path. A deleted path resolves through its
nearest ancestor that still exists (see
[`canonicalize_through_existing_ancestor`](fn.canonicalize_through_existing_ancestor.md#rustdoc-item-4447)), because a file that was just
removed cannot be resolved at all.
