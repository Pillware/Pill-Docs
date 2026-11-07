<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-120"></a>

# Function `pill_player::registration::renderer_owner`

```rust
pub fn renderer_owner() -> pill_engine::SystemOwner;
```

Source: `hosting\pill_player\src\registration.rs:56`

Returns the owner that a renderer registers its systems under.

The engine reserves this owner ([`SystemOwner::RENDERER`]) instead of
taking "one past the extensions". A host can skip an extension and keep
that module's owner reserved for a later load, so a count of the loaded
extensions can name an owner that is already taken. Deriving the renderer's
owner from that count would give two subjects the same owner, and a reload
of either would then clear the other's systems.
