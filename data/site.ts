/**
 * Site-wide content. Kept free of any Nuxt-specific imports on purpose:
 * `nuxt.config.ts` pulls `seo` from here at build time, so this module has
 * to be loadable outside the app runtime.
 */

/**
 * Icon components registered globally with the `Icon` prefix (see the
 * `components` block in nuxt.config.ts). They're referenced by name rather
 * than imported, because the data here is rendered through
 * `<component :is="...">` — this union is what keeps a typo a compile error.
 */
export type IconName =
  | 'IconBriefcase'
  | 'IconChevronUp'
  | 'IconEmail'
  | 'IconGithub'
  | 'IconGlobe'
  | 'IconMenu'
  | 'IconTelegram'
  | 'IconUser'
  | 'IconVas3k'

export const contacts = {
  github: 'https://github.com/isKONSTANTIN/',
  telegram: 'https://t.me/cotantin',
  email: 'mailto:me@knst.su',
} as const

const url = 'https://knst.su'

export const seo = {
  title: 'knst.su',
  description: 'Konstantin (isKONSTANTIN) — fullstack developer. A portfolio of real products, built end-to-end.',
  url,
  image: `${url}/og-image.jpg`,
} as const

export interface NavItem {
  label: string
  href: string
  icon: IconName
}

export const navItems: NavItem[] = [
  { label: 'Me', href: '#main', icon: 'IconUser' },
  { label: 'Projects', href: '#finwave', icon: 'IconBriefcase' },
  { label: 'Github', href: contacts.github, icon: 'IconGithub' },
  { label: 'Telegram', href: contacts.telegram, icon: 'IconTelegram' },
  { label: 'Email', href: contacts.email, icon: 'IconEmail' },
]

export const skills = [
  'Java',
  'Go',
  'Nuxt',
  'TypeScript',
  'Jooq',
  'PostgreSQL',
  'Prometheus',
  'Grafana',
  'PWA',
  'LXC',
  'Docker',
  'Proxmox',
  'Nginx',
  'Ray Marching',
  'OpenGL',
  'CI/CD',
  'LWJGL',
  'AI',
]
