<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9239"></a>

# Function `pill_editor_core::scripted::key_code_name`

```rust
pub fn key_code_name(key: pill_engine::KeyCode) -> &'static str;
```

Source: `editor\pill_editor_core\src\scripted.rs:1534`

The name a key prints as, for [`KeyChord::label`](struct.KeyChord.md#rustdoc-item-9144).

The same names are what a tool's `on_key` hook is told, so a tool that
names a key and a scripted line that spells one agree.
