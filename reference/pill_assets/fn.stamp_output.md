<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-297"></a>

# Function `pill_assets::stamp_output`

```rust
pub(crate) fn stamp_output<'a, impl IntoIterator<Item = &'a PathBuf>: IntoIterator<Item = _>>(output: &std::path::Path, inputs: impl IntoIterator<Item = _>) -> Result<(), CookError>;
```

Visibility: `crate` · Source: `assets\pill_assets\src\lib.rs:620`

Mark `output` as cooked against `inputs`, whether or not the rule rewrote
it. An output the rule never produced is left for the next run to find
missing.

A tool may leave an output untouched when the bytes it would write are
identical - `slangc` does - so without a stamp an edit that changes
nothing in the output would leave it older than its input and re-cooked
every run. The stamp is the newest input's own timestamp, and it only
moves the output forward to it. A clock stamp would be wrong: file times
are coarser than `SystemTime::now()`, so an input saved just after the
cook can carry an earlier time and would never be cooked.

## Errors

Returns [`CookError::Io`](enum.CookError.md#rustdoc-item-157) when an input's time or the output's time cannot
be read, or when the output cannot be stamped.
