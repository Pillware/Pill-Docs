<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-243"></a>

# Trait `pill_core::error::render::MessageRenderer`

```rust
pub trait MessageRenderer { ... }
```

Source: `engine\pill_core\src\error\render.rs:45`

The sink a generated message is written into, one part at a time.

Generated `EngineMessage` implementations call this protocol directly, so
no intermediate list or rebuilt string is ever created.

## Required and provided items

<a id="rustdoc-item-650"></a>

### `text`

```rust
fn text(self: &mut Self, text: &str) -> fmt::Result;
```

Write one piece of plain text.

#### Errors

Returns an error if the underlying writer fails.

<a id="rustdoc-item-651"></a>

### `styled`

```rust
fn styled(self: &mut Self, role: SemanticRole, value: &dyn fmt::Display) -> fmt::Result;
```

Write one value with its semantic role, so the renderer can style it.

#### Errors

Returns an error if the underlying writer fails.

<a id="rustdoc-item-652"></a>

### `value`

```rust
fn value(self: &mut Self, value: &dyn fmt::Display) -> fmt::Result;
```

Write one value with no role and no styling.

#### Errors

Returns an error if the underlying writer fails.

<a id="rustdoc-item-653"></a>

### `debug_value`

```rust
fn debug_value(self: &mut Self, value: &dyn fmt::Debug) -> fmt::Result;
```

Write one value in its debug form, the way `{:?}` prints it.

#### Errors

Returns an error if the underlying writer fails.
