<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-419"></a>

# Type alias `pill_csharp_bridge::backend::PollReloadFn`

```rust
pub(in backend) type PollReloadFn = extern "System" fn () -> u8;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:167`

Signature polling the collectible loader for a new project assembly. The
return value is one of the `POLL_*` codes above.
