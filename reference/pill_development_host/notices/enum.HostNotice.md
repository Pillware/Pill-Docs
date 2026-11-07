<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3298"></a>

# Enum `pill_development_host::notices::HostNotice`

```rust
pub enum HostNotice { ... }
```

Source: `hosting\pill_development_host\src\notices.rs:55`

One event the host reports to an attached editor frontend.

## Variants

<a id="rustdoc-item-3301"></a>

### `ModuleFailed`

```rust
ModuleFailed
```

A module failed to load or to swap in: its build failed, the new
library could not load, or the module ABI check refused it.

<a id="rustdoc-item-3304"></a>

### `Reloaded`

```rust
Reloaded
```

A module's new code is live in the running game.

<a id="rustdoc-item-3307"></a>

### `PatchApplied`

```rust
PatchApplied
```

A function's body was replaced in the running game without a reload.

<a id="rustdoc-item-3310"></a>

### `PatchFailed`

```rust
PatchFailed
```

A function's patch attempt failed; the previous implementation still
runs.

<a id="rustdoc-item-3314"></a>

### `RolledBack`

```rust
RolledBack
```

A function was rolled back to an earlier generation, by request or
automatically after repeated faults.

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
