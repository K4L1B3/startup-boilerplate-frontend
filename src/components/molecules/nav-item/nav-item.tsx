import React from "react"
import type { LucideIcon } from "lucide-react"

interface NavItemProps {
  icon: LucideIcon
  text: string
}

export const NavItem: React.FC<NavItemProps> = ({ icon: Icon, text }) => (
  <div className="mb-4 flex w-full items-center">
    <div className="mr-4">
      <Icon size={24} />
    </div>
    <span className="whitespace-nowrap">{text}</span>
  </div>
)
