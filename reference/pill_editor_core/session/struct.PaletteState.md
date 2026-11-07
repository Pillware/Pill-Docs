<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7247"></a>

# Struct `pill_editor_core::session::PaletteState`

```rust
pub struct PaletteState;
```

Source: `editor\pill_editor_core\src\session.rs:332`

The command palette's session state.

Owned strings, not callbacks: the palette outlives a shell reload, and a
reload must not leave a closure from the old image behind.

## Fields

<a id="rustdoc-item-7505"></a>

### `open`

```rust
open: bool
```

Whether the palette is on screen.

<a id="rustdoc-item-7506"></a>

### `query`

```rust
query: String
```

What the query field holds; the filter is a substring match on titles.

<a id="rustdoc-item-7507"></a>

### `selected`

```rust
selected: usize
```

The selected row's index in the filtered list.

<a id="rustdoc-item-7508"></a>

### `run_requested`

```rust
run_requested: bool
```

A run the palette asked for: its own Enter or click sets it in the pass
that takes it, and the scripted channel sets it between passes so the
next pass takes it - either way both paths run the same action.

<a id="rustdoc-item-7509"></a>

### `logged_query`

```rust
logged_query: Option<String>
```

The query the log already reported, so one query logs one line.

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
