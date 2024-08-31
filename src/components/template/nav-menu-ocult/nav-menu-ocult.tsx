import React, { useState, ReactNode } from "react"
import { Menu, Bell, User } from "lucide-react"
import { IconButton } from "../../atoms/icon-button/icon-button"
import { SideMenu } from "../../organisms/side-menu/side-menu"
import { cn } from "@/lib/utils"

interface NavMenuOcultContainerProps {
  children: ReactNode
}

export const NavMenuOcultContainer: React.FC<NavMenuOcultContainerProps> = ({ children }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  const toggleMenu = () => setIsMenuExpanded(!isMenuExpanded)

  return (
    <div className="flex h-screen flex-col">
      <header className="flex h-16 items-center justify-betwee px-4 absolute z-50">
        <div className="flex items-center">
          <IconButton icon={Menu} onClick={toggleMenu} className="mr-4 text-white" />
        </div>
      </header>

      <div className="relative flex flex-1 overflow-hidden">
        <SideMenu isExpanded={isMenuExpanded}/>
        <main
          className={cn(
            "flex-1 overflow-auto transition-transform duration-300 ease-in-out",
            isMenuExpanded ? "translate-x-64 lg:translate-x-72" : "translate-x-0"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
