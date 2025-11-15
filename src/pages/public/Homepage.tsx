import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Heart, Star } from "lucide-react";

const Homepage = () => {
  const featuredArtworks = [
    { id: 1, title: "Digital Dreams", artist: "Sarah Chen", price: "$299", likes: 124, rating: 4.8 },
    { id: 2, title: "Abstract Flow", artist: "Marcus Lee", price: "$450", likes: 89, rating: 4.9 },
    { id: 3, title: "Neon Nights", artist: "Emma Wilson", price: "$199", likes: 256, rating: 4.7 },
    { id: 4, title: "Cosmic Waves", artist: "Alex Rivera", price: "$350", likes: 167, rating: 4.8 },
  ];

  const topArtists = [
    { id: 1, name: "Sarah Chen", followers: "12.5K", artworks: 45 },
    { id: 2, name: "Marcus Lee", followers: "9.8K", artworks: 32 },
    { id: 3, name: "Emma Wilson", followers: "15.2K", artworks: 67 },
  ];

  const categories = [
    { name: "Digital Art", count: 234, color: "bg-primary" },
    { name: "Abstract", count: 189, color: "bg-accent" },
    { name: "Portraits", count: 156, color: "bg-purple-500" },
    { name: "Landscape", count: 142, color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      
      {/* Featured Artworks Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Featured{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Artworks
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover handpicked creations from our talented artists
              </p>
            </div>
            <Link to="/gallery">
              <Button variant="outline" className="hidden md:flex">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtworks.map((artwork) => (
              <Card key={artwork.id} className="overflow-hidden hover:shadow-medium transition-all duration-300 group">
                <div className="aspect-square bg-gradient-hero opacity-20 group-hover:opacity-30 transition-opacity"></div>
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
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{artwork.price}</span>
                    <Button size="sm" className="bg-gradient-hero border-0">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Artists Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Top{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Artists
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Meet the creative minds behind our platform
              </p>
            </div>
            <Link to="/artists">
              <Button variant="outline" className="hidden md:flex">
                View All Artists
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topArtists.map((artist) => (
              <Card key={artist.id} className="p-6 hover:shadow-medium transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full"></div>
                  <div>
                    <h3 className="font-bold text-xl">{artist.name}</h3>
                    <p className="text-sm text-muted-foreground">{artist.followers} followers</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{artist.artworks} artworks available</p>
                <Link to={`/artists/${artist.id}`}>
                  <Button className="w-full bg-gradient-hero border-0">
                    View Profile
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Browse by{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={`/categories/${category.name.toLowerCase()}`}>
                <Card className="p-6 text-center hover:shadow-medium transition-all duration-300 group cursor-pointer">
                  <div className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform`}></div>
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className="text-muted-foreground">{category.count} artworks</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
};

export default Homepage;

