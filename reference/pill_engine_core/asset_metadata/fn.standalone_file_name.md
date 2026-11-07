<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1862"></a>

# Function `pill_engine_core::asset_metadata::standalone_file_name`

```rust
pub fn standalone_file_name(name: &str, extension: &str) -> Result<String, String>;
```

Source: `engine\pill_engine_core\src\asset_metadata.rs:133`

The file name a new asset called `name` gets with `extension`: the name
with `.extension` appended, unless it already ends with that extension in
some letter case.

It is the naming rule a "create asset" dialog checks, kept here so every
editor builds the same name, and it only states the rule: nothing here
creates or checks a file.

## Errors

A message when `name`:

- is empty;
- contains a path separator or a character Windows refuses, including
  control characters;
- contains `..`;
- ends with a dot or a space;
- is a reserved Windows name (`CON`, `NUL`, `COM1`, ...).
