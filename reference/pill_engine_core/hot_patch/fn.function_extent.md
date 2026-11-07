<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5239"></a>

# Function `pill_engine_core::hot_patch::function_extent`

```rust
pub fn function_extent(address: usize) -> Option<(usize, usize)>;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:693`

Returns where the function containing `address` begins and how long it is.

The answer is read from the running image's exception directory, so it is
the linker's own record rather than a guess. The result is `None` when the
address has no entry, which is the case for a leaf function small enough
that Windows allows it to omit its unwind data. Those are exactly the
functions too short to overwrite safely, so a missing entry means "refuse",
never "assume it is long enough".
