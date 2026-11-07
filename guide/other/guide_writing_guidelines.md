# Technical Documentation Writing Guidelines

## Core Principle

Write documentation to help readers build a mental model of the system, not memorize its implementation.

A reader should be able to:
- Understand the main idea in 10 seconds.
- Understand the reasoning in 30 seconds.
- Explore technical details only when needed.

Prioritize **easy-to-understand language and technical accuracy equally**. Write for developers who know basic programming but may be new to the specific language, engine, or design concept. Do not require expert knowledge just to understand a sentence.

**A reader should understand each sentence on the first read.** Avoid making readers decode abstract wording, guess what pronouns refer to, or mentally unpack several ideas at once.

The goal is not to remove advanced information. **Make advanced information easier to understand.**

---

## Writing Style: Clear, Direct, and Natural

These rules apply to **every sentence and paragraph**, including advanced technical sections.

- **Use everyday English for explanations.** Prefer "keep data between calls" over "carry state across call boundaries" unless the precise term is needed. Keep actual API names, language keywords, and technical terms unchanged.
- **Say what you mean directly.** Prefer "Use a type when several functions need the same data" over "A type becomes the natural home for shared state."
- **Use short, straightforward sentences.** Break up sentences with several conditions, qualifications, or unrelated ideas. Vary length naturally; do not turn every sentence into a fragment.
- **Name the subject explicitly.** Write "The server keeps the connection open" instead of "It retains it" when the reference could be unclear.
- **Explain cause and effect.** Instead of "The module path supplies the subject," write "The module name tells readers what the function operates on."
- **Avoid clever or compressed language.** Phrases like "a namespace wearing a type name," "the dividing line," or "the constructor owns the invariant" can sound memorable but hide the actual behavior. Explain the behavior directly.
- **Avoid academic and overly formal wording.** Prefer "use," "keeps," "changes," "needs," and "because" when they express the same meaning as more elaborate alternatives.
- **Do not oversimplify.** A precise, slightly longer explanation is better than a short statement that loses a condition or suggests an incorrect rule.
- **Sound like an experienced developer explaining a concept to another developer.** Be approachable and confident, without talking down to the reader or using an overly casual tone.

**Example — too abstract:**

> A type appears when something has to be owned across calls.

**Better:**

> Use a type when you need to keep data or resources between function calls. For example, a `Server` can keep a network connection open while different methods use it.

**Example — too compressed:**

> The module path supplies the subject.

**Better:**

> The module name tells you what the function does. For example, `batch::run()` means "run the batch process."

**Rule:** Simplify the *language and explanation*, not the technical concept. Never trade an important condition, exception, or factual distinction for smoother prose.

---

## 1. Explain the Outcome Before the Implementation

Start by explaining what something does and why it matters.

Avoid opening with implementation details, configuration flags, internal types, or unfamiliar terminology.

**Bad:**

> Every crate in the workspace links `pill_core` and `pill_engine_core` dynamically through the `rustc` configuration flags.

**Good:**

> Development builds share engine state so hot reloading works. Shipping builds use static linking for better optimization and simpler distribution.

**Rule:** Explain the purpose before the mechanism.

---

## 2. Use Progressive Disclosure

Structure explanations in three levels.

### Level 1 — The Takeaway

Provide a short summary that communicates the main idea in one or two sentences.

Readers should understand the purpose of the section without reading further.

### Level 2 — The Mental Model

Explain how the system behaves using:
- Simple explanations.
- Comparisons.
- Concrete examples.
- Diagrams when helpful.

Focus on relationships and behavior rather than implementation details.

### Level 3 — Technical Details

Introduce precise information only after the reader understands the concept:
- Library and type names.
- Configuration files.
- Internal implementation details.
- Exceptions and edge cases.
- Build scripts and commands.

**Rule:** Move from simple concepts to technical specifics, never the reverse.

---

## 3. Explain Why, Not Just How

Documentation should explain the reasoning behind important design decisions.

