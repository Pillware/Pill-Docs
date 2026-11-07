<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-355"></a>

# Function `pill_engine_macros::flattened_path`

```rust
pub(crate) fn flattened_path(path: &syn::Path, separator: &str) -> String;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:1312`

Joins a path's segments into one string, with `separator` between them.

The result is a wire format in two places. One is the `struct:` tag a
component field's nested type carries. The other is the descriptor name of a
mirrored declaration, which the C# side matches against the artifact
registries. The same function also builds the name of the synthetic struct a
mirrored declaration parses through, where only uniqueness matters. Sharing
one implementation keeps those spellings from drifting apart.
