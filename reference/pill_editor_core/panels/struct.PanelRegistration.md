<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6100"></a>

# Struct `pill_editor_core::panels::PanelRegistration`

```rust
pub struct PanelRegistration;
```

Source: `editor\pill_editor_core\src\panels.rs:197`

One registered panel.

## Fields

<a id="rustdoc-item-6094"></a>

### `id`

```rust
id: String
```

The panel's identity: stable across reloads, and what the layout
document stores.

<a id="rustdoc-item-6095"></a>

### `title`

```rust
title: String
```

The tab's title.

<a id="rustdoc-item-6096"></a>

### `source`

```rust
source: String
```

The crate that registered it: the log names it, and the panel's
windows are keyed by it.

<a id="rustdoc-item-6097"></a>

### `draw`

```rust
draw: PanelDrawFn
```

The function that draws the panel's body.

<a id="rustdoc-item-6098"></a>

### `liveness`

```rust
liveness: std::sync::Weak<ModuleLiveness>
```

The marker of the module that registered it: it goes dead when that
module unloads.

<a id="rustdoc-item-6099"></a>

### `epoch`

```rust
epoch: u64
```

The number this registration took: every registration takes the next
one, so a panel that registers again gets a new value.

## Associated functions and methods

<a id="rustdoc-item-6101"></a>

### `alive`

```rust
pub fn alive(self: &Self) -> bool;
```

Returns whether the module that registered this panel is still loaded.

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
