import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Sparkles } from "lucide-react";

const NewArrivalsPage = () => {
  const artworks = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    title: `New Artwork ${i + 1}`,
    artist: `Artist ${i + 1}`,
    price: `$${(Math.random() * 500 + 50).toFixed(0)}`,
    likes: Math.floor(Math.random() * 100),
    rating: (Math.random() * 1 + 4).toFixed(1),
    isNew: true,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">
                New{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Arrivals
                </span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Discover the latest artworks from our talented artists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {artworks.map((artwork) => (
              <Link key={artwork.id} to={`/artwork/${artwork.id}`}>
                <Card className="overflow-hidden hover:shadow-medium transition-all duration-300 group cursor-pointer">
                  <div className="relative">
                    <div className="aspect-square bg-gradient-hero opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    {artwork.isNew && (
                      <span className="absolute top-2 right-2 px-2 py-1 bg-primary text-white rounded-full text-xs font-medium">
                        New
                      </span>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{artwork.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {artwork.artist}</p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{artwork.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{artwork.likes}</span>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-primary">{artwork.price}</span>
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

export default NewArrivalsPage;

