<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1502"></a>

# Function `pill_csharp_bridge::manifest::intern`

```rust
pub(crate) fn intern(text: &str) -> &'static str;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:746`

Return a `&'static str` equal to `text`. Only the first call for a given
text allocates.
