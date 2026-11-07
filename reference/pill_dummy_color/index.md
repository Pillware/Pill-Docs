<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-163"></a>

# pill_dummy_color API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

An example extension with no ECS state. It provides a colour value type and
an alpha function that can be hot-patched.

## Responsibilities

- Defines [`Tint`](struct.Tint.md#rustdoc-item-112) with its two colour methods and the [`grayscale`](fn.grayscale.md#rustdoc-item-158) free
  function.
- Exposes [`get_color_a`](fn.get_color_a.md#rustdoc-item-159), hot-patchable and mirrored to C# as
  `pill_dummy_color.PillDummyColor.GetColorA()`.
- Declares [`Tint`](struct.Tint.md#rustdoc-item-112) and [`TestStruct`](struct.TestStruct.md#rustdoc-item-3) as value types, and mirrors
  `TestStruct::aaa` with a `pill_mirror_method` marker written with its full
  path. Together they cover the three shapes the code generator handles: a
  free function, a value type and a mirrored method.
- Registers through the extension ABI when the host loads it.

## Design

The crate carries no ECS state. [`register`](fn.register.md#rustdoc-item-160) is a no-op that only reports
success, and it stays a plain Rust function so the same crate can also be
linked statically into a monolithic build. `pill_spline` depends on it, and
the managed C# test project in `devops/tests/projects/managed` loads it as a
module.

## Module contents

### Structs
- [`TestStruct`](struct.TestStruct.md#rustdoc-item-3) — A plain value type with a mirrored method.
- [`Tint`](struct.Tint.md#rustdoc-item-112) — A dummy RGB colour with two channel helpers.

### Functions
- [`get_color_a`](fn.get_color_a.md#rustdoc-item-159) — A dummy alpha channel. `Tint` carries no alpha, so this always reports
- [`grayscale`](fn.grayscale.md#rustdoc-item-158) — Returns the average of `tint`'s three channels as one grey level.
- [`init`](fn.init.md#rustdoc-item-162) — The artifact's one-time entry point.
- [`register`](fn.register.md#rustdoc-item-160) — Registers the module with the host engine and returns zero on success.
