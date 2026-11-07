<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3004"></a>

# Enum `pill_engine_core::component::Registration`

```rust
pub enum Registration { ... }
```

Source: `engine\pill_engine_core\src\component.rs:649`

What a registration call found and did.

Registration is idempotent, so "registered" and "was already registered" are
both successes. They are still different facts, and collapsing them is how a
stale recorded layout goes unnoticed after a reload replaces a component's
definition.

## Variants

<a id="rustdoc-item-3000"></a>

### `Created`

```rust
Created
```

The type was not present and has been assigned this bit.

<a id="rustdoc-item-3001"></a>

### `AlreadyPresent`

```rust
AlreadyPresent
```

The type was already registered under this bit; nothing changed.

## Associated functions and methods

<a id="rustdoc-item-3051"></a>

### `bit`

```rust
pub fn bit(self: Self) -> u8;
```

The bit index, whichever case this is.

<a id="rustdoc-item-3052"></a>

### `is_new`

```rust
pub fn is_new(self: Self) -> bool;
```

Whether this call is what created the registration.

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
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