Whenever describing an implementation, answer:

1. What problem does this solve?
2. Why is this approach necessary?
3. How does it work?
4. What would happen without it?

**Bad:**

> The engine is dynamically linked in development.

**Good:**

> Hot reload replaces modules while the project continues running. Engine state must survive these replacements, so development builds keep it in shared libraries that remain loaded.

**Rule:** Describe the problem before presenting its solution.

---

## 4. Put the Answer First

Each section should begin with a sentence that directly answers its heading.

Follow with supporting explanations and details.

**Example:**

### Why does development use dynamic linking?

Development uses dynamic linking so engine state survives when modules are hot-reloaded.

The engine stays loaded while project and extension DLLs are replaced. This prevents duplicate global state and inconsistent type identities.

**Rule:** Never make readers search through a paragraph to discover its main point.

---

## 5. Use Question-Based Headings

Prefer headings that correspond to questions readers are likely to ask.

**Avoid:**
- Dynamic Linking
- Static Linking
- Facade Exception
- Configuration

**Prefer:**
- Why does development use dynamic linking?
- Why does shipping mode use static linking?
- Why is `pill_engine` an exception?
- Where is linking configured?

Question-based headings make documentation easier to navigate and encourage explanations rather than lists of facts.

**Rule:** A reader should be able to scan headings and locate the answer they need.

---

## 6. Keep One Main Idea Per Paragraph

Each paragraph should communicate one concept in language that is clear on the first read. A short paragraph can still be hard to understand if every sentence is abstract or densely packed.

Avoid combining several independent explanations into a single paragraph.

Prefer:
- Short paragraphs.
- Simple, natural sentence structures with explicit subjects and clear verbs.
- One main claim per sentence when a sentence would otherwise become difficult to follow.
- Concrete descriptions in place of abstract or metaphorical wording.
- Clear transitions between ideas.
- Separate paragraphs for different concepts.

Avoid:
- Dense blocks of text.
- Long sentences with multiple subordinate clauses.
- Repeated explanations.
- Unnecessary background information.

**Rule:** If a paragraph explains multiple independent ideas, split it.

---

## 7. Introduce Technical Terminology Gradually

Do not assume readers already understand every internal concept. Nor should they need to know expert jargon to understand the explanation surrounding a term.

When introducing unfamiliar terminology:

1. Explain the concept in plain language.
2. Introduce its technical name.
3. Use the technical name consistently afterward.

**Example:**

> Each module maintains its own list of registered components and functions. These lists are stored in `inventory` registries.

Avoid introducing several unfamiliar technical terms in the same sentence.

Do not oversimplify by removing important technical names. Once readers understand a concept, precise terminology makes documentation more useful.

**Rule:** Simplify the explanation, not the technical truth.

---

## 8. Use Concrete Examples

Abstract explanations are harder to understand than descriptions of actual behavior.

Whenever possible, demonstrate what happens during a real operation.

**Bad:**

> Dynamic linking prevents duplicated engine state.

**Good:**

> When the host reloads a project DLL, the project's code is replaced, but the engine's logger and Rayon thread pool remain alive. The new DLL continues using the same shared engine state.

Examples are especially useful for:
- Lifecycles.
- Resource ownership.
- Module boundaries.
- Hot reload.
- Error handling.
- State transitions.
- Concurrency.

### How to format an example

Put every example in a blockquote (`>`), starting with `**Example:**`. If the example continues over several paragraphs or a list, every line of it stays inside the blockquote, blank lines included (write them as a bare `>`).

```markdown
> **Example:** you save a change to the project. The host:
>
> 1. rebuilds the project's DLL
> 2. swaps it in while the project keeps running
```

The blockquote marks where the example starts and ends, so a reader can skip it or jump straight to it.

**Rule:** Show what happens, not just what exists. Always set examples apart in a blockquote.

---

## 9. Prefer Comparisons Over Repeated Explanations

When explaining two or more approaches, use a comparison table if their differences can be expressed concisely.

**Example:**

