<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4211"></a>

# Function `pill_development_host::runtime::guid_text`

```rust
pub(in runtime) fn guid_text(guid: Option<pill_engine::AssetGuid>) -> String;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:3332`

A guid as its 32 hexadecimal digits, or `none` when the asset carries none
(a path registered under a name alone, with no metadata file).
