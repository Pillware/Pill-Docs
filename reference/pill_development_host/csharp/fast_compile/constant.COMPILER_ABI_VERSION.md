<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1341"></a>

# Constant `pill_development_host::csharp::fast_compile::COMPILER_ABI_VERSION`

```rust
pub(in csharp::fast_compile) const COMPILER_ABI_VERSION: u32 = 1;
```

Visibility: `{'restricted': {'parent': 1342, 'path': '::csharp::fast_compile'}}` · Source: `hosting\pill_development_host\src\csharp\fast_compile.rs:55`

Export-contract version this host requires of the compiler assembly.

It is checked before any other export is used, as the managed runtime's
interop version is. A compiler assembly left over from an older checkout
would otherwise be called through signatures it no longer has.
