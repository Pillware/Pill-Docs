<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11002"></a>

# Type alias `pill_editor_core::tools::ToolElementReportFn`

```rust
pub type ToolElementReportFn = fn (entity: pill_engine::Entity, world: &pill_engine::World, out: &mut Vec<ToolElement>);
```

Source: `editor\pill_editor_core\src\tools.rs:354`

Fills `out` with the elements `entity` has, as `world` describes it.
