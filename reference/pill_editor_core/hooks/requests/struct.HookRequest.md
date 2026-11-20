<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6117"></a>

# Struct `pill_editor_core::hooks::requests::HookRequest`

```rust
pub struct HookRequest;
```

Source: `editor\pill_editor_core\src\hooks\requests.rs:38`

One callback a module asks the editor to register.

Built by [`FieldEditHookRequest`](struct.FieldEditHookRequest.md#rustdoc-item-6116), never by hand: the callback and its
applier are a pair only the constructors can form.

## Fields

<a id="rustdoc-item-6112"></a>

### `source`

```rust
source: &'static str
```

The crate registering it.

<a id="rustdoc-item-6114"></a>

### `event`

```rust
event: crate::hooks::registry::HookEvent
```

The event it answers.

<a id="rustdoc-item-6115"></a>

### `callback`

```rust
callback: crate::hooks::registry::HookCallback
```

The erased callback.

## Associated functions and methods

<a id="rustdoc-item-6118"></a>

### `source`

```rust
pub fn source(self: &Self) -> &'static str;
```

The crate registering it.

<a id="rustdoc-item-6119"></a>

### `event`

```rust
pub fn event(self: &Self) -> HookEvent;
```

The event it answers.

<a id="rustdoc-item-6120"></a>

### `callback`

```rust
pub fn callback(self: &Self) -> HookCallback;
```

The erased callback.

<a id="rustdoc-item-6121"></a>

### `plain`

```rust
pub(in hooks::requests) fn plain(source: &'static str, callback: HookCallback) -> HookRequest;
```

One request whose callback is already a plain function pointer.

<a id="rustdoc-item-6123"></a>

### `component_edit`

```rust
pub fn component_edit(source: &'static str, callback: fn (_: &mut HookContext<'_>, _: &ComponentEdit<'_>)) -> HookRequest;
```

Builds a component add/remove callback.

<a id="rustdoc-item-6124"></a>

### `entity_edit`

```rust
pub fn entity_edit(source: &'static str, callback: fn (_: &mut HookContext<'_>, _: &EntityEdit)) -> HookRequest;
```

Builds an entity create/destroy callback.

<a id="rustdoc-item-6125"></a>

### `asset_edit`

```rust
pub fn asset_edit(source: &'static str, callback: fn (_: &mut HookContext<'_>, _: &AssetEdit<'_>)) -> HookRequest;
```

Builds an asset-file edit callback.

<a id="rustdoc-item-6126"></a>

### `history_edit`

```rust
pub fn history_edit(source: &'static str, callback: fn (_: &mut HookContext<'_>, _: &HistoryEdit<'_>)) -> HookRequest;
```

Builds an undo/redo callback.

<a id="rustdoc-item-6127"></a>

### `selection_changed`

```rust
pub fn selection_changed(source: &'static str, callback: fn (_: &mut HookContext<'_>, _: &SelectionChanged)) -> HookRequest;
```

Builds a selection-change callback.

<a id="rustdoc-item-6128"></a>

### `scene_edit`

```rust
pub fn scene_edit(source: &'static str, callback: fn (_: &mut HookContext<'_>, _: &SceneEdit<'_>)) -> HookRequest;
```

Builds a scene open/new callback.

<a id="rustdoc-item-6129"></a>

### `play_edit`

```rust
pub fn play_edit(source: &'static str, callback: fn (_: &mut HookContext<'_>, _: &PlayEdit)) -> HookRequest;
```

Builds a play/stop callback.

<a id="rustdoc-item-6130"></a>

### `tool_activated`

```rust
pub fn tool_activated(source: &'static str, callback: fn (_: &mut HookContext<'_>, _: &ToolActivatedEdit)) -> HookRequest;
```

Builds an active-tool callback.

<a id="rustdoc-item-6131"></a>

### `element_selection`

```rust
pub fn element_selection(source: &'static str, callback: fn (_: &mut HookContext<'_>, _: &ElementSelectionChanged)) -> HookRequest;
```

Builds an element-selection callback.

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
