<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-184"></a>

# Module `pill_standalone::windowed_standalone`

Visibility: `crate` · Source: `frontends\pill_standalone\src\windowed_standalone.rs:1`

The windowed run loop and its `winit` application.
The windowed run loop: a `winit` window, the renderer on it, and one frame
per redraw.

## Responsibilities

- Run the project in a `winit` window: create the window, attach the
  renderer, and forward window and device events.
- Feed the run's input to the engine: keyboard and mouse from winit,
  gamepads polled before every frame, and rumble played once the frame is
  done.
- In a development build, start the two optional test modes: a second
  renderer surface (`PILL_SECOND_VIEW=1`, [`SecondView`]) and a picking
  test (`PILL_PICK_TEST=1`, [`PickTest`]).
- Tear the run down between two log lines, so a crash inside the teardown
  is visible in the log.

## Design

The loop is written against [`FrameDriver`], so the same code runs the
development host and a shipped game; [`crate::posture`](../posture/index.md#rustdoc-item-180) provides each
posture's project type, drivers and setup steps. Window-creation and setup
failures are deferred until the event loop exits, and each is reported
where it happens first. Input is forwarded through
[`FrameDriver::push_input`] as `pill_input` translates it, the same
translation the web uses.

This file is compiled only in a windowed build: `main.rs` declares it
instead of `headless_standalone` while the `rendering` feature is on, which
is why nothing here repeats that feature on each item.

## Module contents

### Structs
- [`PickTest`](struct.PickTest.md#rustdoc-item-225) — The picking test: after a fixed number of frames, ask what is under the
- [`SecondView`](struct.SecondView.md#rustdoc-item-195) — The second renderer surface: the same scene drawn through a second camera
- [`WindowedApplication`](struct.WindowedApplication.md#rustdoc-item-264) — State `winit` keeps for the lifetime of the standalone application.

### Functions
- [`close_second_view`](fn.close_second_view.md#rustdoc-item-304) — Detach surface 1 and drop its window. The main window keeps drawing.
- [`run`](fn.run.md#rustdoc-item-263) — Run the project in a native window.
- [`teardown_frontend_state`](fn.teardown_frontend_state.md#rustdoc-item-305) — Drop the frontend's state and log a line before and after it.

### Constants
- [`PICK_TEST_ENVIRONMENT_VARIABLE`](constant.PICK_TEST_ENVIRONMENT_VARIABLE.md#rustdoc-item-188) — Environment variable that runs the picking test.
- [`PICK_TEST_WAIT_FRAMES`](constant.PICK_TEST_WAIT_FRAMES.md#rustdoc-item-189) — Frames the picking test waits before it sends its first pick requests.
- [`SECOND_VIEW_ENVIRONMENT_VARIABLE`](constant.SECOND_VIEW_ENVIRONMENT_VARIABLE.md#rustdoc-item-183) — Environment variable that opens a second window drawn as surface 1.
- [`SECOND_VIEW_SECONDS_ENVIRONMENT_VARIABLE`](constant.SECOND_VIEW_SECONDS_ENVIRONMENT_VARIABLE.md#rustdoc-item-185) — Environment variable that closes the second window after that many seconds.
- [`SECOND_VIEW_SURFACE`](constant.SECOND_VIEW_SURFACE.md#rustdoc-item-186) — The second view's surface id.
