<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10302"></a>

# Function `pill_editor_core::style::read_resolved_theme`

```rust
pub(in style) fn read_resolved_theme<T, impl FnOnce(&ResolvedTheme) -> T: FnOnce(&ResolvedTheme) -> T>(read: impl FnOnce(&ResolvedTheme) -> T) -> T;
```

Visibility: `{'restricted': {'parent': 10199, 'path': '::style'}}` · Source: `editor\pill_editor_core\src\style.rs:190`

Reads the record and recovers the data even if another thread panicked
while holding the write lock.
