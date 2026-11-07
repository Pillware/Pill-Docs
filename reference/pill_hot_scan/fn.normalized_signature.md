<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-170"></a>

# Function `pill_hot_scan::normalized_signature`

```rust
pub fn normalized_signature(source: &str, mask: &[bool], declaration_start: usize) -> String;
```

Source: `hosting\pill_hot_scan\src\lib.rs:789`

The declaration from `fn` up to the body, with whitespace collapsed.

Must match, byte for byte, what a crate's build script records for the same
function - the two are compared to decide whether a patch may overwrite live
code. Both start at the `fn` keyword and collapse whitespace, so `fn  f( a :
u8 )` and `fn f(a: u8)` agree while `fn f(a: u16)` does not.

`mask` MUST be `code_mask(source)` for this exact `source`, since the end of
the declaration is found through it.
