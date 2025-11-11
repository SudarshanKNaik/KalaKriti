import { Card } from "@/components/ui/card";
import dashboardIcon from "@/assets/dashboard-icon.jpg";
import marketplaceIcon from "@/assets/marketplace-icon.jpg";
import communityIcon from "@/assets/community-icon.jpg";
import { Search, Shield } from "lucide-react";

const features = [
  {
    title: "Artist Dashboard",
    description: "Manage your creative portfolio with an intuitive dashboard. Upload, organize, and track your artworks seamlessly.",
    icon: dashboardIcon,
  },
  {
    title: "Digital Marketplace",
    description: "Buy, sell, and request custom designs in a secure environment. Connect directly with artists for unique commissions.",
    icon: marketplaceIcon,
  },
  {
    title: "Creative Community",
    description: "Join a vibrant hub where artists share ideas, get feedback, and collaborate on inspiring projects.",
    icon: communityIcon,
  },
  {
    title: "Smart Search",
    description: "Discover artists and artworks with powerful filters. Find exactly what you're looking for in seconds.",
    iconComponent: Search,
  },
  {
    title: "Secure & Scalable",
    description: "Cloud-based infrastructure ensures safe transactions, reliable storage, and seamless scaling as you grow.",
    iconComponent: Shield,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Thrive
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed for artists and art enthusiasts to create, 
            connect, and grow together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-medium transition-all duration-300 animate-slide-up border-2 hover:border-primary/50 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                {feature.icon ? (
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-16 h-16 rounded-xl group-hover:scale-110 transition-transform"
                  />
                ) : feature.iconComponent ? (
                  <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.iconComponent className="w-8 h-8 text-white" />
                  </div>
                ) : null}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
