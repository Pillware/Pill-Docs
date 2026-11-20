<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8913"></a>

# Struct `pill_engine_core::services::gizmos::GizmoEntry`

```rust
pub struct GizmoEntry;
```

Source: `engine\pill_engine_core\src\services\gizmos.rs:532`

One registered gizmo, owned by the world rather than by an image.

Every name here is an owned copy. A declaration's strings live in the
static of the image that declared them, and the reload unmaps a retired
image once two younger generations exist, so keeping the borrowed text
would leave the editor reading freed memory through it.

## Fields

<a id="rustdoc-item-8908"></a>

### `type_name`

```rust
type_name: String
```

Fully-qualified component type name, copied out of the declaring image.

<a id="rustdoc-item-8909"></a>

### `owner`

```rust
owner: String
```

The declaring package, copied out of the declaring image.

<a id="rustdoc-item-8910"></a>

### `when`

```rust
when: GizmoWhen
```

Which entities it draws for.

<a id="rustdoc-item-8911"></a>

### `draw`

```rust
draw: GizmoDrawEntry
```

The generated wrapper.

<a id="rustdoc-item-8912"></a>

### `drew_last_frame`

```rust
drew_last_frame: usize
```

How many entities it drew for in the last frame.

## Associated functions and methods

<a id="rustdoc-item-8914"></a>

### `drew_last_frame`

```rust
pub fn drew_last_frame(self: &Self) -> usize;
```

How many entities this gizmo drew for in the last frame; zero while its
type is hidden, nothing is selected, or the pass never ran.

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
- `Clone`
- `Debug`
