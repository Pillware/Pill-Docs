<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-452"></a>

# Function `pill_engine::declarations::has_declaration_baseline`

```rust
pub fn has_declaration_baseline() -> bool;
```

Source: `engine\pill_engine\src\declarations.rs:170`

Whether a registration walk is running under a declaration baseline.

Without one, the declaration collections hold everything the process
carries - several images' submissions - so a name can repeat because one
crate was linked into more than one image rather than because two types
share it.
