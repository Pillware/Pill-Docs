<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3600"></a>

# Function `pill_development_host::reload::clear_failed_generation`

```rust
pub(in reload) fn clear_failed_generation(engine: &mut pill_engine::Engine, subject: &str, system_owner: pill_engine::SystemOwner);
```

Visibility: `{'restricted': {'parent': 3428, 'path': '::reload'}}` · Source: `hosting\pill_development_host\src\reload.rs:1188`

Releases everything one failed generation owns, while its image is loaded.

The failed image's systems are `Box<dyn System>` trait objects, and its data
carries drop functions from the same image: the resources it inserted and
the columns its entities live in. Systems go first, then the world is
replaced. Dropping the old world runs all of those functions, and both
steps must finish before the image can be unloaded.
