<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5614"></a>

# Struct `pill_editor_core::notices::Notice`

```rust
pub struct Notice;
```

Source: `editor\pill_editor_core\src\notices.rs:56`

One toast line: something the editor or the host did, shown briefly over
the editor.

## Fields

<a id="rustdoc-item-5611"></a>

### `seq`

```rust
seq: u64
```

An id that increases for the life of the session. The shell's toast
list keys on it, so a redrawn frame never queues a line it shows.

<a id="rustdoc-item-5612"></a>

### `level`

```rust
level: NoticeLevel
```

How serious it is.

<a id="rustdoc-item-5613"></a>

### `text`

```rust
text: String
```

The line to show.

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
- `Equivalent<K>`
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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
