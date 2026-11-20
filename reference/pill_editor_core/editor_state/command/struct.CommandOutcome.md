<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2450"></a>

# Struct `pill_editor_core::editor_state::command::CommandOutcome`

```rust
pub(in editor_state) struct CommandOutcome;
```

Visibility: `{'restricted': {'parent': 2471, 'path': '::editor_state'}}` · Source: `editor\pill_editor_core\src\editor_state\command.rs:749`

What one applied command hands back to the recording layer.

## Fields

<a id="rustdoc-item-2652"></a>

### `inverse`

```rust
inverse: Option<EditorCommand>
```

The command that reverses this one, when one exists.

<a id="rustdoc-item-2653"></a>

### `remap`

```rust
remap: Option<(pill_engine::Entity, pill_engine::Entity)>
```

A `(previous, assigned)` handle pair, when the command re-created an
entity. The history moves its older entries to the new handle.

## Associated functions and methods

<a id="rustdoc-item-2654"></a>

### `inverse`

```rust
pub(in editor_state) fn inverse(inverse: EditorCommand) -> Self;
```

A successful command that produced an inverse.

<a id="rustdoc-item-2454"></a>

### `plain`

```rust
pub(in editor_state) fn plain() -> Self;
```

A successful command that has no inverse, such as an engine control or
a restore.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
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
