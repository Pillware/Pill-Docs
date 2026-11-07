<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-571"></a>

# Function `pill_engine::hot_patch::functions_with_known_extent`

```rust
pub fn functions_with_known_extent() -> (usize, usize);
```

Source: `engine\pill_engine\src\hot_patch.rs:267`

Returns how many of this artifact's registered functions have a known
extent, with the total, as `(known, total)`.

This is diagnostic. A prologue patch can only overwrite a function whose
length the exception directory records, so this pair says how much of an
artifact that route can reach at all. Off Windows x86-64 nothing records a
length, so `known` is always zero there.
