<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1638"></a>

# Module `pill_master_renderer::readback`

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\readback.rs:1`

Mapping a GPU buffer back to the CPU without stalling a frame.
Mapping a GPU buffer back to the CPU without stalling a frame.

## Responsibilities

- Start a buffer's mapping once the frame that wrote it was submitted
  ([`MapState::start`]).
- Poll that mapping without waiting, hand the mapped bytes to a decoder and
  report one of three outcomes ([`MapState::poll`]).
- Own a readback buffer together with its mapping, for a caller that needs
  both ([`MappedReadback`]).

## Design

Reading a buffer back cannot block a frame, so the work is split. The copy
is recorded while the frame is built, and only after that frame is
submitted does [`MapState::start`] ask the device to map the buffer. Asking
earlier would make the submission fail. A later poll decodes whatever has
arrived by then.

Neither a map that failed nor bytes that cannot be read may leave a caller
waiting, so both cases report [`Readback::Failed`], and the caller answers
its own request with nothing.

The state lives behind an [`Arc`] because the map callback runs on the
device's own thread while the frame path polls it.

## Module contents

### Structs
- [`MappedReadback`](struct.MappedReadback.md#rustdoc-item-768) — A readback buffer that remembers its own mapping.
- [`MapState`](struct.MapState.md#rustdoc-item-1569) — One buffer's mapping, shared with the callback that reports it.

### Enums
- [`MapOutcome`](enum.MapOutcome.md#rustdoc-item-1684) — What the device's map callback reported.
- [`Readback`](enum.Readback.md#rustdoc-item-1646) — What one [`MapState::poll`] found.

### Functions
- [`read_mapped`](fn.read_mapped.md#rustdoc-item-1789) — Reads a mapped buffer through `read`, unmapping it either way.

### Constants
- [`MAPPING_DONE`](constant.MAPPING_DONE.md#rustdoc-item-1639) — The callback reported that the buffer is mapped and readable.
- [`MAPPING_FAILED`](constant.MAPPING_FAILED.md#rustdoc-item-1640) — The callback reported that the device refused to map the buffer.
- [`MAPPING_PENDING`](constant.MAPPING_PENDING.md#rustdoc-item-1637) — The map callback has not reported yet.
