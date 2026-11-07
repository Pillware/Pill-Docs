<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-275"></a>

# Module `pill_master_renderer::instance`

Source: `extensions\pill_master_renderer\pill_master_renderer\src\instance.rs:1`

The per-instance transform the drawer uploads for the vertex shader.
The per-instance model matrix in the layout the vertex shader reads, and
the vertex buffer layout that binds it.

## Responsibilities

- Carry one queued instance's model matrix, packed into the three `float4`
  rows the shader reads ([`Instance`](struct.Instance.md#rustdoc-item-134)).
- Build that matrix from a [`TransformComponent`] (`Instance::new`).
- Build every queued instance's matrix for a frame, in queue order, on
  the shared thread pool ([`build_queued_instances`]).
- Describe the vertex buffer layout for the instance step mode: three
  attributes at consecutive offsets, read once per instance.

## Design

The matrix is built once per instance on the CPU, and the shader only puts
the rows back into a matrix. Building it per vertex instead would repeat
the same work for every vertex of a mesh that is drawn many times, and
sending the rotation as Euler angles would cost three inverse trigonometric
calls per instance.

Only the top three rows of the matrix are sent. The fourth row is always
`0, 0, 0, 1`, so the shader supplies it itself. `#[repr(C)]` over three
`[f32; 4]` rows keeps the layout free of padding, so the descriptor's
offsets match the shader's attributes.

## Module contents

### Structs
- [`Instance`](struct.Instance.md#rustdoc-item-134) — One instance's model matrix, packed the way the vertex shader reads it.

### Functions
- [`build_queued_instances`](fn.build_queued_instances.md#rustdoc-item-334) — Writes the model matrix of every queued instance into `instance_matrices`,

### Constants
- [`INSTANCES_PER_CHUNK`](constant.INSTANCES_PER_CHUNK.md#rustdoc-item-274) — How many instances one chunk of the parallel build holds.
