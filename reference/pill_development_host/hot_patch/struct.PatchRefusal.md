<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2279"></a>

# Struct `pill_development_host::hot_patch::PatchRefusal`

```rust
pub(crate) struct PatchRefusal;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:141`

Why a change could not be satisfied by a patch, or why an attempt failed.

The `code` is a stable kebab-case tag and the `detail` is the sentence a
developer reads. Splitting them means a test can assert a specific reason
without matching prose that is free to improve, which is what makes the
per-reason cases in `devops/tests/` meaningful rather than brittle.

## Fields

<a id="rustdoc-item-2355"></a>

### `code`

```rust
code: &'static str
```

Stable tag, logged as the `code` field beside the reason.

<a id="rustdoc-item-2356"></a>

### `detail`

```rust
detail: String
```

Human explanation, logged as the `detail` field.

## Associated functions and methods

<a id="rustdoc-item-2357"></a>

### `new`

```rust
pub(in hot_patch) fn new<impl Into<String>: Into<String>>(code: &'static str, detail: impl Into<String>) -> Self;
```

A refusal with a stable code and a formatted explanation.

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
- `Debug`
- `Clone`
