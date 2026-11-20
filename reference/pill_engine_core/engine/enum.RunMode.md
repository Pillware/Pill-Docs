<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5302"></a>

# Enum `pill_engine_core::engine::RunMode`

```rust
pub enum RunMode { ... }
```

Source: `engine\pill_engine_core\src\engine.rs:280`

Whether the frame is being edited or played.

Every posture except the editor plays, which is what the default says: the
standalone, shipping and web builds know nothing about editing, so their
behaviour does not depend on this type at all.

The editor starts in [`RunMode::Editing`](#rustdoc-item-5824) and switches to `Playing` when the
person presses Play, at which point the game systems and the scripts run
again. A system that must keep running while editing opts in at
registration, through [`SystemOptions::run_in_edit_mode`](struct.SystemOptions.md#rustdoc-item-5826).

## Variants

<a id="rustdoc-item-5824"></a>

### `Editing`

```rust
Editing
```

The editor is being used. Only the systems that opted in to edit mode
run, and no script runs.

<a id="rustdoc-item-5825"></a>

### `Playing`

```rust
Playing
```

The game is running: every enabled system and every script runs. The
default.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Copy`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
