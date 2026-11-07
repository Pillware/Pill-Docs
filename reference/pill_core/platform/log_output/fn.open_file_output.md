<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1200"></a>

# Function `pill_core::platform::log_output::open_file_output`

```rust
pub fn open_file_output(directory: &std::path::Path, file_name: &str) -> Result<(FileWriter, FileGuard), String>;
```

Source: `engine\pill_core\src\platform\log_output.rs:156`

Opens the log file in `directory` and returns its writer and guard. Keep
the guard alive for as long as the writer is used.

Each day's file is named `<file_name>.<YYYY-MM-DD>`, so `file_name` is the
file name prefix, not the whole name.

## Errors

Returns the failure message when the directory or the file cannot be
created.
