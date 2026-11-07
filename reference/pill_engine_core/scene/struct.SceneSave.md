<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7814"></a>

# Struct `pill_engine_core::scene::SceneSave`

```rust
pub struct SceneSave;
```

Source: `engine\pill_engine_core\src\scene.rs:143`

What [`save_scene`](fn.save_scene.md#rustdoc-item-7813) wrote, and what it could not.

## Fields

<a id="rustdoc-item-7810"></a>

### `skipped_fields`

```rust
skipped_fields: Vec<String>
```

One entry per field the field layer could not write, by
`<entity>: <component>.<field>`.

<a id="rustdoc-item-7811"></a>

### `skipped_components`

```rust
skipped_components: Vec<String>
```

One entry per component the save left out, naming the entity, the
component and the reason. The save writes components through the field
layer, so a component with no field layout has nothing to write. The
entity is then written without that component, which is a loss the
caller has to see.

<a id="rustdoc-item-7812"></a>

### `components`

```rust
components: usize
```

How many component entries the document holds.

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
