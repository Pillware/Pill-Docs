<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9074"></a>

# Macro `pill_engine_core::services::input::key_codes`

```rust
macro_rules! key_codes {
    ($($variant:ident => $code_name:literal),* $(,)?) => { ... };
}
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\services\input.rs:78`

Declares [`KeyCode`](enum.KeyCode.md#rustdoc-item-9069) with each key's W3C `KeyboardEvent.code` name.

One list produces the enum, [`KeyCode::ALL`](enum.KeyCode.md#rustdoc-item-9071), [`KeyCode::code_name`](enum.KeyCode.md#rustdoc-item-9072) and
[`KeyCode::from_code_name`](enum.KeyCode.md#rustdoc-item-9073), so the four cannot drift apart.
