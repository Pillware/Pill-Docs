<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-783"></a>

# Struct `pill_development_host::build_runner::BatchValidation`

```rust
pub(in build_runner) struct BatchValidation;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:1957`

What one startup batch invocation validated, and when it finished.

## Fields

<a id="rustdoc-item-779"></a>

### `completed_at`

```rust
completed_at: std::time::SystemTime
```

When the batch invocation returned successfully.

A token is used only while no file under the module's watch directory is
newer than this instant. The batch validated exactly the sources cargo
saw, so a save after it must rebuild.

<a id="rustdoc-item-781"></a>

### `names`

```rust
names: std::collections::HashSet<String>
```

Module names whose artifacts the batch built or confirmed.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
