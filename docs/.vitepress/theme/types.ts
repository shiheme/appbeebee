//这里存放 ts要求的内容格式
import type { DefaultTheme } from 'vitepress'

export interface View {
  id?: string;
  views: number;
  created_at: string;
  status: number;
}

export interface ThemeConfig extends DefaultTheme.Config{
  sidebar?: object[]
  search: any
  nav:any
  socialLinks: any
  music?:Song[]
  outlineTitle?: string
  docFooter?: object
  darkModeSwitchLabel?:string
  sidebarMenuLabel?:string
  returnToTopLabel?:string
  article?: object
  website?: object
  logo:any
}

export interface Post{
  frontmatter?: Record<string, any>
  relativePath?: string
}

export interface Work{
  title?: string
  view?: string
  viewtit?: string
  linkpan?: string 
  beecode?: string
  github?: string
  wxwords?: string
  via?: string
  qrcode?: string
}

export interface Song {
  title?: string
  id?: number
  author?: string
  url?: string
  pic?: string
  lrc?: any
}

export interface Toolitem {
  icon?: string
  title: string
  desc?: string
  link?: string
  linktxt?: string
}

export interface Tools {
  title : string
  items: Toolitem[]
}
