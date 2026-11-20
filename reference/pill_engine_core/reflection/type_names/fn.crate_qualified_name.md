<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7577"></a>

# Function `pill_engine_core::reflection::type_names::crate_qualified_name`

```rust
pub fn crate_qualified_name(type_name: &str) -> std::borrow::Cow<'_, str>;
```

Source: `engine\pill_engine_core\src\reflection\type_names.rs:79`

`type_name` with every path in it written as `<crate>::<last segment>`,
and `pill_engine_core` written as `pill_engine`.

`pill_spline::component::Spline` gives `pill_spline::Spline`, and
`alloc::vec::Vec<pill_spline::component::Spline>` gives
`alloc::Vec<pill_spline::Spline>`. A path of one or two segments only has
its crate rewritten when it is the engine core's. Borrows when nothing
changes.
