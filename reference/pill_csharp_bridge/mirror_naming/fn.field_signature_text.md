<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1742"></a>

# Function `pill_csharp_bridge::mirror_naming::field_signature_text`

```rust
pub(crate) fn field_signature_text(declared_fields: Vec<(usize, String, usize)>) -> String;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\mirror_naming.rs:74`

Turns `(offset, name, size)` triples into the signature text
`Name@offset:size|...`, sorted by offset so both sides produce the same
string even when they list the fields in different orders.
