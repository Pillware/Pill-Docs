<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3079"></a>

# Static `pill_development_host::native_library::TEMPORARY_COPY_COUNTER`

```rust
pub(in native_library) static TEMPORARY_COPY_COUNTER: std::sync::atomic::AtomicU64 = _;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:114`

Monotonic suffix ensuring temporary copies never collide, even when the
system clock repeats or moves backwards.
