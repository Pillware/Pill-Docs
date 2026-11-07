<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2074"></a>

# Function `pill_core::utils::get_project_error_message`

```rust
pub fn get_project_error_message<E: std::error::Error>(result: Result<(), E>) -> Option<String>;
```

Source: `engine\pill_core\src\utils.rs:163`

Formats an error and its whole cause chain into one message.

The first line holds the top-level error, prefixed with
`Pill project error: `. Each cause follows on its own line, indented and
numbered from 0 in chain order.

## Examples

```
use pill_core::utils::get_project_error_message;

let error = std::io::Error::new(std::io::ErrorKind::NotFound, "missing preset");
let message = get_project_error_message(Err(error)).expect("an error formats");
assert!(message.starts_with("Pill project error: missing preset"));
assert!(get_project_error_message(Ok::<(), std::io::Error>(())).is_none());
```
