<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-401"></a>

# Struct `pill_editor_shell_egui_editor::shell::chrome::FloatingPopup`

```rust
pub struct FloatingPopup;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\chrome.rs:40`

A floating popup as its caller sees it.

It carries the area the popup drew and whether this frame's press landed
outside it.

## Fields

<a id="rustdoc-item-398"></a>

### `response`

```rust
response: egui::Response
```

The area's own response: its rectangle is the popup's.

<a id="rustdoc-item-400"></a>

### `pressed_outside`

```rust
pressed_outside: bool
```

Whether this frame pressed outside both the anchor and the popup. A
picker uses it to close itself.

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
