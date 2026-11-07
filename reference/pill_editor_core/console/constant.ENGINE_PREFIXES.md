<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1959"></a>

# Constant `pill_editor_core::console::ENGINE_PREFIXES`

```rust
pub const ENGINE_PREFIXES: [&str; 3] = _;
```

Source: `editor\pill_editor_core\src\console.rs:45`

The prefixes the engine's own code logs under.

The engine's crates are all named `pill_*`, and its tracing roots are
`engine::…` and `profile::…`. A target is split at its first `::`, and the
first part is matched against these prefixes. So
`pill_master_renderer_data::scene` and `pill_engine::asset::AssetManager`
are the engine's, while a project's `circus_demo::game` is the game's.

The rule has one edge case: a project crate whose name starts with `pill_`
is filed as the engine's, exactly as a crate named `engine_tools` is filed
by the `engine` prefix. That is a name collision, not a classification
error, and keeping the prefixes in one list makes it easy to see.
