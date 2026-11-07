<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1913"></a>

# Constant `pill_development_host::hot_patch::compile::TWO_TOKEN_FLAGS`

```rust
pub(in hot_patch::compile) const TWO_TOKEN_FLAGS: &[&str] = _;
```

Visibility: `{'restricted': {'parent': 1910, 'path': '::hot_patch::compile'}}` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:57`

Flags whose value is the next token (`-C` `opt-level=0`), so the parser must
take two tokens to keep the flag and its value together.
