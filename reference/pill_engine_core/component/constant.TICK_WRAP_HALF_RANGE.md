<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2745"></a>

# Constant `pill_engine_core::component::TICK_WRAP_HALF_RANGE`

```rust
pub(in component) const TICK_WRAP_HALF_RANGE: u32 = _;
```

Visibility: `{'restricted': {'parent': 2746, 'path': '::component'}}` · Source: `engine\pill_engine_core\src\component.rs:44`

Half the tick range, which is where the wrapping comparison stops telling
"ahead" from "behind".

A distance larger than this half is read as a tick in the other direction,
so two ticks more than `u32::MAX / 2` apart cannot be ordered. That is the
limit the wrapping comparison accepts, and it is far longer than any single
frame.
