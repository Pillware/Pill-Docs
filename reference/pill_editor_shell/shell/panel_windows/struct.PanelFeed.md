<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-261"></a>

# Struct `pill_editor_shell::shell::panel_windows::PanelFeed`

```rust
pub struct PanelFeed;
```

Source: `editor\pill_editor_shell\src\shell\panel_windows.rs:36`

The data a module panel reads while it draws, collected once per pass.

## Fields

<a id="rustdoc-item-258"></a>

### `entities`

```rust
entities: Vec<PanelEntityRow>
```

The world's entities, as the panels see them.

<a id="rustdoc-item-259"></a>

### `detail`

```rust
detail: Option<PanelEntityDetail>
```

The selected entity's components, when one is selected.

<a id="rustdoc-item-260"></a>

### `frames_per_second`

```rust
frames_per_second: f32
```

The editor's smoothed frame rate.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
