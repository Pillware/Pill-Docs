<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-592"></a>

# Struct `pill_editor::runner::GizmoDrag`

```rust
pub(in runner) struct GizmoDrag;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4540`

One gizmo drag in flight.

The press records where the drag started: the axis parameter, ring angle or
in-plane coordinates the cursor ray named, the transform it began from, and
the basis its handles were built in. Every move then applies a delta to
those recorded values, so nothing jumps on the first pixel. The start pivot
stays fixed for the displacement line while the current pivot follows the
object.

## Fields

<a id="rustdoc-item-1930"></a>

### `view`

```rust
view: usize
```

The scene view the drag belongs to: every move re-reads that view's
ray.

<a id="rustdoc-item-1931"></a>

### `handle`

```rust
handle: u32
```

The handle id the drag holds: its axis, or its plane's pair.

<a id="rustdoc-item-1932"></a>

### `kind`

```rust
kind: pill_editor_core::gizmo::HandleKind
```

What the handle addresses.

<a id="rustdoc-item-1934"></a>

### `entity`

```rust
entity: pill_engine_core::Entity
```

The entity being dragged.

<a id="rustdoc-item-1935"></a>

### `original`

```rust
original: pill_player::TransformComponent
```

The transform at the press; every move is computed from it, so a
snapped drag cannot accumulate rounding.

<a id="rustdoc-item-1936"></a>

### `basis`

```rust
basis: [[f32; 3]; 3]
```

The frame the handles were built in (the world axes, a tool's own
frame, or the object's rotated ones): a drag follows these for its
whole life.

<a id="rustdoc-item-1937"></a>

### `start_value`

```rust
start_value: f32
```

The axis parameter (translate, scale) or ring angle (rotate) at the
press; unused by a plane drag.

<a id="rustdoc-item-1938"></a>

### `start_plane`

```rust
start_plane: Option<(f32, f32)>
```

The in-plane coordinates at the press; `None` for a single axis.

<a id="rustdoc-item-1939"></a>

### `start_pivot`

```rust
start_pivot: [f32; 3]
```

The gizmo's world pivot when the drag began: the displacement line's
fixed end.

<a id="rustdoc-item-1940"></a>

### `current_pivot`

```rust
current_pivot: [f32; 3]
```

The pivot now, so the line's other end follows every move.

<a id="rustdoc-item-1941"></a>

### `reference`

```rust
reference: f32
```

How long the handles were at the press, in world units: the scale
drag's reference and the guides' dash length.

<a id="rustdoc-item-1942"></a>

### `last_value`

```rust
last_value: Option<[f32; 4]>
```

The value written on the previous move, for the end log.

<a id="rustdoc-item-1943"></a>

### `written`

```rust
written: Option<(&'static str, Vec<f32>)>
```

The transform field the last move wrote and the values it wrote there:
the release turns these into one recorded step.

<a id="rustdoc-item-1944"></a>

### `subject`

```rust
subject: DragSubject
```

Whether the drag moves the entity's transform or a tool's elements.

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
- `SerializableAny`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
- `Debug`
