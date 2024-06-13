// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer').themes.github; 
const darkCodeTheme = require('prism-react-renderer').themes.github;

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Astar Docs v3.0',
  tagline: 'The Official Source For Developers Building on Astar Network',
  url: 'https://docs.astar.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/wrench.svg',
  organizationName: 'Astar Network', // Usually your GitHub org/user name.
  projectName: 'astar-docs-v3', // Usually your repo name.
  // customComponents: '/src/components', // megan attempt to fix need for import at top of each file in v3
  plugins: ['docusaurus-plugin-sass'],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: './docs', // Megan
          routeBasePath: '/', // Megan - redefine the base URL to the path specified ^
          // Please change this to your repo.
          editUrl: 'https://github.com/AstarNetwork/astar-docs-v3',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/AstarNetwork/astar-docs-v3',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  //Enable multilanguage support. 
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: { htmlLang: 'en-US' },
    },
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Astar Docs v3',
        logo: {
          alt: 'AstarDocs',
          src: 'img/wrench.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Site Index',
          },
          {
            href: 'https://github.com/AstarNetwork/astar-docs-v3',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Site Index',
                to: '/getting-started',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Astar Network.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust', 'toml', 'solidity'],
      },
    }),
};

module.exports = config;
