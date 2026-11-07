<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-132"></a>

# Struct `pill_project_ui::input::InputMemory`

```rust
pub struct InputMemory;
```

Source: `ui\pill_project_ui\src\input.rs:97`

What the bridge reported last frame, so it can tell what changed this one.

A snapshot only holds the current state. A change in the modifiers or in
the cursor position is found by comparing the new value with the one the
previous pass reported.

## Fields

<a id="rustdoc-item-128"></a>

### `modifiers`

```rust
modifiers: pill_engine_core::input::Modifiers
```

The modifier state the previous frame reported.

<a id="rustdoc-item-130"></a>

### `cursor`

```rust
cursor: Option<egui::Pos2>
```

The cursor position the previous frame reported, in logical points.

## Associated functions and methods

<a id="rustdoc-item-133"></a>

### `new`

```rust
pub fn new() -> InputMemory;
```

Fresh memory: no modifiers held and no cursor seen yet.

<a id="rustdoc-item-134"></a>

### `modifiers`

```rust
pub fn modifiers(self: &Self) -> EngineModifiers;
```

The modifier state the last frame reported.

<a id="rustdoc-item-135"></a>

### `cursor`

```rust
pub fn cursor(self: &Self) -> Option<Pos2>;
```

The cursor position the last frame reported, in logical points.

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
- `Debug`
- `Default`
