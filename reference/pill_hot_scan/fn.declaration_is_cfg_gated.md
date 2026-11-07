<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-171"></a>

# Function `pill_hot_scan::declaration_is_cfg_gated`

```rust
pub fn declaration_is_cfg_gated(source: &str, mask: &[bool], declaration_start: usize) -> bool;
```

Source: `hosting\pill_hot_scan\src\lib.rs:816`

Whether a `#[cfg(…)]` sits in the attribute block above this declaration.

The attribute block runs back to the end of the previous item, which is a
`}` or `;` in code - exactly where attributes and doc comments live.

`#[test]` counts as a gate: it expands to `#[cfg(test)]`, so a test
function is absent from every artifact the host loads. A module that keeps
its tests in a file of its own (rather than an inline `mod tests`) puts no
`cfg` in front of them, and registering their addresses would not compile.

`mask` MUST be `code_mask(source)` for this exact `source`, since the end of
the previous item is found through it.
