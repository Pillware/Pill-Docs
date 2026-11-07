<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-586"></a>

# Trait `pill_player::static_project::ProjectBackend`

```rust
pub trait ProjectBackend { ... }
```

Source: `hosting\pill_player\src\static_project.rs:73`

A project that registers itself by other means than a linked Rust
function: a C# assembly, through `pill_csharp_bridge`.

This crate calls it once, after every extension has registered, and keeps
what it returns until the engine is gone.

## Required and provided items

<a id="rustdoc-item-585"></a>

### `start`

```rust
fn start(self: &Self, engine: &mut Engine, exposed_component_names: &[String]) -> Result<Box<dyn Any>, HostError>;
```

Register the project's systems and data with `engine`.

`exposed_component_names` are the components the extensions registered,
in registration order, for a backend that binds them (the C# bridge
gives managed code byte-level access to them). The returned guard holds
whatever must stay alive as long as the systems it registered - for C#,
the .NET runtime itself. Dropping it earlier would unload their code.

#### Errors

Returns a [`HostError`] when the project cannot start. There is no
previous generation to fall back to, so the player stops there.
