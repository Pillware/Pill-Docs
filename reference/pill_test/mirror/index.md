<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-155"></a>

# Module `pill_test::mirror`

Source: `extensions\pill_test\modules\runtime\src\mirror.rs:1`

The C# mirror fixtures: [`mirror::Tint`](struct.Tint.md#rustdoc-item-3), [`mirror::Counter`](struct.Counter.md#rustdoc-item-110) and
[`mirror::tint_alpha`](fn.tint_alpha.md#rustdoc-item-154).
The C# mirror fixtures: the value types and functions the C# bridge suite
calls without any component row involved.

## Responsibilities

- Declare a standalone mirrored value type ([`Tint`]), so the module's
  generated C# file carries a value struct with fixed field offsets.
- Declare a value type with a mirrored method ([`Counter::value_as_u64`]),
  which reaches C# as an instance method calling the module's trampoline.
- Declare a mirrored free function ([`tint_alpha`]), which reaches C# as the
  static `pill_test.Mirror.TintAlpha()`.

## Design

The suite checks the generated file's text and the value a managed call
returns, so the shapes and the returned value are part of its contract:
`Tint` keeps three `f32` fields (`R` at offset 0, `B` at offset 8), and
`tint_alpha` returns `1.0`, which the probe prints as `alpha=1`. The free
function's C# class is named after this module, so moving it to another
module renames the class the suite calls.

## Module contents

### Structs
- [`Counter`](struct.Counter.md#rustdoc-item-110) — A value type with a mirrored method, mirrored to C# as `pill_test.Counter`.
- [`Tint`](struct.Tint.md#rustdoc-item-3) — A colour with three channels, mirrored to C# as `pill_test.Tint`.

### Functions
- [`tint_alpha`](fn.tint_alpha.md#rustdoc-item-154) — The alpha channel the bridge probe reads; mirrored to C# as the static
