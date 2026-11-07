<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-173"></a>

# Function `pill_hot_scan::declaration_takes_receiver`

```rust
pub fn declaration_takes_receiver(source: &str, mask: &[bool], declaration_start: usize) -> bool;
```

Source: `hosting\pill_hot_scan\src\lib.rs:857`

Whether the declaration beginning at `fn` takes a receiver.

`mask` MUST be `code_mask(source)` for this exact `source`, since the
parameter list is found through it.
