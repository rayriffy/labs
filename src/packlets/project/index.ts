import miraidayo from '$assets/miraidayo.jpg'
import juri from '$assets/juri.jpg'

import type { Project } from '$project/types'

export const projects: Project[] = [
  {
    url: 'https://storage.rayriffy.com/files/labs/miraidayo.usdz#custom=https://labs.rayriffy.com/miraidayo/banner/index.html?1&customHeight=large&allowsContentScaling=0',
    title: 'Mirai dayo~',
    description:
      'With the power of Augmented Reality, everyone can be Mirai (未来 = future)!',
    date: new Date('2023-10-30'),
    image: miraidayo,
    anchorProps: {
      rel: 'ar',
    },
  },
  {
    url: 'https://juri.rayriffy.com',
    title: 'Juri',
    description:
      'Open-source demo of Passkeys authentication. Death to passwords!',
    image: juri,
    date: new Date('2022-08-22'),
  },
]
