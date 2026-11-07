<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6286"></a>

# Struct `pill_engine_core::persistence::components::SkippedType`

```rust
pub struct SkippedType;
```

Source: `engine\pill_engine_core\src\persistence\components.rs:61`

One component type the selective pass could not migrate.

## Fields

<a id="rustdoc-item-6284"></a>

### `type_name`

```rust
type_name: String
```

Registered type name the pass skipped.

<a id="rustdoc-item-6285"></a>

### `reason`

```rust
reason: String
```

Why the pass skipped it, as the migration error text says. The
development host logs the whole list once at warning level, so the
normal log answers "why" without a re-run at a lower level.

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
- `Debug`
- `Clone`
