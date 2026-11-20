<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6561"></a>

# Struct `pill_engine_core::hot_reload::hot_patch::FaultReport`

```rust
pub struct FaultReport;
```

Source: `engine\pill_engine_core\src\hot_reload\hot_patch.rs:80`

One function whose patched body panicked repeatedly, waiting for its host
to roll it back.

## Fields

<a id="rustdoc-item-6559"></a>

### `function`

```rust
function: String
```

The function's fully qualified path, which a rollback uses to find the
function.

<a id="rustdoc-item-6560"></a>

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
