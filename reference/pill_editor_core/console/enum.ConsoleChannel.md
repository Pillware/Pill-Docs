<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1964"></a>

# Enum `pill_editor_core::console::ConsoleChannel`

```rust
pub enum ConsoleChannel { ... }
```

Source: `editor\pill_editor_core\src\console.rs:56`

Which side of the running program a line came from.

## Variants

<a id="rustdoc-item-1962"></a>

### `Engine`

```rust
Engine
```

The engine, the host and the editor itself.

<a id="rustdoc-item-1963"></a>

### `Game`

```rust
Game
```

The project: its modules and its scripts.

## Associated functions and methods

<a id="rustdoc-item-1965"></a>

### `name`

```rust
pub fn name(self: Self) -> &'static str;
```

The channel's name, as the tab's status row and the `[test] console`
log line print it.

<a id="rustdoc-item-1966"></a>

### `of_target`

```rust
pub fn of_target(target: &str) -> Self;
```

The channel a target belongs to.

The engine, the host, the editor and the renderers log under a fixed
set of crate prefixes ([`ENGINE_PREFIXES`](constant.ENGINE_PREFIXES.md#rustdoc-item-1959)). Every other crate is the
project's, whatever its name happens to contain. The check is a prefix
match on the crate name, not a substring search, so a project crate
called `my_pill_game` stays in the game channel.

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
