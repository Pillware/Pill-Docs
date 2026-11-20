<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-347"></a>

# Struct `pill_editor_shell::shell::spline_tool::Reseed`

```rust
pub struct Reseed;
```

Source: `editor\pill_editor_shell\src\shell\spline_tool.rs:52`

The data behind the re-seed write: the entity it edits and the
control-point count it sets.

## Fields

<a id="rustdoc-item-345"></a>

### `entity`

```rust
entity: Entity
```

The entity the spline belongs to.

<a id="rustdoc-item-346"></a>

### `value`

```rust
value: usize
```

The control-point count the write sets.

## Associated functions and methods

<a id="rustdoc-item-348"></a>

### `into_command`

```rust
pub fn into_command(self: Self) -> PanelCommand;
```

Turns the confirmation into the recorded panel command that applies it.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
