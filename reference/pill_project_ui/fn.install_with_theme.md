<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-422"></a>

# Function `pill_project_ui::install_with_theme`

```rust
pub fn install_with_theme(engine: &mut pill_engine_core::Engine, install: ThemeInstall);
```

Source: `ui\pill_project_ui\src\lib.rs:476`

Install a project's theme: the code default merged with an optional
`.theme` override, plus the system that re-applies it on a reimport.

A refused override warns, and the code default is used instead. An
`editor/` path is refused, because editor content never reaches a game.

An existing [`GameUi`](struct.GameUi.md#rustdoc-item-305) keeps its context and its textures. The base theme,
the override and the fonts are replaced, and the theme is applied again
only when the merge or the fonts differ from what is already applied.

## Panics

Panics if an override is loaded and `engine` has no asset manager. Every
engine owns one, so this only fires on a broken engine.
