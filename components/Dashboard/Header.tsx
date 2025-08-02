import { Shield, UserCircle, ChevronDown, User, Settings, LogOut, CreditCard } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              Home Cover GPT
            </span>
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/dashboard" 
              className="text-muted-foreground hover:text-foreground font-medium transition-colors focus-ring rounded-md px-3 py-2"
            >
              Dashboard
            </Link>
            <Link 
              href="/analyses" 
              className="text-muted-foreground hover:text-foreground font-medium transition-colors focus-ring rounded-md px-3 py-2"
            >
              Past Analyses
            </Link>
            <Link 
              href="/chat" 
              className="text-muted-foreground hover:text-foreground font-medium transition-colors focus-ring rounded-md px-3 py-2"
            >
              Chat Assistant
            </Link>
            <Link 
              href="/settings" 
              className="text-muted-foreground hover:text-foreground font-medium transition-colors focus-ring rounded-md px-3 py-2"
            >
              Settings
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Upgrade Button */}
            <Button 
              className="btn-hero hidden sm:inline-flex px-6 py-2 rounded-full text-sm font-semibold"
              asChild
            >
              <Link href="/upgrade">
                <CreditCard className="w-4 h-4 mr-2" />
                Upgrade
              </Link>
            </Button>

            {/* User Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex items-center space-x-2 rounded-full focus-ring hover:bg-muted transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <UserCircle className="h-5 w-5 text-white" />
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground hidden sm:block" />
                </Button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent align="end" className="w-56 animate-scale-in">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      john.doe@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild>
                  <Link href="/upgrade" className="cursor-pointer">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Upgrade Plan</span>
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem 
                  className="cursor-pointer text-destructive focus:text-destructive"
                  onClick={() => {
                    // Simulate logout
                    console.log('Logging out...');
                    alert('You have been logged out successfully.');
                    window.location.href = '/';
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button could go here if needed */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;