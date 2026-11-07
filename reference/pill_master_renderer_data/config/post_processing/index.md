<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1483"></a>

# Module `pill_master_renderer_data::config::post_processing`

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\post_processing\mod.rs:1`

The post-processing passes the PBR frame composes.
The post-processing half of the PBR frame: bloom, its composite, the tonemap
and the lens pass that writes the surface.

## Responsibilities

- Declare the four fullscreen passes the frame ends with, and the shaders
  they draw through ([`install`]).
- Own the offscreen target names the passes hand between each other, and the
  generated grain tile the last one samples.

## Design

Four passes in a row, each reading a target an earlier pass wrote:

```text
bloom      reads hdr         → bloom    what is brighter than the threshold, at half size
composite  reads hdr, bloom  → lit      bloom added back over the lit image
tonemap    reads lit         → ldr      the range brought down for the display
lens       reads ldr         → surface  grain, grade and vignette
```

The first of them reads [`HDR_TARGET`], which the frame's geometry pass
writes. That name is declared here rather than there because the passes that
consume it live here, and the geometry pass only writes it.

## Where the shaders are

In `shader_sources/post_processing/shaders/`: the fullscreen vertex stage
each pass here draws through, and the four fragment stages. The fragment
stages `#include` nothing. The vertex stage includes `common.hlsl`, which
lives in `shader_sources/common_shaders/include/`.

## Module contents

