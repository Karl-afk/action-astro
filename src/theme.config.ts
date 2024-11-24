import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://astro.karlweinmueller.de',
  title: 'Homelab und Webentwicklung',
  description: 'Homelab und Webentwicklung Blog und Projektdokumentation',
  author: 'Karl',
  navbarItems: [
    { label: 'Blog', href: '/posts' },
    { label: 'Projekte', href: '/projects' },
    { label: 'Tags', href: '/tags' },
    { label: 'Über mich', href: '/about' },
    {
      label: 'mehr',
      children: [
        { label: 'Impressum/Datenschutz', href: '/impressum-datenschutz' },
      ]
    }
  ],
  footerItems: [
    {
      icon: 'tabler--brand-linkedin',
      href: 'https://www.linkedin.com/in/karlweinm%C3%BCller/',
      label: 'LinkedIn'
    },
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/Karl-afk',
      label: 'Github'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    }
    
  ],

  // optional settings
  locale: 'de',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-nord',
  openGraphImage: undefined,
  postsPerPage: 5,
  projectsPerPage: 5,
  scrollProgress: true,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    css: 'tabler--brand-css3',
    html: 'tabler--brand-html5',
    javascript: 'tabler--brand-javascript',
    svelte: 'tabler--brand-svelte',
    documentation: 'tabler--book',
  },
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  }
})
