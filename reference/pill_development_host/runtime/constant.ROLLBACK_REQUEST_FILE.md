<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3861"></a>

# Constant `pill_development_host::runtime::ROLLBACK_REQUEST_FILE`

```rust
pub(in runtime) const ROLLBACK_REQUEST_FILE: &str = "target/hot/rollback.request";
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:92`

File a developer or a script drops to drive live patching, relative to the
workspace root.

A file is used rather than an environment variable because the request has
to reach a process that is already running. It is a file rather than a
console command because the standalone host has no input loop, and its
stdout is routinely redirected.

One line, in one of these forms:

- `list`: print every generation this session installed.
- `<function>@<generation>`: reinstall that generation.
- `<function>@previous`: step back one from whatever is running.
- `<function>@0`: the code the artifact was built with.

The file is removed before the request is acted on, so a request is
honoured exactly once.
