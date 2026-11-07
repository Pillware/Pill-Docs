<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-278"></a>

# Struct `pill_player::static_project::StaticProject`

```rust
pub struct StaticProject;
```

Source: `hosting\pill_player\src\static_project.rs:142`

A project and its extensions, compiled into the binary.

It takes the place of the development host's project settings. There is no
project path, no build command and no watch directory, because nothing is
built or watched.

## Fields

<a id="rustdoc-item-651"></a>

### `name`

```rust
name: &'static str
```

Project name, used in logs and as the window title.

<a id="rustdoc-item-652"></a>

### `backend`

```rust
backend: StaticProjectBackend
```

How to reach the project itself.

<a id="rustdoc-item-653"></a>

### `modules`

```rust
modules: &'static [StaticModule]
```

Extensions, initialized in order **before** the project.

The order matters here for the same reason it does with reloading: the
project may name types a module defines, so the module has to register
them first. A managed project also needs every module's components
registered before its assembly loads, so the bindings it is handed can
resolve them.

<a id="rustdoc-item-654"></a>

### `renderer`

```rust
renderer: Option<StaticRenderer>
```

The renderer this binary links, when it was built to draw.

`None` for a headless shipping build, which links no renderer at all.

<a id="rustdoc-item-656"></a>

### `asset_pack`

```rust
asset_pack: Option<&'static [u8]>
```

The project's `res` directory as an asset pack, embedded in the binary
by the shipping bundle and mounted before anything initializes.

`None` for a project without a `res` directory, and for the browser
posture, whose pack is fetched instead (see [`Self::asset_pack_url`](#rustdoc-item-655)).

<a id="rustdoc-item-655"></a>

### `asset_pack_url`

```rust
asset_pack_url: Option<&'static str>
```

Where the browser posture fetches its asset pack from, relative to the
page. The shipping bundle names the file that `build_web.py` puts beside
it.

`pill_web` is the only code that reads it. A native build embeds its
pack instead and leaves this `None`, and this crate ignores it: fetching
is a browser's job.

<a id="rustdoc-item-658"></a>

### `logging`

```rust
logging: StaticLogging
```

The `logging:` section of the project's settings, as the bundle
generator validated it; [`StaticLogging::NONE`](struct.StaticLogging.md#rustdoc-item-657) for none.

<a id="rustdoc-item-660"></a>

### `debug_draw`

```rust
debug_draw: bool
```

Whether debug drawing starts on: the settings' `debug_draw:` key,
`false` when absent. A system can still switch it at runtime.

<a id="rustdoc-item-661"></a>

### `startup_scene`

```rust
startup_scene: Option<&'static str>
```

The scene the project's settings named as its startup scene, loaded once
every component is registered (`startup_scene:` in
`project_settings.yaml`).

A natively linked project gets it before its `init` seeds anything; an
external backend gets it once its `start` has returned.

## Associated functions and methods

<a id="rustdoc-item-664"></a>

### `initialize`

```rust
pub(crate) fn initialize(self: &Self, engine: &mut Engine) -> Result<Option<Box<dyn Any>>, HostError>;
```

Initialize every extension, then the project.

Owners come from [`crate::registration`](../registration/index.md#rustdoc-item-124), as they do in the reloading
host, so a statically linked module's systems are attributed to the same
owner they would have had there. Nothing here can be cleared or
re-registered, but the attribution still decides which systems a pause
suspends and how a system list labels them.

On success it returns an external backend's guard, which the caller must
keep alive for as long as the engine lives (see [`ProjectBackend::start`](trait.ProjectBackend.md#rustdoc-item-585)).
A natively linked project returns `None`.

#### Errors

Returns [`ModuleError::InitializationFailed`] naming the first module
whose registration or init reported a non-zero status,
[`LibraryError::InitializationFailed`] when a native project's entry
point does, or what an external backend returns.

Initialization stops at the first failure: there is no previous
generation to roll back to on this path, so continuing would run a
partially registered world.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
