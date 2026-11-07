<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2516"></a>

# Enum `pill_editor_core::editor_state::command::CommandFamily`

```rust
pub enum CommandFamily { ... }
```

Source: `editor\pill_editor_core\src\editor_state\command.rs:626`

The family a command belongs to, which is also the applier module that
applies it.

## Variants

<a id="rustdoc-item-2614"></a>

### `World`

```rust
World
```

World edits: component fields, array elements, the entity and component
lifecycle, and resource fields.

<a id="rustdoc-item-2615"></a>

### `Engine`

```rust
Engine
```

Engine controls: pause, step, the gizmo tool, the grid, a system toggle.

<a id="rustdoc-item-2616"></a>

### `Selection`

```rust
Selection
```

Selection changes and the request that arms the next scene click.

<a id="rustdoc-item-2617"></a>

### `Document`

```rust
Document
```

Scene documents and preferences.

<a id="rustdoc-item-2618"></a>

### `Asset`

```rust
Asset
```

Asset-file reads and writes, and their rollbacks.

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
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
