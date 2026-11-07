<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-670"></a>

# Module `pill_core::error::render`

Visibility: `{'restricted': {'parent': 612, 'path': '::error'}}` · Source: `engine\pill_core\src\error\render.rs:1`

The semantic rendering protocol and its two renderers.

## Responsibilities

- Define [`SemanticRole`](enum.SemanticRole.md#rustdoc-item-617), the vocabulary of meanings a `#[message(...)]`
  definition marks the parts of its text with.
- Declare [`MessageRenderer`](trait.MessageRenderer.md#rustdoc-item-243) and [`EngineMessage`](trait.EngineMessage.md#rustdoc-item-245), the seam between a
  generated error definition and whatever draws it.
- Provide the two renderers: plain text, and terminal text with styling.

## Design

A role says what a part of a message means, never how it looks, so an error
definition never names a colour or a glyph. Each renderer decides how a
role looks in its own medium, and this module is the only place a message
becomes styled text.

## Module contents

### Structs
- [`PlainMessageRenderer`](struct.PlainMessageRenderer.md#rustdoc-item-660) — A renderer that turns every role back into plain text.
- [`TerminalMessageRenderer`](struct.TerminalMessageRenderer.md#rustdoc-item-666) — A renderer that styles each value according to its semantic role.

### Enums
- [`SemanticRole`](enum.SemanticRole.md#rustdoc-item-617) — The meaning a styled part of a message carries.

### Traits
- [`EngineMessage`](trait.EngineMessage.md#rustdoc-item-245) — The rendering interface `#[engine_error]` generates for every error enum.
- [`MessageRenderer`](trait.MessageRenderer.md#rustdoc-item-243) — The sink a generated message is written into, one part at a time.
