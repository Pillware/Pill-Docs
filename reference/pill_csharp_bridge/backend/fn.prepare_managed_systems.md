<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-518"></a>

# Function `pill_csharp_bridge::backend::prepare_managed_systems`

```rust
pub(in backend) fn prepare_managed_systems(bindings: &std::sync::Arc<super::components::BindingStore>, exports: SystemExports, subject: &str) -> Result<Vec<PreparedManagedSystem>, pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:373`

Resolves every managed system without touching the engine.

This is the half that can fail. It reads each system's reflected accesses,
resolves them against the binding table, and records the metadata the
scheduler closure needs, but it registers nothing. A failure here therefore
leaves the engine exactly as it was.

## Errors

Returns [`CSharpError::NoSystems`] when the assembly declares no systems,
and [`CSharpError::SystemCountOutOfRange`] when a reported system or access
count is above its limit. [`CSharpError::SystemSnapshotAllocationFailed`]
reports a snapshot that could not be reserved, and
[`CSharpError::SystemAccessFailed`] an access entry the managed side would
not hand over.

Returns what `derive_system_access` refuses for a bad access:
[`CSharpError::UnregisteredComponent`] when the access names a component
nobody registered, [`CSharpError::UnregisteredResource`] when it names an
unregistered managed resource, and [`CSharpError::UnknownAccessMode`] when
its mode is neither read nor write.
