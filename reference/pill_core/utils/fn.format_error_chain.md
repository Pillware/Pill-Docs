<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2075"></a>

# Function `pill_core::utils::format_error_chain`

```rust
pub fn format_error_chain(error: &dyn std::error::Error + 'static) -> String;
```

Source: `engine\pill_core\src\utils.rs:197`

Formats an error and its whole cause chain on a single line.

Printing an error with `Display` shows only the outermost message. The
cause that names the actual problem - which import could not be resolved,
or which file was not found - is only in the chain, not in that text. This
function appends every cause in order, separated by `: `.

Use [`get_project_error_message`](fn.get_project_error_message.md#rustdoc-item-2074) when a multi-line report is wanted. This
one is shaped for a single log line.

## Examples

```
use pill_core::utils::format_error_chain;

let error = std::io::Error::new(std::io::ErrorKind::NotFound, "missing preset");
assert_eq!(format_error_chain(&error), "missing preset");
```
