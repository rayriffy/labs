export type AnchorProps = Omit<astroHTML.JSX.AnchorHTMLAttributes, 'href'>

export interface Tag {}

export interface Project {
  title: string
  description: string
  url: string
  date: Date
  image?: ImageMetadata
  anchorProps?: AnchorProps
}
