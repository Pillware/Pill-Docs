<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-95"></a>

# pill_dummy_random API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Placeholder extension with no ECS state: a deterministic pseudo-random
generator.

## Responsibilities

- Defines the [`LcgRandom`](struct.LcgRandom.md#rustdoc-item-1) struct with two generator methods.
- Exposes the [`seed_from_u32`](fn.seed_from_u32.md#rustdoc-item-91) free function.
- Registers through the extension ABI when the host loads it.

## Design

The crate carries no ECS state. [`register`](fn.register.md#rustdoc-item-92) is a no-op that only reports
success, and it is a plain Rust function so a build that links this crate
statically can call it directly. The generator is linear congruential: it
returns the same sequence for the same seed, so it is only useful as dummy
data, never for real randomness.

## Module contents

### Structs
- [`LcgRandom`](struct.LcgRandom.md#rustdoc-item-1) — Dummy linear congruential generator producing a deterministic sequence.

### Functions
- [`init`](fn.init.md#rustdoc-item-94) — The artifact's one-time entry point.
- [`register`](fn.register.md#rustdoc-item-92) — Registers the module against the host engine. Returns zero on success.
- [`seed_from_u32`](fn.seed_from_u32.md#rustdoc-item-91) — Builds a generator seeded from `seed`.
