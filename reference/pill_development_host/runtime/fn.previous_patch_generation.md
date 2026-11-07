<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4220"></a>

# Function `pill_development_host::runtime::previous_patch_generation`

```rust
pub(in runtime) fn previous_patch_generation(host: &DevHost, function: &str) -> Option<u32>;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:3796`

The generation a rollback naming `previous` resolves to for `function`.

`None` when the function has no recorded generations at all, which is what
a refusal reads as.
