<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-118"></a>

# Function `pill_player::registration::extension_owner`

```rust
pub fn extension_owner(index: usize) -> pill_engine::SystemOwner;
```

Source: `hosting\pill_player\src\registration.rs:44`

Returns the owner that the extension at `index` registers its systems
under.

`index` counts from zero in load order. With a renderer, its data crate is
first.
