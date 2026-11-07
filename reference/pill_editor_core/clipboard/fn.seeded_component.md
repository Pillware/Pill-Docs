<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1168"></a>

# Function `pill_editor_core::clipboard::seeded_component`

```rust
pub(in clipboard) fn seeded_component(component: &SeededComponent, skipped: &mut Vec<String>) -> crate::editor_state::ComponentSeed;
```

Visibility: `{'restricted': {'parent': 1154, 'path': '::clipboard'}}` · Source: `editor\pill_editor_core\src\clipboard.rs:534`

Turns one payload component into the seed a create rebuilds.

A field whose token does not parse is left out and named in `skipped` as
`type.field`, the same form the component paste uses. The new entity then
gets the component's default for that field, and a notice names what was
skipped.
