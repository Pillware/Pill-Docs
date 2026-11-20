<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8003"></a>

# Enum `pill_engine_core::scene::scene::AttachError`

```rust
pub(in scene::scene) enum AttachError { ... }
```

Visibility: `{'restricted': {'parent': 7827, 'path': '::scene::scene'}}` · Source: `engine\pill_engine_core\src\scene\scene.rs:570`

Why a scene document's component could not be attached.

## Variants

<a id="rustdoc-item-8000"></a>

### `UnknownType`

```rust
UnknownType
```

The world knows no component of that name.

<a id="rustdoc-item-8002"></a>

### `Failed`

```rust
Failed
```

The world knows the type but could not attach it. The message is the
field layer's or a command's own reason.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Display`
