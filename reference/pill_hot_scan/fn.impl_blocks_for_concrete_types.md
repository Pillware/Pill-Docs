<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-167"></a>

# Function `pill_hot_scan::impl_blocks_for_concrete_types`

```rust
pub fn impl_blocks_for_concrete_types(source: &str, mask: &[bool]) -> Vec<ImplBlock>;
```

Source: `hosting\pill_hot_scan\src\lib.rs:698`

Every `impl` block in the file that names one concrete type.

Both inherent blocks (`impl Spline`) and non-generic trait blocks
(`impl Drawable for Spline`) qualify. Each has exactly one receiver type and
one address per method, which is what a patch needs.

Generic blocks (`impl<T> Foo<T>`, `impl Trait for Foo<T>`) are skipped: a
generic has one instantiation per set of type arguments, so there is no
single address to redirect. A method inside one has no address a patch could
name, so the all-functions scan leaves it out too.

`mask` MUST be `code_mask(source)`, since it is indexed by the same byte
offsets.
