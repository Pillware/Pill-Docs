<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5008"></a>

# Struct `pill_engine_core::hot_patch::FaultReport`

```rust
pub struct FaultReport;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:80`

One function whose patched body panicked repeatedly, waiting for its host
to roll it back.

## Fields

<a id="rustdoc-item-5006"></a>

### `function`

```rust
function: String
```

The function's fully qualified path, which a rollback uses to find the
function.

<a id="rustdoc-item-5007"></a>

### `message`

```rust
message: String
```

The panic message, quoted in the host's rollback log line.

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
