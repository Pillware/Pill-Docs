<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5386"></a>

# Struct `pill_editor_core::session::EguiShellState`

```rust
pub struct EguiShellState;
```

Source: `editor\pill_editor_core\src\session.rs:94`

The egui shell's session: the reload handle, the pass scratch, the
measurements and the two requests the shell and the executable exchange.

The file header is the ownership map: a field that must survive a reload
sits under the reload handle, a field a pass writes under pass scratch, a
field the Statistics tab or the log reads under measurements, and a field
another side answers under requests.

## Fields

<a id="rustdoc-item-7229"></a>

### `context`

```rust
context: egui::Context
```

The egui context: fonts, memory and widget state.

<a id="rustdoc-item-7230"></a>

### `dock`

```rust
dock: crate::layout::EditorDock
```

The dock layout, persisted across restarts.

<a id="rustdoc-item-7231"></a>

### `frame_index`

```rust
frame_index: u64
```

How many egui passes the shell has started; the shell's row heartbeat
and its toast expiry read it.

<a id="rustdoc-item-7232"></a>

### `applied_theme_generation`

```rust
applied_theme_generation: u64
```

The theme generation this session last installed, as the executable
publishes it on the snapshot. The shell installs the merged theme
whenever this number moves, so a reloaded shell starts with the theme
already in force.

<a id="rustdoc-item-12"></a>

### `asset_dialog`

```rust
asset_dialog: Option<crate::assets::AssetDialog>
```

The open asset dialog, if there is one: the create or rename window's
state, kept here so a shell reload finds it.

<a id="rustdoc-item-7233"></a>

### `preferences_draft`

```rust
preferences_draft: Option<std::collections::BTreeMap<String, String>>
```

The Preferences tab's unsaved field values, keyed like the file. It is
`None` until the tab seeds it from the snapshot and again after a save,
so the rows re-seed from the file on the next frame.

<a id="rustdoc-item-7234"></a>

### `toolbox`

```rust
toolbox: ToolboxSession
```

The floating viewport toolboxes' session state.

<a id="rustdoc-item-7236"></a>

### `browser`

```rust
browser: crate::browser::ProjectBrowser
```

The Assets tab's project browser: the folder its grid lists, the
tree's open folders and the tile size.

<a id="rustdoc-item-7237"></a>

### `mark`

```rust
mark: Option<egui::TextureHandle>
```

The brand mark's texture, uploaded on the first frame and kept for the
session: the context owns it, so a shell reload reuses it.

<a id="rustdoc-item-7239"></a>

### `previews`

```rust
previews: PreviewStates
```

The asset tiles' previews. One value holds the textures the executable
sent back, the tiles it answered with no pixels, and the tiles this
pass drew, because the three together answer one question: may this
tile be asked for now?

<a id="rustdoc-item-7241"></a>

### `menubar`

```rust
menubar: MenubarSession
```

The menu bar's logged geometry and its open state.

<a id="rustdoc-item-7243"></a>

### `inspector`

```rust
inspector: InspectorSession
```

The Inspector's collapsed component sections and its logged geometry.

<a id="rustdoc-item-7244"></a>

### `toasts`

```rust
toasts: ToastSession
```

The toasts the host's notices put on screen.

<a id="rustdoc-item-7246"></a>

### `palette`

```rust
palette: PaletteState
```

The command palette's open state and query.

<a id="rustdoc-item-7248"></a>

### `console_filters`

```rust
console_filters: crate::console::ConsoleFilterSettings
```

The Console tab's filters. The tab edits them, and the executable copies
them into the Console history before the next snapshot.

<a id="rustdoc-item-7249"></a>

### `requests`

```rust
requests: crate::requests::ShellRequests
```

The asks this pass raised for the executable: a Problems row, an undo
or redo, a dock tab. `settle_pass` moves the value onto
[`crate::boundary::EguiShellFrame`](../boundary/struct.EguiShellFrame.md#rustdoc-item-389), and the executable answers it at
its frame boundary, so the executable never reads these from the
session.

<a id="rustdoc-item-7250"></a>

### `stats`

```rust
stats: StatisticsSession
```

The per-tab and whole-pass timings the Statistics tab shows.

<a id="rustdoc-item-7252"></a>

### `panel_budget`

```rust
panel_budget: PanelBudget
```

Every module panel's build time, and which of them overshoots the
budget.

<a id="rustdoc-item-7254"></a>

### `panels_remapped`

```rust
panels_remapped: bool
```

Whether this session has already mapped the saved layout's panel tabs
from the ids it was written with to the slots the registry uses today.
It happens once per session, not once per shell generation, so a
reload never undoes a dock the user rearranged.

<a id="rustdoc-item-7255"></a>

### `panel_windows`

```rust
panel_windows: PanelWindowSession
```

The windows the module panels asked for.

<a id="rustdoc-item-7257"></a>

### `pending_panel_window`

```rust
pending_panel_window: Option<(u16, String)>
```

The window a scripted `panel window <slot> <id>` line asked a panel to
open: the panel's slot and the window id it should choose. The shell
clears it only in the pass where that panel draws - a request must not
be dropped by a frame where its tab was not on screen.

<a id="rustdoc-item-7258"></a>

### `popout_contexts`

```rust
popout_contexts: std::collections::BTreeMap<crate::layout::EditorTab, egui::Context>
```

One egui context per popped-out tab: a popped-out window runs its own
pass, so it needs its own context while the main one runs the dock in
the same frame. The map lives in the session for the same reason the
main context does: a shell reload must find each window's widget state
where it left it.

## Associated functions and methods

<a id="rustdoc-item-7259"></a>

### `claim_generation`

```rust
pub fn claim_generation(self: &mut Self) -> ContextClaim;
```

Clear every egui context this session owns and report what was cleared.

The session owns the main context and one context per popped-out tab,
so a third kind of context joins this method instead of gaining a flag
of its own in the shell. A shell generation calls it on its first
frame, before its pass: a value the previous generation left in
`Memory::data` carries that image's drop code, and touching it after
the reload is a use-after-unmap.

<a id="rustdoc-item-7261"></a>

### `new`

```rust
pub fn new() -> Self;
```

Session state with the editor's theme and the saved dock.

A document this build cannot use falls back to the default layout and
logs why (`[editor] layout reset`); a missing one is the first run.

<a id="rustdoc-item-7262"></a>

### `mark_texture`

```rust
pub fn mark_texture(self: &mut Self) -> TextureHandle;
```

The brand mark's texture, uploaded on first use and cloned from then on.

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
- `Resource`
- `Default`
