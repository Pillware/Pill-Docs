<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1111"></a>

# Function `pill_csharp_bridge::context::record_observed_archetype`

```rust
pub(crate) fn record_observed_archetype(archetype: pill_engine::archetype::ArchetypeId);
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\context.rs:401`

Records that a validated term served an archetype to managed code during
the active invocation.

The chunk callbacks call this after every successful component or entity
lookup. The entity path may then serve this archetype's entity column later
in the same invocation.
