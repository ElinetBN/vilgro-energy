"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTeamOpen, setIsTeamOpen] = useState(false)
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsTeamDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3" passHref>
              <Image 
                src="/images/new-logo.jpeg" 
                alt="Company Logo" 
                width={120}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Desktop Team Dropdown - Custom Implementation */}
              <NavigationMenuItem>
                <div className="relative" ref={dropdownRef}>
                  <button
                    ref={triggerRef}
                    className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground gap-1"
                    onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
                    onMouseEnter={() => setIsTeamDropdownOpen(true)}
                  >
                    Team
                    <ChevronDown className={`h-4 w-4 transition-transform ${isTeamDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Content */}
                  {isTeamDropdownOpen && (
                    <div 
                      className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                      onMouseLeave={() => setIsTeamDropdownOpen(true)}
                    >
                      <div className="py-1">
                        <Link
                          href="/team"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                          onClick={() => setIsTeamDropdownOpen(true)}
                        >
                          Management Team
                        </Link>
                        <Link
                          href="/team/board-members"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                          onClick={() => setIsTeamDropdownOpen(false)}
                        >
                          Board Members
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/services"
                    className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

             

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/news"
                    className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    News & Insights
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col items-center py-4">
                <Link href="/" className="mb-6" onClick={() => setIsOpen(false)}>
                  <Image 
                    src="/images/new-logo.jpeg" 
                    alt="Company Logo" 
                    width={120}
                    height={32}
                    className="h-8 w-auto"
                  />
                </Link>
                
                <div className="grid gap-2 w-full">
                  <Link
                    href="/"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>

                  {/* Mobile Team Dropdown */}
                  <div className="w-full">
                    <button 
                      className="flex w-full items-center justify-between py-2 text-lg font-semibold"
                      onClick={() => setIsTeamOpen(!isTeamOpen)}
                    >
                      <span>Team</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isTeamOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isTeamOpen && (
                      <div className="ml-4 mt-1 space-y-2 border-l pl-4">
                        <Link
                          href="/team"
                          className="block py-1.5 text-base font-medium hover:text-primary"
                          onClick={() => setIsOpen(true)}
                        >
                         Management Team
                        </Link>
                        <Link
                          href="/team/board-members"
                          className="block py-1.5 text-base font-medium hover:text-primary"
                          onClick={() => setIsOpen(true)}
                        >
                          Board Members
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/services"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
              
                  <Link
                    href="/news"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    News & Insights
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )

}
