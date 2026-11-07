<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-121"></a>

# Function `pill_player::registration::register_module`

```rust
pub fn register_module<impl FnOnce(&mut Engine) -> u32: FnOnce(&mut pill_engine::Engine) -> u32>(engine: &mut pill_engine::Engine, scope: Option<pill_engine::SystemOwner>, init: impl FnOnce(&mut pill_engine::Engine) -> u32) -> u32;
```

Source: `hosting\pill_player\src\registration.rs:66`

Runs `init` with the owner from `scope` in effect and returns the status
`init` reported.

Every ECS system `init` registers is recorded under that owner. With no
scope, no owner is set and the systems carry [`SystemOwner::PROJECT`], the
owner the engine uses outside a module's registration.
