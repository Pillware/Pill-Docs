<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-398"></a>

# Trait `pill_renderer_api::error::ErrorContext`

```rust
pub trait ErrorContext<T> { ... }
```

Source: `rendering\pill_renderer_api\src\error.rs:86`

Turns any lower-level failure into a [`RendererError::Other`](enum.RendererError.md#rustdoc-item-355) carrying a
description of what the caller was doing.

Implemented for every `Result<T, E>` whose error implements `Display`, and
for `Option<T>`. A call site can then name its own operation - loading this
texture, building this pass - and the enum needs no variant per operation.

## Required and provided items

<a id="rustdoc-item-397"></a>

### `context`

```rust
fn context<impl Into<String>: Into<String>>(self: Self, message: impl Into<String>) -> Result<T>;
```

Returns the value, or [`RendererError::Other`](enum.RendererError.md#rustdoc-item-355) describing the failure.

`message` says what the caller was doing.

#### Errors

Returns [`RendererError::Other`](enum.RendererError.md#rustdoc-item-355) when the value is absent. The detail
holds `message`, followed by the original error's text when the value
was a `Result`.
