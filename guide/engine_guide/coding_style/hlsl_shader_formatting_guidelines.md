---
artifact: doc
status: active
updated: 2026-10-09
---

# HLSL Shader Formatting Guidelines

These guidelines define the preferred structure and formatting for HLSL
shaders. The goal is to keep HLSL shaders consistent, easy to parse or
generate, and structurally similar to WGSL shaders where practical.

## 1. General Principles

-   Prefer explicit, predictable shader interfaces.
-   Use structs for shader stage inputs and outputs instead of long
    parameter lists.
-   Keep descriptor set/group and binding information explicit with
    `[[vk::binding(binding, group)]]`.
-   Keep material parameters in a dedicated `MaterialParams` struct.
-   Keep textures and samplers as separate resources.
-   Use descriptive resource names with consistent suffixes such as
    `_texture` and `_sampler`.
-   Access stage inputs through an `input` struct variable.
-   Prefer explicit intermediate variables over deeply nested
    expressions.
-   Keep the shader entry point small and easy to scan.
-   Use `float`, `float2`, `float3`, and `float4` consistently for
    floating-point values.
-   Use Vulkan locations explicitly for interpolated stage inputs and
    outputs.

## 2. File Organization

Prefer the following order:

1.  File-level comments.
2.  Includes.
3.  Material/resource parameter structs.
4.  Resource bindings.
5.  Shader input structs.
6.  Shader output structs.
7.  Helper functions.
8.  Shader entry point.

Example:

``` hlsl
#include "include/common.hlsl"

struct MaterialParams
{
    float posterize_level;
};

[[vk::binding(0, 2)]]
ConstantBuffer<MaterialParams> material;

[[vk::binding(0, 3)]]
Texture2D color_texture;

[[vk::binding(1, 3)]]
SamplerState color_sampler;

struct PixelInput
{
    [[vk::location(0)]] float3 vertex_position      : TEXCOORD0;
    [[vk::location(1)]] float2 texture_coords       : TEXCOORD1;
};

struct PixelOutput
{
    [[vk::location(0)]] float4 output : SV_TARGET0;
};

[shader("fragment")]
PixelOutput fs_main(PixelInput input)
{
    PixelOutput result;

    float4 color = color_texture.Sample(
        color_sampler,
        input.texture_coords
    );

    result.output = color;
    return result;
}
```

## 3. Struct Formatting

Place the opening brace on a new line.

Preferred:

``` hlsl
struct MaterialParams
{
    float roughness;
    float metallic;
};
```

Avoid:

``` hlsl
struct MaterialParams {
    float roughness;
    float metallic;
};
```

Use one member per line and terminate every member with a semicolon.

## 4. Material Parameters

Material parameters should be grouped in a `MaterialParams` struct and
exposed through a constant buffer.

``` hlsl
struct MaterialParams
{
    float roughness;
    float metallic;
};

[[vk::binding(0, 2)]]
ConstantBuffer<MaterialParams> material;
```

Access parameters through the `material` object:

``` hlsl
float roughness = material.roughness;
```

Do not create unrelated global scalar parameters when they logically
belong to the material.

When the renderer uses a fixed slot layout, ensure the HLSL
constant-buffer layout agrees with the CPU-side and WGSL layouts. In
particular, do not assume that visually similar structs necessarily have
identical byte layouts across languages. Add explicit padding or layout
handling in the shader-generation/reflection pipeline when required.

## 5. Resource Bindings

Use explicit Vulkan binding attributes:

``` hlsl
[[vk::binding(0, 3)]]
Texture2D color_texture;

[[vk::binding(1, 3)]]
SamplerState color_sampler;
```

The convention is:

``` text
[[vk::binding(binding, group)]]
```

For example:

``` hlsl
[[vk::binding(2, 3)]]
Texture2D normal_texture;
```

corresponds conceptually to WGSL:

``` wgsl
@binding(2) @group(3)
var normal_texture : texture_2d<f32>;
```

Keep each attribute directly above the resource it describes.

## 6. Texture and Sampler Naming

Use the following naming convention:

``` text
<name>_texture
<name>_sampler
```

Example:

``` hlsl
[[vk::binding(0, 3)]]
Texture2D color_texture;

[[vk::binding(1, 3)]]
SamplerState color_sampler;

[[vk::binding(2, 3)]]
Texture2D normal_texture;

[[vk::binding(3, 3)]]
SamplerState normal_sampler;
```

Sample textures using the matching sampler:

``` hlsl
float4 color = color_texture.Sample(
    color_sampler,
    input.texture_coords
);
```

## 7. Shader Inputs

Always prefer a stage input struct over separate entry-point parameters.

Do not prefix stage-interface members with `in_` or `out_`. The containing type (`VertexInput`, `VertexOutput`, `PixelInput`, etc.) already communicates direction, and the same varying is typically an output in one stage and an input in the next. Name members after the data they carry, such as `vertex_position`, `texture_coords`, `world_position`, or `TBN_normal`.

