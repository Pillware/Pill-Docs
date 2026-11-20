<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9064"></a>

# Function `pill_engine_core::services::gizmos::install`

```rust
pub fn install(engine: &mut crate::engine::Engine, chrome: GizmoChrome);
```

Source: `engine\pill_engine_core\src\services\gizmos.rs:760`

Installs the one pass that draws every registered gizmo.

Called by a host, never by a game: an editor passes
[`GizmoChrome::Editor`](enum.GizmoChrome.md#rustdoc-item-9026), a development host [`GizmoChrome::Game`](enum.GizmoChrome.md#rustdoc-item-9027), and a
shipping or web build installs nothing. The pass runs in the post-project
phase, also while editing, and belongs to the engine so no reload retires it.

Installing twice changes nothing: the second call finds the system already
registered.
