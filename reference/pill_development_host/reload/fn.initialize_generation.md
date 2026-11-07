<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3665"></a>

# Function `pill_development_host::reload::initialize_generation`

```rust
pub(crate) fn initialize_generation(engine: &mut pill_engine::Engine, engine_api: &pill_engine::EngineApi, subject: &str, scope: Option<pill_engine::SystemOwner>, clearing_owner: pill_engine::SystemOwner, library: &crate::native_library::NativeLibrary, first_load_failure: FirstLoadFailure) -> GenerationInit;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\reload.rs:1020`

Captures, initializes and records one native generation.

This is the part a subject's `start` shares with every other subject. The
project and an extension run the same sequence around their entry point.
Take the registration sequences, scope the registration when the subject
uses a scope, and call the entry point with a timer around it. Then either
record what the generation registered, or, on a non-zero status, release
what the failed image owns while it is still loaded. `first_load_failure`
decides how much of the world that release clears.

`scope` is the owner registrations are tagged with, or `None` for a subject
that owns the scheduler. `clearing_owner` is the owner whose systems a
failed init removes; it is the subject's own owner in both cases.
