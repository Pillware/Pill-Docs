<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11149"></a>

# Enum `pill_editor_core::tools::KeyResponse`

```rust
pub enum KeyResponse { ... }
```

Source: `editor\pill_editor_core\src\tools.rs:520`

What a key does while the tool owns an element selection.

## Variants

<a id="rustdoc-item-11145"></a>

### `Default`

```rust
Default
```

The editor's own rule, then the keybindings.

<a id="rustdoc-item-11146"></a>

### `Consume`

```rust
Consume
```

The tool took the key; nothing else sees it.

<a id="rustdoc-item-11148"></a>

### `Commands`

```rust
Commands
```

Run these commands, as one recorded batch.

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
- `StructuralPartialEq`
- `PartialEq`
