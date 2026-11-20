<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8700"></a>

# Enum `pill_engine_core::services::gizmos::GizmoWhen`

```rust
pub enum GizmoWhen { ... }
```

Source: `engine\pill_engine_core\src\services\gizmos.rs:70`

Which entities a component's gizmo draws for.

## Variants

<a id="rustdoc-item-8698"></a>

### `Always`

```rust
Always
```

Every entity that carries the component - the default.

<a id="rustdoc-item-8699"></a>

### `ForSelected`

```rust
ForSelected
```

Only the entities an editor has selected.

## Associated functions and methods

<a id="rustdoc-item-8701"></a>

### `label`

```rust
pub fn label(self: Self) -> &'static str;
```

The word a report prints for this choice.

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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Default`
