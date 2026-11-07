<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1069"></a>

# Module `pill_editor::runner::scripted_channel`

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\scripted_channel.rs:1`

The scripted test channel: the verbs, their dumps, and the injections.

## Responsibilities

- Read the commands a suite appends to `PILL_EDITOR_TEST_COMMANDS` and run
  each through [`run_scripted`](../editor_window/struct.EditorWindow.md#rustdoc-item-689).
- Answer a command with a log line a suite can wait for, or refuse it
  through the one rejection token a suite treats as failure.
- Inject the input a suite cannot produce otherwise: keys, clicks and
  drags.

## Design

Development only. The verb grammar is `pill_editor_core::scripted`, which
the browser editor shares too. This module adds the native executable's
dispatch and its dumps: every verb runs the code a real press runs, and
every dump shows state that no press can reach.

A line is refused when its own target is wrong: a handle no entity answers
to, a field that is not editable, a value the field's kind cannot read, or
a drag asked to start while another is still running. Every refusal prints
the one rejection token, so a suite's typo fails like a malformed verb
instead of waiting out a timeout. A correct line that arrives before the
shell module attaches is not refused: it warns or does nothing, and the
same line works a moment later.

## Module contents

### Functions
- [`reject_on_failure`](fn.reject_on_failure.md#rustdoc-item-1070) — Refuses a failed scripted step through [`reject_scripted_command`].
- [`reject_scripted_command`](fn.reject_scripted_command.md#rustdoc-item-1068) — Refuses one scripted line, naming it and why it cannot run.
