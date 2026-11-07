<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6705"></a>

# Enum `pill_editor_core::scripted::PaletteRequest`

```rust
pub enum PaletteRequest { ... }
```

Source: `editor\pill_editor_core\src\scripted.rs:346`

What a `palette` line asks of the command palette.

The command changes the palette's state, not its pixels. The popup's own
keys (arrows, Enter, Escape) make the same changes that a person's presses
make.

## Variants

<a id="rustdoc-item-6894"></a>

### `Query`

```rust
Query
```

Open the palette with this query in the field.

<a id="rustdoc-item-6895"></a>

### `Run`

```rust
Run
```

Run the selected row and close.

<a id="rustdoc-item-6896"></a>

### `Close`

```rust
Close
```

Close without running.

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
