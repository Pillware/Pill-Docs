<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-209"></a>

# pill_core_macros API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

`#[engine_error]` - one error definition that produces both the plain and
the styled form of its message.

## Responsibilities

- Parse the `#[engine_error]` attribute and the message language inside
  `#[message(...)]`.
- Generate the plain `thiserror::Error` message from the semantic nodes, so
  the display text never has to be written twice.
- Generate `miette::Diagnostic` implementations whose diagnostic codes come
  from the namespace and the variant name, unless the variant sets one.
- Generate `EngineMessage` implementations that render the semantic message
  into a `MessageRenderer`.

## Design

A `#[message(...)]` definition becomes a list of `MessageNode` values:
plain text, a styled token in one of four roles (`general_style`,
`specific_style`, `module_style`, `name_style`) holding either a fixed
string or a field, or a plain dynamic value (`value` / `debug_value`). A
`#[transparent]` variant instead forwards both renderings to the error it
wraps, which is the only way to build one message out of another. A
diagnostic code is the namespace plus the variant name in snake case,
unless `#[code(...)]` replaces the suffix.

## Module contents

### Structs
- [`MacroArguments`](struct.MacroArguments.md#rustdoc-item-3) — Arguments accepted by `#[engine_error(...)]`.
- [`VariantInfo`](struct.VariantInfo.md#rustdoc-item-177) — Everything the macro extracted from one variant.

### Enums
- [`MessageNode`](enum.MessageNode.md#rustdoc-item-129) — One parsed node of a `#[message(...)]` definition.
- [`SemanticRole`](enum.SemanticRole.md#rustdoc-item-54) — Semantic role of one message token.
- [`StyleArgument`](enum.StyleArgument.md#rustdoc-item-150) — Argument of one role call in the message language: a fixed string or a
- [`ValueFormat`](enum.ValueFormat.md#rustdoc-item-93) — Display format of a dynamic message value.

### Functions
- [`build_format_string`](fn.build_format_string.md#rustdoc-item-194) — Build the plain `#[error(...)]` format string from the semantic nodes.
- [`build_message_arm`](fn.build_message_arm.md#rustdoc-item-199) — Generate one `EngineMessage` match arm for a leaf message variant.
- [`build_message_steps`](fn.build_message_steps.md#rustdoc-item-201) — Build the renderer calls for one leaf variant's semantic message.
- [`build_transparent_arm`](fn.build_transparent_arm.md#rustdoc-item-203) — Generate one `EngineMessage` match arm for a transparent variant.
- [`cfg_attributes`](fn.cfg_attributes.md#rustdoc-item-202) — Collect one variant's `#[cfg(...)]` attributes.
- [`classify_variant`](fn.classify_variant.md#rustdoc-item-192) — Split one variant's attributes into the ones the macro consumes and the
- [`did_you_mean`](fn.did_you_mean.md#rustdoc-item-167) — Closest message function name to `given_function_name`, when it is close
- [`edit_distance`](fn.edit_distance.md#rustdoc-item-168) — Classic Levenshtein distance between two strings.
- [`existing_derives`](fn.existing_derives.md#rustdoc-item-204) — Collect the traits the enum already derives.
- [`expand_engine_error`](fn.expand_engine_error.md#rustdoc-item-208) — Runs the expansion behind the `engine_error` attribute entry point.
- [`namespace_string`](fn.namespace_string.md#rustdoc-item-197) — Join the namespace path segments with `::` for the diagnostic code prefix.
- [`plain_node`](fn.plain_node.md#rustdoc-item-166) — Build one value node carrying no semantic role.
- [`referenced_fields`](fn.referenced_fields.md#rustdoc-item-198) — Check that every field a message names exists, and return the names in the
- [`styled_node`](fn.styled_node.md#rustdoc-item-165) — Build one styled token, either fixed or taken from a field.
- [`to_snake_case`](fn.to_snake_case.md#rustdoc-item-196) — Convert a variant name to snake case for the diagnostic code suffix.

### Procedural macros
- [`engine_error`](macro.engine_error.md#rustdoc-item-207) — Generates the `thiserror` display text, the `miette` diagnostic codes and
