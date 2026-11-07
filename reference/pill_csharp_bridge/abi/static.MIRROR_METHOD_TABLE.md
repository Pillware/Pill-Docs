<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10"></a>

# Static `pill_csharp_bridge::abi::MIRROR_METHOD_TABLE`

```rust
pub(in abi) static MIRROR_METHOD_TABLE: std::sync::Mutex<Option<MirrorMethodTable>> = _;
```

Visibility: `{'restricted': {'parent': 6, 'path': '::abi'}}` · Source: `csharp\pill_csharp_bridge\src\abi.rs:65`

Host-side table of mirrored Rust methods handed to the managed runtime.

[`publish_mirror_methods`](fn.publish_mirror_methods.md#rustdoc-item-9) fills it when the C# runtime starts and again
after every module reload. The two FFI callbacks below read it. A publish
replaces the table and keeps the old one in the graveyard, because the copy
callback hands pointers into its strings to managed code before the lock is
released. Every row owns its strings and no raw pointer is stored, which
makes the table `Send` and lets it live in a `static`.
