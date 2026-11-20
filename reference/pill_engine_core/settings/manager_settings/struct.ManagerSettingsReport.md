<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5558"></a>

# Struct `pill_engine_core::settings::manager_settings::ManagerSettingsReport`

```rust
pub struct ManagerSettingsReport;
```

Source: `engine\pill_engine_core\src\settings\manager_settings.rs:104`

What one pass over every manager's settings asset did.

## Fields

<a id="rustdoc-item-10082"></a>

### `applied`

```rust
applied: Vec<ManagerSettingsApplied>
```

The managers whose settings reached them, in manager-id order.

<a id="rustdoc-item-10083"></a>

### `failures`

```rust
failures: Vec<ManagerSettingsFailure>
```

The files that could not be applied, in manager-id order.

## Associated functions and methods

<a id="rustdoc-item-10084"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether nothing happened at all: no manager applied, nothing failed.

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
- `Default`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
