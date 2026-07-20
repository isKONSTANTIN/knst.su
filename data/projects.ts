import type { IconName } from './site'

export interface ProjectLink {
  label: string
  href: string
  icon: IconName
}

export interface ProjectImage {
  src: string
  alt: string
  width: number
  height: number
  /** Photographic images get rounded corners; logos on transparent backgrounds don't. */
  rounded?: boolean
}

export type ProjectBackground =
  | { type: 'gradient'; from: string; to: string }
  | { type: 'image'; src: string }

export interface Project {
  /** Doubles as the anchor target for nav links (`#finwave`). */
  id: string
  title: string
  description: string
  stack?: string
  links: ProjectLink[]
  image: ProjectImage
  background: ProjectBackground
}

export const projects: Project[] = [
  {
    id: 'finwave',
    title: 'FinWave.app',
    description:
      "An open-source finance app I built — automatic transactions, custom currencies, multi-account support. It's not maintained anymore, but the code's still there.",
    stack: 'Written on Java & Nuxt 3, MVP on Scala',
    links: [
      { label: 'Organization GitHub Page', href: 'https://github.com/FinWave-App', icon: 'IconGithub' },
    ],
    image: { src: '/finwave-logo.svg', alt: 'FinWave logo', width: 384, height: 384 },
    background: { type: 'gradient', from: 'rgba(52,211,153,0.55)', to: 'rgba(13,148,136,0.55)' },
  },
  {
    id: 'telegram-ai',
    title: 'Telegram AI',
    description:
      "An open-source Telegram bot for chatting with ChatGPT and generating images with DALL·E 3, with some extra features on top of OpenAI's tools. The public instance still runs — just don't expect active support.",
    stack: 'Written on Java, MVP on Go',
    links: [
      { label: 'Public Instance', href: 'https://t.me/godlike_gpt_bot', icon: 'IconTelegram' },
      { label: 'GitHub Repository', href: 'https://github.com/isKONSTANTIN/Telegram-AI', icon: 'IconGithub' },
      { label: 'Post on vas3k.club', href: 'https://vas3k.club/project/28328/', icon: 'IconVas3k' },
    ],
    image: { src: '/telegram-ai-image.png', alt: 'Telegram AI', width: 384, height: 384, rounded: true },
    background: { type: 'gradient', from: 'rgba(56,189,248,0.55)', to: 'rgba(251,146,60,0.5)' },
  },
  {
    id: 'hilui',
    title: 'Hil. UI 2',
    description:
      'A UI mod for Hilarious — adds a proper window system and Telegram chat integration for a smoother experience across the project.',
    stack: 'Written on Java',
    links: [
      { label: 'Website', href: 'https://hil.su/', icon: 'IconGlobe' },
      { label: 'Forum', href: 'https://f.hil.su/threads/obnovlenie-hil-ui-2.5085/', icon: 'IconGlobe' },
    ],
    image: { src: '/hilarious-logo.png', alt: 'Hilarious logo', width: 384, height: 384 },
    background: { type: 'image', src: '/hil-background.jpg' },
  },
  {
    id: 'crypto-utils',
    title: 'CryptoUtils',
    description:
      'A terminal tool for seed generation, encryption, decryption, and backups — the crypto utility belt I wanted and didn\'t have.',
    stack: 'Written on Java',
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/isKONSTANTIN/CryptoUtils', icon: 'IconGithub' },
      { label: 'Post on vas3k.club', href: 'https://vas3k.club/post/18251/', icon: 'IconVas3k' },
    ],
    image: { src: '/btc-image.png', alt: 'CryptoUtils', width: 384, height: 384 },
    background: { type: 'gradient', from: 'rgba(242,193,78,0.55)', to: 'rgba(168,104,28,0.55)' },
  },
]
