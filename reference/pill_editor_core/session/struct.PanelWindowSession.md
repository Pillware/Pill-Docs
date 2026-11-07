<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7256"></a>

# Struct `pill_editor_core::session::PanelWindowSession`

```rust
pub struct PanelWindowSession;
```

Source: `editor\pill_editor_core\src\session.rs:207`

The windows the module panels asked for.

Session-scoped like the dock, so a shell reload keeps every window open. A
window closes when the user closes it, when its modal is answered, or when
the panel that owns it is no longer alive.

## Fields

<a id="rustdoc-item-7374"></a>

### `windows`

```rust
windows: Vec<PanelWindowState>
```

The open windows, oldest first.

<a id="rustdoc-item-7375"></a>

### `answer`

```rust
answer: Option<PanelWindowAnswer>
```

The answer this frame owes the modal that asked for it; the panel reads
it on its next draw and the shell clears it afterwards.

## Associated functions and methods

<a id="rustdoc-item-7376"></a>

### `open`

```rust
pub fn open(self: &mut Self, source: &str, slot: u16, request: &crate::panels::PanelWindowRequest);
```

Open a window, replacing one with the same id. Past
[`PANEL_WINDOWS_MAX`](constant.PANEL_WINDOWS_MAX.md#rustdoc-item-7224) open windows, the oldest one closes first.

<a id="rustdoc-item-7377"></a>

### `close`

```rust
pub fn close(self: &mut Self, source: &str, id: &str);
```

Close one window of one source.

<a id="rustdoc-item-7378"></a>

### `close_source`

```rust
pub fn close_source(self: &mut Self, source: &str) -> usize;
```

Close every window a source opened; returns how many went.

<a id="rustdoc-item-7379"></a>

### `modal`

```rust
pub fn modal(self: &Self) -> Option<&PanelWindowState>;
```

The modal window that is on screen, if one is: the editor's input
belongs to it.

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
