<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-839"></a>

# Constant `pill_development_host::config::RUNTIME_CRATE_DIRECTORY`

```rust
pub(in config) const RUNTIME_CRATE_DIRECTORY: &str = "runtime";
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:139`

Folder, inside an extension's `modules/` folder, holding the extension
crate. The master renderer groups two crates under it instead, one per
child directory (`data` and `gpu`).
