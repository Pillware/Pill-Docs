<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1202"></a>

# Function `pill_editor_shell::register`

```rust
pub fn register(engine: &mut pill_engine::Engine) -> u32;
```

Source: `editor\pill_editor_shell\src\pill_editor_shell.rs:73`

Registers the shell against the host engine. Returns zero on success.

This is the half a reload repeats: it re-claims every resource it owns. A
reload releases the resources that the arriving generation does not register
again, and registering an existing one keeps its value instead of resetting
it.
