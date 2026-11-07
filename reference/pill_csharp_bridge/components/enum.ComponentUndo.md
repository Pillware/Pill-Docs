<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-946"></a>

# Enum `pill_csharp_bridge::components::ComponentUndo`

```rust
pub(crate) enum ComponentUndo { ... }
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\components.rs:630`

One applied component entry, recorded so a later refusal can be undone.

Engine state only: the binding table's half of an undo belongs to the
pipeline, which knows exactly what it wrote where.

## Variants

<a id="rustdoc-item-935"></a>

### `Added`

```rust
Added
```

The entry registered a managed component.

<a id="rustdoc-item-939"></a>

### `Migrated`

```rust
Migrated
```

The entry migrated a managed component to a new shape.

<a id="rustdoc-item-945"></a>

### `Renamed`

```rust
Renamed
```

The entry renamed a managed component from an earlier registration.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
