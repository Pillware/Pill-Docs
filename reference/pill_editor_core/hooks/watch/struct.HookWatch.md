<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6311"></a>

# Struct `pill_editor_core::hooks::watch::HookWatch`

```rust
pub struct HookWatch;
```

Source: `editor\pill_editor_core\src\hooks\watch.rs:59`

The selection and tool state the last drain reported.

## Fields

<a id="rustdoc-item-6307"></a>

### `selection`

```rust
selection: Option<crate::hooks::events::SelectionSnapshot>
```

The selection, once a drain has seen one.

<a id="rustdoc-item-6309"></a>

### `active_tool`

```rust
active_tool: Option<Option<String>>
```

The active tool, once a drain has seen one.

<a id="rustdoc-item-6310"></a>

### `elements`

```rust
elements: Option<ElementWatch>
```

The element slot, once a drain has seen one.

## Associated functions and methods

<a id="rustdoc-item-6312"></a>

### `apply`

```rust
pub(crate) fn apply(self: &mut Self, selection: SelectionSnapshot, active_tool: Option<String>, elements: ElementWatch) -> WatchChanges;
```

Compares the live state with the recorded one, records it, and answers
what changed.

The first observation records silently: a session that starts with an
entity selected must not report a change nobody made.

<a id="rustdoc-item-6313"></a>

### `ensure`

```rust
pub fn ensure(world: &mut World);
```

Registers the resource, inserting a default only when the world has
none.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
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
- `Debug`
- `Default`
- `Resource`
