import React from 'react';
import { Code2 } from 'lucide-react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu';
import { Button } from './ui/button';

const Header = () => {
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Themes', href: '#themes' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center space-x-2">
          <Code2 className="h-6 w-6" />
          <span className="font-semibold">ZidPro</span>
        </div>

        <NavigationMenu className="mx-6 hidden md:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  href={item.href}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto">
          <Button>Get Started</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;