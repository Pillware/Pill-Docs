<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-408"></a>

# Function `pill_engine_core::assets::document::render`

```rust
pub fn render<T>(document: &T) -> Result<Vec<u8>, String> where T: Serialize + ?Sized;
```

Source: `engine\pill_engine_core\src\assets\document.rs:49`

Renders `document` as the YAML text an asset file holds.

The text ends with exactly one newline and carries no `---` document
marker, so a file the engine writes has the same shape as one a person
edits.

## Errors

A message when `document` cannot be written as YAML.
