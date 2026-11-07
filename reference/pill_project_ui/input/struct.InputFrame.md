<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-29"></a>

# Struct `pill_project_ui::input::InputFrame`

```rust
pub struct InputFrame;
```

Source: `ui\pill_project_ui\src\input.rs:40`

One frame of engine input, owned.

A system captures it from the engine's [`Input`] at the top of its body.
Every field holds the snapshot's own value rather than a summary, so the
bridge below sees exactly what the engine saw.

## Fields

<a id="rustdoc-item-11"></a>

### `cursor`

```rust
cursor: Option<pill_core::math::Vector2f>
```

Where the cursor is, in physical pixels, when it is over the window.

<a id="rustdoc-item-14"></a>

### `modifiers`

```rust
modifiers: pill_engine_core::input::Modifiers
```

Which modifiers are held.

<a id="rustdoc-item-16"></a>

### `keys_pressed`

```rust
keys_pressed: Vec<pill_engine_core::input::KeyCode>
```

The keys that went down this frame.

<a id="rustdoc-item-19"></a>

### `keys_released`

```rust
keys_released: Vec<pill_engine_core::input::KeyCode>
```

The keys that went up this frame.

<a id="rustdoc-item-20"></a>

### `buttons_pressed`

```rust
buttons_pressed: Vec<pill_engine_core::input::MouseButton>
```

The left, right and middle buttons that went down this frame.

<a id="rustdoc-item-22"></a>

### `buttons_released`

```rust
buttons_released: Vec<pill_engine_core::input::MouseButton>
```

The left, right and middle buttons that went up this frame.

<a id="rustdoc-item-23"></a>

### `text`

```rust
text: String
```

The text typed or committed by the IME this frame.

<a id="rustdoc-item-25"></a>

### `preedit`

```rust
preedit: Option<String>
```

The IME composition string, while a composition is active.

<a id="rustdoc-item-26"></a>

### `scroll_lines`

```rust
scroll_lines: pill_core::math::Vector2f
```

The scroll, in lines; positive `y` is up.

<a id="rustdoc-item-27"></a>

### `scroll_pixels`

```rust
scroll_pixels: pill_core::math::Vector2f
```

The scroll, in physical pixels; positive `y` is up.

## Associated functions and methods

<a id="rustdoc-item-30"></a>

### `capture`

```rust
pub fn capture(input: &Input) -> InputFrame;
```

Capture one frame of `input`.

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
- `Default`
