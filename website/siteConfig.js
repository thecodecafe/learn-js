/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const primary = '#F0DB4F';
const secondary = '#323330';

const siteConfig = {
  title: 'Learn Javascript', // Title for your website.
  tagline: 'The ultimate guide to learning javascript.',
  url: 'https://thecodecafe.github.io', // Your website URL
  baseUrl: '/learn-js/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'learn-js',
  organizationName: 'thecodecafe',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'getting-started', label: 'Start Learning'},
    {href: 'https://github.com/thecodecafe/learn-js/issues', label: 'Ask Questions', external: true},
    {search: true},
    {href: 'https://github.com/thecodecafe/learn-js', label: 'GtiHub', external: true},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/dark-logo.png',
  footerIcon: 'img/white-logo.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    brand: primary, // js yellow
    dark: '#E0C420', // banana
    deepdark: '#BAA020', // dark banana
    light: '#FFEA6C', // light yellow
    text: '#1a1a1a', // black substitute
    subtle: '#6d6d6d', // light grey for text
    divider: '#ececec', // very light grey
    tintColor: '#f7f7f7', // slightly off white
    backgroundColor: 'white',
    primaryColor: primary, // js yellow
    secondaryColor: secondary, // js black
  },

  /* Custom fonts for website */
  fonts: {
    copyFont: [
      "Lato",
      "sans-serif"
    ],
    codeFont: [
      "Ubuntu",
      "sans-serif"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} TheCodeCafe`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  disableHeaderTitle: true,

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  docsUrl: '',

  algolia: {
    appId: 'TPB7E4EB96',
    indexName: 'learn-javascript',
    apiKey: 'api-key-placeholder'
  },

  repoUrl: 'https://github.com/thecodecafe/learn-js',

  scrollToTop: true,
  scrollToTopOptions: {
    textColor: primary,
    backgroundColor: secondary,
    scrollDuration: 200
  },
  twitter: true,
  twitterUsername: 'mrbarde2k',
  usePrism: ['javascript', 'js', 'json'],
  highlight: {
    theme: 'tomorrow-night',
  },
  gaTrackingId: 'UA-145866759-1',
  stylesheets: [
    'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
    'https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,900|Ubuntu&display=swap'
  ],
  pageCodeStyle: require('./codeStyle'),
};

module.exports = siteConfig;
