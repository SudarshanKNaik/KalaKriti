import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Star, UserPlus, Mail, Instagram, Twitter, Globe, Palette, Award, Users } from "lucide-react";

const ArtistProfilePage = () => {
  const { id } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);

  const artist = {
    id: id,
    name: "Sarah Chen",
    username: "@sarahchen",
    bio: "Digital artist passionate about creating vibrant and imaginative artworks. I specialize in abstract and surreal digital art, bringing dreams to life through colors and forms.",
    avatar: "",
    followers: 12500,
    following: 342,
    artworks: 45,
    rating: 4.9,
    reviews: 234,
    joinedDate: "2023-05-15",
    location: "San Francisco, CA",
    website: "sarahchen.art",
    social: {
      instagram: "@sarahchen",
      twitter: "@sarahchenart",
    },
    badges: ["Top Seller", "Verified Artist", "Featured Creator"],
  };

  const artworks = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Artwork ${i + 1}`,
    price: `$${(Math.random() * 500 + 50).toFixed(0)}`,
    likes: Math.floor(Math.random() * 500),
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          {/* Profile Header */}
          <Card className="mb-8 overflow-hidden">
            <div className="h-48 bg-gradient-hero opacity-20"></div>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-32 h-32 bg-gradient-hero rounded-full -mt-16 border-4 border-background"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">{artist.name}</h1>
                    {artist.badges.map((badge) => (
                      <span key={badge} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{artist.username}</p>
                  <p className="text-muted-foreground mb-4">{artist.bio}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{artist.followers.toLocaleString()} followers</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Palette className="w-4 h-4" />
                      <span>{artist.artworks} artworks</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{artist.rating} ({artist.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="w-4 h-4" />
                      <span>{artist.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant={isFollowing ? "outline" : "default"}
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={!isFollowing ? "bg-gradient-hero border-0" : ""}
                  >
                    <UserPlus className="mr-2 w-4 h-4" />
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                  <Button variant="outline">
                    <Mail className="mr-2 w-4 h-4" />
                    Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="artworks" className="space-y-6">
            <TabsList>
              <TabsTrigger value="artworks">Artworks</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="artworks">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artworks.map((artwork) => (
                  <Link key={artwork.id} to={`/artwork/${artwork.id}`}>
                    <Card className="overflow-hidden hover:shadow-medium transition-all duration-300 group cursor-pointer">
                      <div className="aspect-square bg-gradient-hero opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg mb-2">{artwork.title}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-primary">{artwork.price}</span>
                          <div className="flex items-center space-x-1 text-muted-foreground">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">{artwork.likes}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3">About the Artist</h3>
                    <p className="text-muted-foreground leading-relaxed">{artist.bio}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Joined</p>
                      <p className="font-medium">{new Date(artist.joinedDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-medium">{artist.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Website</p>
                      <a href={`https://${artist.website}`} className="font-medium text-primary hover:underline">
                        {artist.website}
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Social Media</p>
                    <div className="flex gap-4">
                      <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="w-5 h-5" />
                        <span>{artist.social.instagram}</span>
                      </a>
                      <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                        <span>{artist.social.twitter}</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Reviews</h3>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xl font-medium">{artist.rating}</span>
                        <span className="text-muted-foreground">({artist.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {[1, 2, 3, 4, 5].map((i) => (
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
                          Amazing artist! The artwork exceeded my expectations. Highly recommended!
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtistProfilePage;

