<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-458"></a>

# Struct `pill_engine::declarations::PillSystemDescriptor`

```rust
pub struct PillSystemDescriptor;
```

Source: `engine\pill_engine\src\declarations.rs:179`

One ECS system declared with `#[system]`.

## Fields

<a id="rustdoc-item-453"></a>

### `name`

```rust
name: &'static str
```

Name the system is registered under, which is what logs, the editor's
Systems tab and a hot patch all use to find it.

<a id="rustdoc-item-454"></a>

### `order`

```rust
order: i32
```

Sort key within the phase; a lower value registers first. Equal values
are ordered by [`Self::name`](#rustdoc-item-453) here, and by registration across
artifacts.

<a id="rustdoc-item-455"></a>

### `phase`

```rust
phase: crate::RunPhase
```

The phase of the frame the system runs in.

The walk sorts by it first, so a post-project declaration is registered
after every project one whatever its order number is.

<a id="rustdoc-item-457"></a>

### `register`

```rust
register: fn (_: &mut crate::Engine)
```

Registers the system with the engine.

A function pointer rather than the system itself: the attribute emits
the call, so the system's parameter tuple is inferred at its own
declaration site, exactly as a hand-written
`register_system_with_options` call would do.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Collect`
