<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-835"></a>

# Constant `pill_development_host::config::EXTENSION_DIRECTORY`

```rust
pub(in config) const EXTENSION_DIRECTORY: &str = "extensions";
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:115`

Workspace-relative directory holding one folder per extension.

Each folder, `extensions/<extension>/`, holds the extension's crates under
its `modules/` folder (`modules/runtime` and `modules/editor`), beside the
runnable examples under `examples/` and the host-written wrappers under
`generated/`. The workspace manifest globs `extensions/*/modules/*`, so a
module is found by existing rather than by being listed anywhere.
