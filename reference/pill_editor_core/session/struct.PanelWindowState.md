<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7299"></a>

# Struct `pill_editor_core::session::PanelWindowState`

```rust
pub struct PanelWindowState;
```

Source: `editor\pill_editor_core\src\session.rs:171`

One window a panel asked the shell for.

## Fields

<a id="rustdoc-item-7292"></a>

### `id`

```rust
id: String
```

The window's identity within its panel.

<a id="rustdoc-item-7293"></a>

### `title`

```rust
title: String
```

The title its bar shows.

<a id="rustdoc-item-7294"></a>

### `source`

```rust
source: String
```

The crate that asked for it. The window closes once that crate's panel
is no longer alive.

<a id="rustdoc-item-7295"></a>

### `slot`

```rust
slot: u16
```

The registry slot of the panel that draws it.

<a id="rustdoc-item-7296"></a>

### `width`

```rust
width: f32
```

How wide it opens, in logical points.

<a id="rustdoc-item-7297"></a>

### `height`

```rust
height: f32
```

How tall it opens, in logical points.

<a id="rustdoc-item-7298"></a>

### `modal`

```rust
modal: bool
```

Whether it takes the editor's input until answered.

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
- `StructuralPartialEq`
- `PartialEq`
