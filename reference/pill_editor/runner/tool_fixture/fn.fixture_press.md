<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1505"></a>

# Function `pill_editor::runner::tool_fixture::fixture_press`

```rust
pub(in runner::tool_fixture) fn fixture_press(entity: pill_engine_core::Entity, element: u64, click: pill_editor_core::editor_state::SelectionClick, selected: &[u64], _world: &pill_engine_core::World) -> tools::PressResponse;
```

Visibility: `{'restricted': {'parent': 1296, 'path': '::runner::tool_fixture'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:597`

What a press on a fixture point means.

The fixture demonstrates both answers a tool can give about the editor's own
click rule:

- a **plain press on a point that is already selected is taken over**: the
  fixture logs it and answers [`tools::PressResponse::Consume`], so the
  selection stays exactly as it was;
- a **Ctrl press on a point that is already selected removes it**: the
  fixture answers [`tools::PressResponse::Select`] with the rest of the
  selection, which is the tool's own toggle rule rather than the editor's
  add-to-selection one.

Every other press is the editor's.
