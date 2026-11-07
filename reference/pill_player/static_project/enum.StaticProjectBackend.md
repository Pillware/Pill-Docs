<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-592"></a>

# Enum `pill_player::static_project::StaticProjectBackend`

```rust
pub enum StaticProjectBackend { ... }
```

Source: `hosting\pill_player\src\static_project.rs:95`

How a shipping build reaches its project.

## Variants

<a id="rustdoc-item-588"></a>

### `Native`

```rust
Native
```

A Rust project linked into this binary.

<a id="rustdoc-item-591"></a>

### `External`

```rust
External
```

A project started by a backend outside this crate: the C# bridge's
CoreCLR or NativeAOT backend.

Shared rather than boxed, so a [`StaticProject`](struct.StaticProject.md#rustdoc-item-278) stays cloneable. The
windowed frontend needs that: it clones the project to run the setup and
keeps the copy it reads its name from.

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
