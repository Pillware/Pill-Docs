<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-556"></a>

# Struct `pill_player::static_project::StaticModule`

```rust
pub struct StaticModule;
```

Source: `hosting\pill_player\src\static_project.rs:57`

One extension compiled into the binary.

It is the counterpart of an extension the development host loads: the same
module, named the same way, but reached by a direct call instead of the
`pill_module_init` export of a loaded DLL.

## Fields

<a id="rustdoc-item-554"></a>

### `name`

```rust
name: &'static str
```

Crate name, used for logging exactly as the reloading host uses the
extension's name.

<a id="rustdoc-item-555"></a>

### `init`

```rust
init: fn (_: &mut pill_engine::Engine) -> u32
```

The function `#[pill_module]` was written on.

A loaded module reaches the same function through its `pill_module_init`
export. Here this crate calls it directly.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
- `Copy`
