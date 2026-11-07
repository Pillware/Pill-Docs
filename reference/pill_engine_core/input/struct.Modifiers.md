<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5761"></a>

# Struct `pill_engine_core::input::Modifiers`

```rust
pub struct Modifiers;
```

Source: `engine\pill_engine_core\src\input.rs:377`

The modifier keys' state, as the platform reports it.

This is separate from the physical modifier keys ([`KeyCode::ShiftLeft`](enum.KeyCode.md#rustdoc-item-5312)
and the other modifier codes). A platform merges both shifts, both controls
and AltGr into this one state, which is what shortcut matching needs.

## Fields

<a id="rustdoc-item-5757"></a>

### `shift`

```rust
shift: bool
```

Whether a shift key is down.

<a id="rustdoc-item-5758"></a>

### `control`

```rust
control: bool
```

Whether a control key is down.

<a id="rustdoc-item-5759"></a>

### `alt`

```rust
alt: bool
```

Whether an alt key is down.

<a id="rustdoc-item-5760"></a>

### `super_key`

```rust
super_key: bool
```

Whether a Windows/Command key is down.

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
- `Copy`
- `Clone`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
