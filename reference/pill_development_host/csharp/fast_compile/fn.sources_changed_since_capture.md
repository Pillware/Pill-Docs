<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1423"></a>

# Function `pill_development_host::csharp::fast_compile::sources_changed_since_capture`

```rust
pub(in csharp::fast_compile) fn sources_changed_since_capture(response_file_path: &std::path::Path, workspace_root: &std::path::Path, watch_directory: &str) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 1342, 'path': '::csharp::fast_compile'}}` · Source: `hosting\pill_development_host\src\csharp\fast_compile.rs:395`

Report whether the captured source list still matches the project.

Returns `None` when the two agree, or a sentence saying why they do not.
Only files under the watched source directory are compared. The capture also
lists generated files from other directories, such as the C# code generated
for each module and the files the .NET SDK writes, and those change only as
part of work that rebuilds the project anyway.
