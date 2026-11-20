<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10758"></a>

# Struct `pill_editor_core::tools::ToolElementHooks`

```rust
pub struct ToolElementHooks;
```

Source: `editor\pill_editor_core\src\tools.rs:376`

The optional element-reporting half of a tool.

These are plain function pointers rather than trait methods: a record outlives
the image that registered it, and a reload registers the arriving image's
pointers in place of the old ones.

## Fields

<a id="rustdoc-item-11005"></a>

### `kinds`

```rust
kinds: Option<ToolKindReportFn>
```

The kinds the tool exposes, `None` when it reports no elements.

<a id="rustdoc-item-11006"></a>

### `elements`

```rust
elements: Option<ToolElementReportFn>
```

The elements the entity has, `None` when the tool reports none.

<a id="rustdoc-item-11007"></a>

### `set_transforms`

```rust
set_transforms: Option<ToolSetTransformsFn>
```

The write-back a gizmo drag reaches, `None` when the tool's elements
cannot be moved.

<a id="rustdoc-item-11008"></a>

### `frames`

```rust
frames: Option<ToolFrameReportFn>
```

The extra spaces the gizmo's space toggle offers, `None` when the tool
brings none.

<a id="rustdoc-item-11009"></a>

### `menu`

```rust
menu: Option<ToolMenuReportFn>
```

The rows the tool adds to the element context menu, `None` when it adds
none.

<a id="rustdoc-item-11011"></a>

### `menu_run`

```rust
menu_run: Option<ToolMenuRunFn>
```

The action behind those rows, `None` when the tool's menu is empty.

<a id="rustdoc-item-11013"></a>

### `insert`

```rust
insert: Option<ToolInsertElementFn>
```

How the tool inserts an element, `None` when it cannot.

<a id="rustdoc-item-11015"></a>

### `remove`

```rust
remove: Option<ToolRemoveElementsFn>
```

How the tool removes elements, `None` when it cannot.

<a id="rustdoc-item-11017"></a>

### `press`

```rust
press: Option<ToolPressFn>
```

What a press on one of the tool's elements means, `None` for the
editor's own rule.

<a id="rustdoc-item-11019"></a>

### `key`

```rust
key: Option<ToolKeyFn>
```

What a key means while the tool owns the element selection, `None` for
the editor's own rule.

<a id="rustdoc-item-11021"></a>

### `selection_changed`

```rust
selection_changed: Option<ToolSelectionChangedFn>
```

The tool's own note of every selection change.

## Associated functions and methods

<a id="rustdoc-item-11023"></a>

### `reports_elements`

```rust
pub fn reports_elements(self: Self) -> bool;
```

Whether the tool reports elements at all.

<a id="rustdoc-item-11024"></a>

### `moves_elements`

```rust
pub fn moves_elements(self: Self) -> bool;
```

Whether a drag can move the tool's elements.

<a id="rustdoc-item-11025"></a>

### `reports_frames`

```rust
pub fn reports_frames(self: Self) -> bool;
```

Whether the tool offers the gizmo a space of its own.

<a id="rustdoc-item-11026"></a>

### `has_menu`

```rust
pub fn has_menu(self: Self) -> bool;
```

Whether the tool adds rows to the element context menu and can run
them.

<a id="rustdoc-item-11027"></a>

### `edits_elements`

```rust
pub fn edits_elements(self: Self) -> bool;
```

Whether the tool inserts and removes elements.

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
- `Default`
