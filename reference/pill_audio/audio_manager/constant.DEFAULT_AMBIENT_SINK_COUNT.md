<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-231"></a>

# Constant `pill_audio::audio_manager::DEFAULT_AMBIENT_SINK_COUNT`

```rust
pub const DEFAULT_AMBIENT_SINK_COUNT: usize = 16;
```

Source: `extensions\pill_audio\pill_audio\src\audio_manager.rs:40`

Sinks the manager creates for non-positional playback.

One sink is one voice, so this is also the limit on how many non-positional
sounds play at once. The pool is built once, in [`AudioManager::new`](struct.AudioManager.md#rustdoc-item-230),
because rodio allocates a mixer channel per sink and a pool that grew
mid-frame would allocate on the audio path.
