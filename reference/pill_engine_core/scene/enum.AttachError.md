<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7899"></a>

# Enum `pill_engine_core::scene::AttachError`

```rust
pub(in scene) enum AttachError { ... }
```

Visibility: `{'restricted': {'parent': 7769, 'path': '::scene'}}` · Source: `engine\pill_engine_core\src\scene.rs:524`

Why a scene document's component could not be attached.

## Variants

<a id="rustdoc-item-7896"></a>

### `UnknownType`

```rust
UnknownType
```

The world knows no component of that name.

<a id="rustdoc-item-7898"></a>

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Display`
