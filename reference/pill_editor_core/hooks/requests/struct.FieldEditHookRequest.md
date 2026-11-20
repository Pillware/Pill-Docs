<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6116"></a>

# Struct `pill_editor_core::hooks::requests::FieldEditHookRequest`

```rust
pub struct FieldEditHookRequest;
```

Source: `editor\pill_editor_core\src\hooks\requests.rs:125`

The typed field-edit constructors an `_editor` crate calls.

The `source` is the crate's own package name
(`env!("CARGO_PKG_NAME")`): the executable keys the liveness marker by it,
and the log lines name it.

## Associated functions and methods

<a id="rustdoc-item-5348"></a>

### `new`

```rust
pub fn new<T: ComponentFields>(source: &'static str, callback: fn (_: &mut HookContext<'_>, _: &FieldEdit<'_, T>) -> HookVerdict) -> HookRequest;
```

Builds a before-callback for component `T`'s fields.

The callback runs before the edit applies and may return
[`HookVerdict::Replace`](../events/enum.HookVerdict.md#rustdoc-item-5258) to write another value or
[`HookVerdict::Refuse`](../events/enum.HookVerdict.md#rustdoc-item-5260) to drop the batch and post a notice.

<a id="rustdoc-item-6204"></a>

### `after`

```rust
pub fn after<T: ComponentFields>(source: &'static str, callback: fn (_: &mut HookContext<'_>, _: &FieldEdit<'_, T>)) -> HookRequest;
```

Builds an after-callback for component `T`'s fields.

The callback runs after the edit applied, reads the applied value from
its view, and may queue follow-up commands that join the same undo step.

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