| Property             | Development                  | Shipping               |
| -------------------- | ---------------------------- | ---------------------- |
| Engine linking       | Dynamic                      | Static                 |
| Hot reload           | Supported                    | Not used               |
| Engine state         | Shared between modules       | Linked into executable |
| Fat LTO              | Incompatible with this setup | Supported              |
| External engine DLLs | Required                     | Not required           |

Use tables for:
- Build configurations.
- Alternative approaches.
- Feature differences.
- Supported behaviors.
- Trade-offs.

Avoid tables when the topic requires a sequential explanation or substantial reasoning.

**Rule:** Make differences visible instead of forcing readers to remember and compare paragraphs.

---

## 10. Use Diagrams for Relationships and Lifecycles

Prefer diagrams when the reader needs to understand:
- Which components communicate.
- Which modules own particular resources.
- What gets loaded or unloaded.
- What state survives an operation.
- How information flows through the system.

For example, a diagram showing multiple modules connected to shared engine libraries can communicate the development linking model faster than several paragraphs.

Keep diagrams:
- Small.
- Focused on one idea.
- Clearly labeled.
- Consistent with the accompanying text.

Do not add diagrams merely for decoration.

**Rule:** Use visuals when they reduce the mental effort required to understand the system.

---

## 11. Explain the Default Behavior Before Exceptions

Always establish the normal behavior before introducing special cases.

Use this sequence:

1. **Default:** What normally happens?
2. **Reason:** Why does it work this way?
3. **Exception:** What behaves differently?
4. **Reason for the exception:** Why is that difference necessary?

**Example:**

Development builds dynamically link the engine libraries so global state is shared across modules.

However, `pill_engine` is statically linked into each module because its registries describe that specific module's components and functions.

These registries must be replaced when the module reloads.

**Rule:** Readers must understand the rule before learning what breaks it.

---

## 12. Separate Concepts From Configuration

Avoid mixing conceptual explanations with file paths, flags, and commands.

Use separate sections:

### Concept

Explain what happens and why.

### Configuration

Explain where the behavior is configured and how it is controlled.

**Example:**

### Where is linking configured?

- `modules/.cargo/config.toml` — Configures development linking behavior.
- `devops/ci_cd/build_shipping.py` — Clears the development linking flag for shipping builds.

This helps readers who only want conceptual understanding while still serving developers who need implementation details.

**Rule:** Explain the system before explaining how to configure it.

---

## 13. Make Documentation Easy to Scan

Assume many readers will skim instead of reading every sentence.

Use:
- Descriptive headings.
- Short paragraphs.
- Selective bold text.
- Comparison tables.
- Lists for genuinely separate items.
- Code formatting for symbols, paths, commands, and configuration keys.

Avoid:
- Excessive bold formatting.
- Deeply nested lists.
- Large uninterrupted text blocks.
- Repeating the same information in multiple sections.
- Headings that provide little information, such as "Details" or "Miscellaneous."

**Rule:** Important information should be discoverable without reading every word.

---

## 14. Be Concise Without Sacrificing Understanding

Shorter documentation is not automatically better documentation. Optimize for the time and effort it takes to understand a topic, not word count or sentence count.

Remove:
- Redundant sentences.
- Repeated justifications.
- Unnecessary qualifiers.
- Information unrelated to the section's purpose.

Keep:
- Essential reasoning.
- Important limitations.
- Meaningful exceptions.
- Concrete examples that clarify difficult concepts.
- Extra sentences when they clarify an important condition or explain *why* something happens.
- Technical detail that advanced readers need to use or maintain the system correctly.

**Rule:** Minimize the effort required to understand the information, not simply the number of words.

---

## 15. Maintain Technical Accuracy

Approachable documentation must still be technically correct. Treat clarity and accuracy as equally important constraints, not as alternatives.

