<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1261"></a>

# Function `pill_editor::runner::problems_from_build_output`

```rust
pub(in runner) fn problems_from_build_output(module: &str, output: &str) -> Vec<pill_editor_core::notices::ProblemRow>;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3355`

The Problems rows a module's failed build output becomes.

The build text is parsed for compiler diagnostics; when none is
recognisable - a linker error, a foreign toolchain's wording - the first
non-empty line is kept as one row, so a failure never shows as nothing.
