<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10272"></a>

# Struct `pill_editor_core::style::ResolvedTheme`

```rust
pub(in style) struct ResolvedTheme;
```

Visibility: `{'restricted': {'parent': 10199, 'path': '::style'}}` · Source: `editor\pill_editor_core\src\style.rs:148`

The theme the editor last resolved, with the palette it records.

## Fields

<a id="rustdoc-item-10265"></a>

### `theme`

```rust
theme: pill_ui_theme::Theme
```

The tokens every context paints with.

<a id="rustdoc-item-10266"></a>

### `palette`

```rust
palette: Palette
```

[`ResolvedTheme::theme`](#rustdoc-item-10265) as egui colours.

<a id="rustdoc-item-10267"></a>

### `layers`

```rust
layers: Vec<ThemeLayerInfo>
```

The layers [`ResolvedTheme::theme`](#rustdoc-item-10265) was merged from, in apply order.

<a id="rustdoc-item-10268"></a>

### `fonts`

```rust
fonts: kit::style::ThemeFonts
```

The font bytes the layers resolved.

<a id="rustdoc-item-10269"></a>

### `generation`

```rust
generation: u64
```

The executable's layer generation. When it changes, there is a new
theme to install.

<a id="rustdoc-item-10270"></a>

### `contexts`

```rust
contexts: u64
```

How many context installs have run. The log line's `contexts` field
carries it.

<a id="rustdoc-item-10271"></a>

### `installed`

```rust
installed: bool
```

Whether a theme has ever been installed, so the first one logs.

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
