<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8210"></a>

# Struct `pill_editor_core::style::ResolvedTheme`

```rust
pub(in style) struct ResolvedTheme;
```

Visibility: `{'restricted': {'parent': 8137, 'path': '::style'}}` · Source: `editor\pill_editor_core\src\style.rs:147`

The theme the editor last resolved, with the palette it records.

## Fields

<a id="rustdoc-item-8203"></a>

### `theme`

```rust
theme: pill_ui_theme::Theme
```

The tokens every context paints with.

<a id="rustdoc-item-8204"></a>

### `palette`

```rust
palette: Palette
```

[`ResolvedTheme::theme`](#rustdoc-item-8203) as egui colours.

<a id="rustdoc-item-8205"></a>

### `layers`

```rust
layers: Vec<ThemeLayerInfo>
```

The layers [`ResolvedTheme::theme`](#rustdoc-item-8203) was merged from, in apply order.

<a id="rustdoc-item-8206"></a>

### `fonts`

```rust
fonts: kit::style::ThemeFonts
```

The font bytes the layers resolved.

<a id="rustdoc-item-8207"></a>

### `generation`

```rust
generation: u64
```

The executable's layer generation. When it changes, there is a new
theme to install.

<a id="rustdoc-item-8208"></a>

### `contexts`

```rust
contexts: u64
```

How many context installs have run. The log line's `contexts` field
carries it.

<a id="rustdoc-item-8209"></a>

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
