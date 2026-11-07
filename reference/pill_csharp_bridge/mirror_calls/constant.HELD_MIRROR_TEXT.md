<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1735"></a>

# Constant `pill_csharp_bridge::mirror_calls::HELD_MIRROR_TEXT`

```rust
pub(in mirror_calls) const HELD_MIRROR_TEXT: $crate::thread::LocalKey<std::cell::RefCell<String>> = _;
```

Visibility: `{'restricted': {'parent': 1727, 'path': '::mirror_calls'}}` · Source: `csharp\pill_csharp_bridge\src\mirror_calls.rs:65`

The text the last `ffi_take_mirror_text` on this thread handed out.
