<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-863"></a>

# Type alias `pill_engine_core::asset::AssetBindingResult`

```rust
pub type AssetBindingResult<T> = Result<T, AssetBindingError>;
```

Source: `engine\pill_engine_core\src\asset.rs:202`

The result of a binding operation, which can be refused by an occupied name
or a stale handle.