Preferred:

``` hlsl
struct PixelInput
{
    [[vk::location(0)]] float3 vertex_position      : TEXCOORD0;
    [[vk::location(1)]] float2 texture_coords       : TEXCOORD1;
    [[vk::location(2)]] float3 TBN_tangent           : TEXCOORD2;
    [[vk::location(3)]] float3 TBN_bitangent         : TEXCOORD3;
    [[vk::location(4)]] float3 TBN_normal            : TEXCOORD4;
    [[vk::location(5)]] float3 world_position        : TEXCOORD5;
};
```

Then use:

``` hlsl
[shader("fragment")]
PixelOutput fs_main(PixelInput input)
```

Avoid long signatures such as:

``` hlsl
float4 fs_main(
    float3 position,
    float2 uv,
    float3 tangent,
    float3 bitangent,
    float3 normal,
    float3 world_position
) : SV_TARGET
```

Struct-based interfaces are easier to keep synchronized with WGSL and
easier for shader tooling to inspect or generate.

## 8. Shader Outputs

Prefer an explicit output struct.

``` hlsl
struct PixelOutput
{
    [[vk::location(0)]] float4 output : SV_TARGET0;
};
```

Return it from the entry point:

``` hlsl
[shader("fragment")]
PixelOutput fs_main(PixelInput input)
{
    PixelOutput result;
    result.output = float4(1.0, 0.0, 0.0, 1.0);
    return result;
}
```

This becomes especially useful when a shader has multiple render
targets.

Example:

``` hlsl
struct PixelOutput
{
    [[vk::location(0)]] float4 color  : SV_TARGET0;
    [[vk::location(1)]] float4 normal : SV_TARGET1;
};
```

## 9. Entry Point Naming

Use conventional entry-point names:

``` text
vs_main
fs_main
cs_main
```

For example:

``` hlsl
[shader("vertex")]
VertexOutput vs_main(VertexInput input)
```

``` hlsl
[shader("fragment")]
PixelOutput fs_main(PixelInput input)
```

``` hlsl
[shader("compute")]
[numthreads(8, 8, 1)]
void cs_main(uint3 dispatch_thread_id : SV_DispatchThreadID)
```

## 10. Local Variables

Prefer descriptive local variable names and explicit types.

Preferred:

``` hlsl
float4 color = color_texture.Sample(
    color_sampler,
    input.texture_coords
);

float levels = max(material.posterize_level, 1.0);
float3 posterized = floor(color.rgb * levels) / levels;
```

Avoid unnecessary abbreviation:

``` hlsl
float4 c = color_texture.Sample(color_sampler, input.texture_coords);
float l = max(material.posterize_level, 1.0);
float3 p = floor(c.rgb * l) / l;
```

Short names such as `uv`, `rgb`, or mathematical variables are
acceptable when their meaning is obvious.

## 11. Function Calls

Keep short calls on one line:

``` hlsl
float levels = max(material.posterize_level, 1.0);
```

Split calls when doing so improves readability:

``` hlsl
float4 color = color_texture.Sample(
    color_sampler,
    input.texture_coords
);
```

Do not split simple expressions unnecessarily.

## 12. Helper Functions

Place helper functions before the entry point.

``` hlsl
float3 Posterize(float3 color, float levels)
{
    levels = max(levels, 1.0);
    return floor(color * levels) / levels;
}

[shader("fragment")]
PixelOutput fs_main(PixelInput input)
{
    PixelOutput result;

    float4 color = color_texture.Sample(
        color_sampler,
        input.texture_coords
    );

    result.output = float4(
        Posterize(color.rgb, material.posterize_level),
        color.a
    );

    return result;
}
```

Helpers should receive the values they operate on rather than
unnecessarily depending on global shader state.

## 13. Comments

Comments should explain intent, conventions, layout requirements, or
non-obvious behavior.

Useful:

``` hlsl
// Material slots are allocated in 16-byte units by the renderer.
struct MaterialParams
{
    float posterize_level;
};
```

Useful:

``` hlsl
// Quantize each color channel independently.
float3 posterized = floor(color.rgb * levels) / levels;
```

Avoid comments that merely repeat the code:

``` hlsl
// Set levels to maximum of posterize level and 1.
float levels = max(material.posterize_level, 1.0);
```

## 14. Complete Fragment Shader Example

