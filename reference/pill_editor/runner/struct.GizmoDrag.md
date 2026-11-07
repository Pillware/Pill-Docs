<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-532"></a>

# Struct `pill_editor::runner::GizmoDrag`

```rust
pub(in runner) struct GizmoDrag;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3924`

One gizmo drag in flight.

The press records where the drag started: the axis parameter, ring angle or
in-plane coordinates the cursor ray named, the transform it began from, and
the basis its handles were built in. Every move then applies a delta to
those recorded values, so nothing jumps on the first pixel. The start pivot
stays fixed for the displacement line while the current pivot follows the
object.

## Fields

<a id="rustdoc-item-1475"></a>

### `view`

```rust
view: usize
```

The scene view the drag belongs to: every move re-reads that view's
ray.

<a id="rustdoc-item-1476"></a>

### `handle`

```rust
handle: u32
```

The handle id the drag holds: its axis, or its plane's pair.

<a id="rustdoc-item-1477"></a>

### `kind`

```rust
kind: pill_editor_core::gizmo::HandleKind
```

What the handle addresses.

<a id="rustdoc-item-1479"></a>

### `entity`

```rust
entity: pill_engine_core::Entity
```

The entity being dragged.

<a id="rustdoc-item-1480"></a>

### `original`

```rust
original: pill_player::TransformComponent
```

The transform at the press; every move is computed from it, so a
snapped drag cannot accumulate rounding.

<a id="rustdoc-item-1481"></a>

### `basis`

```rust
basis: [[f32; 3]; 3]
```

The frame the handles were built in (the world axes, or the object's
rotated ones): a local-space drag follows these for its whole life.

<a id="rustdoc-item-1482"></a>

### `start_value`

```rust
start_value: f32
```

The axis parameter (translate, scale) or ring angle (rotate) at the
press; unused by a plane drag.

<a id="rustdoc-item-1483"></a>

### `start_plane`

```rust
start_plane: Option<(f32, f32)>
```

The in-plane coordinates at the press; `None` for a single axis.

<a id="rustdoc-item-1484"></a>

### `start_pivot`

```rust
start_pivot: [f32; 3]
```

The gizmo's world pivot when the drag began: the displacement line's
fixed end.

<a id="rustdoc-item-1485"></a>

### `current_pivot`

```rust
current_pivot: [f32; 3]
```

The pivot now, so the line's other end follows every move.

<a id="rustdoc-item-1486"></a>

### `reference`

```rust
reference: f32
```

How long the handles were at the press, in world units: the scale
drag's reference and the guides' dash length.

<a id="rustdoc-item-1487"></a>

### `last_value`

```rust
last_value: Option<[f32; 4]>
```

The value written on the previous move, for the end log.

<a id="rustdoc-item-1488"></a>

### `written`

```rust
written: Option<(&'static str, Vec<f32>)>
```

The transform field the last move wrote and the values it wrote there:
the release turns these into one recorded step.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
