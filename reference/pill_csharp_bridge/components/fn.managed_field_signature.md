<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-892"></a>

# Function `pill_csharp_bridge::components::managed_field_signature`

```rust
pub(in components) fn managed_field_signature(component: &super::manifest::ManagedManifestEntry) -> u64;
```

Visibility: `{'restricted': {'parent': 781, 'path': '::components'}}` · Source: `csharp\pill_csharp_bridge\src\components.rs:444`

Hash of the public fields a managed mirror declares, in the form
[`generated_field_signature`](../mirror_naming/fn.generated_field_signature.md#rustdoc-item-891)
produces for the native side.

The generated alignment pad is private, and the generator does not list it
as a data field, so it is left out.
