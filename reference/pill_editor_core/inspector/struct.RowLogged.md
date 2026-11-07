<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4803"></a>

# Struct `pill_editor_core::inspector::RowLogged`

```rust
pub struct RowLogged;
```

Source: `editor\pill_editor_core\src\inspector.rs:668`

The log lines a drawn row can emit, held as bits. There are two: the row's
own line, and the `mixed` line that a scalar or vector row adds when the
selected entities disagree on its value.

A cached row carries this, so a row that redraws every frame still logs
once per subject. The row's position in the cached model identifies it for
the session, so no key has to be built.

## Fields

<a id="rustdoc-item-4802"></a>

### `0`

```rust
0: u8
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-4804"></a>

### `ROW`

```rust
const ROW: u8 = _;
```

The row's own `[editor] inspector row kind=…` line.

<a id="rustdoc-item-4805"></a>

### `MIXED`

```rust
const MIXED: u8 = _;
```

The `mixed` line a row adds when the selection disagrees on its value.

<a id="rustdoc-item-4806"></a>

### `has`

```rust
pub fn has(self: Self, line_bit: u8) -> bool;
```

Whether the line `line_bit` names has already been logged for this row.

<a id="rustdoc-item-4807"></a>

### `mark`

```rust
pub fn mark(self: &mut Self, line_bit: u8);
```

Mark the line `line_bit` names as logged.

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
- `Copy`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
