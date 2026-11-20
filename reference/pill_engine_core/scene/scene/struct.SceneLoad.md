<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-981"></a>

# Struct `pill_engine_core::scene::scene::SceneLoad`

```rust
pub struct SceneLoad;
```

Source: `engine\pill_engine_core\src\scene\scene.rs:376`

What [`load_scene`](fn.load_scene.md#rustdoc-item-7962) made of a document.

Each list below records one kind of loss:

- [`unknown_components`](#rustdoc-item-7957): the world knows no
  component of that name, so nothing could be attached.
- [`failed_components`](#rustdoc-item-7958): the world knows the type
  but could not attach it - the reason is the field layer's or a command's
  own message.
- [`skipped_entities`](#rustdoc-item-7960): a document entry was dropped
  because its id repeats or is already taken.
- [`skipped_fields`](#rustdoc-item-7961): a field could not be written,
  by `<entity>: <component>.<field>`.
- [`unresolved_references`](#rustdoc-item-7959): an entity
  reference was not written into its field, because the id names no entity
  of the document or the field refused the write.

## Fields

<a id="rustdoc-item-7955"></a>

### `entities`

```rust
entities: usize
```

Entities created.

<a id="rustdoc-item-7956"></a>

### `components`

```rust
components: usize
```

Components attached, or already present on the entity.

<a id="rustdoc-item-7957"></a>

### `unknown_components`

```rust
unknown_components: Vec<String>
```

Component type names the world does not know.

<a id="rustdoc-item-7958"></a>

### `failed_components`

```rust
failed_components: Vec<String>
```

Components that failed to attach although the type is registered, each
entry naming the entity, the component and the reason.

<a id="rustdoc-item-7959"></a>

### `unresolved_references`

```rust
unresolved_references: usize
```

Entity references that were not written, because the id names no
entity of the document or the field refused the write.

<a id="rustdoc-item-7960"></a>

### `skipped_entities`

```rust
skipped_entities: Vec<String>
```

Document entries whose entity was not created, with the reason.

<a id="rustdoc-item-7961"></a>

### `skipped_fields`

```rust
skipped_fields: Vec<String>
```

Fields that could not be written, by `<entity>: <component>.<field>`.

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
