<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6210"></a>

# Struct `pill_editor_core::panels::PanelRegistry`

```rust
pub struct PanelRegistry;
```

Source: `editor\pill_editor_core\src\panels.rs:282`

Every panel a module registered, live or not.

## Fields

<a id="rustdoc-item-6208"></a>

### `registrations`

```rust
registrations: Vec<PanelRegistration>
```

_No documentation provided._

<a id="rustdoc-item-6209"></a>

### `next_epoch`

```rust
next_epoch: u64
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-6211"></a>

### `register`

```rust
pub fn register(self: &mut Self, id: &str, title: &str, source: &str, draw: PanelDrawFn, liveness: &Arc<ModuleLiveness>) -> u16;
```

Registers a panel and returns its slot, replacing any entry with the
same id.

The slot is the index the dock tab names. It stays the same across a
reload because the entry is replaced in place, not appended.

<a id="rustdoc-item-6212"></a>

### `slot`

```rust
pub fn slot(self: &Self, id: &str) -> Option<u16>;
```

Returns the slot a panel id occupies, if it is registered.

<a id="rustdoc-item-6213"></a>

### `get`

```rust
pub fn get(self: &Self, slot: u16) -> Option<&PanelRegistration>;
```

Returns the registration in one slot, if the slot exists.

<a id="rustdoc-item-6214"></a>

### `draw_of`

```rust
pub fn draw_of(self: &Self, slot: u16) -> Option<PanelDrawFn>;
```

Returns the draw function of a live panel, or `None` when its module
has unloaded.

<a id="rustdoc-item-6215"></a>

### `tab_title`

```rust
pub fn tab_title(self: &Self, slot: u16) -> String;
```

Returns the title to show for a slot: the panel's own while it is
alive, its title with " (module not loaded)" added once its module is
gone, and "Module panel" for a slot the registry does not hold.

<a id="rustdoc-item-6216"></a>

### `entries`

```rust
pub fn entries(self: &Self) -> &[PanelRegistration];
```

Returns every registration, in slot order.

<a id="rustdoc-item-6217"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

Returns how many panels are registered, live or not.

<a id="rustdoc-item-6218"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Returns whether no panel is registered.

<a id="rustdoc-item-6219"></a>

### `alive`

```rust
pub fn alive(self: &Self, slot: u16) -> bool;
```

Returns whether the slot's module is still loaded.

<a id="rustdoc-item-6220"></a>

### `has_live`

```rust
pub fn has_live(self: &Self, id: &str) -> bool;
```

Returns whether a live panel with this id is registered.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
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
- `Debug`
- `Default`
- `Resource`
