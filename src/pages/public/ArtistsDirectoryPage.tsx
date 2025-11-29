import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, UserPlus, Palette } from "lucide-react";
import api from "@/lib/api";

interface Artist {
  _id: string;
  name: string;
  email: string;
  role: string;
  profileImage?: string;
}

const ArtistsDirectoryPage = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    try {
      setLoading(true);
      // This would need a backend endpoint to get all artists
      // For now, we'll show empty state
      setArtists([]);
    } catch (err) {
      console.error('Failed to fetch artists:', err);
    } finally {
      setLoading(false);
    }
  };

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

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
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="artworks">Most Artworks</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading artists...</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && artists.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto flex items-center justify-center">
                  <Palette className="w-12 h-12 text-muted-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">No artists yet</h3>
              <p className="text-muted-foreground">Artists will appear here once they start uploading artworks</p>
            </div>
          )}

          {/* Artists Grid */}
          {!loading && artists.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {artists.map((artist) => (
                <Link key={artist._id} to={`/artists/${artist._id}`}>
                  <Card className="p-6 hover:shadow-medium transition-all duration-300 group cursor-pointer text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <AvatarImage src={artist.profileImage} alt={artist.name} />
                      <AvatarFallback className="bg-gradient-hero text-white text-2xl">
                        {getUserInitials(artist.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">{artist.name}</h3>
                      {artist.role === 'artist' || artist.role === 'both' && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          Artist
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{artist.email}</p>
                    <Button className="w-full bg-gradient-hero border-0">
                      <UserPlus className="mr-2 w-4 h-4" />
                      Follow
                    </Button>
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

export default ArtistsDirectoryPage;
