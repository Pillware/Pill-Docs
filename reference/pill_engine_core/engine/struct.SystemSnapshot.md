<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4229"></a>

# Struct `pill_engine_core::engine::SystemSnapshot`

```rust
pub struct SystemSnapshot;
```

Source: `engine\pill_engine_core\src\engine.rs:206`

A read-only snapshot of one registered system.

`index` is the position in the registration vector and is the stable key
for toggling, because system **names are not unique** —
[`Engine::set_system_enabled`](struct.Engine.md#rustdoc-item-4228) matches the first system with a given name.

## Fields

<a id="rustdoc-item-4222"></a>

### `index`

```rust
index: usize
```

Position in the registration vector, which is the key that names
exactly one system.

<a id="rustdoc-item-4223"></a>

### `name`

```rust
name: String
```

Registration name, shown in the UI and used by the name-keyed calls,
which match the first system that has it.

<a id="rustdoc-item-4224"></a>

### `owner`

```rust
owner: SystemOwner
```

What registered this system: the project, the renderer, the engine, or
one extension.

<a id="rustdoc-item-4225"></a>

### `enabled`

```rust
enabled: bool
```

Whether the system currently participates in frame execution.

<a id="rustdoc-item-4226"></a>

### `hot_patchable`

```rust
hot_patchable: bool
```

Whether the system has a hot-patch dispatch slot in the registry.

<a id="rustdoc-item-4227"></a>

### `name_is_ambiguous`

```rust
name_is_ambiguous: bool
```

True when another registered system shares this name, so the UI can
warn instead of toggling an ambiguous target.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
