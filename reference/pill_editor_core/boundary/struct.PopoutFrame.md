<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-388"></a>

# Struct `pill_editor_core::boundary::PopoutFrame`

```rust
pub struct PopoutFrame;
```

Source: `editor\pill_editor_core\src\boundary.rs:239`

One popped-out tab's frame: which tab it draws, and the pass's output.

## Fields

<a id="rustdoc-item-420"></a>

### `tab`

```rust
tab: String
```

The tab's wire name, which is also its window's identity.

<a id="rustdoc-item-421"></a>

### `title`

```rust
title: String
```

The window's title, as the shell wants it shown.

<a id="rustdoc-item-422"></a>

### `frame`

```rust
frame: Box<EguiShellFrame>
```

The pass's output, in the same shape the main window's frame takes.

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
