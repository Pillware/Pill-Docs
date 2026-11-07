<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-583"></a>

# Struct `pill_editor::runner::editor_window::ThemeWatch`

```rust
pub(in runner) struct ThemeWatch;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\editor_window.rs:304`

What the last theme resolution read.

The executable resolves the layers: it reads the `theme` preference, the
user's file, `editor_settings.yaml` and the project's layer (through the
asset store). Keeping what each read produced lets a poll skip the merge
when nothing moved.

## Fields

<a id="rustdoc-item-895"></a>

### `selection`

```rust
selection: pill_editor_core::style::UserThemeSelection
```

The preference's value, as last resolved.

<a id="rustdoc-item-897"></a>

### `user_stamp`

```rust
user_stamp: pill_editor_core::state_watch::FileStamp
```

The user file's metadata when it was last read.

<a id="rustdoc-item-899"></a>

### `legacy_logged`

```rust
legacy_logged: Option<String>
```

The legacy name already reported, so one value logs once.

<a id="rustdoc-item-900"></a>

### `settings_stamp`

```rust
settings_stamp: pill_editor_core::state_watch::FileStamp
```

`editor_settings.yaml`'s metadata when it was last read.

<a id="rustdoc-item-901"></a>

### `settings`

```rust
settings: Option<Result<pill_development_host::EditorSettings, String>>
```

The settings file's last read, or the message that refused it.

<a id="rustdoc-item-903"></a>

### `project_path`

```rust
project_path: Option<String>
```

The project layer's path, as last resolved.

<a id="rustdoc-item-904"></a>

### `project_stamp`

```rust
project_stamp: pill_editor_core::state_watch::FileStamp
```

The project layer's file metadata when it was last read.

<a id="rustdoc-item-905"></a>

### `project_handle`

```rust
project_handle: Option<pill_engine_core::Handle<pill_ui_theme::ThemeOverrides>>
```

The project layer's handle in the asset store.

<a id="rustdoc-item-907"></a>

### `project_version`

```rust
project_version: Option<u64>
```

The handle's content version when it was last merged.

<a id="rustdoc-item-908"></a>

### `font_sources`

```rust
font_sources: [Option<FontSource>; 3]
```

Where each family's font comes from, as last resolved (body, display,
monospace).

<a id="rustdoc-item-909"></a>

### `font_stamps`

```rust
font_stamps: [pill_editor_core::state_watch::FileStamp; 3]
```

The resolved source files' metadata when they were last read.

<a id="rustdoc-item-910"></a>

### `fonts`

```rust
fonts: pill_editor_core::kit::style::ThemeFonts
```

The font bytes the sources gave, as last installed.

<a id="rustdoc-item-911"></a>

### `refusals_logged`

```rust
refusals_logged: std::collections::HashMap<String, String>
```

The refusal text last logged per input (a layer, a merge result or a
font file), so a poll that re-reads an unchanged broken file stays
quiet and only a different text logs again.

## Associated functions and methods

<a id="rustdoc-item-912"></a>

### `is_new_refusal`

```rust
pub(in runner) fn is_new_refusal(self: &mut Self, slot: &str, refusal: &str) -> bool;
```

Record `refusal` for `slot` and report whether it is new, which is
when the caller logs it: the first refusal, or one whose text changed.

<a id="rustdoc-item-913"></a>

### `clear_refusal`

```rust
pub(in runner) fn clear_refusal(self: &mut Self, slot: &str);
```

Forget the refusal logged for `slot`, after the input read cleanly or
its file moved, so the same refusal later logs again.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Default`
