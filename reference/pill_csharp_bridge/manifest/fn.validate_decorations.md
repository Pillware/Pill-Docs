<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1460"></a>

# Function `pill_csharp_bridge::manifest::validate_decorations`

```rust
pub(crate) fn validate_decorations(decorations: &[ManagedFieldDecorator], field_name: &str) -> Result<(), String>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:535`

Reject a presentation decorator that cannot mean what it says.

A decorator changes only how the Inspector draws a field, but a slider whose
minimum is above its maximum, or a text box with zero lines, is a mistake
nobody sees: Unity silently ignores bad ranges, and a decorator that is
silently ignored is worse than a manifest that is refused.

## Errors

Returns an error naming the field and the decorator that is out of range.
