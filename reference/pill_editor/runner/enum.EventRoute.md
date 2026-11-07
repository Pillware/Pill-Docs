<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1334"></a>

# Enum `pill_editor::runner::EventRoute`

```rust
pub(in runner) enum EventRoute { ... }
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3620`

Where one translated window event belongs, by the focus rule.

## Variants

<a id="rustdoc-item-1332"></a>

### `Game`

```rust
Game
```

The game's window: the project's systems receive it.

<a id="rustdoc-item-1333"></a>

### `Shell`

```rust
Shell
```

One of the editor's windows: only the shell sees it, so a keystroke
meant for the Inspector never drives the game.

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
- `Equivalent<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
- `Copy`
- `Debug`
- `Eq`
- `StructuralPartialEq`
- `PartialEq`
