<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1501"></a>

# Static `pill_csharp_bridge::manifest::INTERNED_FIELD_STRINGS`

```rust
pub(in manifest) static INTERNED_FIELD_STRINGS: std::sync::Mutex<Option<std::collections::HashSet<&'static str>>> = _;
```

Visibility: `{'restricted': {'parent': 1247, 'path': '::manifest'}}` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:741`

Strings handed to the engine as `&'static str`, stored once per value.

`ComponentFieldDescriptor` holds `&'static str` because the derive builds it
in an artifact's static data. A manifest-declared component has no statics
to borrow from, so its strings have to be given that lifetime by hand.

Leaking a fresh `Box` for every registration would grow with the reload
count, because the C# project re-registers its components on every reload.
Interning limits the cost to the project's type set: a name that survives a
hundred reloads is stored once.
