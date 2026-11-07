<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1520"></a>

# Struct `pill_editor_core::commands::KeybindingsFile`

```rust
pub struct KeybindingsFile;
```

Source: `editor\pill_editor_core\src\commands.rs:863`

The keybindings file: the active preset and the per-command chord
overrides.

Shape: `{ "preset": "unity", "overrides": { "editor.pause_toggle": ["space"] } }`.
A command missing from `overrides` keeps its preset binding; a command
listed with an empty array is unbound.

## Fields

<a id="rustdoc-item-1604"></a>

### `preset`

```rust
preset: Option<KeymapPreset>
```

The preset to activate; absent keeps the current one.

<a id="rustdoc-item-1605"></a>

### `overrides`

```rust
overrides: std::collections::BTreeMap<String, Vec<String>>
```

Per-command chord lists replacing the preset's bindings.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `SerializableAny`
- `DeserializeOwned`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
- `Default`
- `Serialize`
- `Deserialize<'de>`
