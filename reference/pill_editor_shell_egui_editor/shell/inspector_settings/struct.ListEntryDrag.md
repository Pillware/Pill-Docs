<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-756"></a>

# Struct `pill_editor_shell_egui_editor::shell::inspector_settings::ListEntryDrag`

```rust
pub struct ListEntryDrag;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:86`

What a list entry carries while it is dragged: the family it belongs to and
the index it held when the drag began.

## Fields

<a id="rustdoc-item-754"></a>

### `family`

```rust
family: String
```

The settings key of the list it belongs to - `passes` for a chain's pass
list.

<a id="rustdoc-item-755"></a>

### `index`

```rust
index: usize
```

The entry's index in that list when the drag began.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SerializableAny`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
- `Debug`
