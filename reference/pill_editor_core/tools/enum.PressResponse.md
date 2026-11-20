<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11109"></a>

# Enum `pill_editor_core::tools::PressResponse`

```rust
pub enum PressResponse { ... }
```

Source: `editor\pill_editor_core\src\tools.rs:495`

What a press on one element does.

The editor asks before it applies its own rule, so a tool can select what
it wants, run recorded commands, or swallow the press entirely.

## Variants

<a id="rustdoc-item-11103"></a>

### `Default`

```rust
Default
```

The editor's own select, extend and gizmo rule.

<a id="rustdoc-item-11105"></a>

### `Select`

```rust
Select
```

Select exactly these elements, of the pressed element's kind.

<a id="rustdoc-item-11107"></a>

### `Commands`

```rust
Commands
```

Run these commands instead, as one recorded batch.

<a id="rustdoc-item-11108"></a>

### `Consume`

```rust
Consume
```

Do nothing at all: the selection stays as it is and no drag starts.

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
- `StructuralPartialEq`
- `PartialEq`
