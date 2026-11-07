<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-774"></a>

# Function `pill_ui_theme::register::register`

```rust
pub fn register(world: &mut pill_engine_core::World);
```

Source: `ui\pill_ui_theme\src\register.rs:91`

Declare the `.theme` standalone asset and the font asset on `world`.

Call it from the registration of the crate that owns the theme: a project's
`install_with_theme`, or the editor's registration. Registering the same
type from several binaries is supported. The newest live registration
serves the type's import entry points, and an older one drops out when its
binary is gone.
