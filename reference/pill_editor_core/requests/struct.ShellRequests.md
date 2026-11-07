<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-383"></a>

# Struct `pill_editor_core::requests::ShellRequests`

```rust
pub struct ShellRequests;
```

Source: `editor\pill_editor_core\src\requests.rs:35`

The one-shot requests one shell pass raises for the editor executable.

## Fields

<a id="rustdoc-item-6489"></a>

### `problem_open`

```rust
problem_open: Option<usize>
```

The Problems row a click asked to open, held as an index into the
editor's problem list. Only the executable can turn the row into a
`file:line` and open it.

<a id="rustdoc-item-6490"></a>

### `history`

```rust
history: Vec<HistoryRequest>
```

The undo and redo steps the menu bar asked for, oldest first. Each
entry undoes or redoes one recorded step, and the executable applies
them in the order they sit here.

<a id="rustdoc-item-6492"></a>

### `pending_tab`

```rust
pending_tab: Option<crate::layout::EditorTab>
```

The dock tab a menu item asked to show. A tab the dock no longer holds
is re-docked by the executable rather than dropped.

## Associated functions and methods

<a id="rustdoc-item-6493"></a>

### `drain`

```rust
pub fn drain(self: &mut Self) -> Self;
```

Takes every request at once and leaves the resource empty.

One call, one boundary: the caller sees every request the pass raised
and answers them all in one phase, so it cannot answer one request and
silently leave another behind.

<a id="rustdoc-item-6494"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Returns `true` when the pass raised no request.

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
- `Equivalent<K>`
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
- `Eq`
