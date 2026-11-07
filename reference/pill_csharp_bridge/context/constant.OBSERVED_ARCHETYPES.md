<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1033"></a>

# Constant `pill_csharp_bridge::context::OBSERVED_ARCHETYPES`

```rust
pub(in context) const OBSERVED_ARCHETYPES: $crate::thread::LocalKey<std::cell::RefCell<std::collections::HashSet<pill_engine::archetype::ArchetypeId>>> = _;
```

Visibility: `{'restricted': {'parent': 1030, 'path': '::context'}}` · Source: `csharp\pill_csharp_bridge\src\context.rs:54`

Archetypes this invocation has already served to managed code.

Only these are answered by the entity path (`mode == 2` of the
archetype chunk callback). Managed code reaches an archetype through a
validated component or entity lookup first; without that requirement,
the entity path could enumerate the component sets of the whole world.
