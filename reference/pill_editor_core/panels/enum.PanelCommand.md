<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5793"></a>

# Enum `pill_editor_core::panels::PanelCommand`

```rust
pub enum PanelCommand { ... }
```

Source: `editor\pill_editor_core\src\panels.rs:60`

What a panel may ask the editor to do.

A panel queues these into [`PanelContext::commands`](struct.PanelContext.md#rustdoc-item-5792) instead of changing
the world itself. The editor applies them after the draw, the same contract
`EditorCommand` follows, so a panel from a module cannot leave the frame
half-applied.

## Variants

<a id="rustdoc-item-5773"></a>

### `SelectEntity`

```rust
SelectEntity
```

Make this entity the editor's selection.

<a id="rustdoc-item-5778"></a>

### `SetField`

```rust
SetField
```

Write one component field through the editor's recorded edit path, so
the change is one undo step. The text is parsed against the field's
current value, the same way the Inspector's own rows parse it.

<a id="rustdoc-item-5784"></a>

### `SetArrayElement`

```rust
SetArrayElement
```

Write one element of an array field, recorded the same way.

<a id="rustdoc-item-5787"></a>

### `OpenWindow`

```rust
OpenWindow
```

Ask the shell to show a window of this panel's.

<a id="rustdoc-item-5789"></a>

### `CloseWindow`

```rust
CloseWindow
```

Close one of this panel's windows.

<a id="rustdoc-item-5791"></a>

### `Log`

```rust
Log
```

Write a line the editor's log shows. A module's only way to say what
it did without owning a log of its own.

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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
