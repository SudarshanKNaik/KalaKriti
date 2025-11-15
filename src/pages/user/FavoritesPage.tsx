import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Trash2 } from "lucide-react";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([
    { id: 1, title: "Digital Dreams", artist: "Sarah Chen", price: "$299", likes: 124, rating: 4.8 },
    { id: 2, title: "Abstract Flow", artist: "Marcus Lee", price: "$450", likes: 89, rating: 4.9 },
    { id: 3, title: "Neon Nights", artist: "Emma Wilson", price: "$199", likes: 256, rating: 4.7 },
    { id: 4, title: "Cosmic Waves", artist: "Alex Rivera", price: "$350", likes: 167, rating: 4.8 },
    { id: 5, title: "Sunset Dreams", artist: "Lisa Park", price: "$280", likes: 98, rating: 4.6 },
    { id: 6, title: "Urban Vibes", artist: "Mike Johnson", price: "$420", likes: 203, rating: 4.9 },
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">My Favorites</h1>
            <p className="text-muted-foreground">
              {favorites.length} {favorites.length === 1 ? "artwork" : "artworks"} saved
            </p>
          </div>

          {favorites.length === 0 ? (
            <Card className="text-center p-12">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">No favorites yet</h2>
              <p className="text-muted-foreground mb-6">
                Start exploring and save artworks you love!
              </p>
              <Link to="/gallery">
                <Button className="bg-gradient-hero border-0">
                  Browse Gallery
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favorites.map((artwork) => (
                <Card key={artwork.id} className="overflow-hidden hover:shadow-medium transition-all duration-300 group">
                  <Link to={`/artwork/${artwork.id}`}>
                    <div className="aspect-square bg-gradient-hero opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  </Link>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <Link to={`/artwork/${artwork.id}`}>
                          <h3 className="font-bold text-lg hover:text-primary transition-colors">{artwork.title}</h3>
                        </Link>
                        <Link to={`/artists/${artwork.id}`}>
                          <p className="text-sm text-muted-foreground hover:text-primary transition-colors">by {artwork.artist}</p>
                        </Link>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFavorite(artwork.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{artwork.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                        <span className="text-sm">{artwork.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{artwork.price}</span>
                      <Link to={`/artwork/${artwork.id}`}>
                        <Button size="sm" className="bg-gradient-hero border-0">
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FavoritesPage;

