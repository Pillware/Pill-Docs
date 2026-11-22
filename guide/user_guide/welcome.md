---
layout: doc
title: Welcome
description: Pill is a modular, open-source game engine written in Rust, with projects in Rust or C#, that hot reloads while it runs.
---

<div class="hero-bg"></div>
<div class="hero">
  <div class="hero-inner">
    <div class="hero-left">
      <a href="https://pillengine.org"><img src="https://pillengine.org/logos/pill_logo_white.svg" alt="Pill Engine Logo" class="hero-logo" /></a>
      <p class="tagline">
        Modern, <strong>free</strong> and <strong>blazingly fast</strong> game engine
      </p>
    </div>
  </div>
</div>

Good to see you here. Take this 🫴 💊

A modular, open-source game engine written in Rust, with projects in Rust or C# - small by design, hot reloads in a second or two, and a crash in your code does not take the editor down.

## Instant start

<div class="features-grid">
  <div class="feature" style="border-color: var(--vp-c-brand-1);">
    <a href="introduction/quick_start">
      <h3>🚀 Quick start - Build cube example</h3>
      <p>From zero to a spinning cube in two steps: set up the engine, then run the example. Most of the time goes into the first build - grab a coffee.</p>
    </a>
  </div>
  <div class="feature" style="border-color: var(--vp-c-brand-1);">
    <a href="introduction/overview">
      <h3>🧊 Overview - Pill 101</h3>
      <p>How Pill works, explained through the cube example: entities, components, ECS systems, assets.</p>
    </a>
  </div>
</div>

## Learn the basics

<div class="features-grid">
  <div class="feature">
    <a href="introduction/what_is_pill">
      <h3>💊 What is Pill?</h3>
      <p>Why Pill exists, what it values and what it aims for.</p>
    </a>
  </div>
  <div class="feature">
    <a href="introduction/setup">
      <h3>🛠️ Setup</h3>
      <p>What the setup scripts install on Windows and Linux, and how to check that everything works.</p>
    </a>
  </div>
</div>

## Go further

<div class="features-grid">
  <div class="feature">
    <a href="advanced/build_configurations">
      <h3>⚙️ Build configurations</h3>
      <p>Development and shipping, Rust profiles, headless and windowed, and building for the browser.</p>
    </a>
  </div>
  <div class="feature">
    <a href="editor/editor">
      <h3>🖥️ Editor</h3>
      <p>Run the editor and see your world while it runs.</p>
    </a>
  </div>
  <div class="feature">
    <a href="advanced/profiling">
      <h3>📈 Profiling</h3>
      <p>Find out where every update spends its time, with Tracy.</p>
    </a>
  </div>
  <div class="feature">
    <a href="concepts/entities">
      <h3>🧩 Concepts</h3>
      <p>Entities, components, ECS systems, resources and assets, one page each.</p>
    </a>
  </div>
  <div class="feature">
    <a href="/reference/">
      <h3>📚 API reference</h3>
      <p>Every crate, type and function in the engine, generated from the source.</p>
    </a>
  </div>
  <div class="feature">
    <a href="help/help">
      <h3>🆘 Help</h3>
      <p>Common problems and where to ask for help.</p>
    </a>
  </div>
</div>

## Examples

Every example comes in Rust and in C#, in the `examples/` folder of the Pill repository:

| Example          | What it shows                                                    |
| ---------------- | ---------------------------------------------------------------- |
| `cube`           | a spinning cube with its mesh and material as files - start here |
| `cube_no_editor` | the same cube from one OBJ file, with the material built in code |
| `headless`       | an ECS-only simulation: no window, no renderer, no assets        |
| `pills`          | a curl noise field of two hundred thousand pills                 |

## Join the community

Rendering engineers, jam developers, demosceners - everyone is welcome. Come say hi on [Discord](https://discord.gg/VUKNQrctms).
