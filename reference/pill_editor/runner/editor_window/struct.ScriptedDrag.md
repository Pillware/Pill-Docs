<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-604"></a>

# Struct `pill_editor::runner::editor_window::ScriptedDrag`

```rust
pub(in runner) struct ScriptedDrag;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\editor_window.rs:368`

A scripted left-button drag in flight: where the press lands, where the
pointer moves to, and how far along the drag is.

A drag needs one stage per frame (press, move, release) because egui only
reports a drag when the pointer moves while the button is held across
frames. A press and a release inside the same frame count as a click.

## Fields

<a id="rustdoc-item-990"></a>

### `from`

```rust
from: (f32, f32)
```

The press position, in the main window's client pixels.

<a id="rustdoc-item-991"></a>

### `to`

```rust
to: (f32, f32)
```

The position the single move goes to.

<a id="rustdoc-item-992"></a>

### `stage`

```rust
stage: ScriptedDragStage
```

How far along the drag is.

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
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