``` hlsl
// Cartoon fragment shader.
// Posterizes the diffuse texture independently per RGB channel.

#include "include/common.hlsl"

struct MaterialParams
{
    float posterize_level;
};

[[vk::binding(0, 2)]]
ConstantBuffer<MaterialParams> material;

[[vk::binding(0, 3)]]
Texture2D color_texture;

[[vk::binding(1, 3)]]
SamplerState color_sampler;

struct PixelInput
{
    [[vk::location(0)]] float3 vertex_position      : TEXCOORD0;
    [[vk::location(1)]] float2 texture_coords       : TEXCOORD1;
    [[vk::location(2)]] float3 TBN_tangent           : TEXCOORD2;
    [[vk::location(3)]] float3 TBN_bitangent         : TEXCOORD3;
    [[vk::location(4)]] float3 TBN_normal            : TEXCOORD4;
    [[vk::location(5)]] float3 world_position        : TEXCOORD5;
};

struct PixelOutput
{
    [[vk::location(0)]] float4 output : SV_TARGET0;
};

float3 Posterize(float3 color, float levels)
{
    levels = max(levels, 1.0);
    return floor(color * levels) / levels;
}

[shader("fragment")]
PixelOutput fs_main(PixelInput input)
{
    PixelOutput result;

    float4 color = color_texture.Sample(
        color_sampler,
        input.texture_coords
    );

    float3 posterized = Posterize(
        color.rgb,
        material.posterize_level
    );

    result.output = float4(posterized, 1.0);
    return result;
}
```

## 15. Vertex Shader Example

``` hlsl
#include "include/common.hlsl"

struct VertexInput
{
    [[vk::location(0)]] float3 position : POSITION;
    [[vk::location(1)]] float2 uv       : TEXCOORD0;
    [[vk::location(2)]] float3 normal   : NORMAL;
};

struct VertexOutput
{
    float4 position : SV_POSITION;

    [[vk::location(0)]] float3 vertex_position      : TEXCOORD0;
    [[vk::location(1)]] float2 texture_coords       : TEXCOORD1;
};

[shader("vertex")]
VertexOutput vs_main(VertexInput input)
{
    VertexOutput output;

    output.position = float4(input.position, 1.0);
    output.vertex_position = input.position;
    output.texture_coords = input.uv;

    return output;
}
```

The vertex output locations should correspond exactly to the fragment
shader input locations.

## 16. Compute Shader Example

Compute shaders do not need artificial input/output structs when their
interface consists of HLSL system-value semantics.

``` hlsl
struct ComputeParams
{
    uint element_count;
};

[[vk::binding(0, 0)]]
ConstantBuffer<ComputeParams> params;

[[vk::binding(1, 0)]]
RWStructuredBuffer<float> values;

[shader("compute")]
[numthreads(64, 1, 1)]
void cs_main(uint3 dispatch_thread_id : SV_DispatchThreadID)
{
    uint index = dispatch_thread_id.x;

    if (index >= params.element_count)
    {
        return;
    }

    values[index] *= 2.0;
}
```

Do not introduce structs purely for visual consistency when HLSL
built-in semantics make the direct form clearer.

## 17. HLSL to WGSL Structural Mapping

When possible, keep the HLSL representation close to its WGSL
equivalent:

  Concept          HLSL                      WGSL
  ---------------- ------------------------- -------------------------
  Scalar           `float`                   `f32`
  2D vector        `float2`                  `vec2<f32>`
  3D vector        `float3`                  `vec3<f32>`
  4D vector        `float4`                  `vec4<f32>`
  Uniform          `ConstantBuffer<T>`       `var<uniform> : T`
  Texture          `Texture2D`               `texture_2d<f32>`
  Sampler          `SamplerState`            `sampler`
  Binding          `[[vk::binding(B, G)]]`   `@binding(B) @group(G)`
  Location         `[[vk::location(N)]]`     `@location(N)`
  Fragment entry   `[shader("fragment")]`    `@fragment`
  Vertex entry     `[shader("vertex")]`      `@vertex`
  Compute entry    `[shader("compute")]`     `@compute`

The goal is not to make HLSL look syntactically identical to WGSL. The
goal is to make both shaders expose the same conceptual structure so
that resources, parameters, stage interfaces, and generated metadata can
be mapped predictably.

## 18. Preferred Template

Use this as the default starting point for fragment shaders:

``` hlsl
#include "include/common.hlsl"

struct MaterialParams
{
    // Material parameters.
};

[[vk::binding(0, 2)]]
ConstantBuffer<MaterialParams> material;

// Material textures and samplers.

struct PixelInput
{
    // Fragment inputs.
};

struct PixelOutput
{
    [[vk::location(0)]] float4 output : SV_TARGET0;
};

// Helper functions.

[shader("fragment")]
PixelOutput fs_main(PixelInput input)
{
    PixelOutput result;

    // Shader implementation.

    result.output = float4(0.0, 0.0, 0.0, 1.0);
    return result;
}
```

## 19. Summary

A well-formatted shader should make its interface obvious without
reading its implementation. Resources should have explicit bindings,
stage interfaces should use structs, locations should be explicit,
material values should live in a dedicated parameter structure, and
entry points should follow a consistent naming convention.

The preferred HLSL structure should remain close enough to WGSL that the
same abstract shader description can naturally produce either
representation without requiring fundamentally different interface
models.
