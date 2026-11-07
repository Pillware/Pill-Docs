<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1471"></a>

# Function `pill_editor::runner::split_command`

```rust
pub(in runner) fn split_command(text: &str) -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3854`

Split a command line into a program and its arguments.

Whitespace separates the parts, except inside one pair of double quotes:
a program path with a space in it (`"C:\Program Files\...\python.exe"`)
has to stay one argument, or the spawn looks for `C:\Program`.
