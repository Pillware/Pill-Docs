<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-724"></a>

# Function `pill_csharp_bridge::commands::decode_command_component`

```rust
pub(in commands) fn decode_command_component(binding: super::components::ComponentBinding, blob_bytes: *const u8, blob_size: usize) -> Result<DecodedCommandComponent, String>;
```

Visibility: `{'restricted': {'parent': 697, 'path': '::commands'}}` · Source: `csharp\pill_csharp_bridge\src\commands.rs:123`

Check one component blob and copy it into the form the command queue takes
for its binding.

## Errors

Returns an error string when the blob's data pointer is null, or when the
blob size differs from the size the binding declares.
