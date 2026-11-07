<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5323"></a>

# Struct `pill_editor_core::layout::recovery::RecoveryDocument`

```rust
pub struct RecoveryDocument;
```

Source: `editor\pill_editor_core\src\layout\recovery.rs:44`

The editor state a run saves as it goes, so the next run can restore it
after an abrupt exit.

## Fields

<a id="rustdoc-item-5318"></a>

### `version`

```rust
version: u32
```

The document's version ([`RECOVERY_VERSION`](constant.RECOVERY_VERSION.md#rustdoc-item-5316)).

<a id="rustdoc-item-5319"></a>

### `dock`

```rust
dock: crate::layout::EditorDock
```

The dock as it stood at the last autosave.

<a id="rustdoc-item-5320"></a>

### `entities`

```rust
entities: Vec<String>
```

The selected entities' display handles, in selection order.

<a id="rustdoc-item-5321"></a>

### `asset`

```rust
asset: Option<String>
```

The selected asset's project-relative path, when one was selected.

<a id="rustdoc-item-5322"></a>

### `resource`

```rust
resource: Option<String>
```

The selected resource's stable name, when one was selected.

## Associated functions and methods

<a id="rustdoc-item-5324"></a>

### `capture`

```rust
pub fn capture(dock: &EditorDock, selection: &EditorSelection) -> Self;
```

Builds the document for the current state.

The dock is settled first (its placeholder rectangles are replaced with
finite ones). A node the frame has not laid out yet holds rectangles
with non-finite floats, and `serde_json` writes those as `null`, which
cannot be read back. The layout document is written the same way.

<a id="rustdoc-item-5325"></a>

### `is_current`

```rust
pub fn is_current(self: &Self) -> bool;
```

Whether this document's version is the one this build writes.

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
- `DeserializeOwned`
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
- `Serialize`
- `Deserialize<'de>`
