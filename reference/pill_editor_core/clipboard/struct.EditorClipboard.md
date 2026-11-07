<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1080"></a>

# Struct `pill_editor_core::clipboard::EditorClipboard`

```rust
pub struct EditorClipboard;
```

Source: `editor\pill_editor_core\src\clipboard.rs:131`

The shell's side of the clipboard: the request it queued and the text the
executable last read back.

## Fields

<a id="rustdoc-item-1078"></a>

### `request`

```rust
request: Option<ClipboardRequest>
```

The request waiting for the executable, which takes it at the frame
boundary.

<a id="rustdoc-item-1079"></a>

### `text`

```rust
text: String
```

The last text the executable read from the clipboard, kept even when
the text is not a payload.

## Associated functions and methods

<a id="rustdoc-item-1081"></a>

### `take_request`

```rust
pub fn take_request(self: &mut Self) -> Option<ClipboardRequest>;
```

Takes the waiting request, if there is one.

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
- `Resource`
