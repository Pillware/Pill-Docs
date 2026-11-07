<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1107"></a>

# Function `pill_csharp_bridge::context::active_scope_token`

```rust
pub(crate) fn active_scope_token() -> u32;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\context.rs:364`

Returns the token of the invocation active on this thread, or zero when
there is none.

Every chunk carries the token that was current when it was issued, so
managed code can tell a chunk from the call it is inside apart from one
kept since an earlier invocation.
