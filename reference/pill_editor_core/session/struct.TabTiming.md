<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7421"></a>

# Struct `pill_editor_core::session::TabTiming`

```rust
pub struct TabTiming;
```

Source: `editor\pill_editor_core\src\session.rs:267`

One tab's measured cost, smoothed so a single slow frame does not dominate.

## Fields

<a id="rustdoc-item-7418"></a>

### `tab`

```rust
tab: crate::layout::EditorTab
```

Which tab.

<a id="rustdoc-item-7419"></a>

### `micros`

```rust
micros: f64
```

The exponentially weighted mean of one body pass, in microseconds.

<a id="rustdoc-item-7420"></a>

### `passes`

```rust
passes: u64
```

How many passes were measured.

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
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
