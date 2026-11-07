<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-771"></a>

# Constant `pill_development_host::native_library::ENGINE_DYLIB_STEMS`

```rust
pub(crate) const ENGINE_DYLIB_STEMS: [&str; 6] = _;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\native_library.rs:73`

The engine's shared libraries, by file stem: every module, project and
patch imports them, and each one exists once per process unless a module
needs its own copies (see [`engine_dylib_needs_isolation`](fn.engine_dylib_needs_isolation.md#rustdoc-item-3073)).

Each has to stay a single instance in the process, so the types that cross
the library boundary and the state they share are not duplicated: the UI
frame and draw data (`pill_ui_frame`), the in-game egui UI and its editor
core (`pill_project_ui`, `pill_editor_core`), and the `Theme`/`Handle`s of
`pill_ui_theme`. A reload must find the same instance the host loaded, so
the whole set is staged together.
