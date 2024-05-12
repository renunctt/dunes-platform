export interface DropdownMenuLink {
  text: string
  link: string
  icon: string
}

export interface DropdownMenuProps {
  links: DropdownMenuLink[]
  close?: () => void
}

export interface DropdownLinkProps {
	link: DropdownMenuLink
  close: () => void
}

