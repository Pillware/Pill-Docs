<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-678"></a>

# Function `pill_csharp_bridge::backend::read_reported_manifest`

```rust
pub(in backend) fn read_reported_manifest<impl FnOnce() -> u32: FnOnce() -> u32, impl FnOnce(*mut u8, u32) -> u8: FnOnce(*mut u8, u32) -> u8>(length: impl FnOnce() -> u32, copy: impl FnOnce(*mut u8, u32) -> u8, assembly: &str, consequence: &str) -> Option<Vec<u8>>;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:1406`

Reads the pending version's component manifest and logs why it could not be
read.

`assembly` is the word that names the assembly in each message, and
`consequence` is appended to say what the host does next. A caller with
nothing to add passes an empty string.
