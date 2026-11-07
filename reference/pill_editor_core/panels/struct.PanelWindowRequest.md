<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5786"></a>

# Struct `pill_editor_core::panels::PanelWindowRequest`

```rust
pub struct PanelWindowRequest;
```

Source: `editor\pill_editor_core\src\panels.rs:104`

One window a panel asks the shell for.

The shell owns the window - its position, its lifetime and its closing on
the module's unload - so the request is plain data, and the same panel that
asked draws the content.

## Fields

<a id="rustdoc-item-5829"></a>

### `id`

```rust
id: String
```

The window's identity within its panel.

<a id="rustdoc-item-5830"></a>

### `title`

```rust
title: String
```

The title the shell draws in the window's bar.

<a id="rustdoc-item-5831"></a>

### `width`

```rust
width: f32
```

The window's first width in logical points.

<a id="rustdoc-item-5832"></a>

### `height`

```rust
height: f32
```

The window's first height in logical points.

<a id="rustdoc-item-5833"></a>

### `modal`

```rust
modal: bool
```

Whether the window is modal: a modal takes the editor's input until the
person answers it with Enter or Escape, or with its own buttons.

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
