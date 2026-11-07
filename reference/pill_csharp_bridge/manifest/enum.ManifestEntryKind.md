<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1334"></a>

# Enum `pill_csharp_bridge::manifest::ManifestEntryKind`

```rust
pub(crate) enum ManifestEntryKind { ... }
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:293`

What one managed manifest entry declares.

Resources ride in the same array as components rather than a second
document, so one transfer covers a whole generation's declaration and a
manifest that fails validation registers nothing.

## Variants

<a id="rustdoc-item-1367"></a>

### `Component`

```rust
Component
```

Per-entity storage, registered as a column.

<a id="rustdoc-item-1368"></a>

### `Resource`

```rust
Resource
```

One value for the whole world, registered as a foreign resource.

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
- `DeserializeOwned`
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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Deserialize<'de>`
