<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-425"></a>

# Function `pill_project_ui::resolve_fonts`

```rust
pub(crate) fn resolve_fonts(world: &mut pill_engine_core::World, theme: &Theme) -> ResolvedFonts;
```

Visibility: `crate` · Source: `ui\pill_project_ui\src\lib.rs:560`

Resolve a theme's font paths through the project's asset store.

A refused font warns, and its family falls back to the built-in one. The
other families and the theme's own values still apply.
