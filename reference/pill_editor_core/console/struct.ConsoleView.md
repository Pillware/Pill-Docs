<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1960"></a>

# Struct `pill_editor_core::console::ConsoleView`

```rust
pub struct ConsoleView;
```

Source: `editor\pill_editor_core\src\console.rs:227`

What the Console tab draws: the filters in force and the rows they leave.

A copy taken for the frame's snapshot, like the menu bar's command rows.
The shell's tab reads the snapshot and never the world.

## Fields

<a id="rustdoc-item-2105"></a>

### `minimum_level`

```rust
minimum_level: u8
```

The lowest level shown.

<a id="rustdoc-item-2106"></a>

### `search`

```rust
search: String
```

The search text in force.

<a id="rustdoc-item-2107"></a>

### `channel`

```rust
channel: Option<ConsoleChannel>
```

The channel in force; `None` shows both.

<a id="rustdoc-item-2108"></a>

### `total`

```rust
total: usize
```

How many lines the history holds.

<a id="rustdoc-item-2109"></a>

### `visible`

```rust
visible: usize
```

How many lines the filters leave.

<a id="rustdoc-item-2110"></a>

### `lines`

```rust
lines: Vec<ConsoleLine>
```

The newest visible rows, oldest first.

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
