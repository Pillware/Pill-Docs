<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-945"></a>

# Module `pill_core::metrics`

Source: `engine\pill_core\src\metrics.rs:1`

Metrics recording foundation, gated on the `metrics` feature.
Repeated numerical measurements through the `metrics` crate.

## Responsibilities

- Install one process-wide [`metrics::Recorder`] for the engine.
- Forward gauges and histograms to Tracy plots when the `tracy` feature is
  active, so repeated numbers appear as native Tracy graphs.

## Design

The host's telemetry setup calls [`install_metrics`] once. After that, the
`metrics::gauge!`, `metrics::counter!` and `metrics::histogram!` macros
record into this recorder from any crate.

The recorder keeps no copy of the values. A gauge `set` or a histogram
sample reaches a Tracy plot when a profiler is connected, and goes nowhere
otherwise, so nothing in the engine reads a metric back. Without an
installed recorder the `metrics` macros fall back to a no-op one, so
installing this recorder is what makes their values go anywhere. Plot
names are cached, so the leaked `PlotName` is created once per metric name.

## Module contents

### Structs
- [`EngineMetricsRecorder`](struct.EngineMetricsRecorder.md#rustdoc-item-973) — The process-wide recorder: accepts every `metrics` update and forwards the
- [`NullHandle`](struct.NullHandle.md#rustdoc-item-1018) — A handle that drops every update.
- [`TracyForwardingState`](struct.TracyForwardingState.md#rustdoc-item-947) — The state shared by the recorder and the handles it hands out: the cache
- [`TracyPlotGauge`](struct.TracyPlotGauge.md#rustdoc-item-1055) — The gauge handle that sends every `set` value to a Tracy plot.
- [`TracyPlotHistogram`](struct.TracyPlotHistogram.md#rustdoc-item-1082) — The histogram handle that sends every recorded sample to a Tracy plot.

### Functions
- [`install_metrics`](fn.install_metrics.md#rustdoc-item-1107) — Installs the engine metrics recorder process-wide.
- [`install_metrics_with`](fn.install_metrics_with.md#rustdoc-item-1108) — Installs a specific engine metrics recorder process-wide.
- [`sanitize_plot_name`](fn.sanitize_plot_name.md#rustdoc-item-1106) — Turns a metric name into the name of its Tracy plot.
