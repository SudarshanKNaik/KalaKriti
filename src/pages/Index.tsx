import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  LogIn, UserPlus, Lock, Mail, 
  Home, Image, Users, Tag, 
  FolderOpen, TrendingUp, Sparkles,
  ShoppingCart, CreditCard, Package,
  Heart, User, MapPin, History,
  Palette, Upload, BarChart3, DollarSign,
  Bell, MessageSquare, Activity, Star,
  HelpCircle, Truck, RefreshCw, Shield, FileText
} from "lucide-react";

const Index = () => {
  const pageCategories = [
    {
      title: "Authentication",
      icon: LogIn,
      pages: [
        { name: "Login", path: "/login", icon: LogIn },
        { name: "Register", path: "/register", icon: UserPlus },
        { name: "Forgot Password", path: "/forgot-password", icon: Lock },
        { name: "Verify Email", path: "/verify-email", icon: Mail },
      ],
    },
    {
      title: "Public Pages",
      icon: Home,
      pages: [
        { name: "Homepage", path: "/home", icon: Home },
        { name: "Gallery", path: "/gallery", icon: Image },
        { name: "Artists", path: "/artists", icon: Users },
        { name: "Categories", path: "/categories", icon: Tag },
        { name: "Collections", path: "/collections", icon: FolderOpen },
        { name: "About", path: "/about", icon: FileText },
        { name: "Contact", path: "/contact", icon: MessageSquare },
      ],
    },
    {
      title: "User Account",
      icon: User,
      pages: [
        { name: "Dashboard", path: "/dashboard", icon: Home },
        { name: "Profile", path: "/profile", icon: User },
        { name: "Favorites", path: "/favorites", icon: Heart },
        { name: "Following", path: "/following", icon: Users },
        { name: "Order History", path: "/orders", icon: History },
        { name: "Address Book", path: "/addresses", icon: MapPin },
      ],
    },
    {
      title: "Artist Pages",
      icon: Palette,
      pages: [
        { name: "Artist Dashboard", path: "/artist/dashboard", icon: Home },
        { name: "My Artworks", path: "/artist/artworks", icon: Image },
        { name: "Upload Art", path: "/artist/upload", icon: Upload },
        { name: "Earnings", path: "/artist/earnings", icon: DollarSign },
        { name: "Analytics", path: "/artist/analytics", icon: BarChart3 },
        { name: "Orders", path: "/artist/orders", icon: Package },
        { name: "Commissions", path: "/artist/commissions", icon: MessageSquare },
      ],
    },
    {
      title: "E-commerce",
      icon: ShoppingCart,
      pages: [
        { name: "Shopping Cart", path: "/cart", icon: ShoppingCart },
        { name: "Checkout", path: "/checkout", icon: CreditCard },
        { name: "Order Confirmation", path: "/order-confirmation", icon: Package },
      ],
    },
    {
      title: "Discovery",
      icon: Sparkles,
      pages: [
        { name: "Search Results", path: "/search", icon: Sparkles },
        { name: "New Arrivals", path: "/new-arrivals", icon: TrendingUp },
        { name: "Popular", path: "/popular", icon: TrendingUp },
      ],
    },
    {
      title: "Community",
      icon: Users,
      pages: [
        { name: "Notifications", path: "/notifications", icon: Bell },
        { name: "Messages", path: "/messages", icon: MessageSquare },
        { name: "Activity Feed", path: "/activity", icon: Activity },
        { name: "Reviews", path: "/reviews", icon: Star },
      ],
    },
    {
      title: "Support",
      icon: HelpCircle,
      pages: [
        { name: "Help Center", path: "/help", icon: HelpCircle },
        { name: "Shipping Info", path: "/shipping", icon: Truck },
        { name: "Returns Policy", path: "/returns", icon: RefreshCw },
        { name: "Privacy Policy", path: "/privacy", icon: Shield },
        { name: "Terms of Service", path: "/terms", icon: FileText },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Gallery />
      
      {/* All Pages Navigation Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explore All{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Pages
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Navigate to any page in the application. All pages are ready and fully functional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center opacity-20">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {category.pages.map((page, pageIndex) => (
                    <Link key={pageIndex} to={page.path}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left h-auto py-2 px-3 hover:bg-primary/10"
                      >
                        <page.icon className="w-4 h-4 mr-2" />
                        <span className="text-sm">{page.name}</span>
                      </Button>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
