<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3165"></a>

# Constant `pill_engine_core::component_field::expand::MAX_EXPANDED_ELEMENTS`

```rust
pub const MAX_EXPANDED_ELEMENTS: usize = 64;
```

Source: `engine\pill_engine_core\src\component_field\expand.rs:35`

How many elements of an `array:struct:` field become leaf rows.

A control-point array of a few dozen entries becomes a few dozen rows,
which is what an editor wants to show. A fixed array of thousands would
only make every layout huge, so the editor view stops at this cap. The
declared layout still describes the whole array.
