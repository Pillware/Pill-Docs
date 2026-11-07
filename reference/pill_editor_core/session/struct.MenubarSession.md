<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7242"></a>

# Struct `pill_editor_core::session::MenubarSession`

```rust
pub struct MenubarSession;
```

Source: `editor\pill_editor_core\src\session.rs:435`

The menu bar's session state: the logged geometry of the strip, its titles
and each open menu's entries, which menu is open, and whether the About
window is open.

The log reports each placement once, as the toolbox does, so a suite can
click the titles. The requests the menu items raise do not live here: a
pass's asks for the executable are [`crate::requests::ShellRequests`](../requests/struct.ShellRequests.md#rustdoc-item-383), and
a dock edit the pass cannot make while the dock draws is the shell's
`FrameRequests`.

## Fields

<a id="rustdoc-item-7629"></a>

### `geometry`

```rust
geometry: LoggedRects<MenubarSlot>
```

The strip's and each title's last logged rectangle, keyed by slot: the
bar reports a placement once, and a title that moves is reported again.

<a id="rustdoc-item-7630"></a>

### `entries`

```rust
entries: LoggedRects<String>
```

Each open menu entry's last logged rectangle, keyed `menu/label`; a
menu's entries log while it is open, so their presence is the proof it
opened.

<a id="rustdoc-item-7631"></a>

### `about_open`

```rust
about_open: bool
```

Whether the About window is open.

<a id="rustdoc-item-7632"></a>

### `open`

```rust
open: Option<crate::menubar::Menu>
```

The menu whose dropdown is open, while one is; the log reports each
opening once so a suite can tell an open menu from a closed one.

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
