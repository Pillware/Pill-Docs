<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1113"></a>

# Function `pill_csharp_bridge::context::archetype_was_observed`

```rust
pub(crate) fn archetype_was_observed(archetype: pill_engine::archetype::ArchetypeId) -> Option<bool>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\context.rs:414`

Returns whether a validated term has already served this archetype in the
active invocation.

`None` means no managed invocation is active on this thread, which is the
same answer [`access_is_authorized`](fn.access_is_authorized.md#rustdoc-item-1112) gives in that state.
