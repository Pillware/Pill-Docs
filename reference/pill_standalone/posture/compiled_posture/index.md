<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-179"></a>

# Module `pill_standalone::posture::compiled_posture`

Visibility: `{'restricted': {'parent': 180, 'path': '::posture'}}` · Source: `frontends\pill_standalone\src\posture.rs:31`

The development posture: `pill_development_host` builds, loads and reloads
the project.

## Module contents

### Functions
- [`attach_renderer`](fn.attach_renderer.md#rustdoc-item-177) — Loads the renderer module and attaches it to `window`.
- [`setup_driver`](fn.setup_driver.md#rustdoc-item-176) — Builds and loads the project and its extensions, then starts their

### Type aliases
- [`HeadlessDriver`](type.HeadlessDriver.md#rustdoc-item-172) — The development host before a renderer window is attached.
- [`ProjectSource`](type.ProjectSource.md#rustdoc-item-170) — The development host's configuration: the project and the extensions
- [`WindowedDriver`](type.WindowedDriver.md#rustdoc-item-174) — The development host with the renderer attached to one window.
