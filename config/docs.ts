import { path as p } from '../.stacks/core/path/src'
import type { DocsConfig } from '../.stacks/core/types/src/docs'

const nav = [
  { text: 'Config', link: '/config', activeMatch: '/config' },
  {
    text: 'Changelog',
    link: 'https://github.com/stacksjs/stacks/blob/main/CHANGELOG.md',
  },
  { text: 'Blog', link: 'https://updates.ow3.org' },
]

const sidebar = {
  '/guide/': [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is Stacks?', link: '/guide/what-is-stacks' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/config' },
      ],
    },

    {
      text: 'Digging Deeper',
      collapsible: true,
      items: [
        { text: 'How To?', link: '/guide/stacks' },
        { text: 'Workflows / CI', link: '/guide/ci' },
        { text: 'VS Code', link: '/guide/vs-code' },
        { text: 'Apps', link: '/guide/apps' },
        { text: 'Examples', link: '/guide/examples' },
        { text: 'Packages', link: '/guide/packages' },
        { text: 'Testing', link: '/guide/testing' },
        { text: 'Single File Components', link: '/guide/sfcs' },
      ],
    },

    {
      text: 'Starters',
      collapsible: true,
      items: [
        { text: 'Vue Starter', link: '/starter/vue' },
        { text: 'Web Component Starter', link: '/starter/web-components' },
        { text: 'Composable Starter', link: '/starter/web-components' },
        { text: 'TypeScript Starter', link: '/starter/web-components' },
      ],
    },
  ],
}

/**
 * **Documentation Options**
 *
 * This configuration defines all of your documentation options. Because Stacks is fully-typed,
 * you may hover any of the options below and the definitions will be provided. In case
 * you have any questions, feel free to reach out via Discord or GitHub Discussions.
 */
export default {
  srcDir: p.projectPath('docs'),
  outDir: p.projectStoragePath('app/docs'),
  cacheDir: p.projectStoragePath('app/cache/docs'),
  lang: 'en-US',
  title: 'Stacks',
  description: 'Rapid application, cloud & library framework.',
  lastUpdated: true,

  themeConfig: {
    nav,
    sidebar,

    editLink: {
      pattern: 'https://github.com/stacksjs/stacks/edit/main/docs/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Stacks',
    },

    // socialLinks: [
    //   { icon: 'twitter', link: 'https://twitter.com/stacksjs' },
    //   { icon: 'github', link: 'https://github.com/stacksjs/stacks' },
    //   { icon: 'discord', link: 'https://discord.gg/stacksjs' },
    // ],

    // algolia: services.algolia,

    // carbonAds: {
    //   code: '',
    //   placement: '',
    // },
  },
} satisfies DocsConfig
