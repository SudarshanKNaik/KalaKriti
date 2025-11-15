import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Eye, Search, Filter } from "lucide-react";

const MyArtworksPage = () => {
  const [artworks, setArtworks] = useState([
    { id: 1, title: "Digital Dreams", status: "Published", views: 1234, likes: 256, sales: 12, price: "$299" },
    { id: 2, title: "Abstract Flow", status: "Published", views: 987, likes: 189, sales: 8, price: "$450" },
    { id: 3, title: "Neon Nights", status: "Draft", views: 0, likes: 0, sales: 0, price: "$199" },
    { id: 4, title: "Cosmic Waves", status: "Published", views: 1456, likes: 312, sales: 15, price: "$350" },
  ]);

  const deleteArtwork = (id: number) => {
    setArtworks(artworks.filter((art) => art.id !== id));
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
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Artworks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
              <Card key={artwork.id} className="overflow-hidden hover:shadow-medium transition-all duration-300">
                <div className="aspect-square bg-gradient-hero opacity-20"></div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{artwork.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        artwork.status === "Published" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {artwork.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <span>{artwork.views} views</span>
                    <span>{artwork.likes} likes</span>
                    <span>{artwork.sales} sales</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-primary">{artwork.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/artwork/${artwork.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        <Eye className="mr-2 w-4 h-4" />
                        View
                      </Button>
                    </Link>
                    <Link to={`/artist/edit/${artwork.id}`}>
                      <Button variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      onClick={() => deleteArtwork(artwork.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyArtworksPage;

