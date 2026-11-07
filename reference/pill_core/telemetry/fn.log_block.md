<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2017"></a>

# Function `pill_core::telemetry::log_block`

```rust
pub fn log_block<I, S>(heading: &str, lines: I) -> String where I: IntoIterator<Item = _>, S: AsRef<str>;
```

Source: `engine\pill_core\src\telemetry.rs:978`

Join a heading and its lines into one multi-line log message.

The formatter prints a message that contains a line break as a block: the
heading stays on the first line as the message, after the time, level and
target and before the fields, and the remaining lines follow at the left
edge, each behind a `│ ` gutter in the timestamp's color. The string ends
with a line break, which the formatter drops, so the next entry follows
directly:

```text
[21:51:45:003] INFO  engine::hot_reload  Modules to build: | total=1
│ 1. pill_spline  extension
```

Pass the result to any logging macro: `info!(target: ..., "{}", block)`.

## Examples

```
use pill_core::telemetry::log_block;

let block = log_block("Modules to build:", ["1. pill_spline", "2. project"]);
assert_eq!(block, "Modules to build:\n1. pill_spline\n2. project\n");
```
