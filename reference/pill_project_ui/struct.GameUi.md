<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-305"></a>

# Struct `pill_project_ui::GameUi`

```rust
pub struct GameUi;
```

Source: `ui\pill_project_ui\src\lib.rs:90`

The game's UI: one egui context, the theme it paints with, and the result
of the last pass.

## Fields

<a id="rustdoc-item-282"></a>

### `context`

```rust
context: egui::Context
```

The context a project's UI closures run in.

<a id="rustdoc-item-284"></a>

### `input_memory`

```rust
input_memory: InputMemory
```

What the previous frame told the input bridge.

<a id="rustdoc-item-285"></a>

### `textures`

```rust
textures: textures::TextureMirror
```

Every texture egui handed out, kept whole.

<a id="rustdoc-item-286"></a>

### `started_at`

```rust
started_at: pill_core::platform::Instant
```

When this UI was created, for egui's animation clock.

<a id="rustdoc-item-288"></a>

### `draw_count`

```rust
draw_count: usize
```

How many draws the last pass produced.

<a id="rustdoc-item-289"></a>

### `wants_pointer`

```rust
wants_pointer: bool
```

Whether the last pass wanted the pointer.

<a id="rustdoc-item-290"></a>

### `wants_keyboard`

```rust
wants_keyboard: bool
```

Whether the last pass wanted the keyboard.

<a id="rustdoc-item-291"></a>

### `served_resend_generation`

```rust
served_resend_generation: u64
```

The painter's resend request this UI last served.

A rebuilt renderer starts with an empty texture map and asks for every
image again. The request is a counter, so this UI can tell a new
request from the one it already served.

<a id="rustdoc-item-292"></a>

### `base`

```rust
base: Theme
```

The project's code default, before any override.

<a id="rustdoc-item-293"></a>

### `applied`

```rust
applied: Theme
```

The theme the context currently paints with.

<a id="rustdoc-item-294"></a>

### `generation`

```rust
generation: u64
```

How many themes this UI has applied.

<a id="rustdoc-item-295"></a>

### `override_path`

```rust
override_path: Option<String>
```

The override path the project named, when one loaded.

<a id="rustdoc-item-296"></a>

### `override_handle`

```rust
override_handle: Option<pill_engine_core::Handle<ThemeOverrides>>
```

The loaded override, when one loaded.

<a id="rustdoc-item-298"></a>

### `override_version`

```rust
override_version: Option<u64>
```

The override's content version this UI last merged from.

<a id="rustdoc-item-299"></a>

### `font_handles`

```rust
font_handles: [Option<pill_engine_core::Handle<pill_ui_theme::FontAsset>>; 3]
```

The three font families' handles, in [`kit::style::ThemeFonts`] order
(body, display, monospace).

<a id="rustdoc-item-301"></a>

### `font_versions`

```rust
font_versions: [Option<u64>; 3]
```

Those handles' content versions when the bytes were last read.

<a id="rustdoc-item-302"></a>

### `fonts`

```rust
fonts: kit::style::ThemeFonts
```

The bytes the kit installs.

<a id="rustdoc-item-303"></a>

### `font_signature`

```rust
font_signature: kit::style::FontSignature
```

The font set installed in the context.

## Associated functions and methods

<a id="rustdoc-item-306"></a>

### `new`

```rust
pub fn new() -> GameUi;
```

A UI with a fresh context, the fallback theme installed and no
textures.

<a id="rustdoc-item-307"></a>

### `context`

```rust
pub fn context(self: &Self) -> &Context;
```

The egui context a project's UI closure runs in.

Exposed for the callers a facade cannot wrap - a project that installs
its own style, or a test that inspects egui's own state.

<a id="rustdoc-item-308"></a>

### `theme`

```rust
pub fn theme(self: &Self) -> &Theme;
```

The theme the context currently paints with.

<a id="rustdoc-item-309"></a>

### `base_theme`

```rust
pub fn base_theme(self: &Self) -> &Theme;
```

The code default the active theme was merged from.

<a id="rustdoc-item-310"></a>

### `theme_generation`

```rust
pub fn theme_generation(self: &Self) -> u64;
```

How many themes this UI has applied.

<a id="rustdoc-item-311"></a>

### `apply_theme`

```rust
pub fn apply_theme(self: &mut Self, theme: &Theme);
```

Install `theme` on this UI's context.

The theme is plain data, so what reaches the context's style is egui's
own types and owned font bytes. Nothing a reload could invalidate is
stored there.

<a id="rustdoc-item-312"></a>

### `apply_and_record_theme`

```rust
pub(crate) fn apply_and_record_theme(self: &mut Self, theme: &Theme);
```

Apply `theme`, record it as the active theme and log the application.

<a id="rustdoc-item-313"></a>

### `refresh_from_assets`

```rust
pub(crate) fn refresh_from_assets(self: &mut Self, assets: &AssetManager);
```

Re-merge the base with the override when the override's content moved.

A refused merge warns and keeps the theme that is already applied. An
edited font re-installs the fonts on its own, because the store's
content version of the font moved even when the theme did not.

<a id="rustdoc-item-315"></a>

### `refresh_font_bytes`

```rust
pub(crate) fn refresh_font_bytes(self: &mut Self, assets: &AssetManager) -> bool;
```

Re-read the loaded fonts whose content moved, and report whether one
did.

The bytes are copied out of the store again. The handle, the file name
and the guid stay as they were, so the context sees an edited file as a
new font set and nothing else.

<a id="rustdoc-item-277"></a>

### `run`

```rust
pub fn run<impl FnMut(&mut egui::Ui): FnMut(&mut egui::Ui)>(self: &mut Self, slot: &mut UiFrameSlot, input: &InputFrame, viewport: Vector2f, scale_factor: f32, surface: u32, build: impl FnMut(&mut egui::Ui));
```

Run one pass. `build` draws the UI, and the frame it produces is
published into `slot`, where the renderer takes it.

`input` is this frame's engine snapshot (see [`InputFrame::capture`](input/struct.InputFrame.md#rustdoc-item-30)).
`viewport` is the UI's logical size, and `scale_factor` is the monitor
scale. `surface` is the id of the surface the frame is drawn into.

A frame that a previous pass published and nobody drained is thrown
away, so the renderer always draws the newest one.

<a id="rustdoc-item-318"></a>

### `draws`

```rust
pub fn draws(self: &Self) -> usize;
```

How many draws the last pass produced.

<a id="rustdoc-item-319"></a>

### `wants_pointer`

```rust
pub fn wants_pointer(self: &Self) -> bool;
```

Whether the last pass wants the pointer. A game uses this to decide
whether to act on its own pointer input.

<a id="rustdoc-item-320"></a>

### `wants_keyboard`

```rust
pub fn wants_keyboard(self: &Self) -> bool;
```

Whether the last pass wants the keyboard. A game uses this to decide
whether to act on its own key input.

<a id="rustdoc-item-321"></a>

### `texture_count`

```rust
pub fn texture_count(self: &Self) -> usize;
```

How many textures the UI currently mirrors.

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
