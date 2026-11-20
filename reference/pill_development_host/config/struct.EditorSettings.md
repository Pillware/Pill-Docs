<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1155"></a>

# Struct `pill_development_host::config::EditorSettings`

```rust
pub struct EditorSettings;
```

Source: `hosting\pill_development_host\src\config.rs:1432`

What `editor_settings.yaml` selected for the editor.

## Fields

<a id="rustdoc-item-1153"></a>

### `editor_theme`

```rust
editor_theme: Option<String>
```

The `editor_theme:` value, as the file spells it: a path below the
project's `res`.

<a id="rustdoc-item-1154"></a>

### `focus_game_on_play`

```rust
focus_game_on_play: bool
```

The `focus_game_on_play:` value: whether Play brings the Game tab
forward. Absent means `true`, which is what a person expects of Play.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Equivalent<K>`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Default`
