import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Embarcadero Lofts",
  tagline: "Fraud Investigation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://jimmiebfulton.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/emlo",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jimmiebfulton", // Usually your GitHub org/user name.
  projectName: "emlo", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Embarcadero Lofts",
      logo: {
        alt: "Embarcadero Lofts Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Start",
        },
        { to: "/docs/overview", label: "Overview", position: "left" },
        { to: "/docs/concepts", label: "Concepts", position: "left" },
        { to: "/docs/people", label: "People", position: "left" },
        { to: "/docs/schemes", label: "Schemes", position: "left" },
        { to: "/blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/jimmiebfulton/emlo",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Start",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Who",
          items: [
            {
              label: "People",
              to: "/docs/people",
            },
            {
              label: "Vendors",
              to: "/docs/vendors",
            },
          ],
        },
        {
          title: "What",
          items: [
            {
              label: "Concepts",
              to: "/docs/concepts",
            },
            {
              label: "Schemes",
              to: "/docs/schemes",
            },
          ],
        },
        {
          title: "When",
          items: [
            {
              label: "Timeline",
              to: "/docs/timeline",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jimmie Fulton.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
