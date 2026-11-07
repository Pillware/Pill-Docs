<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-245"></a>

# Trait `pill_core::error::render::EngineMessage`

```rust
pub trait EngineMessage { ... }
```

Source: `engine\pill_core\src\error\render.rs:80`

The rendering interface `#[engine_error]` generates for every error enum.

The generated implementation walks the one message definition the variant
carries and writes it through [`MessageRenderer`](trait.MessageRenderer.md#rustdoc-item-243), so the plain and the
styled output always agree.

## Required and provided items

<a id="rustdoc-item-667"></a>

### `render_message`

```rust
fn render_message(self: &Self, renderer: &mut dyn MessageRenderer) -> fmt::Result;
```

Render the variant's single message definition into `renderer`.

#### Errors

Returns an error if `renderer` reports a write failure.

<a id="rustdoc-item-668"></a>

### `to_plain_message`

```rust
fn to_plain_message(self: &Self) -> String;
```

Render the message as plain text, with no roles and no styling.

This is the text `Display` shows, the text a log line carries, and the
text handed to another runtime such as the C# side.

#### Examples

```
use pill_core::error::{BuildError, EngineMessage};

let message = BuildError::Cancelled.to_plain_message();
assert_eq!(
    message,
    "build cancelled: sources changed again during compilation"
);
```
