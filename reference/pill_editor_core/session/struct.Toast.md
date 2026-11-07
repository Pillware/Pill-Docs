<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7664"></a>

# Struct `pill_editor_core::session::Toast`

```rust
pub struct Toast;
```

Source: `editor\pill_editor_core\src\session.rs:452`

One toast on screen: a short-lived line about something the host did.

## Fields

<a id="rustdoc-item-7660"></a>

### `seq`

```rust
seq: u64
```

The notice event's id, so a frame never queues the same line twice.

<a id="rustdoc-item-7661"></a>

### `level`

```rust
level: crate::notices::NoticeLevel
```

Error, warning or note, picking the stripe's colour.

<a id="rustdoc-item-7662"></a>

### `text`

```rust
text: String
```

The line to show.

<a id="rustdoc-item-7663"></a>

### `expires_at_frame`

```rust
expires_at_frame: u64
```

The frame index at which it disappears.

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
- `SerializableAny`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
