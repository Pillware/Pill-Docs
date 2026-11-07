<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-285"></a>

# Struct `pill_editor_core::boundary::EguiPopoutInputs`

```rust
pub struct EguiPopoutInputs;
```

Source: `editor\pill_editor_core\src\boundary.rs:150`

One input record per popped-out tab's window.

A popped-out window's events must not reach the main window's pass, because
their coordinates belong to that window's own client area. The frontend
keeps them apart, and the shell reads the tab's record when it runs that
tab's pass. A tab without a record (a window the frontend has not created
yet) gets a default one.

## Fields

<a id="rustdoc-item-283"></a>

### `by_tab`

```rust
by_tab: std::collections::BTreeMap<String, EguiShellInput>
```

Each popped-out tab's input, keyed by the tab's wire name.

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
- `Resource`
