export type AnchorProps = Omit<astroHTML.JSX.AnchorHTMLAttributes, 'href'>

export interface Tag {
  label: string
  url: string
}

export interface Project {
  title: string
  description: string
  url: string
  date: Date
  tags?: Tag[]
  image?: ImageMetadata
  anchorProps?: AnchorProps
}
