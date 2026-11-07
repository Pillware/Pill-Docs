<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-853"></a>

# Enum `pill_editor::runner::editor_window::FontSource`

```rust
pub(in runner) enum FontSource { ... }
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\editor_window.rs:355`

Where one font family's bytes come from.

## Variants

<a id="rustdoc-item-947"></a>

### `Project`

```rust
Project
```

A `.ttf`/`.otf` below the project's `res/editor/`, loaded through the
project's asset store - the project layer's fonts.

<a id="rustdoc-item-949"></a>

### `User`

```rust
User
```

A file beside the user's theme document, read from disk.

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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
