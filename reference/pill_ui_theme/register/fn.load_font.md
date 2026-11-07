<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-777"></a>

# Function `pill_ui_theme::register::load_font`

```rust
pub fn load_font(world: &mut pill_engine_core::World, path: &str, scope: ThemePathScope) -> Result<LoadedFont, String>;
```

Source: `ui\pill_ui_theme\src\register.rs:136`

Import the font a theme layer named and return its handle.

`path` is below the project's asset directory and follows the same scope
rule as [`load_overrides`](fn.load_overrides.md#rustdoc-item-776). A font file with no `.meta` gets one when its
directory can be written, so a font named by the code defaults is usable
from the first run.

## Errors

The scope rule's message. Loading also fails when [`register`](fn.register.md#rustdoc-item-774) was not
called, which leaves no asset types registered, or when the world has no
`AssetManager`. The file itself can fail: it could not be read or is empty,
or the path names an asset of another type. A font whose guid another
loaded font already owns is refused as well.
