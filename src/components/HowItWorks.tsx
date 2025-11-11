import { Card } from "@/components/ui/card";
import { UserCircle, Upload, ShoppingBag, TrendingUp, Search } from "lucide-react";

const steps = {
  artists: [
    {
      icon: UserCircle,
      title: "Create Your Profile",
      description: "Sign up and build your artist profile with your bio, style, and portfolio.",
    },
    {
      icon: Upload,
      title: "Upload Artworks",
      description: "Add your creations with descriptions, pricing, and availability for custom work.",
    },
    {
      icon: ShoppingBag,
      title: "Start Selling",
      description: "Receive orders, communicate with clients, and manage transactions securely.",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Presence",
      description: "Build your reputation through community engagement and positive reviews.",
    },
  ],
  buyers: [
    {
      icon: Search,
      title: "Discover Art",
      description: "Browse thousands of unique artworks or search for specific styles and artists.",
    },
    {
      icon: ShoppingBag,
      title: "Purchase Securely",
      description: "Buy artworks with confidence through our secure payment system.",
    },
    {
      icon: UserCircle,
      title: "Request Custom Work",
      description: "Connect with artists to commission personalized pieces tailored to your vision.",
    },
    {
      icon: TrendingUp,
      title: "Join the Community",
      description: "Share your collection, give feedback, and support your favorite artists.",
    },
  ],
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple steps to start your creative journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="bg-gradient-hero bg-clip-text text-transparent">For Artists</span>
            </h3>
            {steps.artists.map((step, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-all border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-primary">Step {index + 1}</span>
                      <h4 className="text-xl font-bold">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="bg-gradient-accent bg-clip-text text-transparent">For Art Lovers</span>
            </h3>
            {steps.buyers.map((step, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-all border-l-4 border-l-accent">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-accent">Step {index + 1}</span>
                      <h4 className="text-xl font-bold">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
