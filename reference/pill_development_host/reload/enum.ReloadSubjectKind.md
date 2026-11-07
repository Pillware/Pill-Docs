<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3435"></a>

# Enum `pill_development_host::reload::ReloadSubjectKind`

```rust
pub(crate) enum ReloadSubjectKind { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\reload.rs:100`

Which kind of subject a reload is running for: the project or an extension.

Holds the two things that differ between them and are not part of the
subject's identity: whether registrations are scoped to an owner, and the
exact text of the log lines the Python suites wait for. They live together
because a caller that picks the right behaviour and the wrong text gets a
reload that works but is reported as the wrong subject.

## Variants

<a id="rustdoc-item-3433"></a>

### `Project`

```rust
Project
```

The game project. It owns the scheduler and tags no registrations, and
its completion line is the one the migration and auto-reload suites
wait for.

<a id="rustdoc-item-3434"></a>

### `Extension`

```rust
Extension
```

An extension. It adds systems next to the project and the other
extensions, so its registrations are tagged with its owner.

## Associated functions and methods

<a id="rustdoc-item-3436"></a>

### `scopes_registration`

```rust
pub(in reload) fn scopes_registration(self: &Self) -> bool;
```

Whether registrations made during `init` are tagged with the subject's
owner, so a later reload clears only that subject's systems.

Only an extension tags them. The project owns the scheduler and leaves
registrations untagged.

<a id="rustdoc-item-3437"></a>

### `completion_message`

```rust
pub(in reload) fn completion_message(self: &Self) -> &'static str;
```

Log line written once the swap succeeds.

<a id="rustdoc-item-3438"></a>

### `forgotten_types_warning`

```rust
pub(in reload) fn forgotten_types_warning(self: &Self) -> &'static str;
```

Warning written when the new generation stops registering a type whose
data is still in the world.

<a id="rustdoc-item-3439"></a>

### `build_failed_message`

```rust
pub(in reload) fn build_failed_message(self: &Self) -> &'static str;
```

Failure line for a build that produced no usable replacement.

Kept per kind instead of built from a template: the Python suites wait
for the project's exact text, and `test_log_contract.py` fails if a
token they use stops appearing in the Rust source.

<a id="rustdoc-item-3440"></a>

### `load_failed_message`

```rust
pub(in reload) fn load_failed_message(self: &Self) -> &'static str;
```

Failure line for a replacement that could not be loaded.

<a id="rustdoc-item-3441"></a>

### `rejected_message`

```rust
pub(in reload) fn rejected_message(self: &Self) -> &'static str;
```

Failure line for a replacement the load-time validation refused.

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
