<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4966"></a>

# Struct `pill_editor_core::session::InspectorSession`

```rust
pub struct InspectorSession;
```

Source: `editor\pill_editor_core\src\session.rs:770`

The Inspector's session state: which component sections are collapsed, and
the geometry its log already reported.

Session-scoped like the toolbox: a shell reload keeps it, a restart starts
every section expanded. The collapse state is keyed by the registered type
name, so selecting another entity keeps a type's foldout where the user
left it (Unity's behaviour).

## Fields

<a id="rustdoc-item-7909"></a>

### `collapsed`

```rust
collapsed: std::collections::BTreeSet<String>
```

The component type names whose sections are collapsed.

<a id="rustdoc-item-7910"></a>

### `section_rects`

```rust
section_rects: LoggedRects<String>
```

Each section header's last logged rectangle, keyed by type name.

<a id="rustdoc-item-7911"></a>

### `add_rect`

```rust
add_rect: Option<egui::Rect>
```

The Add Component button's last logged rectangle.

<a id="rustdoc-item-7912"></a>

### `add_open`

```rust
add_open: bool
```

Whether the Add Component popup is open.

<a id="rustdoc-item-7913"></a>

### `add_entries`

```rust
add_entries: LoggedRects<String>
```

The addable entries' last logged rectangles, keyed by type name.

<a id="rustdoc-item-7914"></a>

### `row_models`

```rust
row_models: std::collections::BTreeMap<String, crate::inspector::CachedRows>
```

The row model each drawn component's section shows, keyed by its
registered type name: the rows, their once-per-subject log memory and
the selection's write targets.

<a id="rustdoc-item-7915"></a>

### `notices_logged`

```rust
notices_logged: std::collections::BTreeSet<String>
```

The one-shot notices the Inspector already logged, keyed by what they
describe (the selected asset's key): the tab redraws every frame.

<a id="rustdoc-item-7916"></a>

### `subject`

```rust
subject: Option<pill_engine::Entity>
```

The entity whose rows were last reported. A different subject clears
the row memories below, because the rows on screen are that entity's.

<a id="rustdoc-item-7917"></a>

### `asset_row_rects`

```rust
asset_row_rects: LoggedRects<String>
```

Each asset reference row's last logged rectangle, keyed by
`entity.component.field`: what a suite drops an asset onto.
Only a row on screen keeps an entry; see the shell's
`remember_asset_row_rect`.

<a id="rustdoc-item-7918"></a>

### `log_rects`

```rust
log_rects: bool
```

Whether the row and section rectangles reach the log.

The shell sets it from the frame's `scripted` flag
([`crate::boundary::EguiShellInput`](../boundary/struct.EguiShellInput.md#rustdoc-item-204)): a scripted run reads these
rectangles to aim a click or a drop, and a person's editor does not
need a line per placement.

<a id="rustdoc-item-7919"></a>

### `asset_row_texts`

```rust
asset_row_texts: LoggedTexts<String>
```

Each asset reference row's last logged text, keyed the same way: the
row logs again whenever it draws a different asset.

<a id="rustdoc-item-7920"></a>

### `asset_picker`

```rust
asset_picker: Option<String>
```

The `component.field` whose asset picker is open, if one is.

<a id="rustdoc-item-7921"></a>

### `asset_search`

```rust
asset_search: String
```

The open asset picker's search text.

<a id="rustdoc-item-7922"></a>

### `entity_row_rects`

```rust
entity_row_rects: LoggedRects<String>
```

Each entity reference row's last logged rectangle, keyed by
`entity.component.field`: what a suite drags an
entity onto.

<a id="rustdoc-item-7923"></a>

### `entity_row_texts`

```rust
entity_row_texts: LoggedTexts<String>
```

Each entity reference row's last logged text, keyed the same way: the
row logs again whenever it draws a different entity.

<a id="rustdoc-item-7924"></a>

### `entity_picker`

```rust
entity_picker: Option<String>
```

The `component.field` whose entity picker is open, if one is.

<a id="rustdoc-item-7925"></a>

### `entity_search`

```rust
entity_search: String
```

The open entity picker's search text.

<a id="rustdoc-item-7926"></a>

### `settings_picker`

```rust
settings_picker: Option<String>
```

The settings-document key (`textures.albedo`) whose picker is open, if
one is.

<a id="rustdoc-item-7927"></a>

### `settings_search`

```rust
settings_search: String
```

The open settings picker's search text.

<a id="rustdoc-item-7928"></a>

### `settings_row_rects`

```rust
settings_row_rects: LoggedRects<String>
```

Each reference-list row's last logged rectangle, keyed by
`asset:family[index]`: what a suite drags to reorder a list.

<a id="rustdoc-item-7929"></a>

### `hierarchy_row_rects`

```rust
hierarchy_row_rects: LoggedRects<String>
```

Each Hierarchy row's last logged rectangle, keyed by the entity's
display: what a suite drags onto an entity reference
row. The Entities tab shares this session, since the cache is the same
"geometry the log already reported" concern.

<a id="rustdoc-item-7930"></a>

### `badge_rects`

```rust
badge_rects: LoggedRects<String>
```

Each scene badge's last logged rectangle, keyed by `view:entity`:
what a suite clicks to select through a badge.

<a id="rustdoc-item-7932"></a>

### `hierarchy_seen`

```rust
hierarchy_seen: std::collections::BTreeSet<String>
```

The Hierarchy rows this pass drew, so [`Self::begin_geometry_pass`](#rustdoc-item-7931) can
drop the ones that left: the tab redraws what it shows, and the
Entities list can be tens of thousands of rows long.

<a id="rustdoc-item-7933"></a>

### `badge_seen`

```rust
badge_seen: std::collections::BTreeSet<String>
```

The scene badges this pass drew, keyed like [`Self::badge_rects`](#rustdoc-item-7930).

## Associated functions and methods

<a id="rustdoc-item-7934"></a>

### `clear_geometry`

```rust
pub fn clear_geometry(self: &mut Self);
```

Forget every rectangle and text the log already reported.

Called when the subject changes: the rows on screen are another
entity's, so their geometry has to be reported again for the new one.

<a id="rustdoc-item-7931"></a>

### `begin_geometry_pass`

```rust
pub fn begin_geometry_pass(self: &mut Self);
```

Start a frame of geometry reporting: drop the rows and badges the
previous frame did not draw, then collect this frame's.

The seen sets collect every pass of a frame, the main dock pass and the
popped-out tabs' passes, so a tab drawn in its own window still counts
as drawn. Without the prune the two caches would grow with every entity
the session ever listed and never shrink; a hidden row's rectangle is
not one a suite can click, so forgetting it costs nothing - it logs
again when the row comes back.

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
- `Default`
