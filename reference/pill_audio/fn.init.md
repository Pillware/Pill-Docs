<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-724"></a>

# Function `pill_audio::init`

```rust
pub fn init(engine: &mut Engine) -> u32;
```

Source: `extensions\pill_audio\pill_audio\src\pill_audio.rs:224`

The artifact's one-time entry point.

The module keeps nothing that has to run once: everything it owns is
registration, and [`register`](fn.register.md#rustdoc-item-186) re-runs all of it on every generation. This
function exists because a monolithic build loads the module once and calls
this entry point alone, so it defers to [`register`](fn.register.md#rustdoc-item-186).

Public so the generated `host_module_pill_audio` wrapper can carry it as
`pill_module_init`, the entry point the host looks up in a loaded DLL.
