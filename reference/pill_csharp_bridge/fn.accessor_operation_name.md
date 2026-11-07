<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2141"></a>

# Function `pill_csharp_bridge::accessor_operation_name`

```rust
pub fn accessor_operation_name(field_name: &str, operation: &str) -> String;
```

Source: `csharp\pill_csharp_bridge\src\lib.rs:179`

Returns the name a generated `MirrorMethods.Resolve` call and the host's
accessor rows both use for one operation on a heap field. Writing it in
one place keeps the codegen (which writes it into C#) and the row builder
(which turns it into a table row) from drifting apart. `operation` is
`view`, `resize`, `set`, `item`, `set_item`, or `push`.
