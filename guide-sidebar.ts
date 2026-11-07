// Sidebar for the guide/ content. The docs site mirrors this file to
// .vitepress/guide-sidebar.ts, so keep the links in sync with the folders
// under guide/.
import type { DefaultTheme } from 'vitepress'

export const guideSidebarItems: DefaultTheme.SidebarItem[] = [
  {
    "text": "User Guide",
    "collapsed": false,
    "items": [
      { "text": "Welcome", "link": "/guide/user_guide/welcome" },
      {
        "text": "Introduction",
        "collapsed": false,
        "items": [
          { "text": "Overview", "link": "/guide/user_guide/introduction/introduction" },
          { "text": "Quick start", "link": "/guide/user_guide/introduction/quick_start" },
          { "text": "Setup", "link": "/guide/user_guide/introduction/setup" },
          { "text": "What is Pill?", "link": "/guide/user_guide/introduction/what_is_pill" },
          { "text": "Next steps", "link": "/guide/user_guide/introduction/next_steps" }
        ]
      },
      {
        "text": "Concepts",
        "collapsed": false,
        "items": [
          { "text": "Assets", "link": "/guide/user_guide/concepts/assets" },
          { "text": "Commands", "link": "/guide/user_guide/concepts/commands" },
          { "text": "Components", "link": "/guide/user_guide/concepts/components" },
          { "text": "Entities", "link": "/guide/user_guide/concepts/entities" },
          { "text": "Resources", "link": "/guide/user_guide/concepts/resources" },
          { "text": "ECS systems", "link": "/guide/user_guide/concepts/systems" }
        ]
      },
      { "text": "Editor", "link": "/guide/user_guide/editor/editor" },
      {
        "text": "Advanced",
        "collapsed": false,
        "items": [
          { "text": "Build configurations", "link": "/guide/user_guide/advanced/build_configurations" },
          { "text": "Profiling", "link": "/guide/user_guide/advanced/profiling" }
        ]
      },
      { "text": "Help", "link": "/guide/user_guide/help/help" }
    ]
  },
  {
    "text": "Engine Guide",
    "collapsed": false,
    "items": [
      {
        "text": "Levels",
        "collapsed": false,
        "items": [
          { "text": "Architecture", "link": "/guide/engine_guide/levels/architecture" },
          { "text": "ECS", "link": "/guide/engine_guide/levels/ecs" },
          { "text": "Engine crates", "link": "/guide/engine_guide/levels/engine" },
          { "text": "Extensions", "link": "/guide/engine_guide/levels/extensions" },
          { "text": "Modules", "link": "/guide/engine_guide/levels/modules" },
          {
            "text": "Frontends",
            "collapsed": false,
            "items": [
              { "text": "Frontends", "link": "/guide/engine_guide/levels/frontends/frontends" },
              { "text": "pill_standalone", "link": "/guide/engine_guide/levels/frontends/pill_standalone" },
              { "text": "pill_web", "link": "/guide/engine_guide/levels/frontends/pill_web" }
            ]
          },
          {
            "text": "Hosting",
            "collapsed": false,
            "items": [
              { "text": "Hosting", "link": "/guide/engine_guide/levels/hosting/hosting" },
              { "text": "Starting a statically linked project", "link": "/guide/engine_guide/levels/hosting/hosting_advanced" },
              { "text": "Hot function patching", "link": "/guide/engine_guide/levels/hosting/hot_function_patching" },
              { "text": "Hot reloading", "link": "/guide/engine_guide/levels/hosting/hot_reloading" },
              { "text": "How is the engine linked?", "link": "/guide/engine_guide/levels/hosting/modules_linking_in_pill" },
              { "text": "pill_player", "link": "/guide/engine_guide/levels/hosting/pill_player" }
            ]
          },
          { "text": "Linking and multi-DLL programs", "link": "/guide/engine_guide/levels/other/linking_technical" }
        ]
      },
      {
        "text": "Concepts",
        "collapsed": false,
        "items": [
          { "text": "Assets", "link": "/guide/engine_guide/concepts/assets" },
          { "text": "Commands", "link": "/guide/engine_guide/concepts/commands" },
          { "text": "Components", "link": "/guide/engine_guide/concepts/components" },
          { "text": "Entities", "link": "/guide/engine_guide/concepts/entities" },
          { "text": "Resources", "link": "/guide/engine_guide/concepts/resources" },
          { "text": "ECS systems", "link": "/guide/engine_guide/concepts/systems" }
        ]
      },
      {
        "text": "Coding Style",
        "collapsed": false,
        "items": [
          { "text": "Free functions, modules and types", "link": "/guide/engine_guide/coding_style/free_functions_and_modules" },
          { "text": "HLSL shader formatting", "link": "/guide/engine_guide/coding_style/hlsl_shader_formatting_guidelines" },
          { "text": "Logging guidelines", "link": "/guide/engine_guide/coding_style/logging_guidelines" }
        ]
      },
      {
        "text": "DevOps",
        "collapsed": false,
        "items": [
          { "text": "Automated tests", "link": "/guide/engine_guide/devops/automated_tests" },
          { "text": "CI pipeline", "link": "/guide/engine_guide/devops/ci-pipeline" },
          { "text": "Documentation", "link": "/guide/engine_guide/devops/documentation" }
        ]
      },
      { "text": "Editor", "link": "/guide/engine_guide/editor/editor" },
      {
        "text": "Other",
        "collapsed": false,
        "items": [
          { "text": "Build configurations", "link": "/guide/engine_guide/other/build_configurations" },
          { "text": "Containers across Pill", "link": "/guide/engine_guide/other/containers_across_pill" },
          { "text": "Dynamic data", "link": "/guide/engine_guide/other/dynamic_data" },
          { "text": "Environment variables", "link": "/guide/engine_guide/other/environment_variables" },
          { "text": "Profiling", "link": "/guide/engine_guide/other/profiling" }
        ]
      }
    ]
  },
  {
    "text": "Other",
    "collapsed": false,
    "items": [
      { "text": "Brand identity", "link": "/guide/other/brand-identity" },
      { "text": "Code of conduct", "link": "/guide/other/code-of-conduct" },
      { "text": "Coding standards", "link": "/guide/other/coding-standards" },
      { "text": "Contributing", "link": "/guide/other/contributing" },
      { "text": "Writing guidelines", "link": "/guide/other/guide_writing_guidelines" }
    ]
  }
]
