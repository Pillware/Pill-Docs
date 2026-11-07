<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-721"></a>

# Function `pill_csharp_bridge::commands::command_scope_error`

```rust
pub(in commands) fn command_scope_error() -> u8;
```

Visibility: `{'restricted': {'parent': 697, 'path': '::commands'}}` · Source: `csharp\pill_csharp_bridge\src\commands.rs:72`

Return the status code for a callback that could not enter the command
scope.

Returns 3 when no world is active on this thread. Returns 4 when a world is
active but its system declared no `Commands` parameter, so the callback may
not use the queue.
