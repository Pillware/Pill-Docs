<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-410"></a>

# Struct `pill_engine::declarations::PillSystemDescriptor`

```rust
pub struct PillSystemDescriptor;
```

Source: `engine\pill_engine\src\declarations.rs:116`

One ECS system declared with `#[system]`.

## Fields

<a id="rustdoc-item-406"></a>

### `name`

```rust
name: &'static str
```

Name the system is registered under, which is what logs, the editor's
Systems tab and a hot patch all use to find it.

<a id="rustdoc-item-407"></a>

### `order`

```rust
order: i32
```

Sort key; a lower value registers first. Equal values are ordered by
[`Self::name`](#rustdoc-item-406).

<a id="rustdoc-item-408"></a>

### `post_update`

```rust
post_update: bool
```

Whether the system runs in the post-update stage, after the command
flush.

<a id="rustdoc-item-409"></a>

### `register`

```rust
register: fn (_: &mut crate::Engine)
```

Registers the system with the engine.

A function pointer rather than the system itself: the attribute emits
the call, so the system's parameter tuple is inferred at its own
declaration site, exactly as a hand-written `register_system` call
would do.

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
- `Collect`
