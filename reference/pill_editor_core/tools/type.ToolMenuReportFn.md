<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11010"></a>

# Type alias `pill_editor_core::tools::ToolMenuReportFn`

```rust
pub type ToolMenuReportFn = fn (entity: pill_engine::Entity, kind: &str, selected: &[u64], world: &pill_engine::World, out: &mut Vec<ElementMenuEntry>);
```

Source: `editor\pill_editor_core\src\tools.rs:451`

Fills `out` with the menu rows the tool adds for the selection.

`selected` holds the ids the element selection is on, in selection order,
so a row can depend on what is selected.
