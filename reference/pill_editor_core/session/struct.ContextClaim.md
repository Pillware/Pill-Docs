<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7260"></a>

# Struct `pill_editor_core::session::ContextClaim`

```rust
pub struct ContextClaim;
```

Source: `editor\pill_editor_core\src\session.rs:965`

What one generation's claim on the session's egui contexts cleared.

## Fields

<a id="rustdoc-item-8004"></a>

### `main_entries`

```rust
main_entries: usize
```

The entries the main context's `Memory::data` held.

<a id="rustdoc-item-8005"></a>

### `popout_windows`

```rust
popout_windows: usize
```

How many popped-out windows' contexts held anything.

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
