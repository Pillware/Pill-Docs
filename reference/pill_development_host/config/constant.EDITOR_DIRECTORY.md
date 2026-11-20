<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-837"></a>

# Constant `pill_development_host::config::EDITOR_DIRECTORY`

```rust
pub(in config) const EDITOR_DIRECTORY: &str = "editor";
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:130`

Workspace-relative directory holding the editor's own crates: the editor
executables, the shared editor core and the editor modules.

An editor module is a crate directly under it whose manifest tags the editor
frontend it belongs to (`editor_frontend` under `[package.metadata.pill]`);
the executables and the core carry no tag. Every editor session of that
frontend loads it after the extensions' editor crates, and no game build
compiles it. Its generated wrapper is written into this directory's
[`GENERATED_DIRECTORY`](constant.GENERATED_DIRECTORY.md#rustdoc-item-836), which the `editor/generated/*` workspace glob finds.
