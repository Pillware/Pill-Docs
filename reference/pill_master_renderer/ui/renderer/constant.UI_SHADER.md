<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2957"></a>

# Constant `pill_master_renderer::ui::renderer::UI_SHADER`

```rust
pub(in ui::renderer) const UI_SHADER: &str = r#"
struct Globals {
    // Physical target size in .xy; .zw unused.
    viewport: vec4<f32>,
};

@group(0) @binding(0) var<uniform> globals: Globals;
@group(1) @binding(0) var ui_texture: texture_2d<f32>;
@group(1) @binding(1) var ui_sampler: sampler;

struct VertexIn {
    @location(0) position: vec2<f32>,
    @location(1) uv: vec2<f32>,
    @location(2) color: vec4<f32>,
};

struct VertexOut {
    @builtin(position) position: vec4<f32>,
    @location(0) uv: vec2<f32>,
    @location(1) color: vec4<f32>,
};

// The sRGB to linear-light transfer function, per channel.
fn srgb_to_linear(color: vec3<f32>) -> vec3<f32> {
    let low = color / 12.92;
    let high = pow((color + 0.055) / 1.055, vec3<f32>(2.4));
    return select(low, high, color > vec3<f32>(0.04045));
}

@vertex
fn vs_main(in: VertexIn) -> VertexOut {
    let normalized = in.position / globals.viewport.xy;
    var out: VertexOut;
    out.position = vec4<f32>(normalized.x * 2.0 - 1.0, 1.0 - normalized.y * 2.0, 0.0, 1.0);
    out.uv = in.uv;
    out.color = in.color;
    return out;
}

@fragment
fn fs_main(in: VertexOut) -> @location(0) vec4<f32> {
    // The sampled texel is linear already (the texture decodes sRGB); the
    // vertex colour is decoded here, and the sRGB target encodes the result.
    let texel = textureSample(ui_texture, ui_sampler, in.uv);
    let linear = srgb_to_linear(in.color.rgb) * texel.rgb;
    return vec4<f32>(linear, in.color.a * texel.a);
}
"#;
```

Visibility: `{'restricted': {'parent': 2958, 'path': '::ui::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\ui\renderer.rs:53`

The whole pipeline in one WGSL source. The vertex stage turns physical
pixels into clip space, and the fragment stage returns linear light that an
sRGB target encodes.
