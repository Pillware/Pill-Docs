<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1552"></a>

# Macro `pill_master_renderer_data::config::config_shader_file`

```rust
macro_rules! config_shader_file {
    ($(#[$attribute:meta])* $visibility:vis $name:ident, $path:literal) => { ... };
}
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\mod.rs:86`

Declares a [`ConfigShaderFile`](struct.ConfigShaderFile.md#rustdoc-item-1469) constant for a cooked file under `shader_sources/`.

One literal feeds both halves. `include_str!` embeds the file at build time,
and the same path lets a runtime reload find the file again. It has to be a
macro because `include_str!` accepts only a literal, never a `const`.
