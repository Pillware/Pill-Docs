<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-204"></a>

# Struct `pill_editor_core::boundary::EguiShellInput`

```rust
pub struct EguiShellInput;
```

Source: `editor\pill_editor_core\src\boundary.rs:61`

Everything the frontend tells the shell about the frame it is about to
draw.

## Fields

<a id="rustdoc-item-189"></a>

### `screen_size`

```rust
screen_size: pill_core::math::Vector2f
```

Logical size (points) of the editor's main window client area.

<a id="rustdoc-item-191"></a>

### `scale_factor`

```rust
scale_factor: f32
```

Physical pixels per logical point.

<a id="rustdoc-item-192"></a>

### `focused`

```rust
focused: bool
```

Whether the editor window has keyboard focus.

<a id="rustdoc-item-193"></a>

### `time`

```rust
time: f64
```

Seconds since the editor started, monotonic.

<a id="rustdoc-item-194"></a>

### `frames_per_second`

```rust
frames_per_second: f32
```

The editor's smoothed frame rate, for the shell's overlays.

<a id="rustdoc-item-195"></a>

### `events`

```rust
events: Vec<pill_engine::input::InputEvent>
```

The events the editor's own windows reported since the last frame, in
the main window's client coordinates.

The game's window is not in here. Its events go to the engine's input
instead, so a project system never sees a keystroke meant for the UI.

<a id="rustdoc-item-198"></a>

### `cursor`

```rust
cursor: Option<pill_core::math::Vector2f>
```

The pointer's last known position in the same coordinates, or `None`
when the pointer is not over the editor's windows.

egui button events carry their own position, and the input bridge needs
one before the first move of a frame, because a release can arrive with
no move in front of it. This value gives it that starting point.

<a id="rustdoc-item-200"></a>

### `paste_text`

```rust
paste_text: Option<String>
```

The OS clipboard's text, when this frame's events include a paste
chord.

egui pastes only from an [`egui::Event::Paste`], and only the frontend
can read the OS clipboard. It reads the clipboard once per paste chord
and the input bridge appends the event here; without it, a focused text
field would ignore Ctrl+V.

<a id="rustdoc-item-201"></a>

### `badges`

```rust
badges: Vec<ShellBadge>
```

The entities the executable projected into this frame's scene views,
one entry per entity and view.

The executable owns the views' cameras and the renderer's projection, so
only it can say where an entity appears on screen. The shell owns the
icon atlas and draws the badge on that point.

<a id="rustdoc-item-203"></a>

### `scripted`

```rust
scripted: bool
```

Whether a scripted channel drives this run.

The Inspector logs a rectangle for every row so a suite can drop an
asset onto one without reading pixels. A person reading the console gets
nothing from those lines, so only a scripted run turns them on.

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
- `Resource`
- `Default`
