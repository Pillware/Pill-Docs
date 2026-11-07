<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4198"></a>

# Type alias `pill_development_host::runtime::RegeneratedMirror`

```rust
pub(in runtime) type RegeneratedMirror = (Vec<pill_csharp_bridge::ModuleExposedComponent>, Vec<pill_csharp_bridge::ResolvedMirrorMethod>, Vec<pill_csharp_bridge::ResolvedFieldAccessor>, bool);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2556`

What `regenerate_module_csharp_mirror` hands back. It carries the exposed
component bindings, the resolved mirror methods and heap-field accessors
for the managed method table, and whether the mirror file on disk changed.
