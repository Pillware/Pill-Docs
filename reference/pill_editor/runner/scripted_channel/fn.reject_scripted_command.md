<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1068"></a>

# Function `pill_editor::runner::scripted_channel::reject_scripted_command`

```rust
pub(in runner::scripted_channel) fn reject_scripted_command(command: &str, reason: &str);
```

Visibility: `{'restricted': {'parent': 1069, 'path': '::runner::scripted_channel'}}` · Source: `editor\pill_editor\src\runner\scripted_channel.rs:41`

Refuses one scripted line, naming it and why it cannot run.

Every refusal prints the same token: an unknown verb, an unknown target, a
missing or malformed argument, or a handle that resolves to nothing. A
suite can then tell a rejected line from a slow answer without matching
every message, and `EditorSession` raises on the token at once instead of
timing out.
