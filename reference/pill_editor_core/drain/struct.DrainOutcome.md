<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2198"></a>

# Struct `pill_editor_core::drain::DrainOutcome`

```rust
pub struct DrainOutcome;
```

Source: `editor\pill_editor_core\src\drain.rs:47`

What one drain changed outside the world.

## Fields

<a id="rustdoc-item-2195"></a>

### `batches`

```rust
batches: usize
```

How many batches ran.

<a id="rustdoc-item-2196"></a>

### `files_changed`

```rust
files_changed: bool
```

Whether a batch changed files on disk, so the asset listing must be
refreshed right away.

<a id="rustdoc-item-2197"></a>

### `settings_changed`

```rust
settings_changed: bool
```

Whether a batch wrote an asset's settings document, so the Inspector
must read it again.

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
