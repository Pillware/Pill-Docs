<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9524"></a>

# Module `pill_editor_core::session`

Source: `editor\pill_editor_core\src\session.rs:1`

The egui shell's long-lived session state.
The egui shell's long-lived session state.

## Responsibilities

- Own [`EguiShellState`], the shell's one world resource: the reload handle,
  the pass scratch, the measurements and the two requests the shell and the
  executable exchange.
- Own the per-tab and chrome state those groups are made of: the menu bar's
  geometry ([`MenubarSession`]), the Inspector's rows and geometry
  ([`InspectorSession`]), the toolbox ([`ToolboxSession`]), the command
  palette ([`PaletteState`]), the toasts ([`ToastSession`]), the windows
  modules open ([`PanelWindowSession`]) and the asset previews
  ([`PreviewStates`]).
- Own the measurements the Statistics tab and the log read
  ([`StatisticsSession`], [`PanelBudget`]) and the two log-once caches
  ([`LoggedRects`], [`LoggedTexts`]).

## Design

[`EguiShellState`]'s fields fall into four groups, and a new field belongs
to the group whose owner and boundary it shares:

- **the reload handle** - `context`, `dock`, `mark`, `popout_contexts`,
  `applied_theme_generation`, `panels_remapped`: what a shell generation
  must find exactly where the previous one left it. The executable never
  writes these.
- **pass scratch** - the dialog, the preferences draft, the toolbox, the
  browser, the Inspector, the menu bar, the toasts, the palette, the panel
  windows and the previews: the shell owns them, and they survive a reload
  only so a redraw continues where it was.
- **measurements** - `frame_index`, `stats`, `panel_budget`: the shell
  writes them around each pass; the Statistics tab and the log read them.
- **requests** - `requests` (a pass's asks for the executable, drained onto
  the frame) and `pending_panel_window` (the scripted channel's ask for a
  panel window, cleared only when that panel draws). `console_filters` is
  the one shared field: the Console tab and the executable both read and
  write it.

The type lives in this shared `dylib`, not in the reloadable shell
module, so its identity is stable across shell reloads: the reloaded shell
registers the same resource type and keeps the value already in the world,
context and dock included. A resource whose type the module defined would
be reset by every reload - and the context's drop code would then run from
an unloaded image.

## Module contents

### Structs
- [`ContextClaim`](struct.ContextClaim.md#rustdoc-item-9320) — What one generation's claim on the session's egui contexts cleared.
- [`EguiShellState`](struct.EguiShellState.md#rustdoc-item-7349) — The egui shell's session: the reload handle, the pass scratch, the
- [`InspectorSession`](struct.InspectorSession.md#rustdoc-item-6929) — The Inspector's session state: which component sections are collapsed, and
- [`LoggedRects`](struct.LoggedRects.md#rustdoc-item-9607) — The rectangles a pass last reported, so a placement reaches the log once
- [`LoggedTexts`](struct.LoggedTexts.md#rustdoc-item-9928) — The texts a pass last reported per key, so a row logs a changed value once
- [`MenubarSession`](struct.MenubarSession.md#rustdoc-item-9300) — The menu bar's session state: the logged geometry of the strip, its titles
- [`PaletteState`](struct.PaletteState.md#rustdoc-item-9305) — The command palette's session state.
- [`PanelBudget`](struct.PanelBudget.md#rustdoc-item-9311) — Every module panel's build time.
- [`PanelTiming`](struct.PanelTiming.md#rustdoc-item-9799) — One panel's build time and how long it has been over budget.
- [`PanelWindowAnswer`](struct.PanelWindowAnswer.md#rustdoc-item-9399) — The answer a modal window took: Apply or Enter accepts, Cancel or Escape
- [`PanelWindowSession`](struct.PanelWindowSession.md#rustdoc-item-9314) — The windows the module panels asked for.
- [`PanelWindowState`](struct.PanelWindowState.md#rustdoc-item-9360) — One window a panel asked the shell for.
- [`PreviewStates`](struct.PreviewStates.md#rustdoc-item-9298) — The preview state of every asset tile, keyed by the tile's row key.
- [`StatisticsSession`](struct.StatisticsSession.md#rustdoc-item-9309) — The timings the Statistics tab reads.
- [`TabTiming`](struct.TabTiming.md#rustdoc-item-9482) — One tab's measured cost, smoothed so a single slow frame does not dominate.
- [`Toast`](struct.Toast.md#rustdoc-item-9726) — One toast on screen: a short-lived line about something the host did.
- [`ToastSession`](struct.ToastSession.md#rustdoc-item-9303) — The toast stack's session state.
- [`ToolboxSession`](struct.ToolboxSession.md#rustdoc-item-9293) — The floating viewport toolbox's session state. A drag moves one scene

### Enums
- [`MenubarSlot`](enum.MenubarSlot.md#rustdoc-item-9647) — The slot a menu-bar rectangle is remembered under: the strip itself, or one

### Functions
- [`smooth_sample`](fn.smooth_sample.md#rustdoc-item-10108) — One step of an exponential moving average, seeded by the first sample.

### Constants
- [`PANEL_BUDGET_FRAMES`](constant.PANEL_BUDGET_FRAMES.md#rustdoc-item-9286) — How many frames in a row a panel must overshoot its budget before the
- [`PANEL_BUDGET_MICROS`](constant.PANEL_BUDGET_MICROS.md#rustdoc-item-9285) — How long one panel body may take, in microseconds, before the editor says
- [`PANEL_WINDOWS_MAX`](constant.PANEL_WINDOWS_MAX.md#rustdoc-item-9282) — How many panel windows one session may have open at once.
- [`TOAST_FRAMES`](constant.TOAST_FRAMES.md#rustdoc-item-9284) — Frames a toast stays up - about four seconds at 60 fps.
- [`TOASTS_MAX`](constant.TOASTS_MAX.md#rustdoc-item-9283) — How many toasts show at once; older ones drop off the stack.
