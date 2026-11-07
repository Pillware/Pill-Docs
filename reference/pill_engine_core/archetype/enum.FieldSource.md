<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-361"></a>

# Enum `pill_engine_core::archetype::FieldSource`

```rust
pub enum FieldSource { ... }
```

Source: `engine\pill_engine_core\src\archetype.rs:393`

Where one field of a new layout takes its bytes from.

## Variants

<a id="rustdoc-item-356"></a>

### `OldOffset`

```rust
OldOffset
```

Copy from this byte offset in the old row.

<a id="rustdoc-item-357"></a>

### `ZeroFill`

```rust
ZeroFill
```

Leave the field zeroed. The relayout zeroes every row before it applies
the plan, so a field with no source is defined rather than stale.

<a id="rustdoc-item-360"></a>

### `Default`

```rust
Default
```

Write a default the caller supplied - a manifest's declared value for an
added or retyped field - over the zeroed destination.

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
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
