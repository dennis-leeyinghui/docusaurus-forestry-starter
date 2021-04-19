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
          to: 'about-us',
          activeBasePath: 'about',
          label: 'About Us',
          position: 'left',
        },
        {
          to: 'services',
          activeBasePath: 'services',
          label: 'Services',
          position: 'left',
        },
        {
          to: 'fees',
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
          to: 'contact',
          label: 'Contact',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Who we are?',
          items: [
            {
              label: 'About Us',
              to: 'about-us/',
            },
          ],
        },
        {
          title: 'What we do?',
          items: [
            {
              label: 'Our Services',
              to: 'services',
            },
            {
              label: 'Service Fees',
              to: 'fees/',
            },
          ],
        },
        {
          title: 'Chamber of Commerce',
          items: [
            {
              label: 'Atlantic Canada',
              href: 'https://www.atlanticchamber.ca/',
            },
            {
              label: 'Greater Charlottetown Area',
              href: 'https://www.charlottetownchamber.com/',
            },
            {
              label: 'Halifax',
              href: 'https://halifaxchamber.com/',
            },
            {
              label: 'Greater Moncton',
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
              to: 'contact',
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
