<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-490"></a>

# Function `pill_engine::declarations::register_all_resources`

```rust
pub fn register_all_resources(world: &mut crate::World);
```

Source: `engine\pill_engine\src\declarations.rs:213`

Declares every resource this artifact declares.

Called by the artifact entry points after [`register_all_systems`](fn.register_all_systems.md#rustdoc-item-489), so a
first load, every reload and a statically linked build all declare the same
types before the artifact's own `register` runs. That ordering is what lets
`insert_resource` in `register` find the declaration already in place: an
inserted value replaces a stored one, it does not declare the type.

Declarations are sorted by type name. Unlike systems they have no execution
order, and the sort keeps the claim order - and so the order any claim error
is recorded in - the same in every build.
