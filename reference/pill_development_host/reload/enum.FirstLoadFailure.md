<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2678"></a>

# Enum `pill_development_host::reload::FirstLoadFailure`

```rust
pub(crate) enum FirstLoadFailure { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\reload.rs:270`

What a failed first load of an artifact costs the world.

## Variants

<a id="rustdoc-item-3601"></a>

### `ClearWorld`

```rust
ClearWorld
```

Replace the whole world ([`clear_failed_generation`](fn.clear_failed_generation.md#rustdoc-item-3600)). This is the only
safe answer for an artifact that may own data: its columns and resources
carry drop functions from the image that is about to be unloaded.

<a id="rustdoc-item-3602"></a>

### `ClearSystemsOnly`

```rust
ClearSystemsOnly
```

Clear only the artifact's systems and keep the world.

Safe only if the caller keeps two promises. First, the artifact
registers no data of its own. The renderer module's components, assets
and resources belong to `pill_renderer_api` and to the renderer data
crate, and other subjects register them. Second, the failed image is
never unloaded, so anything it did touch still points at loaded code.
The renderer module first loads when the window opens, after the project
has filled the world, so wiping the world there would lose the scene.

<a id="rustdoc-item-3603"></a>

### `ClearGenerationData`

```rust
ClearGenerationData
```

Clear what the failed generation registered and keep everything else.

Used for an artifact that may register data but still must not cost the
world. One case is the retry an editor offers long after the project has
loaded, where the artifact is the editor's own shell module and that
module registers components like any other. The failed generation's
systems are removed, and the resources and component columns it
registered in this attempt are dropped. Every value another subject
registered stays. The failed image is kept loaded instead of unloaded,
so whatever survived inside it - a drop function a peer still claims, a
table that has not been re-homed yet - still points at loaded code.

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
- `Equivalent<K>`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
