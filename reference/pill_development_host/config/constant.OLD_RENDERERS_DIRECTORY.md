<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-841"></a>

# Constant `pill_development_host::config::OLD_RENDERERS_DIRECTORY`

```rust
pub(in config) const OLD_RENDERERS_DIRECTORY: &str = "rendering";
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:146`

Folder under `extensions/` holding the older renderer crates. No build
uses them, so the extension index never reads it.
