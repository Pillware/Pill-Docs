<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-162"></a>

# Function `pill_hot_scan::all_functions`

```rust
pub fn all_functions(source: &str) -> Vec<HotFunction>;
```

Source: `hosting\pill_hot_scan\src\lib.rs:567`

Every function in the file the host could address, annotated or not.

This is how a patch finds functions with no annotation in the source. It
deliberately matches what each crate's build script treats as addressable:
module-level functions, and inherent and non-generic trait methods named
through their type. Anything the build script skips - a function nested
inside another, or one in a generic `impl` - is skipped here too, because
the running artifact would have no entry for it and the lookup would fail.

The running artifact stays the source of truth: the host asks it for an
address by name and refuses the patch when it has none. A disagreement
between this scanner and a build script is therefore a clean refusal rather
than a wrong patch.
