<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-993"></a>

# Enum `pill_editor::runner::editor_window::ScriptedDragStage`

```rust
pub(in runner) enum ScriptedDragStage { ... }
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\editor_window.rs:379`

The stage a [`ScriptedDrag`](struct.ScriptedDrag.md#rustdoc-item-604) is waiting to inject, one per frame.

## Variants

<a id="rustdoc-item-1022"></a>

### `Press`

```rust
Press
```

The pointer has not gone down yet.

<a id="rustdoc-item-1023"></a>

### `Move`

```rust
Move
```

The button is down and the pointer has not moved yet.

<a id="rustdoc-item-1024"></a>

### `Release`

```rust
Release
```

The move has been injected and the button is still down.

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
- `SerializableAny`
- `Equivalent<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
