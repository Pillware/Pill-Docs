<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5860"></a>

# Enum `pill_editor_core::hooks::registry::HookCallback`

```rust
pub enum HookCallback { ... }
```

Source: `editor\pill_editor_core\src\hooks\registry.rs:153`

The erased callback of one registration.

## Variants

<a id="rustdoc-item-5939"></a>

### `FieldEditBefore`

```rust
FieldEditBefore
```

A before-callback for a field edit.

<a id="rustdoc-item-5941"></a>

### `FieldEditAfter`

```rust
FieldEditAfter
```

An after-callback for a field edit.

<a id="rustdoc-item-5943"></a>

### `ComponentEdit`

```rust
ComponentEdit
```

A component add or remove.

<a id="rustdoc-item-5945"></a>

### `EntityEdit`

```rust
EntityEdit
```

An entity create or destroy.

<a id="rustdoc-item-5947"></a>

### `AssetEdit`

```rust
AssetEdit
```

An asset-file edit.

<a id="rustdoc-item-5949"></a>

### `HistoryEdit`

```rust
HistoryEdit
```

An undo or redo walk.

<a id="rustdoc-item-5951"></a>

### `SelectionChanged`

```rust
SelectionChanged
```

A selection change.

<a id="rustdoc-item-5953"></a>

### `SceneEdit`

```rust
SceneEdit
```

A scene open or new.

<a id="rustdoc-item-5955"></a>

### `PlayEdit`

```rust
PlayEdit
```

A play session started or stopped.

<a id="rustdoc-item-5957"></a>

### `ToolActivated`

```rust
ToolActivated
```

The active tool changed.

<a id="rustdoc-item-5959"></a>

### `ElementSelectionChanged`

```rust
ElementSelectionChanged
```

The selected elements changed.

## Associated functions and methods

<a id="rustdoc-item-5960"></a>

### `event`

```rust
pub fn event(self: Self) -> HookEvent;
```

The event this callback answers.

<a id="rustdoc-item-5961"></a>

### `call_field_edit`

```rust
pub(crate) unsafe fn call_field_edit(self: Self, context: &mut HookContext<'_>, view: &FieldEditView<'_>) -> Option<HookVerdict>;
```

Calls the callback with one field edit.

#### Safety

The callback and its applier are a pair the request constructors built
together; the applier expects the address it was stored with.

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
- `Copy`
- `Debug`
