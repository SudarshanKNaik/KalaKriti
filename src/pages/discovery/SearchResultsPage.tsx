import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Heart, Star } from "lucide-react";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [sortBy, setSortBy] = useState("relevance");

  const results = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Artwork ${i + 1}`,
    artist: `Artist ${i + 1}`,
    price: `$${(Math.random() * 500 + 50).toFixed(0)}`,
    likes: Math.floor(Math.random() * 500),
    rating: (Math.random() * 1 + 4).toFixed(1),
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Search Results for "{query}"
            </h1>
            <p className="text-muted-foreground">{results.length} results found</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10" defaultValue={query} />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map((artwork) => (
              <Link key={artwork.id} to={`/artwork/${artwork.id}`}>
                <Card className="overflow-hidden hover:shadow-medium transition-all duration-300 group cursor-pointer">
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

export default SearchResultsPage;



