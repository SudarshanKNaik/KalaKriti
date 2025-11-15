import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Share2, ShoppingCart, Download, User, Calendar, Tag } from "lucide-react";

const ArtworkDetailPage = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const artwork = {
    id: id,
    title: "Digital Dreams",
    artist: "Sarah Chen",
    artistId: "1",
    price: 299,
    description: "A mesmerizing digital artwork that captures the essence of dreams and imagination. This piece combines vibrant colors with intricate details to create a truly unique visual experience.",
    category: "Digital Art",
    tags: ["Digital", "Abstract", "Colorful", "Modern"],
    rating: 4.8,
    reviews: 124,
    likes: 256,
    views: 1234,
    createdAt: "2024-01-15",
    dimensions: "4000 x 3000 px",
    format: "PNG, JPG",
    license: "Commercial Use",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Image Section */}
            <div>
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-hero opacity-20"></div>
              </Card>
              <div className="flex gap-2 mt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-20 h-20 bg-gradient-hero opacity-10 rounded-lg cursor-pointer hover:opacity-20 transition-opacity"></div>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-4xl font-bold">{artwork.title}</h1>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsLiked(!isLiked)}
                      className={isLiked ? "text-red-500" : ""}
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <Link to={`/artists/${artwork.artistId}`} className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-4">
                  <User className="w-4 h-4" />
                  <span>by {artwork.artist}</span>
                </Link>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{artwork.rating}</span>
                    <span className="text-muted-foreground">({artwork.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Heart className="w-4 h-4" />
                    <span>{artwork.likes} likes</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold text-primary mb-6">${artwork.price}</div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <label className="font-medium">Quantity:</label>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </Button>
                      <span className="w-12 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-hero border-0 hover:opacity-90">
                      <ShoppingCart className="mr-2 w-4 h-4" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="mr-2 w-4 h-4" />
                      Request Commission
                    </Button>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">Description</h3>
                    <p className="text-muted-foreground">{artwork.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Category</p>
                      <p className="font-medium">{artwork.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Dimensions</p>
                      <p className="font-medium">{artwork.dimensions}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Format</p>
                      <p className="font-medium">{artwork.format}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">License</p>
                      <p className="font-medium">{artwork.license}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      Tags
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {artwork.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-muted rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Reviews Section */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Reviews ({artwork.reviews})</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b last:border-0 pb-6 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-hero rounded-full"></div>
                        <div>
                          <p className="font-medium">User {i}</p>
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="text-muted-foreground">
                      This artwork is absolutely stunning! The colors and details are incredible.
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtworkDetailPage;