Never:
- Generalize behavior that applies only to certain builds or modules.
- Hide important limitations.
- Present exceptions as universal rules.
- Replace precise technical concepts with misleading analogies.
- Suggest guarantees the system does not provide.
- Remove implementation constraints, trade-offs, caveats, or meaningful distinctions merely to make a sentence simpler.
- Change code, API names, return types, or configuration values while performing a prose-only rewrite.
- Present style preferences or project-specific conventions as universal language requirements.

Clearly distinguish between:
- What always happens.
- What normally happens.
- What happens only under specific configurations.
- What is intentionally unsupported.

**Rule:** Clarity and accuracy are equally important.

---

## 16. Use a Consistent Documentation Structure

For technical architecture and implementation topics, prefer the following structure:

### Title

Name the concept or system behavior.

### Summary

Explain the main takeaway in one or two sentences.

### At a Glance (Optional)

Use a compact table or diagram when it improves understanding.

### Why Does It Work This Way?

Explain the problem and design motivation.

### How Does It Work?

Describe the mechanism, using examples where appropriate.

### Exceptions and Limitations (If Applicable)

Explain special cases after the default behavior.

### Configuration (If Applicable)

Provide relevant paths, flags, commands, and implementation references.

Only include sections that meaningfully contribute to understanding.

**Rule:** Use a predictable structure, but do not force unnecessary sections into simple topics.

---

## 17. Review Documentation From a Newcomer's Perspective

Before finalizing a documentation section, verify:

- [ ] Is the main idea clear from the first two sentences?
- [ ] Does the introduction explain why the topic matters?
- [ ] Can readers understand the explanation without knowing the implementation beforehand?
- [ ] Are unfamiliar terms introduced gradually?
- [ ] Does each paragraph focus on one main idea?
- [ ] Do headings help readers find specific answers?
- [ ] Are the reasons behind important design decisions explained?
- [ ] Would a concrete example make anything easier to understand?
- [ ] Is every example inside a `>` blockquote?
- [ ] Would a comparison table or diagram reduce complexity?
- [ ] Are exceptions explained after the default behavior?
- [ ] Are configuration details separated from conceptual explanations?
- [ ] Is any information repeated unnecessarily?
- [ ] Can each sentence be understood on the first read?
- [ ] Is the wording direct, natural, and free of unnecessarily abstract or clever phrases?
- [ ] Have I replaced vague pronouns and compressed claims with concrete explanations?
- [ ] Have I preserved all meaningful conditions, exceptions, and technical distinctions?
- [ ] Is the explanation technically accurate?
- [ ] Can an experienced developer quickly find the precise details they need?
- [ ] Does every term match the shared vocabulary in section 18?
- [ ] Is every shell command block written for `powershell`, `cmd` and `bash`, as section 19 describes?

---

## 18. Use the Shared Vocabulary

Use the same word for the same thing in every document, and never use one word for two things.

A reader who meets two different words assumes they mean two different things. A reader who meets one word used in two senses has to guess which one is meant.

**Rule:** If a term is in the table below, use it exactly. If a new term is needed, add it here first.

### Preferred terms

