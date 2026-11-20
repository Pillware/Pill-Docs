<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8326"></a>

# Constant `pill_editor_core::preferences::GIZMO_HIDDEN_TYPES_KEY`

```rust
pub const GIZMO_HIDDEN_TYPES_KEY: &str = "gizmo.hidden_types";
```

Source: `editor\pill_editor_core\src\preferences.rs:66`

The preference key the hidden component gizmo types live under.

The value is an array of registered component type names. A type named here
draws no gizmo, which is the per-type switch the Preferences tab offers.
