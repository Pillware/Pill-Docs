<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1580"></a>

# Module `pill_master_renderer_data::config::post_processing`

Source: `extensions\pill_master_renderer\modules\runtime\data\src\config\post_processing\mod.rs:1`

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
- [`grain_texture`](fn.grain_texture.md#rustdoc-item-1620) — A [`GRAIN_TILE_SIZE`] square grain tile, generated rather than shipped.
- [`install`](fn.install.md#rustdoc-item-1597) — Install the four post-processing passes.
- [`lottes_bc`](fn.lottes_bc.md#rustdoc-item-1619) — Solve the two constants that define the shape of Lottes' tonemap.

### Constants
- [`BLOOM_KNEE`](constant.BLOOM_KNEE.md#rustdoc-item-1604) — How softly the bloom ramps in above [`BLOOM_THRESHOLD`].
- [`BLOOM_PASS`](constant.BLOOM_PASS.md#rustdoc-item-1599) — Asset name of the bloom prefilter pass.
- [`BLOOM_STRENGTH`](constant.BLOOM_STRENGTH.md#rustdoc-item-1605) — How much of the bloom is added back over the lit image.
- [`BLOOM_TARGET`](constant.BLOOM_TARGET.md#rustdoc-item-1579) — Target the prefilter writes and the composite reads.
- [`BLOOM_THRESHOLD`](constant.BLOOM_THRESHOLD.md#rustdoc-item-1603) — Brightness a pixel has to exceed before it blooms.
- [`COMPOSITE_FRAGMENT`](constant.COMPOSITE_FRAGMENT.md#rustdoc-item-1589)
- [`COMPOSITE_GUID`](constant.COMPOSITE_GUID.md#rustdoc-item-1590) — The bloom composite shader's guid, which its meta repeats.
- [`COMPOSITE_PASS`](constant.COMPOSITE_PASS.md#rustdoc-item-1600) — Asset name of the bloom composite pass.
- [`COMPOSITE_SHADER`](constant.COMPOSITE_SHADER.md#rustdoc-item-1588) — The bloom composite's fragment stage.
- [`FULLSCREEN_VERTEX`](constant.FULLSCREEN_VERTEX.md#rustdoc-item-1584) — The cooked fullscreen vertex stage every pass here draws through.
- [`GRAIN_PIXELS_PER_TEXEL`](constant.GRAIN_PIXELS_PER_TEXEL.md#rustdoc-item-1617) — Screen pixels per grain texel.
- [`GRAIN_TEXTURE_NAME`](constant.GRAIN_TEXTURE_NAME.md#rustdoc-item-1583) — Asset name of the generated grain tile.
- [`GRAIN_TILE_SIZE`](constant.GRAIN_TILE_SIZE.md#rustdoc-item-1618) — Edge of the grain tile, in texels.
- [`HDR_MAX`](constant.HDR_MAX.md#rustdoc-item-1608) — The range the display has to fit, in scene units.
- [`HDR_TARGET`](constant.HDR_TARGET.md#rustdoc-item-1577) — Name of the target the frame's geometry pass writes, and the first pass here
- [`LDR_TARGET`](constant.LDR_TARGET.md#rustdoc-item-1582) — Target the tonemap writes and the lens pass reads.
- [`LENS_BARREL_K1`](constant.LENS_BARREL_K1.md#rustdoc-item-1611) — Barrel distortion. A negative value bows the sides outward; a positive
- [`LENS_CHROMATIC_ABERRATION`](constant.LENS_CHROMATIC_ABERRATION.md#rustdoc-item-1613) — How far red and blue split at the edge, as a scale of the radius squared.
- [`LENS_FRAGMENT`](constant.LENS_FRAGMENT.md#rustdoc-item-1595)
- [`LENS_GAMMA`](constant.LENS_GAMMA.md#rustdoc-item-1614) — Per-channel exponent applied before the grade's ramp.
- [`LENS_GRADE`](constant.LENS_GRADE.md#rustdoc-item-1615) — The grade's ramp: where it starts, where it ends, and how much of the graded
- [`LENS_GRAIN_AMPLITUDE`](constant.LENS_GRAIN_AMPLITUDE.md#rustdoc-item-1616) — Grain amplitude.
- [`LENS_GUID`](constant.LENS_GUID.md#rustdoc-item-1596) — The lens shader's guid, which its meta repeats.
- [`LENS_PASS`](constant.LENS_PASS.md#rustdoc-item-1602) — Asset name of the lens pass.
- [`LENS_SHADER`](constant.LENS_SHADER.md#rustdoc-item-1594) — The lens pass's fragment stage.
- [`LENS_VIGNETTE_STRENGTH`](constant.LENS_VIGNETTE_STRENGTH.md#rustdoc-item-1612) — How far the vignette pulls the corners down.
- [`LIT_TARGET`](constant.LIT_TARGET.md#rustdoc-item-1581) — Target the composite writes and the tonemap reads.
- [`MID_GREY_IN`](constant.MID_GREY_IN.md#rustdoc-item-1609) — Where mid grey enters the curve, in scene units.
- [`MID_GREY_OUT`](constant.MID_GREY_OUT.md#rustdoc-item-1610) — The display value that mid grey is mapped to.
- [`PREFILTER_FRAGMENT`](constant.PREFILTER_FRAGMENT.md#rustdoc-item-1586)
- [`PREFILTER_GUID`](constant.PREFILTER_GUID.md#rustdoc-item-1587) — The bloom prefilter shader's guid, which its meta repeats.
- [`PREFILTER_SHADER`](constant.PREFILTER_SHADER.md#rustdoc-item-1585) — The bloom prefilter's fragment stage, named twice: once as the `.hlsl`
- [`SHADER_SOURCES`](constant.SHADER_SOURCES.md#rustdoc-item-1598) — The shader assets [`install`] creates, and the files each is built from.
- [`TONEMAP_CONTRAST`](constant.TONEMAP_CONTRAST.md#rustdoc-item-1606) — The tonemap curve's contrast exponent.
- [`TONEMAP_FRAGMENT`](constant.TONEMAP_FRAGMENT.md#rustdoc-item-1592)
- [`TONEMAP_GUID`](constant.TONEMAP_GUID.md#rustdoc-item-1593) — The tonemap shader's guid, which its meta repeats.
- [`TONEMAP_PASS`](constant.TONEMAP_PASS.md#rustdoc-item-1601) — Asset name of the tonemap pass.
- [`TONEMAP_SHADER`](constant.TONEMAP_SHADER.md#rustdoc-item-1591) — The tonemap's fragment stage.
- [`TONEMAP_SHOULDER`](constant.TONEMAP_SHOULDER.md#rustdoc-item-1607) — The exponent that shapes how the tonemap bends its highlights down.
