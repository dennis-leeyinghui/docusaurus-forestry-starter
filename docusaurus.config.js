module.exports = {
  title: 'modernify.ca',
  tagline: 'We help Atlantic Canadian businesses look better online.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'modernify.ca', // Usually your GitHub org/user name.
  projectName: 'docusaurus-forestry-starter', // Usually your repo name.
  scripts: [
    '',
  ],
  stylesheets: [
    '',
  ],
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
      },
	  hideOnScroll: true,
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
		 to: 'blog', 
		 label: 'Insights', 
		 position: 'left'
		},
        {
          href: 'mailto:',
          label: 'Contact',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About Us',
          items: [
            {
              label: 'Our Mission',
              to: 'docs/',
            },
            {
              label: 'Our Team',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'What we do?',
          items: [
            {
              label: 'Our Services',
              to: 'docs/',
            },
            {
              label: 'Service Fees',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Useful Resources',
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
              to: 'blog',
            },
            {
              label: 'Contact',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} modernify.ca. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/DirtyF/docusaurus-forestry-starter/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/DirtyF/docusaurus-forestry-starter/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
