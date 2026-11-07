<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2509"></a>

# Struct `pill_editor_core::editor_state::command::RecordedApply`

```rust
pub struct RecordedApply;
```

Source: `editor\pill_editor_core\src\editor_state\command.rs:609`

The result of [`EditorCommand::apply_recorded`](enum.EditorCommand.md#rustdoc-item-2402).

## Fields

<a id="rustdoc-item-2582"></a>

### `failures`

```rust
failures: Vec<(usize, String)>
```

One `(index, message)` per failed command, where `index` is the
command's position in the batch.

<a id="rustdoc-item-2583"></a>

### `inverses`

```rust
inverses: Vec<EditorCommand>
```

The inverse of every successful edit, in the order undo applies them
(the reverse of the order they ran in).

<a id="rustdoc-item-2508"></a>

### `fully_invertible`

```rust
fully_invertible: bool
```

True when every command is a recorded edit that succeeded and produced
an inverse. Only then may the batch become one undo step.

<a id="rustdoc-item-2584"></a>

### `remaps`

```rust
remaps: Vec<(pill_engine::Entity, pill_engine::Entity)>
```

The `(previous, assigned)` handle pairs that entity restores produced.

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
- `Debug`
- `Default`
