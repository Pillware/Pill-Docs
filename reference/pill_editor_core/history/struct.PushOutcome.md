<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4323"></a>

# Struct `pill_editor_core::history::PushOutcome`

```rust
pub struct PushOutcome;
```

Source: `editor\pill_editor_core\src\history.rs:157`

What a push or a limit change did to the history.

## Fields

<a id="rustdoc-item-4319"></a>

### `steps`

```rust
steps: usize
```

Entries still in the history afterwards.

<a id="rustdoc-item-4320"></a>

### `trimmed`

```rust
trimmed: usize
```

How many of the oldest entries the change dropped.

<a id="rustdoc-item-4321"></a>

### `trim_reason`

```rust
trim_reason: Option<TrimReason>
```

The limit that caused the drop, when one did.

<a id="rustdoc-item-4322"></a>

### `coalesced`

```rust
coalesced: bool
```

True when a push merged into the entry before it.

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
- `Default`
