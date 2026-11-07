<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4977"></a>

# Function `pill_editor_core::inspector::entity_candidates`

```rust
pub fn entity_candidates(hierarchy_entries: &[crate::editor_state::EntityListEntry]) -> Vec<&crate::editor_state::EntityListEntry>;
```

Source: `editor\pill_editor_core\src\inspector.rs:1046`

The entities an entity row's picker offers: every entity the Hierarchy
lists, in its order.

The row's own entity stays in the list. A component that references its own
entity is odd but harmless, and hiding it would make the picker disagree
with the Hierarchy for a rule the user could not see.
