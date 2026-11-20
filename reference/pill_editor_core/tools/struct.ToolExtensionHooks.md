<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11331"></a>

# Struct `pill_editor_core::tools::ToolExtensionHooks`

```rust
pub struct ToolExtensionHooks;
```

Source: `editor\pill_editor_core\src\tools.rs:744`

The optional halves an extension adds to the tool it extends.

Every field is a plain function pointer, and `None` means the extension
does not add that half. The registry records the pointers, so a reload
registers the arriving image's in place of the old ones, exactly as
[`ToolElementHooks`](struct.ToolElementHooks.md#rustdoc-item-10758) does for a tool.

## Fields

<a id="rustdoc-item-11321"></a>

### `kinds`

```rust
kinds: Option<ToolKindReportFn>
```

The element kinds it adds.

<a id="rustdoc-item-11322"></a>

### `elements`

```rust
elements: Option<ToolElementReportFn>
```

The elements it reports for the entity, of its own kinds.

<a id="rustdoc-item-11323"></a>

### `set_transforms`

```rust
set_transforms: Option<ToolSetTransformsFn>
```

How a drag writes its elements back.

<a id="rustdoc-item-11324"></a>

### `frames`

```rust
frames: Option<ToolFrameReportFn>
```

The extra coordinate frames it offers.

<a id="rustdoc-item-11325"></a>

### `menu`

```rust
menu: Option<ToolMenuReportFn>
```

The rows it adds to the element context menu.

<a id="rustdoc-item-11326"></a>

### `menu_run`

```rust
menu_run: Option<ToolMenuRunFn>
```

The action behind those rows.

<a id="rustdoc-item-11327"></a>

### `insert`

```rust
insert: Option<ToolInsertElementFn>
```

How it inserts one of its elements.

<a id="rustdoc-item-11328"></a>

### `remove`

```rust
remove: Option<ToolRemoveElementsFn>
```

How it removes its elements.

<a id="rustdoc-item-11329"></a>

### `press`

```rust
press: Option<ToolPressFn>
```

What a press on one of its elements means.

<a id="rustdoc-item-11330"></a>

### `key`

```rust
key: Option<ToolKeyFn>
```

What one of its chords means.

## Associated functions and methods

<a id="rustdoc-item-11332"></a>

### `is_empty`

```rust
pub fn is_empty(self: Self) -> bool;
```

Whether the extension adds any half at all.

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
