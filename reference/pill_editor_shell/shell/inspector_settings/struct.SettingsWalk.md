<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-808"></a>

# Struct `pill_editor_shell::shell::inspector_settings::SettingsWalk`

```rust
pub struct SettingsWalk<'a>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:64`

What the settings rows share while the recursive walk draws them.

One value travels down the recursion instead of a long argument list: the
pickers' listing and engine store, the writes the rows queue, the session's
collapse state and remembered rectangles, the frame's overlay regions, and
whether the asset may be written at all. Every row below the walk takes it
whole, so a borrow added here reaches the whole family instead of being
threaded through every signature.

## Fields

<a id="rustdoc-item-801"></a>

### `assets`

```rust
assets: &'a [AssetListing]
```

The listing the pickers read.

<a id="rustdoc-item-802"></a>

### `engine_assets`

```rust
engine_assets: &'a [EngineAsset]
```

The store's own assets the pickers offer.

<a id="rustdoc-item-803"></a>

### `pending`

```rust
pending: &'a mut PendingEditorCommands
```

The writes the rows queue.

<a id="rustdoc-item-804"></a>

### `session`

```rust
session: &'a mut InspectorSession
```

The session the collapse state and remembered rectangles live in.

<a id="rustdoc-item-805"></a>

### `overlay_regions`

```rust
overlay_regions: &'a mut Vec<ShellRect>
```

The frame's overlay regions, so a picker's rectangle is the UI's.

<a id="rustdoc-item-806"></a>

### `decorators`

```rust
decorators: &'a [AssetFieldDecorator]
```

How the asset's type declared its document fields draw: a range as a
slider, a tooltip as the label's hover text. Empty for a type that
declares none.

<a id="rustdoc-item-807"></a>

### `read_only`

```rust
read_only: bool
```

Whether the asset belongs to a module, so nothing writes it.

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
