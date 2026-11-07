<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1213"></a>

# Function `pill_core::profiling::enabled::init`

```rust
pub fn init();
```

Source: `engine\pill_core\src\profiling.rs:133`

Creates the shared Tracy client handle.

Safe to call more than once. Later calls reuse the handle made by the
first.
