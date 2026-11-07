<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-98"></a>

# pill_dummy_math API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Placeholder extension with no ECS state.

## Responsibilities

- Defines the [`Adder`](struct.Adder.md#rustdoc-item-1) struct with two arithmetic methods.
- Exposes the [`double`](fn.double.md#rustdoc-item-94) free function.
- Registers through the extension ABI when the host loads it.

## Design

[`register`](fn.register.md#rustdoc-item-95) does nothing except report success. It stays a plain Rust
function, so a build that links this crate statically can call it directly.

## Module contents

### Structs
- [`Adder`](struct.Adder.md#rustdoc-item-1) — Dummy accumulator exercising basic arithmetic.

### Functions
- [`double`](fn.double.md#rustdoc-item-94) — Doubles the given number.
- [`init`](fn.init.md#rustdoc-item-97) — The artifact's one-time entry point.
- [`register`](fn.register.md#rustdoc-item-95) — Registers the module against the host engine and returns zero.
