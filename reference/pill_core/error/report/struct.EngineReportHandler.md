<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-762"></a>

# Struct `pill_core::error::report::EngineReportHandler`

```rust
pub struct EngineReportHandler;
```

Source: `engine\pill_core\src\error\report.rs:129`

Prints a report in the terminal, using miette's graphical layout over the
engine's diagnostic data.

The styled message is set up by [`engine_report`](fn.engine_report.md#rustdoc-item-761), which wraps the error in
[`StyledDiagnosticProxy`](struct.StyledDiagnosticProxy.md#rustdoc-item-719) before miette turns it into a report.

## Fields

<a id="rustdoc-item-759"></a>

### `graphical_report_handler`

```rust
graphical_report_handler: miette::GraphicalReportHandler
```

_No documentation provided._

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Default`
- `ReportHandler`
