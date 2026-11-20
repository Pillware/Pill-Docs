<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1337"></a>

# Struct `pill_editor::runner::tool_fixture::FixtureElements`

```rust
pub(in runner) struct FixtureElements;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:123`

The fixture's elements, per entity.

A world resource so the elements outlive a shell reload and ride the play
session: the entities they belong to do.

## Fields

<a id="rustdoc-item-1336"></a>

### `by_entity`

```rust
by_entity: std::collections::HashMap<pill_engine_core::Entity, std::collections::HashMap<u64, FixtureElement>>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1338"></a>

### `entities_elements`

```rust
pub(in runner::tool_fixture) fn entities_elements(self: &mut Self, entity: Entity) -> &mut HashMap<u64, FixtureElement>;
```

The elements of `entity`, seeded with the fixture's layout the first
time a move writes into it, so an element a drag never touched keeps
the place the layout put it in.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Default`
- `Resource`
