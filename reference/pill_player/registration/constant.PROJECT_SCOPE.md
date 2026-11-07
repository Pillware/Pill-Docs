<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-116"></a>

# Constant `pill_player::registration::PROJECT_SCOPE`

```rust
pub const PROJECT_SCOPE: Option<pill_engine::SystemOwner> = None;
```

Source: `hosting\pill_player\src\registration.rs:33`

The scope the project registers its ECS systems under: no owner set, so
they carry [`SystemOwner::PROJECT`].
