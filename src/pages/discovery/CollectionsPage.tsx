import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Palette } from "lucide-react";

const CollectionsPage = () => {
  const collections = [
    { id: 1, name: "Abstract Dreams", count: 45, description: "A curated collection of abstract artworks" },
    { id: 2, name: "Digital Portraits", count: 32, description: "Modern digital portrait art" },
    { id: 3, name: "Nature's Beauty", count: 28, description: "Inspired by the natural world" },
    { id: 4, name: "Urban Vibes", count: 41, description: "City life and urban landscapes" },
    { id: 5, name: "Cosmic Wonders", count: 36, description: "Space and cosmic themes" },
    { id: 6, name: "Minimalist Art", count: 29, description: "Simple and elegant designs" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Art{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Collections
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore curated collections of amazing artworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <Link key={collection.id} to={`/collections/${collection.id}`}>
                <Card className="overflow-hidden hover:shadow-medium transition-all duration-300 group cursor-pointer">
                  <div className="aspect-video bg-gradient-hero opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20">
                        <Palette className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{collection.name}</h3>
                        <p className="text-sm text-muted-foreground">{collection.count} artworks</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{collection.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollectionsPage;

