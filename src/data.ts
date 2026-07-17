import type { GalleryImage } from './types'

export const COUPLE = {
  groom: 'Wei Chen',
  bride: 'Mei Lin',
  chinese: '陈伟 & 林梅',
} as const

export const EVENT = {
  date: 'Saturday, February 14, 2027',
  time: '11:00 AM',
  venue: 'The Jade Pavilion',
  address: '88 Prosperity Avenue, Chinatown',
  dressCode: 'Festive red & white attire welcome',
} as const

/** Prenup photos from Unsplash */
export const PRENUP_PHOTOS: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80',
    alt: 'Couple walking hand in hand at golden hour',
  },
  {
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80',
    alt: 'Bride and groom sharing a quiet moment',
  },
  {
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900&q=80',
    alt: 'Romantic outdoor prenup portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=80',
    alt: 'Couple embracing among soft light',
  },
  {
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&q=80',
    alt: 'Wedding couple portrait in natural light',
  },
  {
    src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=80',
    alt: 'Bride and groom smiling together',
  },
]
