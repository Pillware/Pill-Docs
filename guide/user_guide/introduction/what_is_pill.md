# What is Pill?

Pill Engine is a modern, **free** and **blazingly fast** game engine.

Somewhere along the way, game engines got **super heavy**. Editors take **minutes** to open, empty projects weigh **hundreds of megabytes**, and one script typo takes the whole editor down. Every change means compile, restart, wait. We all just got used to everything being **SO SLOW**.

Pill's mission is to change that. It stays **small**, **hot reloads your code** while the game runs, and when your code crashes, **it crashes alone** - the editor stays up.

How does it stay small? **Modularity first.** The core is **tiny**; rendering, physics, audio and networking are modules you plug in only when you need them. No physics in your game? **No physics in your build.** You pay **only for what you use**.

And hot reloading is **really, really fast**. Change a function, hit save, and it's running in **under a second** - Pill patches **just that function**, inside the running game. Bigger changes take **a couple of seconds**, and your data survives them too.

That's iteration on a whole other level. **No waiting, no restarting**, no "let me get back to where I was". Tweak, look, tweak again.

Ahh, and it's **free**. **No licence fees, no royalties, no catch**.
The whole engine is yours to read, break, fix and ship.

## Core values

- **Anti-bloat, modular architecture.** Include only what you need: a leaner engine and builds under 1 MB.
- **Zero-friction developer experience.** Hot reload, sandboxing, fast startup and instant feedback are core features, not extras.
- **No-compromise performance.** A data-oriented hybrid ECS for anything from indie to AAA, benchmarked continuously.

## Goals and flagship features

- **100% free and open source.** For the community, by the community.
- **C# and Rust.** Both first-class, both native.
- **Hot reload pushed to the max.** About 1-2 seconds for code changes, under one for a single function.
- **Crash-resistant sandboxing.** Your code crashes; the editor doesn't.
- **Hybrid ECS.** Cache-friendly archetypes, with object-oriented logic where you want it.
- **Proven performance.** Every engine update is benchmarked in CI by Pill Labs.
- **Tiny core.** Everything else is a module - even the renderer.
- **Next-level error logs.** Clear call stacks with context and hints on how to fix them.
- **JSON assets.** Readable and friendly to version control.
- **Live game and scene editing.** Play in one viewport, edit in another.
- **Tiny builds.** Around 1 MB.
- **Streaming.** Data loaded only when it's needed.
- **Fast startup.** Large projects open in seconds.
- **Embedded devices.** Down to ESP32-class microcontrollers with 0.5 MB of RAM.
- **A secret ingredient.** Maybe someday.

## The community

Pill is also a community of people who build, learn and have fun together - rendering engineers, jam developers, demosceners, everyone is welcome. Join us on Discord: [Pill Community on Discord](https://discord.gg/VUKNQrctms).

---

Read the founder's post about why Pill exists: [Pill Engine: rethinking the game engine](https://mattszymonski.com/posts/pill-engine-rethinking-the-game-engine/).
