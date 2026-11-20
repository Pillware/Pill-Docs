<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1299"></a>

# Struct `pill_editor::runner::tool_fixture::FixtureElement`

```rust
pub(in runner::tool_fixture) struct FixtureElement;
```

Visibility: `{'restricted': {'parent': 1296, 'path': '::runner::tool_fixture'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:109`

One fixture element, as the fixture stores it.

The offset is what makes a drag stick: a move arrives as a world transform,
and the offset is that transform measured from the entity it belongs to, so
moving the entity afterwards still carries its elements.

## Fields

<a id="rustdoc-item-1295"></a>

### `offset`

```rust
offset: [f32; 3]
```

Where the element sits, relative to the entity's translation.

<a id="rustdoc-item-1297"></a>

### `rotation`

```rust
rotation: [f32; 4]
```

The element's own orientation.

<a id="rustdoc-item-1298"></a>

### `scale`

```rust
scale: [f32; 3]
```

The element's own scale.

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
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
- `Copy`
- `Debug`
