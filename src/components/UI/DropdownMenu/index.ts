export interface DropdownMenuLink {
  text: string
  link: string
  icon: string
}

export interface DropdownMenuProps {
  links: DropdownMenuLink[]
}

export interface DropdownLinkProps {
	link: DropdownMenuLink
}

