<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6277"></a>

# Struct `pill_editor_core::hooks::watch::WatchChanges`

```rust
pub(crate) struct WatchChanges;
```

Visibility: `crate` · Source: `editor\pill_editor_core\src\hooks\watch.rs:48`

The changes one comparison found.

## Fields

<a id="rustdoc-item-6274"></a>

### `selection`

```rust
selection: Option<crate::hooks::events::SelectionChanged>
```

A selection change, when one happened.

<a id="rustdoc-item-6275"></a>

### `tool`

```rust
tool: Option<crate::hooks::events::ToolActivatedEdit>
```

An active-tool change, when one happened.

<a id="rustdoc-item-6276"></a>

### `elements`

```rust
elements: Option<crate::hooks::events::ElementSelectionChanged>
```

An element-selection change, when one happened.

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
