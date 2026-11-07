<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3143"></a>

# Macro `pill_master_renderer::__pill_renderer_entry_points`

```rust
macro_rules! __pill_renderer_entry_points {
    () => { ... };
}
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\module_entry.rs:141`

Expands to this crate's renderer ABI exports, `pill_renderer_attach` and
`pill_renderer_detach`.

The symbols must be defined in the wrapper crate, because that crate is the
artifact the host loads: it compiles the renderer as a plain library. They
cannot be defined here: this library is also linked into the host's own
dependency graph, and every renderer declares the same two names.
