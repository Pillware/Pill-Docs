<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4453"></a>

# Struct `pill_editor_core::gizmo::ElementHandleMap`

```rust
pub struct ElementHandleMap;
```

Source: `editor\pill_editor_core\src\gizmo.rs:552`

One frame's element handles: the slot in this list a handle's id was built
from answers what the handle points at.

The editor rebuilds it every frame from the active tool's report, so a
handle can never outlive the element it was drawn for.

## Fields

<a id="rustdoc-item-4452"></a>

### `targets`

```rust
targets: Vec<ElementHandleTarget>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-4454"></a>

### `new`

```rust
pub fn new() -> ElementHandleMap;
```

An empty map, ready for a frame's handles.

<a id="rustdoc-item-4455"></a>

### `push`

```rust
pub fn push(self: &mut Self, target: ElementHandleTarget) -> u32;
```

Records `target` as the next handle and answers with its id.

#### Panics

Panics when a frame reports more than [`ELEMENT_HANDLE_LIMIT`](constant.ELEMENT_HANDLE_LIMIT.md#rustdoc-item-4408)
elements; the limit is far above what a tool on one entity reports.

<a id="rustdoc-item-4456"></a>

### `target`

```rust
pub fn target(self: &Self, handle: u32) -> Option<&ElementHandleTarget>;
```

What `handle` points at, or `None` when it is not one of this frame's
element handles.

<a id="rustdoc-item-4457"></a>

### `targets`

```rust
pub fn targets(self: &Self) -> &[ElementHandleTarget];
```

The recorded handles in slot order.

<a id="rustdoc-item-4458"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether the frame reported no elements.

<a id="rustdoc-item-4459"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

How many elements the frame reported.

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
- `SerializableAny`
- `Equivalent<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
