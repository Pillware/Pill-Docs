<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2068"></a>

# Enum `pill_editor_core::notices::NoticeLevel`

```rust
pub enum NoticeLevel { ... }
```

Source: `editor\pill_editor_core\src\notices.rs:37`

How serious one toast is.

## Variants

<a id="rustdoc-item-5568"></a>

### `Error`

```rust
Error
```

A build or a patch failed; the previous generation keeps running.

<a id="rustdoc-item-5569"></a>

### `Warning`

```rust
Warning
```

Something worth a second look: a rollback, a refused drop.

<a id="rustdoc-item-5570"></a>

### `Note`

```rust
Note
```

A plain notice: a reload finished, a patch went live.

## Associated functions and methods

<a id="rustdoc-item-5571"></a>

### `name`

```rust
pub fn name(self: Self) -> &'static str;
```

The level's wire name, as the toast log lines print it.

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
- `Copy`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
