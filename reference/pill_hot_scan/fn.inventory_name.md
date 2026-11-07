<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-211"></a>

# Function `pill_hot_scan::inventory_name`

```rust
pub fn inventory_name(crate_name: &str, module_segments: &[String], function: &HotFunction) -> String;
```

Source: `hosting\pill_hot_scan\src\lib.rs:1326`

The name one function is registered and looked up under.

Three shapes, one per kind of function:

- `crate::module::free_function`
- `crate::module::Type::method` for an inherent method
- `crate::module::<Type as Trait>::method` for a trait method

The trait form prevents collisions. A type may carry an inherent `draw` and
a trait `draw`, and two traits may each define `draw` for it, so naming a
trait method through its type alone would collide with the others.

This is the single definition both sides use: the build script records
addresses under these names, and the host asks for them under these names.
