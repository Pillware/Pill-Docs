<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1244"></a>

# Function `pill_csharp_bridge::managed_buffer::manifest_fetch_error`

```rust
pub(crate) fn manifest_fetch_error(error: ManagedBufferError) -> pill_core::error::CSharpError;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\managed_buffer.rs:121`

Reports a failed manifest fetch as the typed error the load fails with.

The startup and AOT paths both fail the whole load on any of these, so they
share one mapping instead of each defining its own.
