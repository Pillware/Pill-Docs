<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1560"></a>

# Module `pill_editor::test_channel`

Visibility: `crate` · Source: `editor\pill_editor\src\test_channel.rs:1`

The devops suite's scripted input channel.
The editor's scripted test channel. It reads the commands a devops suite
appends to a file, and it reads the auto-quit limit.

## Responsibilities

- [`TestChannel`]: reads the file named by `PILL_EDITOR_TEST_COMMANDS` and
  returns only the lines appended since the last poll.
- [`seconds_from_environment`]: the `PILL_EDITOR_TEST_SECONDS` auto-quit
  delay, so a run that gets stuck still ends.

## Design

The channel only reads the file. A suite appends one command per line, and
the runner executes the lines it has not seen yet.

Only complete lines are handed over. A line whose newline has not arrived
yet waits for the next poll, so a write that arrives in two pieces never
runs half a command. A `#` line is a comment the channel skips, so a suite
can annotate its command file. The runner executes the commands itself,
quit and dock rearrangement included, so this module does not need any
window or engine type.

## Module contents

### Structs
- [`TestChannel`](struct.TestChannel.md#rustdoc-item-602) — Reads the command lines a test suite appends to a file.

### Functions
- [`seconds_from_environment`](fn.seconds_from_environment.md#rustdoc-item-1593) — Returns how many seconds the editor runs before quitting gracefully, when
