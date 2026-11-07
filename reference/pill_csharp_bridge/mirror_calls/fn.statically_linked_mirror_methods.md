<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1740"></a>

# Function `pill_csharp_bridge::mirror_calls::statically_linked_mirror_methods`

```rust
pub(crate) fn statically_linked_mirror_methods() -> Vec<super::ResolvedMirrorMethod>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\mirror_calls.rs:265`

Builds the mirror-method table of this binary from its own inventory.

A shipping build links every extension into one image. The method
descriptors those extensions registered therefore belong to this artifact
and carry their trampolines' addresses, so no module has to be loaded to
read them. The development host instead builds the same rows from each
loaded module's copy.
