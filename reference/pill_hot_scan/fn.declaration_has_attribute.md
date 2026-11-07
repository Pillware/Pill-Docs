<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-172"></a>

# Function `pill_hot_scan::declaration_has_attribute`

```rust
pub fn declaration_has_attribute(source: &str, mask: &[bool], declaration_start: usize, attribute: &str) -> bool;
```

Source: `hosting\pill_hot_scan\src\lib.rs:828`

Whether `attribute` appears in the block above this declaration.

The search starts at the end of the previous item, a `}` or `;` in code, so
only the attributes and doc comments between the two items are read.

`mask` MUST be `code_mask(source)` for this exact `source`, since the end of
the previous item is found through it.