### Functions
- [`grain_texture`](fn.grain_texture.md#rustdoc-item-1523) — A [`GRAIN_TILE_SIZE`] square grain tile, generated rather than shipped.
- [`install`](fn.install.md#rustdoc-item-1500) — Install the four post-processing passes.
- [`lottes_bc`](fn.lottes_bc.md#rustdoc-item-1522) — Solve the two constants that define the shape of Lottes' tonemap.

### Constants
- [`BLOOM_KNEE`](constant.BLOOM_KNEE.md#rustdoc-item-1507) — How softly the bloom ramps in above [`BLOOM_THRESHOLD`].
- [`BLOOM_PASS`](constant.BLOOM_PASS.md#rustdoc-item-1502) — Asset name of the bloom prefilter pass.
- [`BLOOM_STRENGTH`](constant.BLOOM_STRENGTH.md#rustdoc-item-1508) — How much of the bloom is added back over the lit image.
- [`BLOOM_TARGET`](constant.BLOOM_TARGET.md#rustdoc-item-1482) — Target the prefilter writes and the composite reads.
- [`BLOOM_THRESHOLD`](constant.BLOOM_THRESHOLD.md#rustdoc-item-1506) — Brightness a pixel has to exceed before it blooms.
- [`COMPOSITE_FRAGMENT`](constant.COMPOSITE_FRAGMENT.md#rustdoc-item-1492)
- [`COMPOSITE_GUID`](constant.COMPOSITE_GUID.md#rustdoc-item-1493) — The bloom composite shader's guid, which its meta repeats.
- [`COMPOSITE_PASS`](constant.COMPOSITE_PASS.md#rustdoc-item-1503) — Asset name of the bloom composite pass.
- [`COMPOSITE_SHADER`](constant.COMPOSITE_SHADER.md#rustdoc-item-1491) — The bloom composite's fragment stage.
- [`FULLSCREEN_VERTEX`](constant.FULLSCREEN_VERTEX.md#rustdoc-item-1487) — The cooked fullscreen vertex stage every pass here draws through.
- [`GRAIN_PIXELS_PER_TEXEL`](constant.GRAIN_PIXELS_PER_TEXEL.md#rustdoc-item-1520) — Screen pixels per grain texel.
- [`GRAIN_TEXTURE_NAME`](constant.GRAIN_TEXTURE_NAME.md#rustdoc-item-1486) — Asset name of the generated grain tile.
- [`GRAIN_TILE_SIZE`](constant.GRAIN_TILE_SIZE.md#rustdoc-item-1521) — Edge of the grain tile, in texels.
- [`HDR_MAX`](constant.HDR_MAX.md#rustdoc-item-1511) — The range the display has to fit, in scene units.
- [`HDR_TARGET`](constant.HDR_TARGET.md#rustdoc-item-1480) — Name of the target the frame's geometry pass writes, and the first pass here
- [`LDR_TARGET`](constant.LDR_TARGET.md#rustdoc-item-1485) — Target the tonemap writes and the lens pass reads.
- [`LENS_BARREL_K1`](constant.LENS_BARREL_K1.md#rustdoc-item-1514) — Barrel distortion. A negative value bows the sides outward; a positive
- [`LENS_CHROMATIC_ABERRATION`](constant.LENS_CHROMATIC_ABERRATION.md#rustdoc-item-1516) — How far red and blue split at the edge, as a scale of the radius squared.
- [`LENS_FRAGMENT`](constant.LENS_FRAGMENT.md#rustdoc-item-1498)
- [`LENS_GAMMA`](constant.LENS_GAMMA.md#rustdoc-item-1517) — Per-channel exponent applied before the grade's ramp.
- [`LENS_GRADE`](constant.LENS_GRADE.md#rustdoc-item-1518) — The grade's ramp: where it starts, where it ends, and how much of the graded
- [`LENS_GRAIN_AMPLITUDE`](constant.LENS_GRAIN_AMPLITUDE.md#rustdoc-item-1519) — Grain amplitude.
- [`LENS_GUID`](constant.LENS_GUID.md#rustdoc-item-1499) — The lens shader's guid, which its meta repeats.
- [`LENS_PASS`](constant.LENS_PASS.md#rustdoc-item-1505) — Asset name of the lens pass.
- [`LENS_SHADER`](constant.LENS_SHADER.md#rustdoc-item-1497) — The lens pass's fragment stage.
- [`LENS_VIGNETTE_STRENGTH`](constant.LENS_VIGNETTE_STRENGTH.md#rustdoc-item-1515) — How far the vignette pulls the corners down.
- [`LIT_TARGET`](constant.LIT_TARGET.md#rustdoc-item-1484) — Target the composite writes and the tonemap reads.
- [`MID_GREY_IN`](constant.MID_GREY_IN.md#rustdoc-item-1512) — Where mid grey enters the curve, in scene units.
- [`MID_GREY_OUT`](constant.MID_GREY_OUT.md#rustdoc-item-1513) — The display value that mid grey is mapped to.
- [`PREFILTER_FRAGMENT`](constant.PREFILTER_FRAGMENT.md#rustdoc-item-1489)
- [`PREFILTER_GUID`](constant.PREFILTER_GUID.md#rustdoc-item-1490) — The bloom prefilter shader's guid, which its meta repeats.
- [`PREFILTER_SHADER`](constant.PREFILTER_SHADER.md#rustdoc-item-1488) — The bloom prefilter's fragment stage, named twice: once as the `.hlsl`
- [`SHADER_SOURCES`](constant.SHADER_SOURCES.md#rustdoc-item-1501) — The shader assets [`install`] creates, and the files each is built from.
- [`TONEMAP_CONTRAST`](constant.TONEMAP_CONTRAST.md#rustdoc-item-1509) — The tonemap curve's contrast exponent.
- [`TONEMAP_FRAGMENT`](constant.TONEMAP_FRAGMENT.md#rustdoc-item-1495)
- [`TONEMAP_GUID`](constant.TONEMAP_GUID.md#rustdoc-item-1496) — The tonemap shader's guid, which its meta repeats.
- [`TONEMAP_PASS`](constant.TONEMAP_PASS.md#rustdoc-item-1504) — Asset name of the tonemap pass.
- [`TONEMAP_SHADER`](constant.TONEMAP_SHADER.md#rustdoc-item-1494) — The tonemap's fragment stage.
- [`TONEMAP_SHOULDER`](constant.TONEMAP_SHOULDER.md#rustdoc-item-1510) — The exponent that shapes how the tonemap bends its highlights down.
