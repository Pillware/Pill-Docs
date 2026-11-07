<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-835"></a>

# Constant `pill_development_host::config::EDITOR_CRATE_SUFFIX`

```rust
pub(crate) const EDITOR_CRATE_SUFFIX: &str = "_editor";
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:123`

Suffix of an extension folder's editor crate. Folder `<extension>` holds
its editor part in `<extension>/<extension>_editor/`; only an editor host
loads it, after the folder's runtime crates, and no other build sees it.
