<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6365"></a>

# Struct `pill_engine_core::persistence::resources::ResourceSnapshot`

```rust
pub struct ResourceSnapshot;
```

Source: `engine\pill_engine_core\src\persistence\resources.rs:52`

Resource values captured at one point in time.

Each value is keyed by name, like every other persistence payload. A
[`ResourceId::Native`](../../resource/enum.ResourceId.md#rustdoc-item-6364) is a `TypeId`, and no other process, and no later
build of this one, produces the same `TypeId`; the name is the part that can
outlive the process.

The list is flat rather than nested: a resource is a singleton, so there is
no entity to group by.

## Examples

```
use pill_engine::ResourceSnapshot;

let snapshot = ResourceSnapshot {
    entries: vec![("project::Score".to_string(), b"{\"points\":7}".to_vec())],
};
assert_eq!(snapshot.resource_count(), 1);
```

## Fields

<a id="rustdoc-item-6363"></a>

### `entries`

```rust
entries: Vec<(String, Vec<u8>)>
```

One `(registered name, JSON payload)` pair per resource that held a
value, sorted by name so a snapshot is reproducible.

## Associated functions and methods

<a id="rustdoc-item-6366"></a>

### `resource_count`

```rust
pub fn resource_count(self: &Self) -> usize;
```

Number of resource values stored.

<a id="rustdoc-item-6367"></a>

### `payload`

```rust
pub fn payload(self: &Self, type_name: &str) -> Option<&[u8]>;
```

The payload recorded for one resource name, if the snapshot has it.

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
