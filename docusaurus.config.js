/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// eslint-disable-next-line no-undef
const isDev = process.env.NODE_ENV === 'development';

const config = {
  title: 'pidanMoe Blog',
  tagline: 'Dinosaurs are cool',
  url: 'https://pidanmeng.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pidanmeng', // Usually your GitHub org/user name.
  projectName: 'pidanmeng.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/pidanmeng/pidanmeng.github.io',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/pidanmeng/pidanmeng.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@jlvandenhout/docusaurus-plugin-docs-editor',
      {
        docs: {
          // The path to the docs section in your repository
          path: 'docs',
          // The username that owns the docs, defaults to siteConfig.organizationName
          owner: 'pidanmeng',
          // The repository that contains the docs, defaults to siteConfig.projectName
          repo: 'pidanmeng.github.io',
        },
        // GitHub OAuth Application settings
        github: {
          // REQUIRED - The Client ID you got from the GitHub OAuth App setup
          clientId: isDev ? '89d036b3c35f84cc14bf' : '3864b96319a29719ff7f',
          // REQUIRED - The plugin will append the authorization code to this URL
          tokenUrl: isDev ? 'https://vercel-gatekeeper-pidanmeng.vercel.app/api/authenticateLocal' : 'https://vercel-gatekeeper-pidanmeng.vercel.app/api/authenticate',
          // The request method to use (GET or POST), defaults to GET
          method: 'GET',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      giscus: {
        repo: 'pidanmeng/pidanmeng.github.io',
        repoId: 'R_kgDOHFyU_w',
        category: 'Announcements',
        categoryId: 'DIC_kwDOHFyU_84CSIFY'
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        hideOnScroll: true,
        title: '皮蛋萌',
        logo: {
          alt: 'Logo',
          src: 'img/cheemsLogo.png',
        },
        items: [
          { to: '/', label: '首页', position: 'left' },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Tutorial',
            items: [
              {
                type: 'doc',
                docId: 'intro',
                label: 'Tutorial',
              },
              { to: '/blog', label: 'Blog' },
              {
                href: 'https://github.com/facebook/docusaurus',
                label: 'GitHub',
              },
            ],
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      socials: [
        {
          url: 'https://www.youtube.com/c/iotafoundation',
          backgroundColor: 'var(--ifm-color-gray-900)',
        },
        {
          url: 'https://www.github.com/iotaledger/',
          backgroundColor: '#2C3850',
        },
        {
          url: 'https://discord.iota.org/',
          backgroundColor: '#4B576F',
        },
        {
          url: 'https://www.twitter.com/iota/',
          backgroundColor: '#6A768E',
        },
        {
          url: 'https://www.reddit.com/r/iota/',
          backgroundColor: '#7D89A1',
        },
        {
          url: 'https://www.linkedin.com/company/iotafoundation/',
          backgroundColor: '#8995AD',
        },
        {
          url: 'https://www.instagram.com/iotafoundation/',
          backgroundColor: '#99A5BD',
        },
        {
          url: 'https://www.facebook.com/TheIOTAFoundation/',
          backgroundColor: '#BAC6DE',
        },
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
