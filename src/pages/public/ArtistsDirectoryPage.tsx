import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, UserPlus, Palette, Star, Users } from "lucide-react";

const ArtistsDirectoryPage = () => {
  const artists = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Artist ${i + 1}`,
    username: `@artist${i + 1}`,
    followers: Math.floor(Math.random() * 20000 + 1000),
    artworks: Math.floor(Math.random() * 100 + 10),
    rating: (Math.random() * 1 + 4).toFixed(1),
    category: ["Digital Art", "Abstract", "Portraits", "Landscape"][i % 4],
    verified: i % 3 === 0,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Artists{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Directory
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover talented artists from around the world
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search artists..."
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="digital">Digital Art</SelectItem>
                  <SelectItem value="abstract">Abstract</SelectItem>
                  <SelectItem value="portraits">Portraits</SelectItem>
                  <SelectItem value="landscape">Landscape</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="artworks">Most Artworks</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Artists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {artists.map((artist) => (
              <Link key={artist.id} to={`/artists/${artist.id}`}>
                <Card className="p-6 hover:shadow-medium transition-all duration-300 group cursor-pointer text-center">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform"></div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="font-bold text-lg">{artist.name}</h3>
                    {artist.verified && (
                      <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{artist.username}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{artist.rating}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{artist.followers.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Palette className="w-4 h-4" />
                        <span>{artist.artworks}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-hero border-0">
                    <UserPlus className="mr-2 w-4 h-4" />
                    Follow
                  </Button>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="outline">Previous</Button>
              <Button className="bg-gradient-hero border-0">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtistsDirectoryPage;

