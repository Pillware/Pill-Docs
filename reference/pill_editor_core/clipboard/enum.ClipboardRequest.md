<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1042"></a>

# Enum `pill_editor_core::clipboard::ClipboardRequest`

```rust
pub enum ClipboardRequest { ... }
```

Source: `editor\pill_editor_core\src\clipboard.rs:120`

What the executable should do with the OS clipboard.

The shell cannot reach the OS clipboard. It is a reloadable DLL, and the
Win32 half belongs to the executable, which is the only binary that names
the `windows` crate. The shell therefore queues one of these, and the
executable carries it out at the frame boundary, the same way
`PanelCommand` and `PendingEditorCommands` queue their work.

## Variants

<a id="rustdoc-item-1040"></a>

### `Write`

```rust
Write
```

Write this payload text to the clipboard, in the registered format and
as plain text.

<a id="rustdoc-item-1041"></a>

### `Read`

```rust
Read
```

Read the clipboard and apply it as a paste.

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
- `StructuralPartialEq`
- `PartialEq`
