<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2083"></a>

# Module `pill_core::utils`

Source: `engine\pill_core\src\utils.rs:1`

Small general-purpose helpers shared by Pill crates.
Small general-purpose helpers shared by Pill crates.

## Responsibilities

- Reflect type and enum-variant names for diagnostics and tooling.
- Define the error an asset loader reports for a refused path
  ([`AssetPathError`]).
- Construct and inspect fixed-width bitmasks.
- Format errors and their cause chains for reporting.

## Design

The helpers here keep no engine state. The single error type,
[`AssetPathError`], is defined here with `thiserror`, so a loader can
match its variants without depending on an engine crate. The bitmask
helpers number bits from the most significant bit (index 0) to the least.

## Module contents

### Enums
- [`AssetPathError`](enum.AssetPathError.md#rustdoc-item-2034) — The reason an asset loader refused a path: it names nothing usable, or its

### Functions
- [`create_bitmask_from_range`](fn.create_bitmask_from_range.md#rustdoc-item-2076) — Builds a bitmask as wide as `T` with one contiguous run of set bits.
- [`create_bitmask_with_one`](fn.create_bitmask_with_one.md#rustdoc-item-2081) — Builds a `u16` bitmask with one bit set, at `index`.
- [`enum_variant_eq`](fn.enum_variant_eq.md#rustdoc-item-2072) — Returns whether two values are the same enum variant.
- [`format_error_chain`](fn.format_error_chain.md#rustdoc-item-2075) — Formats an error and its whole cause chain on a single line.
- [`get_enum_variant_type_name`](fn.get_enum_variant_type_name.md#rustdoc-item-2073) — Returns the name of the enum variant `value` holds, read from its `Debug`
- [`get_indices_of_set_elements`](fn.get_indices_of_set_elements.md#rustdoc-item-2082) — Returns the index of every set bit in a `u16` bitmask, counted from the
- [`get_project_error_message`](fn.get_project_error_message.md#rustdoc-item-2074) — Formats an error and its whole cause chain into one message.
- [`get_type_name`](fn.get_type_name.md#rustdoc-item-2069) — Returns the short name of `T`: the part of its full type name after the
- [`get_value_type_name`](fn.get_value_type_name.md#rustdoc-item-2070) — Returns the short name of the type of `value`: the part of its full type
