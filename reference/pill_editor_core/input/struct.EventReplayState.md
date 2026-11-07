<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4580"></a>

# Struct `pill_editor_core::input::EventReplayState`

```rust
pub(in input) struct EventReplayState;
```

Visibility: `{'restricted': {'parent': 4577, 'path': '::input'}}` · Source: `editor\pill_editor_core\src\input.rs:44`

The state the bridge carries from one event to the next while it replays
the shell's list.

egui's pointer events carry their own position and modifier state, but the
engine reports those as separate events. This type remembers the last value
of each, so a button press reports where the pointer was and which modifier
keys were held at that point in the list.

## Fields

<a id="rustdoc-item-4575"></a>

### `modifiers`

```rust
modifiers: egui::Modifiers
```

The modifier state the last `ModifiersChanged` event reported.

<a id="rustdoc-item-4578"></a>

### `pointer_position`

```rust
pointer_position: Option<egui::Pos2>
```

The pointer's last known position, in logical points.

## Associated functions and methods

<a id="rustdoc-item-4581"></a>

### `push_egui_events`

```rust
pub(in input) fn push_egui_events(self: &mut Self, event: &InputEvent, scale_factor: f32, egui_events: &mut Vec<Event>);
```

Turns `event` into its egui events and appends them to `egui_events`.

The pointer position and modifier state are updated as it goes, so the
next event is reported with them. Events the shell has no use for (raw
motion, gamepads, focus) append nothing.

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
- `Default`
