<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8254"></a>

# Struct `pill_engine_core::manager_settings::ManagerSettingsReport`

```rust
pub struct ManagerSettingsReport;
```

Source: `engine\pill_engine_core\src\manager_settings.rs:104`

What one pass over every manager's settings asset did.

## Fields

<a id="rustdoc-item-8252"></a>

### `applied`

```rust
applied: Vec<ManagerSettingsApplied>
```

The managers whose settings reached them, in manager-id order.

<a id="rustdoc-item-8253"></a>

### `failures`

```rust
failures: Vec<ManagerSettingsFailure>
```

The files that could not be applied, in manager-id order.

## Associated functions and methods

<a id="rustdoc-item-8255"></a>

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
- `Default`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
