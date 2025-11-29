import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Eye, Search, Filter } from "lucide-react";
import api from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

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
  createdAt: string;
}

const MyArtworksPage = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      setLoading(true);
      const res = await api.get('/artworks');
      // Filter to show only current user's artworks
      const myArtworks = res.data.filter((art: Artwork) => art.artist._id === user?.id);
      setArtworks(myArtworks);
    } catch (err: any) {
      toast({
        title: "Error",
        description: "Failed to load artworks",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteArtwork = async (id: string) => {
    if (!confirm("Are you sure you want to delete this artwork?")) return;

    try {
      await api.delete(`/artworks/${id}`);
      setArtworks(artworks.filter((art) => art._id !== id));
      toast({
        title: "Success",
        description: "Artwork deleted successfully",
      });
    } catch (err: any) {
      toast({
        title: "Error",
        description: "Failed to delete artwork",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">My Artworks</h1>
              <p className="text-muted-foreground">Manage all your uploaded artworks</p>
            </div>
            <Link to="/artist/upload">
              <Button className="bg-gradient-hero border-0">
                <Plus className="mr-2 w-4 h-4" />
                Upload New Artwork
              </Button>
            </Link>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search artworks..." className="pl-10" />
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
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading your artworks...</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && artworks.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto flex items-center justify-center">
                  <Plus className="w-12 h-12 text-muted-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">No artworks yet</h3>
              <p className="text-muted-foreground mb-6">Start by uploading your first artwork</p>
              <Link to="/artist/upload">
                <Button className="bg-gradient-hero border-0">
                  <Plus className="mr-2 w-4 h-4" />
                  Upload Artwork
                </Button>
              </Link>
            </div>
          )}

          {/* Artworks Grid */}
          {!loading && artworks.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artworks.map((artwork) => (
                <Card key={artwork._id} className="overflow-hidden hover:shadow-medium transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden bg-muted">
                    {artwork.imageUrl ? (
                      <img
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-hero opacity-20"></div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{artwork.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                          {artwork.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {artwork.description}
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-bold text-primary">${artwork.price}</span>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/artwork/${artwork._id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          <Eye className="mr-2 w-4 h-4" />
                          View
                        </Button>
                      </Link>
                      <Link to={`/artist/edit/${artwork._id}`}>
                        <Button variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        onClick={() => deleteArtwork(artwork._id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
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

export default MyArtworksPage;
