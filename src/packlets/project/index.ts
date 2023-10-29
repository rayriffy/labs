import miraidayo from '$assets/miraidayo.jpg'
import juri from '$assets/juri.jpg'

import type { Project } from '$project/types'

export const projects: Project[] = [
  {
    url: `https://storage.rayriffy.com/files/labs/miraidayo.usdz#custom=https://labs.rayriffy.com/miraidayo/banner?1&customHeight=small&allowsContentScaling=0`,
    title: 'Mirai dayo~',
    description:
      'With the power of Augmented Reality, everyone can be Mirai (未来 = future)!',
    date: new Date('2023-10-30'),
    image: miraidayo,
    tags: [
      {
        label: 'ARKit',
        url: 'https://developer.apple.com/documentation/arkit/arkit_in_ios/usdz_schemas_for_ar_quick_look',
      },
    ],
    anchorProps: {
      rel: 'ar',
    },
  },
  {
    url: 'https://juri.rayriffy.com',
    title: 'Juri',
    description:
      'Open-source demo of Passkeys authentication. Death to passwords!',
    date: new Date('2022-08-22'),
    image: juri,
    tags: [
      {
        label: 'Web',
        url: 'https://juri.rayriffy.com'
      },
      {
        label: 'GitHub',
        url: 'https://github.com/rayriffy/juri'
      },
    ],
  },
]
