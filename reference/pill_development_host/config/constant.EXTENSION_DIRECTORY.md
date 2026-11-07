<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-833"></a>

# Constant `pill_development_host::config::EXTENSION_DIRECTORY`

```rust
pub(in config) const EXTENSION_DIRECTORY: &str = "extensions";
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:114`

Workspace-relative directory holding one folder per extension.

Each folder, `extensions/<extension>/`, holds that extension's crates
(`extensions/<extension>/<crate>/`). The workspace manifest globs
`extensions/*/pill_*`, so a module is found by existing rather than by
being listed anywhere.
