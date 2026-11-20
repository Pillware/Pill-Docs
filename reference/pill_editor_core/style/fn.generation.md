<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10305"></a>

# Function `pill_editor_core::style::generation`

```rust
pub fn generation() -> u64;
```

Source: `editor\pill_editor_core\src\style.rs:210`

The generation of the theme the editor last installed. A shell compares it
with the generation it already installed, so it knows when the executable
has resolved a new theme.
