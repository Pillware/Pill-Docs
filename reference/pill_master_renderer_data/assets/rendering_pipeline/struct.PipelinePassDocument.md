<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-651"></a>

# Struct `pill_master_renderer_data::assets::rendering_pipeline::PipelinePassDocument`

```rust
pub struct PipelinePassDocument;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\rendering_pipeline.rs:121`

One entry in a `.pipeline` file: the pass it names, and whether this chain
runs it.

The pass is stored as a reference, so a chain survives a pass being moved or
renamed, and one pass can appear in several chains. The reference's fields
are written beside `enabled` instead of under a key of their own, so an
entry reads `{ "guid": …, "enabled": false }`.

## Fields

<a id="rustdoc-item-649"></a>

### `pass`

```rust
pass: pill_engine::AssetReference<crate::RenderPass>
```

The pass this entry runs, by guid.

<a id="rustdoc-item-650"></a>

### `enabled`

```rust
enabled: bool
```

Whether this chain runs the pass. A file that leaves the key out runs
it, so a file written before the key existed still draws what it always
did.

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
- `Clone`
- `Debug`
- `Serialize`
- `Deserialize<'de>`
- `Default`
