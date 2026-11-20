<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-393"></a>

# Enum `pill_engine_core::ecs::resource::PlayState`

```rust
pub enum PlayState { ... }
```

Source: `engine\pill_engine_core\src\ecs\resource.rs:237`

What the editor's play mode does with a resource at Play and Stop.

See [`Resource::play_state`](trait.Resource.md#rustdoc-item-4296) for which class a type belongs in.

## Variants

<a id="rustdoc-item-4293"></a>

### `Restore`

```rust
Restore
```

The resource is game state: it is copied at Play and put back at Stop,
so play-time changes are discarded. The default.

<a id="rustdoc-item-4294"></a>

### `Keep`

```rust
Keep
```

The resource is left alone: infrastructure, or editor state the editor
restores itself.

<a id="rustdoc-item-4295"></a>

### `Rebuild`

```rust
Rebuild
```

The resource is left alone and rebuilds itself from the restored world
after Stop, using the world's restore epoch.

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
- `Clone`
- `Copy`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
