module.exports = {
  title: 'modernify.ca',
  tagline: 'We help Atlantic Canadian businesses look better online.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'modernify.ca', // Usually your GitHub org/user name.
  projectName: 'docusaurus-forestry-starter', // Usually your repo name.
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
          to: 'about/',
          activeBasePath: 'about',
          label: 'About Us',
          position: 'left',
        },
        {
          to: 'services/',
          activeBasePath: 'services',
          label: 'Services',
          position: 'left',
        },
        {
          to: 'fees/',
          activeBasePath: 'fees',
          label: 'Fees',
          position: 'left',
        },
        {
		 to: 'blog/', 
		 label: 'Insights', 
		 position: 'left'
		},
        {
          href: 'contact/',
          label: 'Contact',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Our Mission',
              to: 'about/',
            },
            {
              label: 'Our Team',
              to: 'about/team',
            },
          ],
        },
        {
          title: 'What we do?',
          items: [
            {
              label: 'Our Services',
              to: 'about/services',
            },
            {
              label: 'Service Fees',
              to: 'about/fees/',
            },
          ],
        },
        {
          title: 'Useful Resources',
          items: [
            {
              label: 'Atlantic Chamber of Commerce',
              href: 'https://www.atlanticchamber.ca/',
            },
            {
              label: 'Greater Charlottetown Area Chamber of Commerce',
              href: 'https://www.charlottetownchamber.com/',
            },
            {
              label: 'Halifax Chamber of Commerce',
              href: 'https://halifaxchamber.com/',
            },
            {
              label: 'Chamber of Commerce for Greater Moncton',
              href: 'https://ccgm.ca/about/',
            },
          ],
        },
        {
          title: 'Talk to Us',
          items: [
            {
              label: 'Insights',
              to: 'blog',
            },
            {
              label: 'Contact',
              href: 'contact',
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
        about: {
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
