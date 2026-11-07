<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-124"></a>

# Struct `pill_audio::audio_manager::AudioManager`

```rust
pub struct AudioManager;
```

Source: `extensions\pill_audio\pill_audio\src\audio_manager.rs:66`

Owns the output stream and the pooled sinks that play through it.

The manager must outlive every sound playing through it, because dropping
the stream stops all audio. It is a resource for that reason, and because
there is exactly one audio device.

It declares its settings surface in the module's `register`
([`AudioSettingsAsset`](struct.AudioSettingsAsset.md#rustdoc-item-247)): the applier points into that image, so every
generation re-points it.

## Fields

<a id="rustdoc-item-234"></a>

### `_stream`

```rust
_stream: rodio::OutputStream
```

The output stream. Nothing reads it after construction, but dropping it
silences every sink, so it is held for its lifetime alone.

<a id="rustdoc-item-238"></a>

### `stream_handle`

```rust
stream_handle: rodio::OutputStreamHandle
```

Handle used to build sinks against the stream. Also handed out by
[`AudioManager::stream_handle`](#rustdoc-item-237).

<a id="rustdoc-item-240"></a>

### `ambient_sinks`

```rust
ambient_sinks: Vec<rodio::Sink>
```

Non-positional sinks, indexed by the sink index a source stores in
[`AudioSourceComponent::sink`].

<a id="rustdoc-item-242"></a>

### `spatial_sinks`

```rust
spatial_sinks: Vec<rodio::SpatialSink>
```

Positional sinks, indexed the same way.

<a id="rustdoc-item-244"></a>

### `free_ambient_sink_indices`

```rust
free_ambient_sink_indices: Vec<u32>
```

Indices of the ambient sinks that no source holds.

<a id="rustdoc-item-245"></a>

### `free_spatial_sink_indices`

```rust
free_spatial_sink_indices: Vec<u32>
```

Indices of the spatial sinks that no source holds.

<a id="rustdoc-item-246"></a>

### `ear_separation`

```rust
ear_separation: f32
```

Half the distance between the listener's ears, as the project set it.

The sinks were built with [`EAR_SEPARATION`](constant.EAR_SEPARATION.md#rustdoc-item-233); a settings document may
move them while the device runs, so the value the manager was built with
is kept to tell a real change from a repeated one.

## Associated functions and methods

<a id="rustdoc-item-248"></a>

### `settings`

```rust
pub fn settings(self: &Self) -> AudioSettings;
```

The settings this device is running with.

<a id="rustdoc-item-230"></a>

### `new`

```rust
pub fn new(ambient_sink_count: usize, spatial_sink_count: usize) -> Option<Self>;
```

Opens the default output device and builds both sink pools.

Returns `None` when there is no audio device: a headless CI runner, a
container, a machine with audio turned off. That is an ordinary
condition rather than an error. [`crate::register`](../fn.register.md#rustdoc-item-186) then installs no
manager, and [`crate::audio_system`] only drains queued sound loads.

<a id="rustdoc-item-250"></a>

### `with_defaults`

```rust
pub fn with_defaults() -> Option<Self>;
```

Opens the default device with the default pool sizes.

<a id="rustdoc-item-251"></a>

### `acquire`

```rust
pub fn acquire(self: &mut Self, sound_type: SoundType) -> Option<u32>;
```

Takes a free sink index from the pool that `sound_type` names.

Returns `None` when every sink of that kind is busy, which limits the
number of voices instead of allocating more under load.

<a id="rustdoc-item-253"></a>

### `release`

```rust
pub fn release(self: &mut Self, sound_type: SoundType, sink_index: u32);
```

Returns a sink to its pool, stopping whatever it was playing.

Stopping is what makes the sink reusable. rodio queues a new source
behind whatever the sink still holds, so leftover audio from the last
sound would play first; a stopped sink ends its current sound and drops
the queued ones within a few milliseconds. Handing back an index the
pool already holds is refused, because a double free would give one
sink to two sources.

<a id="rustdoc-item-254"></a>

### `is_playing`

```rust
pub fn is_playing(self: &Self, sound_type: SoundType, sink_index: u32) -> bool;
```

Returns whether the sink has audio queued and is not paused.

An index with no sink of that kind reports `false`.

<a id="rustdoc-item-255"></a>

### `is_finished`

```rust
pub fn is_finished(self: &Self, sound_type: SoundType, sink_index: u32) -> bool;
```

Returns whether the sink has drained everything appended to it.

An index with no sink of that kind counts as finished.

<a id="rustdoc-item-256"></a>

### `start`

```rust
pub(crate) fn start(self: &Self, sound_type: SoundType, sink_index: u32, sound: &Sound, volume: f32) -> bool;
```

Queues `sound` on `sink_index` and starts playing it at `volume`.

Returns `false` and leaves the sink untouched when the bytes cannot be
decoded or when `sink_index` names no sink of that kind.

<a id="rustdoc-item-257"></a>

### `pause`

```rust
pub(crate) fn pause(self: &Self, sound_type: SoundType, sink_index: u32);
```

Halts a sink without returning it to the pool.

<a id="rustdoc-item-258"></a>

### `set_volume`

```rust
pub(crate) fn set_volume(self: &Self, sound_type: SoundType, sink_index: u32, volume: f32);
```

Sets a sink's playback volume, where 1.0 is the sound's own level.

<a id="rustdoc-item-259"></a>

### `set_emitter`

```rust
pub(crate) fn set_emitter(self: &Self, sink_index: u32, emitter_position: [f32; 3]);
```

Moves a spatial sink's emitter to a world position.

<a id="rustdoc-item-260"></a>

### `set_ears`

```rust
pub(crate) fn set_ears(self: &Self, left_ear_position: [f32; 3], right_ear_position: [f32; 3]);
```

Moves the ears of every spatial sink.

The ears belong to the listener, not to a sound, so they are set on
every spatial sink at once instead of per source.

<a id="rustdoc-item-237"></a>

### `stream_handle`

```rust
pub fn stream_handle(self: &Self) -> &rodio::OutputStreamHandle;
```

Returns the stream handle, for code that builds its own sinks.

<a id="rustdoc-item-261"></a>

### `free_counts`

```rust
pub fn free_counts(self: &Self) -> (usize, usize);
```

Returns how many sinks of each kind are unassigned, as
`(ambient, spatial)`.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `FromSample<S>`
- `ToSample<U>`
- `Duplex<S>`
- `IntoSample<T>`
- `Resource`
- `Send`
- `Sync`
- `SettingsAssetManager`
