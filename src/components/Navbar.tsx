import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, Search, Upload, Bell, User, Menu, Briefcase, LogOut, Settings } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg"></div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              KalaKriti
            </span>
          </Link>

          {/* Main Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              Explore
            </Link>
            <Link to="/artists" className="text-foreground hover:text-primary transition-colors font-medium">
              Find Talent
            </Link>
            <Link to="/artist/dashboard" className="text-foreground hover:text-primary transition-colors font-medium">
              Get Hired
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </Link>
          </div>

          {/* Right Side - Icons & Auth */}
          <div className="flex items-center space-x-2">
            {/* Icon Quick Links - Desktop */}
            {isAuthenticated && (
              <div className="hidden md:flex items-center space-x-2">
                <Link to="/" className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Home className="w-5 h-5 text-foreground" />
                </Link>
                <Link to="/search" className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Search className="w-5 h-5 text-foreground" />
                </Link>
                <Link to="/artist/upload" className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Upload className="w-5 h-5 text-foreground" />
                </Link>
                <Link to="/notifications" className="p-2 hover:bg-muted rounded-lg transition-colors relative">
                  <Bell className="w-5 h-5 text-foreground" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </Link>
              </div>
            )}

            {/* User Profile or Auth Buttons */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user?.profileImage} alt={user?.name} />
                      <AvatarFallback className="bg-gradient-hero text-white">
                        {user?.name ? getUserInitials(user.name) : 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{user?.name}</p>
                      <p className="text-xs text-muted-foreground">{user?.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center cursor-pointer">
                      <User className="w-4 h-4 mr-2" />
                      My Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="flex items-center cursor-pointer">
                      <Home className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/artist/artworks" className="flex items-center cursor-pointer">
                      <Briefcase className="w-4 h-4 mr-2" />
                      My Artworks
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center cursor-pointer">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden sm:flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Log In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-gradient-hero border-0 hover:opacity-90 transition-opacity" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/" className="flex items-center">
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/gallery" className="flex items-center">
                    <Search className="w-4 h-4 mr-2" />
                    Explore
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/artists" className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Find Talent
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/artist/dashboard" className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Get Hired
                  </Link>
                </DropdownMenuItem>
                {isAuthenticated && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/artist/upload" className="flex items-center">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/notifications" className="flex items-center">
                        <Bell className="w-4 h-4 mr-2" />
                        Notifications
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