| Term                                     | Meaning                                                                                                                                                                                                    | Use instead of                                                                                                                                                                    |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **project**                              | The user's own code and assets built on Pill, for example `examples/local/project_rs`.                                                                                                                     | game, application, app                                                                                                                                                            |
| **Pill** / **the engine**                | Pill as a whole: everything in `modules/` except the project.                                                                                                                                              | the framework                                                                                                                                                                     |
| **engine core**                          | The two shared libraries every module uses: `pill_core` and `pill_engine_core`.                                                                                                                            | engine DLLs (fine once "engine core" has been introduced)                                                                                                                         |
| **module**                               | One separately compiled piece of Pill or of the project: a Rust crate or a C# project.                                                                                                                     | component, package, plugin                                                                                                                                                        |
| **extension**                            | An optional module that adds a feature (audio, splines, the renderer) and is listed under `modules:` in `project_settings.yaml`.                                                                           | plugin, add-on                                                                                                                                                                    |
| **host**                                 | The part of Pill that builds, loads and reloads modules in development mode (`pill_development_host`). Say **development host** the first time.                                                            | player, loader                                                                                                                                                                    |
| **player**                               | The part of Pill that owns the engine and runs the project every update, in every mode (`pill_player`). Not the same as the host. Its main types are still named `Runtime` and `RenderingRuntime` in code. | runtime, core loop                                                                                                                                                                |
| **frontend**                             | An executable that owns the window, the operating system's events and the main loop, and drives Pill every update: `pill_standalone`, `pill_web`, `pill_editor`.                                           | launcher, shell, app                                                                                                                                                              |
| **update**                               | One pass of the main loop: input goes in, the ECS systems run, the result is drawn. The code calls it a **frame** (`run_frame`, `FrameDriver`); use "frame" only when naming those.                        | frame, tick, step                                                                                                                                                                 |
| **headless** / **windowed**              | Running with no window and no renderer vs with both.                                                                                                                                                       | console mode, graphical mode                                                                                                                                                      |
| **executable**                           | The program you start, for example `pill_standalone.exe`.                                                                                                                                                  | binary, app, exe                                                                                                                                                                  |
| **DLL**                                  | A library loaded while the program runs.                                                                                                                                                                   | shared object, dynamic library (fine once in a general explanation)                                                                                                               |
| **development mode** / **shipping mode** | The two ways to build a project. See `build_configurations.md`.                                                                                                                                            | dev build, shipping build, debug build, release mode (Pill's mode; a Cargo `release` profile is a different axis), posture (the code's name for a mode's compiled implementation) |
| **build axes**                           | The four settings a build picks one value on, independently of each other: Pill mode, Rust compiler profile, window, and .NET configuration.                                                               | dimension, build matrix                                                                                                                                                           |
| **build configuration**                  | The four values one build picked, one per axis: development + `debug` + headless + `Release` is one. The mode alone is not the configuration.                                                              | build (when the whole set is meant), combination of settings, posture                                                                                                             |
| **dynamic linking** / **static linking** | Keeping a library as a separate DLL vs copying its code into the module that uses it.                                                                                                                      | dynamic/static binding                                                                                                                                                            |
| **hot reload**                           | Rebuilding a whole module and swapping it in while the project keeps running.                                                                                                                              | live reload, hot swap                                                                                                                                                             |
| **hot patch**                            | Replacing a single `#[pill_hot]` function without reloading its module.                                                                                                                                    | hot reload (they are different operations)                                                                                                                                        |
| **state**                                | Everything the running project has built up that must survive a hot reload.                                                                                                                                | data, memory                                                                                                                                                                      |
| **migration**                            | Converting stored components from a module's old layout to its new one during a hot reload.                                                                                                                | conversion, upgrade                                                                                                                                                               |
| **test project**                         | A small project in `devops/tests/projects/` that exists only so the test suites have something to run: a suite starts a host on it, edits it and checks the host's log. | fixture, test fixture (for these projects), test context |
| **registry**                             | A list a module keeps of what it declared (its components, its hot-patchable functions).                                                                                                                   | table, catalogue                                                                                                                                                                  |

### ECS terms

These words have exact ECS meanings. Use them **only** in that sense, and explain them before relying on them.

| Term           | Meaning                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **world**      | The container holding all entities, components and resources.                                                            |
| **entity**     | One object in the world: an id that components attach to.                                                                |
| **component**  | A piece of data attached to an entity, for example a position.                                                           |
| **resource**   | A single global value in the world, for example the simulation time.                                                     |
| **ECS system** | A function that runs every update over entities with certain components. Always write "ECS system", never just "system". |

### Words to avoid

| Avoid                   | Why                                              | Write instead                                                                                        |
| ----------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| game                    | Pill runs projects, not only games.              | project                                                                                              |
| system (on its own)     | It is easy to mistake for an ECS system.         | "ECS system", or a specific word such as "the engine" or "the build"                                 |
| component (outside ECS) | It is reserved for ECS components.               | module, part, piece                                                                                  |
| frame, tick             | It is an unexplained engine-loop term.           | "every update", or introduce the term first                                                          |
| facade                  | It is jargon.                                    | Describe it first ("the crate every module uses to talk to the engine"), then name it: `pill_engine` |
| binary                  | It is ambiguous between the file and the format. | executable, or DLL                                                                                   |
| plugin                  | Pill has no separate plugin concept.             | extension, or module                                                                                 |

---

## 19. Write Shell Commands for Every Shell

Readers run Pill on different operating systems and in different shells. A command written only for PowerShell does not work in `cmd` or `bash`, and setting an environment variable is written differently in each of them.

**Rule:** Write every shell command block three times: `powershell`, then `cmd`, then `bash`. Put the three blocks directly after each other, with no empty line between them.

````markdown
```powershell
$env:PROJECT_PATH = "examples/my_project"
python devops/ci_cd/build_shipping.py                # Rust or C# project
python devops/ci_cd/build_shipping.py --csharp-aot   # C# project as NativeAOT
```
```cmd
set PROJECT_PATH=examples/my_project
REM Rust or C# project
python devops/ci_cd/build_shipping.py
REM C# project as NativeAOT
python devops/ci_cd/build_shipping.py --csharp-aot
```
```bash
export PROJECT_PATH="examples/my_project"
python devops/ci_cd/build_shipping.py                # Rust or C# project
python devops/ci_cd/build_shipping.py --csharp-aot   # C# project as NativeAOT
```
````

The three blocks run the same commands. Only the shell syntax differs:

| What                          | `powershell`                    | `cmd`                                   | `bash`                          |
| ----------------------------- | ------------------------------- | --------------------------------------- | ------------------------------- |
| Set an environment variable   | `$env:NAME = "value"`           | `set NAME=value` (no quotes, no spaces) | `export NAME="value"`           |
| Comment after a command       | `command   # text`              | `REM text` on its own line, above the command | `command   # text`         |
| Comment on its own line       | `# text`                        | `REM text`                              | `# text`                        |

- **Never put a `#` comment after a command in `cmd`.** `cmd` has no `#` comments, so it passes `#` and the words after it to the command as extra arguments. Move the comment to a `REM` line above the command instead.
- **Write paths with forward slashes** (`devops/ci_cd/build_shipping.py`) in all three blocks. `cargo`, `python` and Pill accept them in every shell, so the paths stay the same in each block.
- **Keep the same layout around the blocks.** Inside a numbered list, indent all three blocks to the list item's level. Inside a blockquote, start every line of all three blocks with `>`.
- **Write all three even when the commands are identical.** A block of plain `cargo` or `python` commands looks the same in every shell, but the three labelled blocks tell the reader that the commands were written for their shell too.

---

## Recommended Writing Order

When documenting a technical concept, organize information in this order:

**WHAT → WHY → HOW → EXCEPTIONS → CONFIGURATION**

1. **WHAT:** What happens? What is the main takeaway?
2. **WHY:** What problem does this solve? Why is it designed this way?
3. **HOW:** How does the system achieve this behavior?
4. **EXCEPTIONS:** What behaves differently, and why?
5. **CONFIGURATION:** Where is this implemented or controlled?

This is a default structure, not a rigid requirement. Omit unnecessary parts and adapt the order when another structure makes the concept clearer.

---

## Final Principle

**Optimize documentation for understanding, not information density.**

Write as an experienced developer explaining the topic clearly to a developer who is still learning. Use direct, natural words and simple sentences. Preserve the full technical meaning, including important qualifications and exceptions. If one extra sentence makes an advanced idea much easier to understand, add it.

Good technical documentation allows:
- Beginners to build an accurate mental model.
- Experienced developers to find details quickly.
- Contributors to understand the reasoning behind design decisions.
- Maintainers to locate relevant implementation and configuration references.

The goal is not to explain everything immediately.

The goal is to make the right information understandable at the right moment.