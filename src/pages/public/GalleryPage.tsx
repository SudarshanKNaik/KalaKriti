import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Star, Filter, Search, Grid, List } from "lucide-react";
import api from "@/lib/api";

interface Artwork {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  artist: {
    _id: string;
    name: string;
  };
}

const GalleryPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      setLoading(true);
      const res = await api.get('/artworks');
      setArtworks(res.data);
    } catch (err) {
      console.error('Failed to fetch artworks:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Art{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore unique artworks from talented artists
            </p>
          </div>

          {/* Filters and Search */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search artworks, artists..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="painting">Painting</SelectItem>
                  <SelectItem value="digital">Digital Art</SelectItem>
                  <SelectItem value="sculpture">Sculpture</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  onClick={() => setViewMode("grid")}
                  className="bg-gradient-hero border-0"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  onClick={() => setViewMode("list")}
                  className="bg-gradient-hero border-0"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading artworks...</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && artworks.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">No artworks yet</h3>
              <p className="text-muted-foreground">Be the first to upload artwork!</p>
            </div>
          )}

          {/* Artworks Grid/List */}
          {!loading && artworks.length > 0 && (
            <div className={viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
            }>
              {artworks.map((artwork) => (
                <Link key={artwork._id} to={`/artwork/${artwork._id}`}>
                  <Card className={viewMode === "grid"
                    ? "overflow-hidden hover:shadow-medium transition-all duration-300 group cursor-pointer"
                    : "hover:shadow-medium transition-all duration-300 group cursor-pointer"
                  }>
                    <div className={viewMode === "grid"
                      ? "aspect-square relative overflow-hidden"
                      : "flex"
                    }>
                      {viewMode === "list" && (
                        <div className="w-32 h-32 relative overflow-hidden flex-shrink-0">
                          {artwork.imageUrl ? (
                            <img src={artwork.imageUrl} alt={artwork.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gradient-hero opacity-20"></div>
                          )}
                        </div>
                      )}
                      {viewMode === "grid" && (
                        artwork.imageUrl ? (
                          <img src={artwork.imageUrl} alt={artwork.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        ) : (
                          <div className="w-full h-full bg-gradient-hero opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        )
                      )}
                      <CardContent className={viewMode === "grid" ? "p-4" : "p-4 flex-1"}>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1">{artwork.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">by {artwork.artist.name}</p>
                            {viewMode === "list" && (
                              <p className="text-sm text-muted-foreground mb-2">{artwork.category}</p>
                            )}
                          </div>
                          {viewMode === "list" && (
                            <span className="text-xl font-bold text-primary">${artwork.price}</span>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                              {artwork.category}
                            </span>
                          </div>
                          {viewMode === "grid" && (
                            <span className="text-xl font-bold text-primary">${artwork.price}</span>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
