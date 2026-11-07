<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2064"></a>

# Struct `pill_editor_core::console::ConsoleFilterSettings`

```rust
pub struct ConsoleFilterSettings;
```

Source: `editor\pill_editor_core\src\console.rs:248`

The filters the Console tab edits.

They live in the shell's session, not in [`ConsoleState`](struct.ConsoleState.md#rustdoc-item-2059). The tab draws
from the frame's snapshot and cannot reach the world, so it edits this
copy. The executable applies the copy to the history on the next frame.

## Fields

<a id="rustdoc-item-2150"></a>

### `minimum_level`

```rust
minimum_level: u8
```

The lowest level shown.

<a id="rustdoc-item-2151"></a>

### `search`

```rust
search: String
```

The search text.

<a id="rustdoc-item-2152"></a>

### `channel`

```rust
channel: Option<ConsoleChannel>
```

The channel, or `None` for both.

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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Default`
