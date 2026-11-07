<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6139"></a>

# Struct `pill_editor_core::panels::PanelRequest`

```rust
pub struct PanelRequest;
```

Source: `editor\pill_editor_core\src\panels.rs:245`

One panel a module asks the editor to register.

A module cannot register into the registry itself. Each entry is bound to a
liveness marker, and only the executable may hold that marker's strong
handle: a marker kept in a world resource would outlive the module and make
an unloaded draw function look alive. A module therefore queues its
requests here during its `register`, and the executable binds them, so a
reload's stale entries go dead with the marker they were bound to.

## Fields

<a id="rustdoc-item-6135"></a>

### `id`

```rust
id: &'static str
```

The panel's identity, stable across reloads.

<a id="rustdoc-item-6136"></a>

### `title`

```rust
title: &'static str
```

The tab's title.

<a id="rustdoc-item-6137"></a>

### `source`

```rust
source: &'static str
```

The crate registering it.

<a id="rustdoc-item-6138"></a>

### `draw`

```rust
draw: PanelDrawFn
```

The function that draws the panel's body.

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
- `Copy`
- `Debug`
