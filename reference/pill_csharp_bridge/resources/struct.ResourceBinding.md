<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1889"></a>

# Struct `pill_csharp_bridge::resources::ResourceBinding`

```rust
pub(crate) struct ResourceBinding;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\resources.rs:66`

One managed resource, bound to its engine registration.

Every managed resource is foreign storage: the host has no Rust type for it.
That is why there is one kind of binding here where a component has two.

## Fields

<a id="rustdoc-item-1886"></a>

### `resource_id`

```rust
resource_id: pill_engine::ResourceId
```

Engine id the resource was registered under.

<a id="rustdoc-item-1888"></a>

### `declaration`

```rust
declaration: ManagedResourceDeclaration
```

The declaration the registration was made from.

This is the only record of the resource's shape: name, size, alignment,
schema hash and field layout. A reload compares, migrates and rolls back
against it, so those steps never read a second copy that could disagree
with what was registered.

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
