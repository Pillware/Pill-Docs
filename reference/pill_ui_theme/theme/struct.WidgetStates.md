<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1147"></a>

# Struct `pill_ui_theme::theme::WidgetStates`

```rust
pub struct WidgetStates;
```

Source: `ui\pill_ui_theme\src\theme.rs:357`

The five interaction states egui picks from.

## Fields

<a id="rustdoc-item-1142"></a>

### `noninteractive`

```rust
noninteractive: WidgetStyle
```

Labels, separators and window frames.

<a id="rustdoc-item-1143"></a>

### `inactive`

```rust
inactive: WidgetStyle
```

An interactive widget at rest.

<a id="rustdoc-item-1144"></a>

### `hovered`

```rust
hovered: WidgetStyle
```

The pointer over a widget.

<a id="rustdoc-item-1145"></a>

### `active`

```rust
active: WidgetStyle
```

A pressed, dragged or focused widget.

<a id="rustdoc-item-1146"></a>

### `open`

```rust
open: WidgetStyle
```

A widget whose menu is open.

## Associated functions and methods

<a id="rustdoc-item-1148"></a>

### `brutalist`

```rust
pub(in theme) fn brutalist() -> Self;
```

The brutalist recipe's five states.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Default`
