<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4197"></a>

# Enum `pill_editor_core::history::HistoryEntryKind`

```rust
pub enum HistoryEntryKind { ... }
```

Source: `editor\pill_editor_core\src\history.rs:59`

The two kinds of undoable step.

## Variants

<a id="rustdoc-item-4242"></a>

### `Engine`

```rust
Engine
```

An engine batch and the batch that reverses it.

<a id="rustdoc-item-4245"></a>

### `Selection`

```rust
Selection
```

A selection change, carrying the selection on each side of it.

A history walk queues no commands for this kind, so a step of this
kind only moves the step counts.

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
