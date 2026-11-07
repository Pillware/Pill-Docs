<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-491"></a>

# Function `pill_engine::declarations::register_all_assets`

```rust
pub fn register_all_assets(world: &mut crate::World);
```

Source: `engine\pill_engine\src\declarations.rs:235`

Declares every asset type this artifact declares.

Called by the artifact entry points after [`register_all_resources`](fn.register_all_resources.md#rustdoc-item-490). An
imported asset's declaration also records the type's import entry points,
which live in this image, so the declaration is what keeps the world's
import registry pointing at code that is still mapped.
