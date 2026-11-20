<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3316"></a>

# Function `pill_development_host::native_binary::inspect`

```rust
pub(crate) fn inspect(path: &std::path::Path) -> Option<BinaryInspection>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\native_binary.rs:252`

Reads what `path` needs and exports, in whichever native format it is.

Returns `None` for a file this reader does not recognise, which includes
every non-image file and every image whose headers cannot be read.
