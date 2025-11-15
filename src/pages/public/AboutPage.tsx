import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Palette, Heart, Shield, Sparkles, Target } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Art",
      description: "We believe art has the power to inspire, connect, and transform lives.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a vibrant community where artists and art lovers thrive together.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Ensuring safe transactions and protecting the rights of creators.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Leveraging technology to create the best platform for digital art.",
    },
  ];

  const stats = [
    { label: "Active Artists", value: "10,000+" },
    { label: "Artworks Available", value: "50,000+" },
    { label: "Happy Customers", value: "100,000+" },
    { label: "Countries", value: "150+" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                KalaKriti
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              KalaKriti is a revolutionary platform that brings together artists and art enthusiasts 
              in a vibrant digital ecosystem. We're on a mission to democratize art, making it 
              accessible to everyone while empowering artists to showcase and monetize their creativity.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Our Story */}
          <Card className="mb-16">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2023, KalaKriti was born from a simple yet powerful vision: to create 
                  a space where digital artists can thrive and art lovers can discover extraordinary 
                  creations. We recognized that the digital art world needed a platform that 
                  combines the best of e-commerce, social networking, and creative tools.
                </p>
                <p>
                  Today, we're proud to be home to thousands of talented artists and art enthusiasts 
                  from around the globe. Our platform continues to evolve, always with the goal of 
                  making art more accessible, discoverable, and valuable.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="p-6 text-center hover:shadow-medium transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission */}
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower artists worldwide by providing them with the tools, platform, and 
                community they need to succeed. We're committed to making digital art accessible, 
                discoverable, and valuable for everyone, while fostering a vibrant creative 
                community that celebrates diversity and innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

