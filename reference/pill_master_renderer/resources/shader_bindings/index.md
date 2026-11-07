<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2852"></a>

# Module `pill_master_renderer::resources::shader_bindings`

Visibility: `{'restricted': {'parent': 2227, 'path': '::resources'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\shader_bindings.rs:1`

The bind groups a shader's declared slots resolve to, built once for each
material or pass that has any.

## Responsibilities

- Pack the parameter values of a material or a pass into the uniform buffer
  its shader reads ([`write_parameters`](fn.write_parameters.md#rustdoc-item-2850), sized by [`uniform_size`](fn.uniform_size.md#rustdoc-item-2849)).
- Resolve every texture slot the shader declares into one textures bind
  group ([`shader_bind_groups`](fn.shader_bind_groups.md#rustdoc-item-2848)): a texture the material or pass names, a
  source the caller resolves, or the renderer's stand-in.

## Design

To a shader, a material and a pass look the same: a set of parameter values
and one texture per declared slot. They differ only in where an extra
texture can come from. A pass reads a frame an earlier pass wrote; a
material has nothing beyond the store. That difference is one closure, and
everything else is shared here, so a change to the way a slot binds is made
in one file and the slots of both are read by the same code.

Both groups follow the shader's declaration, not the maps the material or
pass carries. A value or texture named for a slot the shader never declares
is ignored, and a declared slot left unresolved gets the renderer's
stand-in for its type. Depth is refused instead: the renderer has no default
depth texture, so a slot that asks for depth has to name the source it
means.

## Module contents

### Functions
- [`shader_bind_groups`](fn.shader_bind_groups.md#rustdoc-item-2848) — Builds the parameters and textures bind groups a shader reads, for one
- [`uniform_size`](fn.uniform_size.md#rustdoc-item-2849) — The byte size of the uniform buffer a shader's parameter slots need.
- [`write_parameters`](fn.write_parameters.md#rustdoc-item-2850) — Packs the parameter values of a material or a pass into the uniform buffer
