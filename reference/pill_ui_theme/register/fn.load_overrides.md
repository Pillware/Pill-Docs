<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-776"></a>

# Function `pill_ui_theme::register::load_overrides`

```rust
pub fn load_overrides(world: &mut pill_engine_core::World, path: &str, scope: ThemePathScope) -> Result<pill_engine_core::Handle<crate::overrides::ThemeOverrides>, String>;
```

Source: `ui\pill_ui_theme\src\register.rs:107`

Import the `.theme` file at `path` and return its handle.

`path` is below the project's asset directory; `scope` decides whether a
game or an editor layer may name it.

## Errors

The scope rule's message, or a message saying the world has no
`AssetManager`. The file itself can also fail: it could not be read, is not
a theme file, or does not fit the override document. A file whose guid
already belongs to another loaded theme is refused too.
