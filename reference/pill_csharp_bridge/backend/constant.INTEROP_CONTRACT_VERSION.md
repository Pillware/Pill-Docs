<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-156"></a>

# Constant `pill_csharp_bridge::backend::INTEROP_CONTRACT_VERSION`

```rust
pub const INTEROP_CONTRACT_VERSION: u32 = 18;
```

Source: `csharp\pill_csharp_bridge\src\backend.rs:126`

The unmanaged ABI contract version, shared with `csharp_runtime`.

Increase it when an `UnmanagedCallersOnly` export signature changes, when
the field layout of the [`CsEngineApi`](../abi/struct.CsEngineApi.md#rustdoc-item-192) table changes, or when a struct the
two sides exchange changes shape. The managed runtime copies that table
field by field, so one new slot makes the two sides disagree about every
slot after it. The host refuses to start against a runtime built for
another version, and the managed side refuses a table whose version and
size it does not accept.

Every byte payload has its own named length/copy export pair instead of one
generic pair keyed by a payload-kind number. A wrong name then fails while
loading, in the host's `resolve_unmanaged_function_pointer`, and the error
names the export it could not find. A numeric kind would instead dispatch
wrongly at run time, on a live ABI that AOT projects forward by hand.
