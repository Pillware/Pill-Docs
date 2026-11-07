<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9"></a>

# Function `pill_csharp_bridge::abi::publish_mirror_methods`

```rust
pub fn publish_mirror_methods(mirror_methods: &[super::ResolvedMirrorMethod]);
```

Source: `csharp\pill_csharp_bridge\src\abi.rs:558`

Rebuilds the mirror-method table the managed runtime copies at startup.

[`CsEngineApi::new`](struct.CsEngineApi.md#rustdoc-item-193) calls it when the C# backend starts, and the host calls
it when an extension reloads, so the C# side always resolves trampoline
addresses against the module generations that are currently loaded. A hot
reload gives a module a new image, and therefore new addresses, while a
reloaded module may have added or removed mirrored methods.

## Panics

Panics if the table lock or the graveyard lock was poisoned by a panic on
another thread that held it.
