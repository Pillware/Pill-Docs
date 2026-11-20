<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5131"></a>

# Enum `pill_editor_core::hooks::registry::HookEvent`

```rust
pub enum HookEvent { ... }
```

Source: `editor\pill_editor_core\src\hooks\registry.rs:40`

One event a callback can answer.

## Variants

<a id="rustdoc-item-5809"></a>

### `FieldEditBefore`

```rust
FieldEditBefore
```

Before a field edit applies; the callback may replace or refuse it.

<a id="rustdoc-item-5810"></a>

### `FieldEditAfter`

```rust
FieldEditAfter
```

After a field edit applied; the callback reacts and may queue
follow-ups.

<a id="rustdoc-item-5811"></a>

### `ComponentEdit`

```rust
ComponentEdit
```

A component was added to or removed from an entity.

<a id="rustdoc-item-5812"></a>

### `EntityEdit`

```rust
EntityEdit
```

An entity was created or destroyed.

<a id="rustdoc-item-5813"></a>

### `AssetEdit`

```rust
AssetEdit
```

An asset file was created, deleted, moved or written.

<a id="rustdoc-item-5814"></a>

### `HistoryEdit`

```rust
HistoryEdit
```

The editor walked the undo history.

<a id="rustdoc-item-5815"></a>

### `SelectionChanged`

```rust
SelectionChanged
```

The shared selection changed.

<a id="rustdoc-item-5816"></a>

### `SceneEdit`

```rust
SceneEdit
```

A scene was opened or a new one started.

<a id="rustdoc-item-5817"></a>

### `PlayEdit`

```rust
PlayEdit
```

A play session started or stopped.

<a id="rustdoc-item-5818"></a>

### `ToolActivated`

```rust
ToolActivated
```

The active tool changed.

<a id="rustdoc-item-5819"></a>

### `ElementSelectionChanged`

```rust
ElementSelectionChanged
```

The selected elements changed.

## Associated functions and methods

<a id="rustdoc-item-5820"></a>

### `name`

```rust
pub fn name(self: Self) -> &'static str;
```

The event's wire name, as the log lines spell it.

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
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
